// ============================================================
// MAIN — Entry point, canvas setup, game loop
// ============================================================

import { INTERNAL_WIDTH, INTERNAL_HEIGHT, DT } from './constants.js';
import { createGame } from './game.js';
import { initInput, inputTick } from './input.js';
import { initTouch, isTouchDevice } from './touch.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = INTERNAL_WIDTH;
canvas.height = INTERNAL_HEIGHT;

const isMobile = isTouchDevice();

function resize() {
  const scale = Math.min(
    window.innerWidth / INTERNAL_WIDTH,
    window.innerHeight / INTERNAL_HEIGHT
  );
  // Mobile: fractional scaling to use full screen (CSS pixelated handles interpolation)
  // Desktop: integer scaling for pixel-perfect rendering
  const finalScale = isMobile
    ? Math.max(1, scale * 0.95)
    : Math.max(1, Math.floor(scale));
  canvas.style.width = (INTERNAL_WIDTH * finalScale) + 'px';
  canvas.style.height = (INTERNAL_HEIGHT * finalScale) + 'px';
}
window.addEventListener('resize', resize);
resize();

ctx.imageSmoothingEnabled = false;

initInput();
initTouch();

const gameCtx = createGame();
let accumulator = 0;
let lastTime = 0;

function loop(timestamp) {
  const delta = Math.min((timestamp - lastTime) / 1000, 0.1);
  lastTime = timestamp;
  accumulator += delta;

  // First physics step consumes input events (pressed/released)
  if (accumulator >= DT) {
    gameCtx.stateMachine.update(DT);
    accumulator -= DT;
    inputTick(); // clear pressed/released so subsequent steps don't re-trigger
  }
  // Remaining catch-up steps run without input events
  while (accumulator >= DT) {
    gameCtx.stateMachine.update(DT);
    accumulator -= DT;
  }

  gameCtx.stateMachine.render(ctx);
  requestAnimationFrame(loop);
}

requestAnimationFrame((t) => {
  lastTime = t;
  requestAnimationFrame(loop);
});
