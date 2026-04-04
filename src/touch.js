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
let joystickMaxRadius = 60; // recalculated on init from visual size
const joystickDeadZone = 0.2; // 20% dead zone — prevents drift
let activeJoystickKeys = new Set();
const buttonTouchMap = new Map(); // touchId -> key

// --- DOM refs ---
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
  if (magnitude < joystickDeadZone) return [];

  const deg = ((angle * 180 / Math.PI) + 360) % 360;
  // 8 zones, 45 degrees each
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

  // Clamp knob to max radius
  const clampedDist = Math.min(dist, joystickMaxRadius);
  const knobX = joystickBaseX + (dx / (dist || 1)) * clampedDist;
  const knobY = joystickBaseY + (dy / (dist || 1)) * clampedDist;

  const knobSize = joystickKnob.offsetWidth;
  joystickKnob.style.left = (knobX - knobSize / 2) + 'px';
  joystickKnob.style.top = (knobY - knobSize / 2) + 'px';

  const newKeys = new Set(getKeysFromAngle(angle, magnitude));

  for (const key of activeJoystickKeys) {
    if (!newKeys.has(key)) simulateKeyUp(key);
  }
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
  joystickBase.style.display = 'block';
  joystickKnob.style.display = 'block';

  // Sync functional radius to visual radius
  const baseSize = joystickBase.offsetWidth;
  joystickMaxRadius = (baseSize / 2) * 0.85; // 85% of visual — knob stays inside

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
  function onStart(e) {
    e.preventDefault();
    e.stopPropagation();
    tryFullscreen();
    for (const touch of e.changedTouches) {
      if ([...buttonTouchMap.values()].includes(key)) continue;
      buttonTouchMap.set(touch.identifier, key);
      simulateKeyDown(key);
      btn.classList.add('active');
    }
  }

  function onEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    for (const touch of e.changedTouches) {
      if (buttonTouchMap.get(touch.identifier) === key) {
        buttonTouchMap.delete(touch.identifier);
        simulateKeyUp(key);
        btn.classList.remove('active');
      }
    }
  }

  btn.addEventListener('touchstart', onStart, { passive: false });
  btn.addEventListener('touchend', onEnd, { passive: false });
  btn.addEventListener('touchcancel', onEnd, { passive: false });

  // Pointer events fallback (DevTools touch simulation, some browsers)
  btn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if ([...buttonTouchMap.values()].includes(key)) return;
    simulateKeyDown(key);
    btn.classList.add('active');
    buttonTouchMap.set(e.pointerId, key);
  });
  btn.addEventListener('pointerup', (e) => {
    e.preventDefault();
    if (buttonTouchMap.get(e.pointerId) === key) {
      buttonTouchMap.delete(e.pointerId);
      simulateKeyUp(key);
      btn.classList.remove('active');
    }
  });
  btn.addEventListener('pointercancel', (e) => {
    if (buttonTouchMap.get(e.pointerId) === key) {
      buttonTouchMap.delete(e.pointerId);
      simulateKeyUp(key);
      btn.classList.remove('active');
    }
  });
}

// --- Joystick touch handlers ---
function setupJoystickTouch() {
  joystickZone.addEventListener('touchstart', (e) => {
    e.preventDefault();
    tryFullscreen();
    if (joystickTouchId !== null) return;
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

  // Pointer events fallback
  joystickZone.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') return;
    e.preventDefault();
    tryFullscreen();
    if (joystickTouchId !== null) return;
    joystickTouchId = e.pointerId;
    joystickBaseX = e.clientX;
    joystickBaseY = e.clientY;
    showJoystick(e.clientX, e.clientY);
    updateJoystickDirection(e.clientX, e.clientY);
    joystickZone.setPointerCapture(e.pointerId);
  });
  joystickZone.addEventListener('pointermove', (e) => {
    if (e.pointerId === joystickTouchId) {
      updateJoystickDirection(e.clientX, e.clientY);
    }
  });
  const endPointerJoystick = (e) => {
    if (e.pointerId === joystickTouchId) {
      joystickTouchId = null;
      releaseAllJoystickKeys();
      hideJoystick();
    }
  };
  joystickZone.addEventListener('pointerup', endPointerJoystick);
  joystickZone.addEventListener('pointercancel', endPointerJoystick);
}

// --- Init ---
export function initTouch() {
  if (!isTouchDevice()) return;

  container = document.getElementById('touch-controls');
  joystickZone = document.getElementById('joystick-zone');
  joystickBase = document.getElementById('joystick-base');
  joystickKnob = document.getElementById('joystick-knob');

  if (!container) return;

  container.style.display = 'block';

  // Action buttons — sized with min() for minimum physical size,
  // spaced with generous gaps using vh (short axis in landscape)
  const safeR = 'calc(2vw + env(safe-area-inset-right, 0px))';
  const safeB = 'env(safe-area-inset-bottom, 0px)';
  const safeT = 'env(safe-area-inset-top, 0px)';
  const safeL = 'env(safe-area-inset-left, 0px)';

  // Bottom-up layout: SHOT at bottom, SMASH above with gap, LOB above that
  // Using vh for vertical positioning (reliable in landscape)
  const shotBtn = createButton('btn-shot', 'SHOT', {
    right: safeR,
    bottom: `calc(4vh + ${safeB})`,
    width: 'min(18vw, 25vh)', height: 'min(18vw, 25vh)',
    fontSize: 'min(3vw, 4vh)',
  });
  const smashBtn = createButton('btn-smash', 'SMASH', {
    right: safeR,
    bottom: `calc(34vh + ${safeB})`,
    width: 'min(15vw, 21vh)', height: 'min(15vw, 21vh)',
    fontSize: 'min(2.5vw, 3.5vh)',
  });
  const lobBtn = createButton('btn-lob', 'LOB', {
    right: `calc(1vw + env(safe-area-inset-right, 0px))`,
    bottom: `calc(60vh + ${safeB})`,
    width: 'min(13vw, 18vh)', height: 'min(13vw, 18vh)',
    fontSize: 'min(2.5vw, 3.5vh)',
  });
  const pauseBtn = createButton('btn-pause', '||', {
    left: `calc(1vw + ${safeL})`, top: `calc(1vh + ${safeT})`,
    width: 'min(5vw, 7vh)', height: 'min(5vw, 7vh)',
    fontSize: 'min(1.5vw, 2vh)',
    borderRadius: '20%',
  });

  container.appendChild(shotBtn);
  container.appendChild(smashBtn);
  container.appendChild(lobBtn);
  container.appendChild(pauseBtn);

  setupButtonTouch(shotBtn, ' ');
  setupButtonTouch(smashBtn, KEYS.POWER_SMASH);
  setupButtonTouch(lobBtn, KEYS.LOB);
  setupButtonTouch(pauseBtn, KEYS.PAUSE);

  setupJoystickTouch();

  // Block pull-to-refresh and other gestures
  document.addEventListener('touchmove', (e) => {
    if (e.target.closest('#touch-controls') || e.target.tagName === 'CANVAS') {
      e.preventDefault();
    }
  }, { passive: false });
}
