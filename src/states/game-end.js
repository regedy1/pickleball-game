// ============================================================
// GAME END STATE
// ============================================================

import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT, SCORING } from '../constants.js';
import { clearScreen } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { playSFX } from '../audio.js';
import { checkMatchOver } from '../rules.js';

let gameEndTimer = 0;
let gameEndWinner = null;

export const GameEnd = {
  enter(gameCtx) {
    gameEndTimer = 0;
    gameEndWinner = gameCtx.gameWinner;
    if (!gameEndWinner) return;
    gameCtx.gameWinner = null; // clear to prevent double-count on re-entry

    // Record game win
    if (gameEndWinner === 'player') {
      gameCtx.score.games[0]++;
      playSFX('win');
    } else {
      gameCtx.score.games[1]++;
      playSFX('fault');
    }
  },

  update(dt, gameCtx) {
    gameEndTimer += dt;
    if (gameEndTimer < 1) return; // show for at least 1 second

    if (isPressed('Enter') || isPressed(' ')) {
      // Check match over
      const matchWinner = checkMatchOver(gameCtx.score);
      if (matchWinner) {
        gameCtx.matchWinner = matchWinner;
        gameCtx.stateMachine.transition(GameState.MATCH_END);
      } else {
        // Next game — reset point scores
        gameCtx.score.player = 0;
        gameCtx.score.opponent = 0;
        gameCtx.stateMachine.transition(GameState.GAMEPLAY);
      }
    }
  },

  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.BLACK);

    const isPlayer = gameEndWinner === 'player';

    drawTextCentered(ctx, 'GAME OVER', INTERNAL_WIDTH / 2, 60, PALETTE.YELLOW, 3);

    drawTextCentered(ctx, isPlayer ? 'YOU WIN THE GAME!' : 'OPPONENT WINS THE GAME',
      INTERNAL_WIDTH / 2, 100, isPlayer ? PALETTE.LIGHT_BLUE : PALETTE.RED, 1);

    // Score
    drawTextCentered(ctx, `${gameCtx.score.player} - ${gameCtx.score.opponent}`,
      INTERNAL_WIDTH / 2, 130, PALETTE.WHITE, 2);

    // Games tally
    drawTextCentered(ctx, `GAMES: ${gameCtx.score.games[0]} - ${gameCtx.score.games[1]}`,
      INTERNAL_WIDTH / 2, 170, PALETTE.LIGHT_GRAY, 1);

    // Best of N info
    drawTextCentered(ctx, `BEST OF ${SCORING.BEST_OF}`,
      INTERNAL_WIDTH / 2, 190, PALETTE.GRAY, 1);

    if (gameEndTimer > 1) {
      drawTextCentered(ctx, 'PRESS ENTER TO CONTINUE', INTERNAL_WIDTH / 2, 230, PALETTE.YELLOW, 1);
    }
  },
};
