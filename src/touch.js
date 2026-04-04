// ============================================================
// TOUCH CONTROLS — Virtual joystick + action buttons
// Injects into input.js key state system via simulateKeyDown/Up
// ============================================================

import { simulateKeyDown, simulateKeyUp } from './input.js';
import { KEYS } from './constants.js';

export function isTouchDevice() {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

// --- State ---
let joystickTouchId = null;
let joystickBaseX = 0;
let joystickBaseY = 0;
const joystickMaxRadius = 50;
const joystickDeadZone = 0.15;
let activeJoystickKeys = new Set();
// Track which touch.identifier owns which button key
const buttonTouchMap = new Map(); // touchId -> key

// --- DOM refs (set in initTouch) ---
let container = null;
let joystickZone = null;
let joystickBase = null;
let joystickKnob = null;

// --- Button creation ---
function createButton(id, label, cssProps) {
  const btn = document.createElement('div');
  btn.className = 'btn';
  btn.id = id;
  btn.textContent = label;
  Object.assign(btn.style, cssProps);
  return btn;
}

// --- Joystick direction mapping ---
function getKeysFromAngle(angle, magnitude) {
  // angle in radians, 0 = right, PI/2 = down, -PI/2 = up
  if (magnitude < joystickDeadZone) return [];

  const deg = ((angle * 180 / Math.PI) + 360) % 360;
  // 8 zones, 45 degrees each, offset by 22.5 so 0 deg is center of RIGHT zone
  if (deg >= 337.5 || deg < 22.5) return [KEYS.RIGHT];
  if (deg >= 22.5 && deg < 67.5) return [KEYS.RIGHT, KEYS.DOWN];
  if (deg >= 67.5 && deg < 112.5) return [KEYS.DOWN];
  if (deg >= 112.5 && deg < 157.5) return [KEYS.LEFT, KEYS.DOWN];
  if (deg >= 157.5 && deg < 202.5) return [KEYS.LEFT];
  if (deg >= 202.5 && deg < 247.5) return [KEYS.LEFT, KEYS.UP];
  if (deg >= 247.5 && deg < 292.5) return [KEYS.UP];
  if (deg >= 292.5 && deg < 337.5) return [KEYS.RIGHT, KEYS.UP];
  return [];
}

function updateJoystickDirection(touchX, touchY) {
  const dx = touchX - joystickBaseX;
  const dy = touchY - joystickBaseY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const magnitude = Math.min(dist / joystickMaxRadius, 1);
  const angle = Math.atan2(dy, dx);

  // Clamp knob position
  const clampedDist = Math.min(dist, joystickMaxRadius);
  const knobX = joystickBaseX + (dx / (dist || 1)) * clampedDist;
  const knobY = joystickBaseY + (dy / (dist || 1)) * clampedDist;

  // Position knob
  const knobSize = joystickKnob.offsetWidth;
  joystickKnob.style.left = (knobX - knobSize / 2) + 'px';
  joystickKnob.style.top = (knobY - knobSize / 2) + 'px';

  // Determine new keys
  const newKeys = new Set(getKeysFromAngle(angle, magnitude));

  // Release keys no longer active
  for (const key of activeJoystickKeys) {
    if (!newKeys.has(key)) simulateKeyUp(key);
  }
  // Press newly active keys
  for (const key of newKeys) {
    if (!activeJoystickKeys.has(key)) simulateKeyDown(key);
  }
  activeJoystickKeys = newKeys;
}

function releaseAllJoystickKeys() {
  for (const key of activeJoystickKeys) {
    simulateKeyUp(key);
  }
  activeJoystickKeys = new Set();
}

function showJoystick(x, y) {
  // Show elements first so offsetWidth returns correct values
  joystickBase.style.display = 'block';
  joystickKnob.style.display = 'block';

  const baseSize = joystickBase.offsetWidth;
  joystickBase.style.left = (x - baseSize / 2) + 'px';
  joystickBase.style.top = (y - baseSize / 2) + 'px';

  const knobSize = joystickKnob.offsetWidth;
  joystickKnob.style.left = (x - knobSize / 2) + 'px';
  joystickKnob.style.top = (y - knobSize / 2) + 'px';
}

function hideJoystick() {
  joystickBase.style.display = 'none';
  joystickKnob.style.display = 'none';
}

// --- Fullscreen on first touch ---
let hasRequestedFullscreen = false;
function tryFullscreen() {
  if (hasRequestedFullscreen) return;
  hasRequestedFullscreen = true;
  const el = document.documentElement;
  const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if (rfs) rfs.call(el).catch(() => {});
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch(() => {});
  }
}

// --- Button touch handlers ---
function setupButtonTouch(btn, key) {
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    tryFullscreen();
    for (const touch of e.changedTouches) {
      // Skip if another finger is already holding this button's key
      if ([...buttonTouchMap.values()].includes(key)) continue;
      buttonTouchMap.set(touch.identifier, key);
      simulateKeyDown(key);
      btn.classList.add('active');
    }
  }, { passive: false });

  btn.addEventListener('touchend', (e) => {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (buttonTouchMap.get(touch.identifier) === key) {
        buttonTouchMap.delete(touch.identifier);
        simulateKeyUp(key);
        btn.classList.remove('active');
      }
    }
  }, { passive: false });

  btn.addEventListener('touchcancel', (e) => {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (buttonTouchMap.get(touch.identifier) === key) {
        buttonTouchMap.delete(touch.identifier);
        simulateKeyUp(key);
        btn.classList.remove('active');
      }
    }
  }, { passive: false });
}

// --- Joystick touch handlers ---
function setupJoystickTouch() {
  joystickZone.addEventListener('touchstart', (e) => {
    e.preventDefault();
    tryFullscreen();
    if (joystickTouchId !== null) return; // already tracking a joystick touch
    const touch = e.changedTouches[0];
    joystickTouchId = touch.identifier;
    joystickBaseX = touch.clientX;
    joystickBaseY = touch.clientY;
    showJoystick(touch.clientX, touch.clientY);
    updateJoystickDirection(touch.clientX, touch.clientY);
  }, { passive: false });

  joystickZone.addEventListener('touchmove', (e) => {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (touch.identifier === joystickTouchId) {
        updateJoystickDirection(touch.clientX, touch.clientY);
      }
    }
  }, { passive: false });

  const endJoystick = (e) => {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (touch.identifier === joystickTouchId) {
        joystickTouchId = null;
        releaseAllJoystickKeys();
        hideJoystick();
      }
    }
  };
  joystickZone.addEventListener('touchend', endJoystick, { passive: false });
  joystickZone.addEventListener('touchcancel', endJoystick, { passive: false });
}

// --- Init ---
export function initTouch() {
  if (!isTouchDevice()) return;

  container = document.getElementById('touch-controls');
  joystickZone = document.getElementById('joystick-zone');
  joystickBase = document.getElementById('joystick-base');
  joystickKnob = document.getElementById('joystick-knob');

  if (!container) return;

  // Show the touch controls container
  container.style.display = 'block';

  // Create action buttons
  // Use safe-area-inset to avoid iPhone home indicator / notch
  const safeRight = 'calc(3vw + env(safe-area-inset-right, 0px))';
  const safeBottom = 'calc(5vh + env(safe-area-inset-bottom, 0px))';

  const shotBtn = createButton('btn-shot', 'SHOT', {
    right: safeRight, bottom: safeBottom,
    width: '14vw', height: '14vw', fontSize: '2.5vw',
  });
  const smashBtn = createButton('btn-smash', 'SMASH', {
    right: safeRight, bottom: 'calc(5vh + 15vw + env(safe-area-inset-bottom, 0px))',
    width: '11vw', height: '11vw', fontSize: '2vw',
  });
  const lobBtn = createButton('btn-lob', 'LOB', {
    right: 'calc(4.5vw + env(safe-area-inset-right, 0px))', bottom: 'calc(5vh + 27vw + env(safe-area-inset-bottom, 0px))',
    width: '9vw', height: '9vw', fontSize: '2vw',
  });
  const pauseBtn = createButton('btn-pause', '| |', {
    right: 'calc(2vw + env(safe-area-inset-right, 0px))', top: 'calc(2vh + env(safe-area-inset-top, 0px))',
    width: '8vw', height: '8vw', fontSize: '2.5vw',
    borderRadius: '20%',
  });

  container.appendChild(shotBtn);
  container.appendChild(smashBtn);
  container.appendChild(lobBtn);
  container.appendChild(pauseBtn);

  // Wire up button touch events
  setupButtonTouch(shotBtn, ' ');   // Space — soft/drive/serve/confirm
  setupButtonTouch(smashBtn, KEYS.POWER_SMASH); // 's'
  setupButtonTouch(lobBtn, KEYS.LOB);            // 'd'
  setupButtonTouch(pauseBtn, KEYS.PAUSE);        // Escape

  // Wire up joystick
  setupJoystickTouch();

  // Prevent default on the whole document to stop pull-to-refresh etc.
  document.addEventListener('touchmove', (e) => {
    if (e.target.closest('#touch-controls') || e.target.tagName === 'CANVAS') {
      e.preventDefault();
    }
  }, { passive: false });
}
