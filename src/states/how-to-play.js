import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { clearScreen } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { playSFX } from '../audio.js';

export const HowToPlay = {
  enter(gameCtx) {},
  update(dt, gameCtx) {
    if (isPressed('Escape') || isPressed('Enter') || isPressed(' ')) {
      playSFX('menuSelect');
      gameCtx.stateMachine.transition(GameState.TITLE_SCREEN);
    }
  },
  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.DARK_BLUE);
    drawTextCentered(ctx, 'HOW TO PLAY', INTERNAL_WIDTH / 2, 15, PALETTE.YELLOW, 2);

    const x = 40; let y = 50; const lh = 12;

    drawText(ctx, 'ONE BUTTON CONTROLS:', x, y, PALETTE.ORANGE, 1);      y += lh + 2;
    drawText(ctx, '  ARROWS - MOVE + AIM', x, y, PALETTE.WHITE, 1);      y += lh;
    drawText(ctx, '  SPACE TAP - SOFT SHOT', x, y, PALETTE.WHITE, 1);    y += lh;
    drawText(ctx, '  SPACE HOLD - HARD SHOT', x, y, PALETTE.WHITE, 1);   y += lh;
    drawText(ctx, '  D - LOB (HIGH ARC)', x, y, PALETTE.WHITE, 1);       y += lh + 4;

    drawText(ctx, 'SHOTS BY POSITION:', x, y, PALETTE.ORANGE, 1);        y += lh + 2;
    drawText(ctx, '  AT KITCHEN: TAP=DINK  HOLD=SMASH', x, y, PALETTE.LIGHT_BLUE, 1); y += lh;
    drawText(ctx, '  MID COURT:  TAP=RESET HOLD=VOLLEY', x, y, PALETTE.LIGHT_BLUE, 1); y += lh;
    drawText(ctx, '  BASELINE:   TAP=DROP  HOLD=DRIVE', x, y, PALETTE.LIGHT_BLUE, 1); y += lh + 4;

    drawText(ctx, 'AIMING:', x, y, PALETTE.ORANGE, 1);                   y += lh + 2;
    drawText(ctx, '  CROSSHAIR SHOWS WHERE BALL GOES', x, y, PALETTE.WHITE, 1); y += lh;
    drawText(ctx, '  ARROWS MOVE CROSSHAIR ON COURT', x, y, PALETTE.WHITE, 1); y += lh + 4;

    drawText(ctx, 'SERVE:', x, y, PALETTE.ORANGE, 1);                    y += lh + 2;
    drawText(ctx, '  TAP SPACE = QUICK SERVE', x, y, PALETTE.WHITE, 1);  y += lh;
    drawText(ctx, '  HOLD SPACE = POWER SERVE', x, y, PALETTE.WHITE, 1); y += lh + 4;

    drawText(ctx, 'RULES:', x, y, PALETTE.ORANGE, 1);                    y += lh + 2;
    drawText(ctx, '  FIRST 2 HITS MUST BOUNCE', x, y, PALETTE.YELLOW, 1); y += lh;
    drawText(ctx, '  ONLY SERVER SCORES POINTS', x, y, PALETTE.YELLOW, 1); y += lh;
    drawText(ctx, '  PLAY TO 11, WIN BY 2', x, y, PALETTE.WHITE, 1);

    drawTextCentered(ctx, 'PRESS ESC TO GO BACK', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 14, PALETTE.GRAY, 1);
  },
};
