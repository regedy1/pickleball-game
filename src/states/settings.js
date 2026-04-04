// ============================================================
// SETTINGS STATE
// ============================================================

import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { clearScreen, drawMenu } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { toggleMusic, toggleSFX, isMusicEnabled, isSFXEnabled, playSFX } from '../audio.js';

let selectedIndex = 0;

export const Settings = {
  enter(gameCtx) {
    selectedIndex = 0;
  },

  update(dt, gameCtx) {
    if (isPressed('ArrowDown')) { selectedIndex = (selectedIndex + 1) % 3; playSFX('menuMove'); }
    if (isPressed('ArrowUp'))   { selectedIndex = (selectedIndex - 1 + 3) % 3; playSFX('menuMove'); }

    if (isPressed('Enter') || isPressed(' ')) {
      switch (selectedIndex) {
        case 0: toggleMusic(); playSFX('menuSelect'); break;
        case 1: toggleSFX(); playSFX('menuSelect'); break;
        case 2: playSFX('menuSelect'); gameCtx.stateMachine.transition(GameState.TITLE_SCREEN); break;
      }
    }

    if (isPressed('Escape')) {
      gameCtx.stateMachine.transition(GameState.TITLE_SCREEN);
    }
  },

  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.DARK_BLUE);

    drawTextCentered(ctx, 'SETTINGS', INTERNAL_WIDTH / 2, 20, PALETTE.YELLOW, 2);

    const items = [
      `MUSIC: ${isMusicEnabled() ? 'ON' : 'OFF'}`,
      `SFX: ${isSFXEnabled() ? 'ON' : 'OFF'}`,
      'BACK',
    ];

    drawMenu(ctx, items, selectedIndex, INTERNAL_WIDTH / 2 - 50, 60, PALETTE.WHITE, PALETTE.YELLOW, 1);

    drawTextCentered(ctx, 'M - TOGGLE MUSIC   N - TOGGLE SFX', INTERNAL_WIDTH / 2, 120, PALETTE.GRAY, 1);
    drawTextCentered(ctx, 'PRESS ENTER TO TOGGLE', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};
