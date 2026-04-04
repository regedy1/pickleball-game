// ============================================================
// PLAYER SETUP STATE
// ============================================================

import { GameState, GameMode, GAME_MODE_LABELS, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT, AVATARS, DUPR_TIERS } from '../constants.js';
import { clearScreen, drawMenu } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { drawPlayerSprite } from '../sprites.js';
import { isPressed, isDown } from '../input.js';
import { playSFX } from '../audio.js';

function setupGetAvatars(gameMode) {
  if (gameMode === GameMode.WOMENS_SINGLES || gameMode === GameMode.WOMENS_DOUBLES)
    return AVATARS.filter(a => a.gender === 'female');
  if (gameMode === GameMode.MENS_SINGLES || gameMode === GameMode.MENS_DOUBLES)
    return AVATARS.filter(a => a.gender === 'male');
  return AVATARS;
}

const SETUP_FIELDS = ['NAME', 'DUPR', 'AVATAR', 'CONFIRM'];
let setupFieldIdx = 0;
let setupName = '';
let setupDupr = 3.5;
let setupAvatarIdx = 0;
let setupBlink = 0;
let setupAvatars = AVATARS;

export const PlayerSetup = {
  enter(gameCtx) {
    setupFieldIdx = 0;
    setupName = gameCtx.player.name || '';
    setupDupr = gameCtx.player.dupr || 3.5;
    setupAvatars = setupGetAvatars(gameCtx.gameMode);
    setupAvatarIdx = 0;
    setupBlink = 0;
  },

  exit(gameCtx) {
    const av = setupAvatars[setupAvatarIdx];
    const realIdx = AVATARS.indexOf(av);
    gameCtx.player.name = setupName || 'PLAYER';
    gameCtx.player.dupr = setupDupr;
    gameCtx.player.avatar = realIdx >= 0 ? realIdx : 0;
    gameCtx.player.gender = av.gender || 'male';
    const isWomens = gameCtx.gameMode === GameMode.WOMENS_SINGLES || gameCtx.gameMode === GameMode.WOMENS_DOUBLES;
    gameCtx.opponent.gender = isWomens ? 'female' : 'male';
    gameCtx.opponent.dupr = Math.max(1.0, Math.min(8.0, setupDupr + (Math.random() - 0.5)));
  },

  update(dt, gameCtx) {
    setupBlink += dt;

    if (isPressed('Escape')) {
      playSFX('menuSelect');
      gameCtx.stateMachine.transition(GameState.MODE_SELECT);
      return;
    }

    if (isPressed('ArrowDown') || isPressed('Tab')) {
      setupFieldIdx = (setupFieldIdx + 1) % SETUP_FIELDS.length;
      playSFX('menuMove');
    }
    if (isPressed('ArrowUp')) {
      setupFieldIdx = (setupFieldIdx - 1 + SETUP_FIELDS.length) % SETUP_FIELDS.length;
      playSFX('menuMove');
    }

    switch (SETUP_FIELDS[setupFieldIdx]) {
      case 'NAME':
        setupHandleName();
        break;
      case 'DUPR': {
        const step = isDown('Shift') ? 0.5 : 0.1;
        if (isPressed('ArrowRight')) { setupDupr = Math.min(8.0, Math.round((setupDupr + step) * 10) / 10); playSFX('menuMove'); }
        if (isPressed('ArrowLeft'))  { setupDupr = Math.max(1.0, Math.round((setupDupr - step) * 10) / 10); playSFX('menuMove'); }
        break;
      }
      case 'AVATAR':
        if (isPressed('ArrowRight')) { setupAvatarIdx = (setupAvatarIdx + 1) % setupAvatars.length; playSFX('menuMove'); }
        if (isPressed('ArrowLeft'))  { setupAvatarIdx = (setupAvatarIdx - 1 + setupAvatars.length) % setupAvatars.length; playSFX('menuMove'); }
        break;
      case 'CONFIRM':
        if (isPressed('Enter') || isPressed(' ')) {
          playSFX('menuSelect');
          gameCtx.stateMachine.transition(GameState.GAMEPLAY);
        }
        break;
    }

    if (SETUP_FIELDS[setupFieldIdx] !== 'NAME' && isPressed('Enter')) {
      if (SETUP_FIELDS[setupFieldIdx] !== 'CONFIRM') setupFieldIdx = SETUP_FIELDS.length - 1;
    }
  },

  render(ctx, gameCtx) {
    clearScreen(ctx, PALETTE.DARK_BLUE);

    drawTextCentered(ctx, 'PLAYER SETUP', INTERNAL_WIDTH / 2, 8, PALETTE.YELLOW, 2);
    const modeLabel = GAME_MODE_LABELS[gameCtx.gameMode] || "MEN'S SINGLES";
    drawTextCentered(ctx, modeLabel, INTERNAL_WIDTH / 2, 26, PALETTE.LIGHT_GRAY, 1);

    const startY = 38;
    const lineH = 22;

    // Name
    const nameActive = setupFieldIdx === 0;
    drawText(ctx, 'NAME:', 30, startY, nameActive ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
    const cursor = nameActive && Math.floor(setupBlink * 3) % 2 === 0 ? '_' : '';
    drawText(ctx, (setupName || '') + cursor, 80, startY, PALETTE.WHITE, 1);

    // DUPR
    const duprActive = setupFieldIdx === 1;
    const tier = DUPR_TIERS.find(t => setupDupr >= t.min && setupDupr <= t.max) || DUPR_TIERS[0];
    drawText(ctx, 'DUPR:', 30, startY + lineH, duprActive ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
    drawText(ctx, `< ${setupDupr.toFixed(1)} >`, 80, startY + lineH, PALETTE.WHITE, 1);
    drawText(ctx, tier.name, 140, startY + lineH, PALETTE.ORANGE, 1);

    const barX = 80, barY = startY + lineH + 10, barW = 100;
    ctx.fillStyle = PALETTE.GRAY;
    ctx.fillRect(barX, barY, barW, 3);
    ctx.fillStyle = PALETTE.YELLOW;
    ctx.fillRect(barX, barY, ((setupDupr - 1.0) / 7.0) * barW, 3);

    // Avatar
    const avatarActive = setupFieldIdx === 2;
    drawText(ctx, 'AVATAR:', 30, startY + lineH * 2 + 8, avatarActive ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
    const av = setupAvatars[setupAvatarIdx];
    const realIdx = AVATARS.indexOf(av);
    drawText(ctx, `< ${av.name} >`, 90, startY + lineH * 2 + 8, PALETTE.WHITE, 1);

    drawPlayerSprite(ctx, INTERNAL_WIDTH / 2 - 8, startY + lineH * 2 + 24, realIdx >= 0 ? realIdx : 0, 'down', 'idle', 0, av.gender || 'male');

    // Confirm
    const confirmActive = setupFieldIdx === 3;
    const confirmY = startY + lineH * 2 + 56;
    if (confirmActive) {
      ctx.fillStyle = PALETTE.YELLOW;
      ctx.fillRect(INTERNAL_WIDTH / 2 - 40, confirmY - 2, 80, 12);
      drawTextCentered(ctx, 'START MATCH', INTERNAL_WIDTH / 2, confirmY, PALETTE.BLACK, 1);
    } else {
      drawTextCentered(ctx, 'START MATCH', INTERNAL_WIDTH / 2, confirmY, PALETTE.GRAY, 1);
    }

    drawTextCentered(ctx, 'UP/DOWN: SELECT  LEFT/RIGHT: CHANGE  ESC: BACK', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};

const SETUP_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';

function setupHandleName() {
  for (const char of SETUP_CHARS) {
    if (isPressed(char) || isPressed(char.toLowerCase())) {
      if (setupName.length < 12) { setupName += char; playSFX('menuMove'); }
    }
  }
  if (isPressed('Backspace')) setupName = setupName.slice(0, -1);
}
