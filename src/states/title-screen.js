// ============================================================
// TITLE SCREEN STATE
// ============================================================

import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { clearScreen, drawMenu } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { playSFX, playBGM, initAudio } from '../audio.js';

const MENU_ITEMS = ['NEW GAME', 'HOW TO PLAY', 'SETTINGS'];
let selectedIndex = 0;
let animTimer = 0;
let ballX = 0;
let ballY = 0;
let ballVX = 0;
let ballVY = 0;
let firstInteraction = false;

export const TitleScreen = {
  enter(gameCtx) {
    selectedIndex = 0;
    animTimer = 0;
    ballX = 80;
    ballY = 140;
    ballVX = 40;
    ballVY = -30;
    firstInteraction = false;
  },

  update(dt, gameCtx) {
    animTimer += dt;

    // Bouncing ball animation
    ballX += ballVX * dt;
    ballY += ballVY * dt;
    if (ballX < 60 || ballX > 250) ballVX *= -1;
    if (ballY < 100 || ballY > 165) ballVY *= -1;

    // Menu navigation
    if (isPressed('ArrowDown') || isPressed('s')) {
      selectedIndex = (selectedIndex + 1) % MENU_ITEMS.length;
      handleFirstInteraction();
      playSFX('menuMove');
    }
    if (isPressed('ArrowUp') || isPressed('w')) {
      selectedIndex = (selectedIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;
      handleFirstInteraction();
      playSFX('menuMove');
    }
    if (isPressed('Enter') || isPressed(' ')) {
      handleFirstInteraction();
      playSFX('menuSelect');
      switch (selectedIndex) {
        case 0:
          gameCtx.stateMachine.transition(GameState.MODE_SELECT);
          break;
        case 1:
          gameCtx.stateMachine.transition(GameState.HOW_TO_PLAY);
          break;
        case 2:
          gameCtx.stateMachine.transition(GameState.SETTINGS);
          break;
      }
    }
  },

  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.BLACK);

    // Scrolling court lines background
    ctx.fillStyle = PALETTE.DARK_GREEN;
    const offset = (animTimer * 10) % 20;
    for (let y = -20 + offset; y < INTERNAL_HEIGHT; y += 20) {
      ctx.fillRect(0, y, INTERNAL_WIDTH, 1);
    }
    for (let x = -20 + offset; x < INTERNAL_WIDTH; x += 20) {
      ctx.fillRect(x, 0, 1, INTERNAL_HEIGHT);
    }

    // Bouncing ball
    ctx.fillStyle = PALETTE.BALL_YELLOW;
    ctx.fillRect(Math.floor(ballX), Math.floor(ballY), 4, 4);

    // Title: "PICKLE SMASH"
    const titleY = 60;
    const bounce = Math.sin(animTimer * 3) * 2;

    // Shadow
    drawTextCentered(ctx, 'PICKLE', INTERNAL_WIDTH / 2 + 1, titleY + 1 + bounce, PALETTE.DARK_GREEN, 3);
    drawTextCentered(ctx, 'SMASH', INTERNAL_WIDTH / 2 + 1, titleY + 29 + bounce, PALETTE.DARK_GREEN, 3);

    // Main text
    drawTextCentered(ctx, 'PICKLE', INTERNAL_WIDTH / 2, titleY + bounce, PALETTE.YELLOW, 3);
    drawTextCentered(ctx, 'SMASH', INTERNAL_WIDTH / 2, titleY + 28 + bounce, PALETTE.ORANGE, 3);

    // Subtitle
    drawTextCentered(ctx, 'RETRO PICKLEBALL', INTERNAL_WIDTH / 2, titleY + 56, PALETTE.LIGHT_GRAY, 1);

    // Menu
    const menuX = INTERNAL_WIDTH / 2 - 50;
    const menuY = 210;
    drawMenu(ctx, MENU_ITEMS, selectedIndex, menuX, menuY, PALETTE.WHITE, PALETTE.YELLOW, 1);

    // Footer
    drawTextCentered(ctx, 'PRESS ENTER TO SELECT', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};

function handleFirstInteraction() {
  if (!firstInteraction) {
    firstInteraction = true;
    initAudio();
    playBGM('title');
  }
}
