// ============================================================
// PAUSED STATE
// ============================================================

import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { drawTextCentered } from '../font.js';
import { drawMenu } from '../renderer.js';
import { isPressed } from '../input.js';
import { playSFX } from '../audio.js';

const PAUSE_MENU = ['RESUME', 'MAIN MENU'];
let pauseSel = 0;

export const Paused = {
  enter(gameCtx) {
    pauseSel = 0;
  },

  update(dt, gameCtx) {
    if (isPressed('Escape')) {
      gameCtx.stateMachine.transition(GameState.GAMEPLAY);
      return;
    }

    if (isPressed('ArrowDown')) { pauseSel = (pauseSel + 1) % PAUSE_MENU.length; playSFX('menuMove'); }
    if (isPressed('ArrowUp'))   { pauseSel = (pauseSel - 1 + PAUSE_MENU.length) % PAUSE_MENU.length; playSFX('menuMove'); }

    if (isPressed('Enter') || isPressed(' ')) {
      playSFX('menuSelect');
      if (pauseSel === 0) {
        gameCtx.stateMachine.transition(GameState.GAMEPLAY);
      } else {
        gameCtx.score.player = 0;
        gameCtx.score.opponent = 0;
        gameCtx.score.games = [0, 0];
        gameCtx.stateMachine.transition(GameState.TITLE_SCREEN);
      }
    }
  },

  render(ctx, gameCtx) {
    // Semi-transparent overlay
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, INTERNAL_WIDTH, INTERNAL_HEIGHT);

    drawTextCentered(ctx, 'PAUSED', INTERNAL_WIDTH / 2, 50, PALETTE.YELLOW, 3);

    drawMenu(ctx, PAUSE_MENU, pauseSel, INTERNAL_WIDTH / 2 - 40, 90, PALETTE.WHITE, PALETTE.YELLOW, 1);

    drawTextCentered(ctx, 'ESC TO RESUME', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};
