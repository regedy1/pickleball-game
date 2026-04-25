// ============================================================
// GAMEPLAY STATE — Single Button Engine
//
// ALL shots on SPACE:
//   Serve: tap=quick, hold=power serve
//   In-game: tap=soft shot (dink/drop/reset by position)
//            hold=hard shot (drive/smash by position)
//            hold+DOWN=lob
//   Aim: movement direction = shot direction (visual crosshair)
// ============================================================

import { GameState, PALETTE, INTERNAL_WIDTH, INTERNAL_HEIGHT, COURT, PLAYER, BALL, ShotType, SHOT_CONFIG, KEYS } from '../constants.js';
import { clearScreen, drawCourt, drawPlayer, drawBall, drawHUD } from '../renderer.js';
import { drawText, drawTextCentered } from '../font.js';
import { isDown, isPressed, isReleased } from '../input.js';
import { isTouchDevice } from '../touch.js';
import { playSFX, playBGM, stopBGM } from '../audio.js';
import { createBall, updateBall, serveBall, hitBall, getBallSide, predictLanding } from '../physics.js';
import { resetBallTrail } from '../sprites.js';
import { createRulesState, resetForServe, onServe, onBallBounce, onBallHit, checkKitchenVolley, checkGameOver, scorePoint, getServeSide, ServeState, FaultReason } from '../rules.js';
import { createAI, updateAI, aiServe, resetAI } from '../ai.js';
import { clamp } from '../utils.js';

let ball, rules, ai, currentScore;
let faultDisplay = null, faultTimer = 0;
let hintText = '', hintTimer = 0;
let servePrompt = false, pendingGameEnd = null;
let rallyCount = 0, lastShotFeedback = '', feedbackTimer = 0;
let servePositioned = false, serveDelayTimer = 0;
let playerSwingTimer = 0, aiSwingTimer = 0;
let smashShakeTimer = 0;
let shotBuffer = 0, shotBufferKey = null;
let bounceFx = []; // {x, y, age, maxAge, side, mark}
let inputArmed = false; // false until SMASH key is seen released — prevents stale touch from auto-serving on entry

// Single-button charge state
let chargeTime = 0;
let isCharging = false;
const MAX_CHARGE = 0.5; // seconds to reach max power
const SOFT_THRESHOLD = 0.25; // hold < 0.25s = tap (soft shot: dink/drop/reset)

// Aim crosshair — follows movement direction, sticky after release
let aimTarget = { x: 0, y: 0 };
let aimStickyTimer = 0;
const AIM_STICKY_DURATION = 1.0; // seconds to hold last aim after no input

export const Gameplay = {
  enter(gameCtx) {
    gameCtx.player.x = COURT.CENTER_X - PLAYER.WIDTH / 2;
    gameCtx.player.y = COURT.Y + COURT.HEIGHT - PLAYER.HEIGHT - 10;
    gameCtx.player.vx = 0;
    gameCtx.player.vy = 0;
    gameCtx.player.facing = 'up';
    gameCtx.player.animState = 'idle';
    gameCtx.player.animFrame = 0;

    gameCtx.opponent.x = COURT.CENTER_X - PLAYER.WIDTH / 2;
    gameCtx.opponent.y = COURT.Y + 10;
    gameCtx.opponent.vx = 0;
    gameCtx.opponent.vy = 0;
    gameCtx.opponent.facing = 'down';
    gameCtx.opponent.animState = 'idle';
    gameCtx.opponent.animFrame = 0;

    ball = createBall();
    rules = createRulesState();
    rules.serving = gameCtx.score.serving;
    currentScore = gameCtx.score;
    ai = createAI(gameCtx.opponent.dupr);

    faultDisplay = null; faultTimer = 0;
    pendingGameEnd = null; servePrompt = true;
    rallyCount = 0; lastShotFeedback = ''; feedbackTimer = 0;
    chargeTime = 0; isCharging = false;
    servePositioned = false; serveDelayTimer = 0;
    playerSwingTimer = 0; aiSwingTimer = 0;
    smashShakeTimer = 0; shotBuffer = 0; shotBufferKey = null; aimStickyTimer = 0;
    bounceFx = [];
    inputArmed = false; // require SMASH key to be RELEASED first before any serve/shot fires
    aimTarget = { x: COURT.CENTER_X, y: COURT.Y + COURT.HEIGHT / 4 };

    playBGM('gameplay');
    showHint('SPACE TO SERVE');
  },

  exit(gameCtx) { stopBGM(); },

  update(dt, gameCtx) {
    const player = gameCtx.player;
    const opponent = gameCtx.opponent;

    if (feedbackTimer > 0) { feedbackTimer -= dt; if (feedbackTimer <= 0) lastShotFeedback = ''; }
    if (playerSwingTimer > 0) playerSwingTimer -= dt;
    if (aiSwingTimer > 0) aiSwingTimer -= dt;
    if (smashShakeTimer > 0) smashShakeTimer -= dt;
    if (shotBuffer > 0) shotBuffer -= dt;

    // Tick bounce effects
    for (let i = bounceFx.length - 1; i >= 0; i--) {
      bounceFx[i].age += dt;
      if (bounceFx[i].age >= bounceFx[i].maxAge) bounceFx.splice(i, 1);
    }

    // Fault display
    if (faultDisplay) {
      faultTimer -= dt;
      if (faultTimer <= 0) {
        faultDisplay = null;
        if (pendingGameEnd) {
          gameCtx.gameWinner = pendingGameEnd.winner;
          pendingGameEnd = null;
          gameCtx.stateMachine.transition(GameState.GAME_END);
          return;
        }
        resetForPoint(gameCtx);
      }
      return;
    }

    if (hintTimer > 0) { hintTimer -= dt; if (hintTimer <= 0) hintText = ''; }

    // Arm input only once the SMASH key is observed NOT down. This catches the
    // case where the player tapped a SHOT-mapped touch button to enter gameplay
    // (mode-select → gameplay) and the lingering release would otherwise
    // auto-fire a serve on frame 1.
    if (!inputArmed && !isDown(KEYS.SMASH) && !isDown(KEYS.POWER_SMASH)) {
      inputArmed = true;
    }

    // --- Movement (always active) ---
    updatePlayerMovement(player, dt);

    // --- Update aim crosshair based on movement direction ---
    updateAimTarget(player, dt);

    // --- Serve ---
    if (rules.serveState === ServeState.WAITING) {
      const serveSide = getServeSide(currentScore, gameCtx.score.serving);
      if (gameCtx.score.serving === 'player') {
        if (!servePositioned) {
          player.y = COURT.Y + COURT.HEIGHT - PLAYER.HEIGHT - 2;
          player.x = serveSide === 'right' ? COURT.CENTER_X + 20 : COURT.CENTER_X - PLAYER.WIDTH - 20;
          servePositioned = true;
        }
        player.y = COURT.Y + COURT.HEIGHT - PLAYER.HEIGHT - 2;
        player.vy = 0;
        const halfMin = serveSide === 'right' ? COURT.CENTER_X : COURT.X;
        const halfMax = serveSide === 'right' ? COURT.X + COURT.WIDTH - PLAYER.WIDTH : COURT.CENTER_X - PLAYER.WIDTH;
        player.x = clamp(player.x, halfMin, halfMax);

        // Hold SPACE for power serve, tap for quick serve — gated on inputArmed
        if (inputArmed && isDown(KEYS.SMASH)) {
          if (!isCharging) { isCharging = true; chargeTime = 0; }
          chargeTime = Math.min(chargeTime + dt, MAX_CHARGE);
          servePrompt = false;
        }
        if (inputArmed && isCharging && isReleased(KEYS.SMASH)) {
          const power = 1.0 + (chargeTime / MAX_CHARGE) * 0.5; // 1.0 - 1.5x
          performPlayerServe(player, power);
          isCharging = false; chargeTime = 0;
          servePositioned = false;
        } else if (inputArmed && !isCharging && isReleased(KEYS.SMASH) && isPressed(KEYS.SMASH)) {
          // Instant tap serve (common on mobile touch)
          performPlayerServe(player, 1.0);
          isCharging = false; chargeTime = 0;
          servePositioned = false;
        }
      } else {
        serveDelayTimer += dt;
        opponent.y = COURT.Y + 2;
        opponent.x = serveSide === 'right' ? COURT.CENTER_X - PLAYER.WIDTH - 20 : COURT.CENTER_X + 20;
        if (serveDelayTimer >= 1.2) {
          performAIServe(opponent);
          servePositioned = false; serveDelayTimer = 0;
        }
      }
      if (rules.serveState === ServeState.WAITING) return;
    }

    // --- Ball Physics ---
    if (ball.active) {
      const result = updateBall(ball, dt);

      if (rules.serveState === ServeState.SERVED && ball.bounced) {
        spawnBounceFx(ball.x, ball.y, getBallSide(ball));
        onBallBounce(rules, getBallSide(ball));
        ball.bounced = false;
        playSFX('bounce');
      }
      if (rules.serveState === ServeState.IN_PLAY && ball.bounced) {
        spawnBounceFx(ball.x, ball.y, getBallSide(ball));
        onBallBounce(rules, getBallSide(ball));
        ball.bounced = false;
        playSFX('bounce');
      }
      if (result && result.netHit) {
        if (rules.serveState === ServeState.SERVED) {
          showHint('LET! REDO SERVE');
          playSFX('bounce');
          resetForPoint(gameCtx);
          return;
        }
        playSFX('bounce');
      }
      if (result && result.outOfBounds) {
        triggerFault(FaultReason.OUT, ball.lastHitBy, gameCtx);
        return;
      }
      if (ball.landed) {
        triggerFault(FaultReason.NOT_RETURNED, getBallSide(ball), gameCtx);
        return;
      }

      // --- Player shot ---
      // SPACE: tap=soft (dink/drop/reset), hold=drive
      // S: tap=smash, hold=power smash
      // D: lob
      const ballOnPlayerSide = getBallSide(ball) === 'player';
      if (inputArmed && ball.lastHitBy !== 'player' && ballOnPlayerSide) {
        // Drain shot buffer — re-attempt a queued shot now that ball may be in range
        if (shotBuffer > 0 && shotBufferKey) {
          executePlayerShot(player, gameCtx, shotBufferKey, true);
        }
        // SPACE charge (soft/drive)
        if (isDown(KEYS.SMASH)) {
          if (!isCharging) { isCharging = true; chargeTime = 0; }
          chargeTime = Math.min(chargeTime + dt, MAX_CHARGE);
        }
        if (isCharging && isReleased(KEYS.SMASH)) {
          executePlayerShot(player, gameCtx, 'space');
          isCharging = false; chargeTime = 0;
        } else if (!isCharging && isReleased(KEYS.SMASH) && isPressed(KEYS.SMASH)) {
          // Instant tap (pressed+released same frame, common on mobile touch)
          chargeTime = 0;
          executePlayerShot(player, gameCtx, 'space');
        }
        // S = smash (tap=smash, hold=power smash)
        if (isDown(KEYS.POWER_SMASH)) {
          if (!isCharging) { isCharging = true; chargeTime = 0; }
          chargeTime = Math.min(chargeTime + dt, MAX_CHARGE);
        }
        if (isCharging && isReleased(KEYS.POWER_SMASH)) {
          executePlayerShot(player, gameCtx, 'smash');
          isCharging = false; chargeTime = 0;
        } else if (!isCharging && isReleased(KEYS.POWER_SMASH) && isPressed(KEYS.POWER_SMASH)) {
          chargeTime = 0;
          executePlayerShot(player, gameCtx, 'smash');
        }
        // D = instant lob
        if (isPressed(KEYS.LOB)) {
          executePlayerShot(player, gameCtx, 'lob');
        }
      } else {
        isCharging = false; chargeTime = 0;
      }

      // --- AI ---
      const aiResult = updateAI(ai, opponent, ball, rules, dt);
      updateAIMovement(opponent, dt);
      if (aiResult && aiResult.hit) {
        const hitResult = onBallHit(rules, 'opponent');
        if (hitResult.fault) { triggerFault(hitResult.reason, 'opponent', gameCtx); return; }
        hitBall(ball, aiResult.targetX, aiResult.targetY, aiResult.flightTime, aiResult.arcMult);
        ball.lastHitBy = 'opponent';
        rallyCount++;
        aiSwingTimer = 0.25;
        playSFX('hit');
      }
    }

    if (isPressed(KEYS.PAUSE)) gameCtx.stateMachine.transition(GameState.PAUSED);
  },

  render(ctx, gameCtx) {
    // Smash screen shake
    let shakeX = 0, shakeY = 0;
    if (smashShakeTimer > 0) {
      const mag = (smashShakeTimer / 0.18) * 3;
      shakeX = (Math.random() - 0.5) * mag * 2;
      shakeY = (Math.random() - 0.5) * mag * 2;
      ctx.save();
      ctx.translate(shakeX, shakeY);
    }

    drawCourt(ctx);

    // Bounce effects sit on the floor — drawn after court, before player/ball
    drawBounceFx(ctx);

    // Landing marker
    if (ball.active && !ball.landed && ball.z > 3) {
      drawLandingMarker(ctx);
    }

    // Aim crosshair on opponent's court (always visible during play)
    if (ball.active && ball.lastHitBy !== 'player') {
      drawAimCrosshair(ctx);
    }

    // Animation states
    if (playerSwingTimer > 0) {
      gameCtx.player.animState = gameCtx.player.swingSide || 'forehand';
      gameCtx.player.animFrame = playerSwingTimer > 0.15 ? 1 : 2;
    }
    if (aiSwingTimer > 0) {
      gameCtx.opponent.animState = 'forehand';
      gameCtx.opponent.animFrame = aiSwingTimer > 0.15 ? 1 : 2;
    }

    // Double-bounce rule indicator — show "LET IT BOUNCE!" when rule is active
    // Player must let serve bounce on first return, server must let return bounce on second hit
    if (ball.active && !ball.landed && rules.rallyCount <= 2) {
      const ballOnPlayerSide = getBallSide(ball) === 'player';
      const playerMustWait = ballOnPlayerSide
        && ball.lastHitBy !== 'player'
        && rules.bounceCount.player === 0
        && !rules.doubleBounceCleared.player;
      if (playerMustWait) {
        const blink = Math.floor(Date.now() / 200) % 2 === 0;
        if (blink) {
          drawTextCentered(ctx, 'LET IT BOUNCE!', INTERNAL_WIDTH / 2, COURT.Y + COURT.HEIGHT + 8, PALETTE.YELLOW, 1);
        }
        // Bounce-required marker over player
        const px = Math.floor(gameCtx.player.x + PLAYER.WIDTH / 2);
        const py = Math.floor(gameCtx.player.y) - 8;
        ctx.fillStyle = blink ? PALETTE.YELLOW : 'rgba(244,211,94,0.5)';
        ctx.fillRect(px - 4, py, 9, 1);
        ctx.fillRect(px - 4, py + 4, 9, 1);
        ctx.fillRect(px - 4, py + 1, 1, 3);
        ctx.fillRect(px + 4, py + 1, 1, 3);
      }
    }

    // Kitchen zone warning — highlight when player is in the kitchen
    const playerCY = gameCtx.player.y + PLAYER.HEIGHT / 2;
    const playerInKitchen = playerCY >= COURT.NET_Y && playerCY <= COURT.NET_Y + COURT.KITCHEN_DEPTH;
    if (playerInKitchen && ball.active && !ball.landed) {
      // Red tint over player's kitchen zone
      ctx.fillStyle = 'rgba(230,57,70,0.15)';
      ctx.fillRect(COURT.X, COURT.NET_Y, COURT.WIDTH, COURT.KITCHEN_DEPTH);
      // Warning text
      if (rules.bounceCount.player === 0) {
        drawTextCentered(ctx, 'NO VOLLEY ZONE', COURT.CENTER_X, COURT.NET_Y + COURT.KITCHEN_DEPTH / 2 - 4, 'rgba(230,57,70,0.7)', 1);
      }
    }

    drawPlayer(ctx, gameCtx.opponent);
    drawPlayer(ctx, gameCtx.player);
    drawBall(ctx, ball);

    // Hit flash
    if (playerSwingTimer > 0.15) {
      const px = gameCtx.player.x + PLAYER.WIDTH / 2;
      const py = gameCtx.player.y + PLAYER.HEIGHT / 3;
      ctx.fillStyle = 'rgba(255,255,200,0.6)';
      ctx.fillRect(px - 6, py - 6, 12, 12);
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fillRect(px - 3, py - 3, 6, 6);
    }

    drawHUD(ctx, gameCtx);

    // Serve indicators
    if (rules.serveState === ServeState.WAITING) {
      const isPlayerServing = gameCtx.score.serving === 'player';
      const server = isPlayerServing ? gameCtx.player : gameCtx.opponent;
      const sx = Math.floor(server.x + PLAYER.WIDTH / 2);
      const sy = Math.floor(server.y);

      // Bouncing ball above server's head
      const bounce = Math.sin(Date.now() / 200) * 3;
      ctx.fillStyle = PALETTE.BALL_YELLOW;
      ctx.fillRect(sx - 2, sy - 14 + bounce, 5, 5);
      ctx.fillRect(sx - 1, sy - 15 + bounce, 3, 1);
      ctx.fillRect(sx - 1, sy - 9 + bounce, 3, 1);
      // Small highlight
      ctx.fillStyle = '#fff';
      ctx.fillRect(sx - 1, sy - 13 + bounce, 1, 1);

      // Arrow pointing at server
      ctx.fillStyle = PALETTE.YELLOW;
      ctx.fillRect(sx - 1, sy - 20 + bounce, 3, 3);
      ctx.fillRect(sx, sy - 17 + bounce, 1, 2);

      // Banner text
      if (isPlayerServing) {
        drawTextCentered(ctx, 'YOUR SERVE', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 20, PALETTE.YELLOW, 2);
        drawTextCentered(ctx, isTouchDevice() ? 'HOLD SHOT TO SERVE' : 'HOLD SPACE TO SERVE', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 8, PALETTE.LIGHT_GRAY, 1);
      } else {
        drawTextCentered(ctx, 'OPPONENT SERVING', INTERNAL_WIDTH / 2, COURT.Y - 5, PALETTE.ORANGE, 1);
      }
    }

    // Power bar
    if (isCharging && chargeTime > SOFT_THRESHOLD) {
      drawPowerBar(ctx, gameCtx.player);
    }

    // Shot type preview (shows what shot will fire based on charge + position)
    if (isCharging) {
      const shotLabel = getShotPreview(gameCtx.player);
      const px = Math.floor(gameCtx.player.x + PLAYER.WIDTH / 2);
      drawTextCentered(ctx, shotLabel, px, Math.floor(gameCtx.player.y) - 22, PALETTE.WHITE, 1);
    }

    // Rally counter
    if (rallyCount > 2) {
      drawText(ctx, `RALLY: ${rallyCount}`, INTERNAL_WIDTH - 80, 18, PALETTE.LIGHT_BLUE, 1);
    }

    // Shot feedback
    if (lastShotFeedback) {
      drawTextCentered(ctx, lastShotFeedback, INTERNAL_WIDTH / 2, INTERNAL_HEIGHT / 2 - 40, PALETTE.YELLOW, 2);
    }

    // Fault / side-out display
    if (faultDisplay) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(0, INTERNAL_HEIGHT / 2 - 20, INTERNAL_WIDTH, 40);
      drawTextCentered(ctx, faultDisplay, INTERNAL_WIDTH / 2, INTERNAL_HEIGHT / 2 - 12, PALETTE.RED, 2);
    }

    if (hintText) {
      drawTextCentered(ctx, hintText, INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 30, PALETTE.LIGHT_BLUE, 1);
    }

    if (!isTouchDevice()) {
      drawText(ctx, 'SPACE:TAP=SOFT HOLD=DRIVE  S:SMASH  D:LOB', 4, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
    }

    if (smashShakeTimer > 0) ctx.restore();
  },
};

// ============================================================
// AIM CROSSHAIR — follows movement direction
// ============================================================

function updateAimTarget(player, dt) {
  const pcx = player.x + PLAYER.WIDTH / 2;
  const hasInput = isDown(KEYS.LEFT) || isDown(KEYS.RIGHT) || isDown(KEYS.UP) || isDown(KEYS.DOWN);

  // Sticky aim: when input stops, hold last aim for AIM_STICKY_DURATION
  // (critical on mobile — you can't aim while running to the ball with one joystick)
  if (hasInput) {
    aimStickyTimer = AIM_STICKY_DURATION;
  } else if (aimStickyTimer > 0) {
    aimStickyTimer -= dt;
    return; // freeze aim during sticky window
  }

  // Base: auto cross-court (only when no input AND sticky has expired)
  let tx = pcx < COURT.CENTER_X
    ? COURT.CENTER_X + 40
    : COURT.CENTER_X - 40;
  let ty = COURT.Y + COURT.HEIGHT * 0.25;

  if (hasInput) {
    if (isDown(KEYS.LEFT))  tx = COURT.X + COURT.WIDTH * 0.15;
    if (isDown(KEYS.RIGHT)) tx = COURT.X + COURT.WIDTH * 0.85;
    if (isDown(KEYS.UP))    ty = COURT.Y + 15;
    if (isDown(KEYS.DOWN))  ty = COURT.NET_Y - COURT.KITCHEN_DEPTH + 10;
    if (isDown(KEYS.LEFT) && isDown(KEYS.UP))    { tx = COURT.X + COURT.WIDTH * 0.15; ty = COURT.Y + 15; }
    if (isDown(KEYS.RIGHT) && isDown(KEYS.UP))   { tx = COURT.X + COURT.WIDTH * 0.85; ty = COURT.Y + 15; }
    if (isDown(KEYS.LEFT) && isDown(KEYS.DOWN))  { tx = COURT.X + COURT.WIDTH * 0.15; ty = COURT.NET_Y - COURT.KITCHEN_DEPTH + 10; }
    if (isDown(KEYS.RIGHT) && isDown(KEYS.DOWN)) { tx = COURT.X + COURT.WIDTH * 0.85; ty = COURT.NET_Y - COURT.KITCHEN_DEPTH + 10; }
  }

  aimTarget.x += (tx - aimTarget.x) * 0.15;
  aimTarget.y += (ty - aimTarget.y) * 0.15;

  aimTarget.x = clamp(aimTarget.x, COURT.X + 22, COURT.X + COURT.WIDTH - 22);
  aimTarget.y = clamp(aimTarget.y, COURT.Y + 22, COURT.NET_Y - 8);
}

function drawAimCrosshair(ctx) {
  const ax = Math.floor(aimTarget.x);
  const ay = Math.floor(aimTarget.y);

  // Pulsing opacity
  const pulse = 0.3 + Math.sin(Date.now() / 200) * 0.15;

  // Outer ring
  ctx.fillStyle = `rgba(255,255,100,${pulse})`;
  ctx.fillRect(ax - 4, ay, 9, 1);
  ctx.fillRect(ax, ay - 4, 1, 9);

  // Inner dot
  ctx.fillStyle = `rgba(255,255,255,${pulse + 0.2})`;
  ctx.fillRect(ax - 1, ay - 1, 3, 3);
}

// ============================================================
// LANDING MARKER
// ============================================================

function drawLandingMarker(ctx) {
  const landing = predictLanding(ball);
  const mx = Math.floor(landing.x);
  const my = Math.floor(landing.y);
  // Pulse stronger as ball gets closer to landing (low z = bigger marker)
  const closeness = Math.max(0, 1 - ball.z / 40); // 0..1
  const size = 3 + Math.floor(closeness * 2);
  const alpha = 0.35 + closeness * 0.4;
  ctx.fillStyle = `rgba(255,100,100,${alpha})`;
  ctx.fillRect(mx - size, my, size * 2 + 1, 1);
  ctx.fillRect(mx, my - size, 1, size * 2 + 1);
  ctx.fillRect(mx - 2, my - 1, 5, 3);
  ctx.fillRect(mx - 1, my - 2, 3, 5);
}

// ============================================================
// BOUNCE EFFECT — expanding ring + fading floor mark
// ============================================================

function spawnBounceFx(x, y, side) {
  bounceFx.push({
    x: Math.floor(x + 3), // ball is 6px wide, center
    y: Math.floor(y + 3),
    age: 0,
    maxAge: 0.55,
    side,
  });
}

function drawBounceFx(ctx) {
  for (const fx of bounceFx) {
    const t = fx.age / fx.maxAge; // 0..1
    const ring = Math.floor(2 + t * 12); // expand 2 → 14px
    const alpha = (1 - t) * 0.7;

    // Outer expanding ring (white/yellow flash)
    ctx.fillStyle = `rgba(255, 240, 120, ${alpha * 0.9})`;
    // Top + bottom lines of the ring
    ctx.fillRect(fx.x - ring, fx.y, ring * 2 + 1, 1);
    ctx.fillRect(fx.x, fx.y - Math.floor(ring * 0.5), 1, Math.floor(ring) + 1);
    ctx.fillRect(fx.x, fx.y + Math.floor(ring * 0.5) - 1, 1, 2);
    // Side dots (elliptical)
    const half = Math.floor(ring * 0.7);
    ctx.fillRect(fx.x - half - 1, fx.y - 1, 2, 2);
    ctx.fillRect(fx.x + half, fx.y - 1, 2, 2);

    // Persistent floor mark (faint, lasts whole effect) — shows WHERE the bounce was
    const markAlpha = (1 - t) * 0.35;
    ctx.fillStyle = `rgba(255,255,255,${markAlpha})`;
    ctx.fillRect(fx.x - 1, fx.y - 1, 3, 3);

    // Inner bright flash for first 30% of effect
    if (t < 0.3) {
      const flashA = (1 - t / 0.3) * 0.9;
      ctx.fillStyle = `rgba(255,255,255,${flashA})`;
      ctx.fillRect(fx.x - 2, fx.y - 1, 5, 3);
      ctx.fillRect(fx.x - 1, fx.y - 2, 3, 5);
    }
  }
}

// ============================================================
// SHOT EXECUTION — Single button, tap vs hold
// ============================================================

function getShotPreview(player) {
  const isSmashKey = isDown(KEYS.POWER_SMASH);
  const power = chargeTime / MAX_CHARGE;
  if (isSmashKey) return power > 0.5 ? 'POWER SMASH!' : 'SMASH';
  const pcy = player.y + PLAYER.HEIGHT / 2;
  const isTap = chargeTime <= SOFT_THRESHOLD;
  if (isTap) {
    if (pcy <= COURT.NET_Y + COURT.KITCHEN_DEPTH + 15) return 'DINK';
    if (pcy > COURT.NET_Y + COURT.KITCHEN_DEPTH + 40) return 'DROP';
    return 'RESET';
  }
  return power > 0.6 ? 'POWER DRIVE!' : 'DRIVE';
}

function executePlayerShot(player, gameCtx, shotKey = 'space', fromBuffer = false) {
  const pcx = player.x + PLAYER.WIDTH / 2;
  const pcy = player.y + PLAYER.HEIGHT / 2;

  // Hit radius — slightly larger on touch (less precise input)
  const hitRadius = isTouchDevice() ? 40 : 32;
  const dist = Math.sqrt(Math.pow(pcx - ball.x - 3, 2) + Math.pow(pcy - ball.y - 3, 2));
  if (dist >= hitRadius) {
    // Out of range — only arm buffer on the *initial* press, never from a drain attempt
    // (otherwise the buffer keeps re-arming itself and auto-fires when ball enters range)
    if (!fromBuffer) {
      shotBuffer = 0.15;
      shotBufferKey = shotKey;
    }
    return;
  }
  // Consume buffer on success
  shotBuffer = 0;
  shotBufferKey = null;

  // Double-bounce check
  const nextRally = rules.rallyCount + 1;
  if (nextRally <= 2 && !rules.doubleBounceCleared.player && rules.bounceCount.player === 0) {
    showHint('WAIT FOR BOUNCE!');
    return;
  }

  // Kitchen volley check
  const kitchenCheck = checkKitchenVolley('player', pcy, rules.bounceCount.player);
  if (kitchenCheck.fault) {
    showFeedback('KITCHEN FAULT!');
    triggerFault(kitchenCheck.reason, 'player', gameCtx);
    return;
  }

  const hitResult = onBallHit(rules, 'player');
  if (hitResult.fault) { triggerFault(hitResult.reason, 'player', gameCtx); return; }

  const inKitchen = pcy <= COURT.NET_Y + COURT.KITCHEN_DEPTH + 15;
  const atBaseline = pcy > COURT.NET_Y + COURT.KITCHEN_DEPTH + 40;
  const power = Math.min(chargeTime / MAX_CHARGE, 1.0);
  const isTap = chargeTime <= SOFT_THRESHOLD;

  let flightTime, arcMult, label, safeNet;

  if (shotKey === 'lob') {
    // D = LOB: high arc, deep, safe net clearance
    flightTime = 1.5; arcMult = 2.5; label = 'LOB'; safeNet = true;

  } else if (shotKey === 'smash') {
    // S = SMASH: very flat, very fast, distinct from drive
    flightTime = 0.28; arcMult = 1.0; label = 'SMASH!'; safeNet = false;
    if (power > 0.5) {
      flightTime = 0.22;
      label = 'POWER SMASH!';
    }
    smashShakeTimer = 0.18;

  } else if (isTap) {
    // SPACE TAP = soft shot by position, safe net
    if (inKitchen) {
      flightTime = 0.8; arcMult = 1.0; label = 'DINK'; safeNet = true;
    } else if (atBaseline) {
      flightTime = 0.9; arcMult = 1.3; label = 'DROP'; safeNet = true;
    } else {
      flightTime = 0.85; arcMult = 1.0; label = 'RESET'; safeNet = true;
    }

  } else {
    // SPACE HOLD = DRIVE: fast, slightly risky net
    flightTime = 0.7; arcMult = 1.0; label = 'DRIVE'; safeNet = false;
    if (power > 0.6) {
      flightTime = 0.55;
      label = 'POWER DRIVE!';
    }
  }

  // Forehand / Backhand
  if (ball.x > pcx) {
    flightTime *= 0.95;
    player.swingSide = 'forehand';
  } else {
    flightTime *= 1.05;
    player.swingSide = 'backhand';
  }

  // Target: crosshair X for horizontal, Y depends on shot type
  // Spread reduced — was causing too many out-of-bounds shots
  let targetX = aimTarget.x + (Math.random() - 0.5) * 6;
  let targetY;

  if (shotKey === 'lob') {
    targetY = COURT.Y + 25 + Math.random() * 15;          // deep but with margin from baseline
  } else if (shotKey === 'smash') {
    // Smash aims MID-COURT for safety
    targetY = COURT.NET_Y - COURT.KITCHEN_DEPTH - 25 + Math.random() * 30;
  } else if (isTap) {
    targetY = COURT.NET_Y - COURT.KITCHEN_DEPTH + 5 + Math.random() * (COURT.KITCHEN_DEPTH - 8);
  } else {
    targetY = aimTarget.y + (Math.random() - 0.5) * 6;   // drive: follow crosshair tightly
  }

  // Generous in-bounds margin so RNG/physics jitter doesn't push shots out
  targetX = clamp(targetX, COURT.X + 22, COURT.X + COURT.WIDTH - 22);
  targetY = clamp(targetY, COURT.Y + 22, COURT.NET_Y - 8);

  showFeedback(label);
  hitBall(ball, targetX, targetY, flightTime, arcMult, safeNet);
  ball.lastHitBy = 'player';
  rallyCount++;

  player.animState = player.swingSide || 'forehand';
  player.animFrame = 0;
  playerSwingTimer = 0.25;
  playSFX(shotKey === 'smash' ? 'smash' : 'hit');
}

// ============================================================
// POWER BAR
// ============================================================

function drawPowerBar(ctx, player) {
  const px = Math.floor(player.x + PLAYER.WIDTH / 2);
  const py = Math.floor(player.y) - 14;
  const barW = 36;
  const barH = 4;
  const barX = px - barW / 2;

  ctx.fillStyle = '#222';
  ctx.fillRect(barX - 1, py - 1, barW + 2, barH + 2);

  const fill = chargeTime / MAX_CHARGE;
  const fillW = Math.floor(fill * barW);
  for (let i = 0; i < fillW; i++) {
    const t = i / barW;
    if (t < 0.4) ctx.fillStyle = '#2d6a4f';
    else if (t < 0.7) ctx.fillStyle = '#f4d35e';
    else ctx.fillStyle = '#e63946';
    ctx.fillRect(barX + i, py, 1, barH);
  }

  if (fill > 0.7) drawText(ctx, 'MAX!', barX + barW + 3, py - 1, PALETTE.RED, 1);

}

function showFeedback(text) { lastShotFeedback = text; feedbackTimer = 0.6; }

// ============================================================
// MOVEMENT
// ============================================================

function updatePlayerMovement(player, dt) {
  let vx = 0, vy = 0;
  if (isDown(KEYS.UP))    vy = -PLAYER.SPEED;
  if (isDown(KEYS.DOWN))  vy = PLAYER.SPEED;
  if (isDown(KEYS.LEFT))  vx = -PLAYER.SPEED;
  if (isDown(KEYS.RIGHT)) vx = PLAYER.SPEED;
  if (vx !== 0 && vy !== 0) { vx *= 0.707; vy *= 0.707; }

  player.vx = vx; player.vy = vy;
  player.x += vx * dt; player.y += vy * dt;
  player.x = clamp(player.x, COURT.X - 5, COURT.X + COURT.WIDTH - PLAYER.WIDTH + 5);
  player.y = clamp(player.y, COURT.NET_Y + 2, COURT.Y + COURT.HEIGHT - PLAYER.HEIGHT);

  if (vx < 0) player.facing = 'left';
  else if (vx > 0) player.facing = 'right';
  else if (vy < 0) player.facing = 'up';
  else if (vy > 0) player.facing = 'down';
  else player.facing = 'up';

  if (vx !== 0 || vy !== 0) {
    player.animTime = (player.animTime || 0) + dt;
    player.animState = 'walk';
    player.animFrame = Math.floor(player.animTime / 0.12) % 4;
  } else {
    player.animState = 'idle'; player.animFrame = 0; player.animTime = 0;
  }
}

function updateAIMovement(opponent, dt) {
  opponent.x += opponent.vx * dt;
  opponent.y += opponent.vy * dt;
  opponent.x = clamp(opponent.x, COURT.X - 5, COURT.X + COURT.WIDTH - PLAYER.WIDTH + 5);
  opponent.y = clamp(opponent.y, COURT.Y, COURT.NET_Y - PLAYER.HEIGHT / 2);
}

// ============================================================
// SERVE
// ============================================================

function performPlayerServe(player, power = 1.0) {
  const serveX = player.x + PLAYER.WIDTH / 2;
  const serveY = player.y;
  const serveSide = getServeSide(currentScore, rules.serving);

  // Power 1.0 (tap) → soft, short serve just past kitchen line
  // Power 1.5 (full hold) → fast, deep serve at baseline
  const t = clamp((power - 1.0) / 0.5, 0, 1); // 0..1
  const shortDepth = COURT.NET_Y - COURT.KITCHEN_DEPTH - 12; // just past kitchen
  const deepDepth = COURT.Y + 25;                            // baseline area
  const targetY = shortDepth - (shortDepth - deepDepth) * t + (Math.random() - 0.5) * 10;

  // Service-box X (cross-court, narrower spread on soft serves)
  const xSpread = 0.2 + 0.15 * t; // tap=0.2, hold=0.35
  const targetX = serveSide === 'right'
    ? COURT.X + COURT.WIDTH * 0.12 + Math.random() * (COURT.WIDTH * xSpread)
    : COURT.X + COURT.WIDTH * (0.88 - xSpread) + Math.random() * (COURT.WIDTH * xSpread);

  // Flight time: soft tap is slow & arcing, full hold is fast & flat
  const flightTime = 1.2 - t * 0.5; // 1.2s → 0.7s

  serveBall(ball, serveX, serveY, targetX, targetY, 'player', flightTime);
  if (power >= 1.4) showFeedback('POWER SERVE!');
  else if (power <= 1.05) showFeedback('SOFT SERVE');
  onServe(rules); rallyCount = 0; playSFX('serve');
}

function performAIServe(opponent) {
  const serveSide = getServeSide(currentScore, 'opponent');
  const serve = aiServe(opponent, ball, serveSide);
  serveBall(ball, serve.serveX, serve.serveY, serve.targetX, serve.targetY, 'opponent');
  onServe(rules); rallyCount = 0; playSFX('serve');
}

// ============================================================
// SCORING
// ============================================================

// Emotional point messages
const WINNER_MSGS = ['NICE!', 'GREAT SHOT!', 'BEAUTIFUL!', 'INCREDIBLE!', 'ON FIRE!', 'UNSTOPPABLE!', 'WHAT A PLAY!'];
const LOSER_MSGS = ['OUCH!', 'SO CLOSE!', 'TOUGH BREAK!', 'UNLUCKY!', 'SHAKE IT OFF!'];
const SIDE_OUT_MSGS = ['SIDE OUT!', 'YOUR SERVE!', 'CHANGE OF SERVE!', 'SWITCH!'];
const EPIC_RALLY = ['EPIC RALLY!', 'WHAT A BATTLE!', 'INCREDIBLE POINT!'];

function getEmotionalMsg(msgs) { return msgs[Math.floor(Math.random() * msgs.length)]; }

function triggerFault(reason, against, gameCtx) {
  rules.lastFault = against;
  rules.lastFaultReason = reason;
  isCharging = false; chargeTime = 0;

  const pointWinner = against === 'player' ? 'opponent' : 'player';
  const wasServing = gameCtx.score.serving;
  scorePoint(gameCtx.score, rules, pointWinner);

  if (pointWinner === wasServing) {
    // Server scored — emotional message + outcome-specific SFX
    if (pointWinner === 'player') {
      faultDisplay = getEmotionalMsg(WINNER_MSGS);
      playSFX('scoreWin');
    } else {
      faultDisplay = getEmotionalMsg(LOSER_MSGS);
      playSFX('scoreLose');
    }
  } else {
    // Side out — neutral, but flag if YOU lost the serve
    faultDisplay = getEmotionalMsg(SIDE_OUT_MSGS);
    playSFX(pointWinner === 'player' ? 'scoreWin' : 'sideOut');
  }
  faultTimer = 1.5;

  if (rallyCount > 8) {
    lastShotFeedback = `${rallyCount} SHOTS! ${getEmotionalMsg(EPIC_RALLY)}`;
    feedbackTimer = 2.5;
  } else if (rallyCount > 5) {
    lastShotFeedback = `${rallyCount} SHOT RALLY!`;
    feedbackTimer = 2;
  }

  const gameWinner = checkGameOver(gameCtx.score);
  if (gameWinner) { pendingGameEnd = { winner: gameWinner }; faultTimer = 1.0; }
}

function resetForPoint(gameCtx) {
  resetForServe(rules, gameCtx.score.serving);
  resetAI(ai);
  ball = createBall(); resetBallTrail();
  servePrompt = true; servePositioned = false; serveDelayTimer = 0;
  rallyCount = 0; isCharging = false; chargeTime = 0;
  playerSwingTimer = 0; aiSwingTimer = 0;
  smashShakeTimer = 0; shotBuffer = 0; shotBufferKey = null;
  aimStickyTimer = 0;
  bounceFx = [];

  // Position both players at baseline on correct side for next serve
  const nextServeSide = getServeSide(gameCtx.score, gameCtx.score.serving);

  if (gameCtx.score.serving === 'player') {
    // Player serves — position on correct side
    gameCtx.player.x = nextServeSide === 'right' ? COURT.CENTER_X + 20 : COURT.CENTER_X - PLAYER.WIDTH - 20;
    gameCtx.player.y = COURT.Y + COURT.HEIGHT - PLAYER.HEIGHT - 2;
    // AI receives — opposite diagonal, at THEIR baseline
    gameCtx.opponent.x = nextServeSide === 'right' ? COURT.X + COURT.WIDTH * 0.2 : COURT.X + COURT.WIDTH * 0.6;
    gameCtx.opponent.y = COURT.Y + 2;
  } else {
    // AI serves — player at receive position on THEIR baseline
    gameCtx.opponent.x = nextServeSide === 'right' ? COURT.CENTER_X - PLAYER.WIDTH - 20 : COURT.CENTER_X + 20;
    gameCtx.opponent.y = COURT.Y + 2;
    // Player receives — opposite diagonal
    gameCtx.player.x = nextServeSide === 'right' ? COURT.X + COURT.WIDTH * 0.6 : COURT.X + COURT.WIDTH * 0.2;
    gameCtx.player.y = COURT.Y + COURT.HEIGHT - PLAYER.HEIGHT - 2;
  }
  gameCtx.player.vx = 0; gameCtx.player.vy = 0;
  gameCtx.opponent.vx = 0; gameCtx.opponent.vy = 0;

  showHint(gameCtx.score.serving === 'player' ? 'SPACE TO SERVE' : 'OPPONENT SERVING...');
}

function showHint(text) { hintText = text; hintTimer = 2.5; }
