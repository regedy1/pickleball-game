import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { clearScreen } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { isTouchDevice } from '../touch.js';
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

    const x = 40; let y = 45; const lh = 11;

    drawText(ctx, 'CONTROLS:', x, y, PALETTE.ORANGE, 1);                y += lh + 2;
    if (isTouchDevice()) {
      drawText(ctx, '  JOYSTICK    - MOVE + AIM', x, y, PALETTE.WHITE, 1);           y += lh;
      drawText(ctx, '  SHOT TAP    - SOFT SHOT', x, y, PALETTE.WHITE, 1);            y += lh;
      drawText(ctx, '  SHOT HOLD   - DRIVE (POWER BAR)', x, y, PALETTE.WHITE, 1);    y += lh;
      drawText(ctx, '  SMASH TAP   - SMASH', x, y, PALETTE.YELLOW, 1);              y += lh;
      drawText(ctx, '  SMASH HOLD  - POWER SMASH', x, y, PALETTE.YELLOW, 1);        y += lh;
      drawText(ctx, '  LOB         - LOB', x, y, PALETTE.WHITE, 1);                 y += lh + 4;
    } else {
      drawText(ctx, '  ARROWS  - MOVE + AIM CROSSHAIR', x, y, PALETTE.WHITE, 1);     y += lh;
      drawText(ctx, '  SPACE TAP   - SOFT SHOT', x, y, PALETTE.WHITE, 1);            y += lh;
      drawText(ctx, '  SPACE HOLD  - DRIVE (POWER BAR)', x, y, PALETTE.WHITE, 1);    y += lh;
      drawText(ctx, '  S TAP       - SMASH', x, y, PALETTE.YELLOW, 1);               y += lh;
      drawText(ctx, '  S HOLD      - POWER SMASH', x, y, PALETTE.YELLOW, 1);         y += lh;
      drawText(ctx, '  D           - LOB', x, y, PALETTE.WHITE, 1);                  y += lh + 4;
    }

    drawText(ctx, 'SOFT SHOTS BY POSITION:', x, y, PALETTE.ORANGE, 1);  y += lh + 2;
    drawText(ctx, '  AT KITCHEN  - DINK (SOFT, OVER NET)', x, y, PALETTE.LIGHT_BLUE, 1);  y += lh;
    drawText(ctx, '  MID COURT   - RESET (NEUTRAL)', x, y, PALETTE.LIGHT_BLUE, 1);        y += lh;
    drawText(ctx, '  BASELINE    - DROP (ARC TO KITCHEN)', x, y, PALETTE.LIGHT_BLUE, 1);  y += lh + 4;

    drawText(ctx, 'AIMING:', x, y, PALETTE.ORANGE, 1);                  y += lh + 2;
    drawText(ctx, '  CROSSHAIR SHOWS WHERE BALL GOES', x, y, PALETTE.WHITE, 1);    y += lh;
    if (isTouchDevice()) {
      drawText(ctx, '  JOYSTICK MOVES CROSSHAIR', x, y, PALETTE.WHITE, 1);         y += lh + 4;
    } else {
      drawText(ctx, '  ARROWS MOVE CROSSHAIR ON COURT', x, y, PALETTE.WHITE, 1);   y += lh + 4;
    }

    drawText(ctx, 'SERVE:', x, y, PALETTE.ORANGE, 1);                   y += lh + 2;
    if (isTouchDevice()) {
      drawText(ctx, '  TAP SHOT    - QUICK SERVE', x, y, PALETTE.WHITE, 1);        y += lh;
      drawText(ctx, '  HOLD SHOT   - POWER SERVE', x, y, PALETTE.WHITE, 1);        y += lh + 4;
    } else {
      drawText(ctx, '  TAP SPACE   - QUICK SERVE', x, y, PALETTE.WHITE, 1);        y += lh;
      drawText(ctx, '  HOLD SPACE  - POWER SERVE', x, y, PALETTE.WHITE, 1);        y += lh + 4;
    }

    drawText(ctx, 'RULES:', x, y, PALETTE.ORANGE, 1);                   y += lh + 2;
    drawText(ctx, '  FIRST 2 HITS MUST BOUNCE', x, y, PALETTE.YELLOW, 1);          y += lh;
    drawText(ctx, '  NO VOLLEY IN KITCHEN (NVZ)', x, y, PALETTE.YELLOW, 1);        y += lh;
    drawText(ctx, '  ONLY SERVER SCORES POINTS', x, y, PALETTE.YELLOW, 1);         y += lh;
    drawText(ctx, '  PLAY TO 11, WIN BY 2', x, y, PALETTE.WHITE, 1);

    drawTextCentered(ctx, isTouchDevice() ? 'TAP PAUSE TO GO BACK' : 'PRESS ESC TO GO BACK', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 14, PALETTE.GRAY, 1);
  },
};
