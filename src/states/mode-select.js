// ============================================================
// MODE SELECT STATE
// ============================================================

import { GameState, GameMode, GAME_MODE_LABELS, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT } from '../constants.js';
import { clearScreen } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isPressed } from '../input.js';
import { playSFX } from '../audio.js';

const MODES = [
  { mode: GameMode.MENS_SINGLES,   label: "MEN'S SINGLES",   type: '1V1', available: true },
  { mode: GameMode.WOMENS_SINGLES, label: "WOMEN'S SINGLES", type: '1V1', available: true },
  { mode: GameMode.MENS_DOUBLES,   label: "MEN'S DOUBLES",   type: '2V2', available: false },
  { mode: GameMode.WOMENS_DOUBLES, label: "WOMEN'S DOUBLES", type: '2V2', available: false },
  { mode: GameMode.MIXED_DOUBLES,  label: "MIXED DOUBLES",   type: '2V2', available: false },
];

let selectedIndex = 0;

export const ModeSelect = {
  enter(gameCtx) {
    selectedIndex = 0;
  },

  update(dt, gameCtx) {
    if (isPressed('ArrowDown') || isPressed('s')) {
      selectedIndex = (selectedIndex + 1) % MODES.length;
      playSFX('menuMove');
    }
    if (isPressed('ArrowUp') || isPressed('w')) {
      selectedIndex = (selectedIndex - 1 + MODES.length) % MODES.length;
      playSFX('menuMove');
    }
    if (isPressed('Enter') || isPressed(' ')) {
      const selected = MODES[selectedIndex];
      if (selected.available) {
        playSFX('menuSelect');
        gameCtx.gameMode = selected.mode;
        gameCtx.stateMachine.transition(GameState.PLAYER_SETUP);
      } else {
        playSFX('fault');
      }
    }
    if (isPressed('Escape')) {
      playSFX('menuSelect');
      gameCtx.stateMachine.transition(GameState.TITLE_SCREEN);
    }
  },

  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.DARK_BLUE);
    drawTextCentered(ctx, 'SELECT MODE', INTERNAL_WIDTH / 2, 12, PALETTE.YELLOW, 2);

    const startY = 80;
    const lineH = 35;

    for (let i = 0; i < MODES.length; i++) {
      const m = MODES[i];
      const isSelected = i === selectedIndex;
      const y = startY + i * lineH;

      if (isSelected) {
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.fillRect(30, y - 2, INTERNAL_WIDTH - 60, lineH - 2);
      }

      const badgeColor = m.type === '1V1' ? PALETTE.LIGHT_BLUE : PALETTE.ORANGE;
      ctx.fillStyle = isSelected ? badgeColor : PALETTE.GRAY;
      ctx.fillRect(40, y, 20, 8);
      drawText(ctx, m.type, 41, y + 1, PALETTE.BLACK, 1);

      const labelColor = !m.available ? PALETTE.GRAY : isSelected ? PALETTE.WHITE : PALETTE.LIGHT_GRAY;
      drawText(ctx, m.label, 66, y + 1, labelColor, 1);

      if (!m.available) {
        drawText(ctx, '(SOON)', 200, y + 1, PALETTE.GRAY, 1);
      }
    }

    drawTextCentered(ctx, 'ENTER: SELECT   ESC: BACK', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};
