// ============================================================
// PLAYER SETUP STATE
// ============================================================

import { GameState, GameMode, GAME_MODE_LABELS, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT, AVATARS, DUPR_TIERS } from '../constants.js';
import { clearScreen, drawMenu } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { drawPlayerSprite } from '../sprites.js';
import { isPressed, isDown } from '../input.js';
import { playSFX } from '../audio.js';

const FIELDS = ['NAME', 'DUPR', 'AVATAR', 'CONFIRM'];
let fieldIndex = 0;
let name = '';
let dupr = 3.5;
let avatarIndex = 0;
let cursorBlink = 0;

export const PlayerSetup = {
  enter(gameCtx) {
    fieldIndex = 0;
    name = gameCtx.player.name || '';
    dupr = gameCtx.player.dupr || 3.5;
    avatarIndex = gameCtx.player.avatar || 0;
    cursorBlink = 0;
  },

  exit(gameCtx) {
    gameCtx.player.name = name || 'PLAYER';
    gameCtx.player.dupr = dupr;
    gameCtx.player.avatar = avatarIndex;
    gameCtx.player.gender = AVATARS[avatarIndex].gender || 'male';
    // Set AI DUPR to match (+/- variation)
    gameCtx.opponent.dupr = Math.max(1.0, Math.min(8.0, dupr + (Math.random() - 0.5)));
  },

  update(dt, gameCtx) {
    cursorBlink += dt;

    // Field navigation
    if (isPressed('ArrowDown') || isPressed('Tab')) {
      fieldIndex = (fieldIndex + 1) % FIELDS.length;
      playSFX('menuMove');
    }
    if (isPressed('ArrowUp')) {
      fieldIndex = (fieldIndex - 1 + FIELDS.length) % FIELDS.length;
      playSFX('menuMove');
    }

    // Field-specific input
    switch (FIELDS[fieldIndex]) {
      case 'NAME':
        handleNameInput();
        break;
      case 'DUPR':
        {
          const step = isDown('Shift') ? 0.5 : 0.1; // Shift = jump by tier
          if (isPressed('ArrowRight')) { dupr = Math.min(8.0, Math.round((dupr + step) * 10) / 10); playSFX('menuMove'); }
          if (isPressed('ArrowLeft'))  { dupr = Math.max(1.0, Math.round((dupr - step) * 10) / 10); playSFX('menuMove'); }
        }
        break;
      case 'AVATAR':
        if (isPressed('ArrowRight')) { avatarIndex = (avatarIndex + 1) % AVATARS.length; playSFX('menuMove'); }
        if (isPressed('ArrowLeft'))  { avatarIndex = (avatarIndex - 1 + AVATARS.length) % AVATARS.length; playSFX('menuMove'); }
        break;
      case 'CONFIRM':
        if (isPressed('Enter') || isPressed(' ')) {
          playSFX('menuSelect');
          gameCtx.stateMachine.transition(GameState.GAMEPLAY);
        }
        break;
    }

    // Quick confirm from any field
    if (FIELDS[fieldIndex] !== 'NAME' && isPressed('Enter')) {
      if (FIELDS[fieldIndex] !== 'CONFIRM') {
        fieldIndex = FIELDS.length - 1; // jump to confirm
      }
    }
  },

  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.DARK_BLUE);

    drawTextCentered(ctx, 'PLAYER SETUP', INTERNAL_WIDTH / 2, 8, PALETTE.YELLOW, 2);
    const modeLabel = GAME_MODE_LABELS[gameCtx.gameMode] || "MEN'S SINGLES";
    drawTextCentered(ctx, modeLabel, INTERNAL_WIDTH / 2, 26, PALETTE.LIGHT_GRAY, 1);

    const startY = 38;
    const lineH = 22;

    // Name field
    const nameActive = fieldIndex === 0;
    drawText(ctx, 'NAME:', 30, startY, nameActive ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
    const cursor = nameActive && Math.floor(cursorBlink * 3) % 2 === 0 ? '_' : '';
    drawText(ctx, (name || '') + cursor, 80, startY, PALETTE.WHITE, 1);

    // DUPR field
    const duprActive = fieldIndex === 1;
    const tier = DUPR_TIERS.find(t => dupr >= t.min && dupr <= t.max) || DUPR_TIERS[0];
    drawText(ctx, 'DUPR:', 30, startY + lineH, duprActive ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
    drawText(ctx, `< ${dupr.toFixed(1)} >`, 80, startY + lineH, PALETTE.WHITE, 1);
    drawText(ctx, tier.name, 140, startY + lineH, PALETTE.ORANGE, 1);

    // DUPR bar
    const barX = 80;
    const barY = startY + lineH + 10;
    const barW = 100;
    ctx.fillStyle = PALETTE.GRAY;
    ctx.fillRect(barX, barY, barW, 3);
    ctx.fillStyle = PALETTE.YELLOW;
    const fill = ((dupr - 1.0) / 7.0) * barW;
    ctx.fillRect(barX, barY, fill, 3);

    // Avatar field
    const avatarActive = fieldIndex === 2;
    drawText(ctx, 'AVATAR:', 30, startY + lineH * 2 + 8, avatarActive ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
    const av = AVATARS[avatarIndex];
    const gLabel = av.gender === 'female' ? 'F' : 'M';
    drawText(ctx, `< ${av.name} (${gLabel}) >`, 90, startY + lineH * 2 + 8, PALETTE.WHITE, 1);

    // Avatar preview
    drawPlayerSprite(ctx, INTERNAL_WIDTH / 2 - 8, startY + lineH * 2 + 24, avatarIndex, 'down', 'idle', 0);

    // Confirm button
    const confirmActive = fieldIndex === 3;
    const confirmY = startY + lineH * 2 + 56;
    if (confirmActive) {
      ctx.fillStyle = PALETTE.YELLOW;
      ctx.fillRect(INTERNAL_WIDTH / 2 - 40, confirmY - 2, 80, 12);
      drawTextCentered(ctx, 'START MATCH', INTERNAL_WIDTH / 2, confirmY, PALETTE.BLACK, 1);
    } else {
      drawTextCentered(ctx, 'START MATCH', INTERNAL_WIDTH / 2, confirmY, PALETTE.GRAY, 1);
    }

    // Help text
    drawTextCentered(ctx, 'UP/DOWN: SELECT  LEFT/RIGHT: CHANGE', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};

// Keyboard handler for name entry
const ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
let keyBuffer = [];

function handleNameInput() {
  // We check all allowed chars via the input system
  for (const char of ALLOWED_CHARS) {
    if (isPressed(char) || isPressed(char.toLowerCase())) {
      if (name.length < 12) {
        name += char;
        playSFX('menuMove');
      }
    }
  }
  if (isPressed('Backspace')) {
    name = name.slice(0, -1);
  }
}
