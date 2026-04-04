// ============================================================
// KEYBOARD INPUT MANAGER — Simple and reliable
// ============================================================

const keysDown = {};
let pressedThisFrame = {};
let releasedThisFrame = {};

function onKeyDown(e) {
  if (!keysDown[e.key]) {
    keysDown[e.key] = true;
    pressedThisFrame[e.key] = true;
  }
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
    e.preventDefault();
  }
}

function onKeyUp(e) {
  keysDown[e.key] = false;
  releasedThisFrame[e.key] = true;
}

export function initInput() {
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
}

// Call ONCE per frame, AFTER update has consumed the events
export function inputTick() {
  pressedThisFrame = {};
  releasedThisFrame = {};
}

export function isDown(key) {
  return !!keysDown[key];
}

export function isPressed(key) {
  return !!pressedThisFrame[key];
}

export function isReleased(key) {
  return !!releasedThisFrame[key];
}

// Touch input injection — lets touch.js feed into the same key state system
export function simulateKeyDown(key) {
  if (!keysDown[key]) {
    keysDown[key] = true;
    pressedThisFrame[key] = true;
  }
}

export function simulateKeyUp(key) {
  keysDown[key] = false;
  releasedThisFrame[key] = true;
}
