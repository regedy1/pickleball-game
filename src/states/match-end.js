// ============================================================
// MATCH END STATE
// ============================================================

import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { clearScreen, drawMenu } from '../renderer.js';
import { drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { playSFX } from '../audio.js';

const MATCHEND_MENU = ['REMATCH', 'MAIN MENU'];
let matchEndSel = 0;
let matchEndTimer = 0;
let matchWinnerLocal = null;

export const MatchEnd = {
  enter(gameCtx) {
    matchEndSel = 0;
    matchEndTimer = 0;
    matchWinnerLocal = gameCtx.matchWinner;
    gameCtx.matchWinner = null; // clear to prevent stale state
    if (matchWinnerLocal === 'player') {
      playSFX('win');
    }
  },

  update(dt, gameCtx) {
    matchEndTimer += dt;

    if (isPressed('ArrowDown')) { matchEndSel = (matchEndSel + 1) % MATCHEND_MENU.length; playSFX('menuMove'); }
    if (isPressed('ArrowUp'))   { matchEndSel = (matchEndSel - 1 + MATCHEND_MENU.length) % MATCHEND_MENU.length; playSFX('menuMove'); }

    if (isPressed('Enter') || isPressed(' ')) {
      playSFX('menuSelect');
      if (matchEndSel === 0) {
        // Rematch — reset everything
        gameCtx.score.player = 0;
        gameCtx.score.opponent = 0;
        gameCtx.score.games = [0, 0];
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
    clearScreen(ctx, PALETTE.BLACK);

    const isPlayer = matchWinnerLocal === 'player';

    drawTextCentered(ctx, 'MATCH COMPLETE', INTERNAL_WIDTH / 2, 50, PALETTE.YELLOW, 2);

    drawTextCentered(ctx, isPlayer ? 'YOU WIN THE MATCH!' : 'OPPONENT WINS THE MATCH',
      INTERNAL_WIDTH / 2, 90, isPlayer ? PALETTE.LIGHT_BLUE : PALETTE.RED, 2);

    // Final games tally
    drawTextCentered(ctx, `GAMES: ${gameCtx.score.games[0]} - ${gameCtx.score.games[1]}`,
      INTERNAL_WIDTH / 2, 130, PALETTE.WHITE, 1);

    // Stats
    drawTextCentered(ctx, `${gameCtx.player.name} VS AI (${gameCtx.opponent.dupr.toFixed(1)} DUPR)`,
      INTERNAL_WIDTH / 2, 155, PALETTE.LIGHT_GRAY, 1);

    // Menu
    drawMenu(ctx, MATCHEND_MENU, matchEndSel, INTERNAL_WIDTH / 2 - 40, 190, PALETTE.WHITE, PALETTE.YELLOW, 1);

    drawTextCentered(ctx, 'PRESS ENTER TO SELECT', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};
