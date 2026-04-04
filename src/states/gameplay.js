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

// Single-button charge state
let chargeTime = 0;
let isCharging = false;
const MAX_CHARGE = 0.5; // seconds to reach max power
const SOFT_THRESHOLD = 0.15; // hold < this = tap (soft shot)

// Aim crosshair — follows movement direction
let aimTarget = { x: 0, y: 0 };

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

    // --- Movement (always active) ---
    updatePlayerMovement(player, dt);

    // --- Update aim crosshair based on movement direction ---
    updateAimTarget(player);

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

        // Hold SPACE for power serve, tap for quick serve
        if (isDown(KEYS.SMASH)) {
          if (!isCharging) { isCharging = true; chargeTime = 0; }
          chargeTime = Math.min(chargeTime + dt, MAX_CHARGE);
          servePrompt = false;
        }
        if (isCharging && isReleased(KEYS.SMASH)) {
          const power = 1.0 + (chargeTime / MAX_CHARGE) * 0.5; // 1.0 - 1.5x
          performPlayerServe(player, power);
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
        onBallBounce(rules, getBallSide(ball));
        ball.bounced = false;
        playSFX('bounce');
      }
      if (rules.serveState === ServeState.IN_PLAY && ball.bounced) {
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

      // --- Player shot (single SPACE button) ---
      const ballOnPlayerSide = getBallSide(ball) === 'player';
      if (ball.lastHitBy !== 'player' && ballOnPlayerSide) {
        // Track charge
        if (isDown(KEYS.SMASH)) {
          if (!isCharging) { isCharging = true; chargeTime = 0; }
          chargeTime = Math.min(chargeTime + dt, MAX_CHARGE);
        }
        if (isCharging && isReleased(KEYS.SMASH)) {
          executePlayerShot(player, gameCtx);
          isCharging = false; chargeTime = 0;
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
    drawCourt(ctx);

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

    // Serve prompt
    if (servePrompt && rules.serveState === ServeState.WAITING && gameCtx.score.serving === 'player') {
      drawTextCentered(ctx, 'SPACE TO SERVE (HOLD=POWER)', INTERNAL_WIDTH / 2, INTERNAL_HEIGHT - 20, PALETTE.YELLOW, 1);
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

    drawText(ctx, 'SPACE: TAP=SOFT HOLD=HARD', 4, INTERNAL_HEIGHT - 10, PALETTE.GRAY, 1);
  },
};

// ============================================================
// AIM CROSSHAIR — follows movement direction
// ============================================================

function updateAimTarget(player) {
  const pcx = player.x + PLAYER.WIDTH / 2;

  // Base: auto cross-court
  let tx = pcx < COURT.CENTER_X
    ? COURT.CENTER_X + 40  // aim right
    : COURT.CENTER_X - 40; // aim left

  let ty = COURT.Y + COURT.HEIGHT * 0.25; // default mid-depth on opponent side

  // Arrow keys shift the aim target
  if (isDown(KEYS.LEFT))  tx = COURT.X + COURT.WIDTH * 0.15;
  if (isDown(KEYS.RIGHT)) tx = COURT.X + COURT.WIDTH * 0.85;
  if (isDown(KEYS.UP))    ty = COURT.Y + 15;                    // deep
  if (isDown(KEYS.DOWN))  ty = COURT.NET_Y - COURT.KITCHEN_DEPTH + 10; // short/kitchen

  // Diagonals
  if (isDown(KEYS.LEFT) && isDown(KEYS.UP))    { tx = COURT.X + COURT.WIDTH * 0.15; ty = COURT.Y + 15; }
  if (isDown(KEYS.RIGHT) && isDown(KEYS.UP))   { tx = COURT.X + COURT.WIDTH * 0.85; ty = COURT.Y + 15; }
  if (isDown(KEYS.LEFT) && isDown(KEYS.DOWN))  { tx = COURT.X + COURT.WIDTH * 0.15; ty = COURT.NET_Y - COURT.KITCHEN_DEPTH + 10; }
  if (isDown(KEYS.RIGHT) && isDown(KEYS.DOWN)) { tx = COURT.X + COURT.WIDTH * 0.85; ty = COURT.NET_Y - COURT.KITCHEN_DEPTH + 10; }

  // Smooth interpolation toward target
  aimTarget.x += (tx - aimTarget.x) * 0.15;
  aimTarget.y += (ty - aimTarget.y) * 0.15;

  // Clamp to opponent's side
  aimTarget.x = clamp(aimTarget.x, COURT.X + 10, COURT.X + COURT.WIDTH - 10);
  aimTarget.y = clamp(aimTarget.y, COURT.Y + 5, COURT.NET_Y - 5);
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
  ctx.fillStyle = 'rgba(255,100,100,0.35)';
  ctx.fillRect(mx - 3, my, 7, 1);
  ctx.fillRect(mx, my - 3, 1, 7);
  ctx.fillRect(mx - 2, my - 1, 5, 3);
  ctx.fillRect(mx - 1, my - 2, 3, 5);
}

// ============================================================
// SHOT EXECUTION — Single button, tap vs hold
// ============================================================

function getShotPreview(player) {
  const pcy = player.y + PLAYER.HEIGHT / 2;
  const inKitchen = pcy <= COURT.NET_Y + COURT.KITCHEN_DEPTH + 15;
  const atBaseline = pcy > COURT.NET_Y + COURT.KITCHEN_DEPTH + 40;
  const isHold = chargeTime > SOFT_THRESHOLD;
  const isLob = isHold && isDown(KEYS.DOWN);

  if (isLob) return 'LOB';
  if (!isHold) {
    if (inKitchen) return 'DINK';
    if (atBaseline) return 'DROP';
    return 'RESET';
  } else {
    const power = chargeTime / MAX_CHARGE;
    if (inKitchen && power > 0.5) return power > 0.7 ? 'SMASH!' : 'SPEED-UP';
    return power > 0.7 ? 'POWER DRIVE!' : 'DRIVE';
  }
}

function executePlayerShot(player, gameCtx) {
  const pcx = player.x + PLAYER.WIDTH / 2;
  const pcy = player.y + PLAYER.HEIGHT / 2;
  const dist = Math.sqrt(Math.pow(pcx - ball.x, 2) + Math.pow(pcy - ball.y, 2));
  if (dist >= 42) return;

  // Double-bounce check
  const nextRally = rules.rallyCount + 1;
  if (nextRally <= 2 && !rules.doubleBounceCleared.player && rules.bounceCount.player === 0) {
    showHint('WAIT FOR BOUNCE!');
    return;
  }

  const hitResult = onBallHit(rules, 'player');
  if (hitResult.fault) { triggerFault(hitResult.reason, 'player', gameCtx); return; }

  // Determine shot type
  const inKitchen = pcy <= COURT.NET_Y + COURT.KITCHEN_DEPTH + 15;
  const atBaseline = pcy > COURT.NET_Y + COURT.KITCHEN_DEPTH + 40;
  const isTap = chargeTime <= SOFT_THRESHOLD;
  const isLob = !isTap && isDown(KEYS.DOWN);
  const power = Math.min(chargeTime / MAX_CHARGE, 1.0);

  let flightTime, arcMult, label;

  if (isLob) {
    // LOB — hold + DOWN
    flightTime = 1.6; arcMult = 2.5; label = 'LOB';
  } else if (isTap) {
    // TAP = soft shot by position
    if (inKitchen) {
      flightTime = 0.7; arcMult = 1.0; label = 'DINK';
    } else if (atBaseline) {
      flightTime = 0.8; arcMult = 1.3; label = 'DROP';
    } else {
      flightTime = 0.75; arcMult = 1.0; label = 'RESET';
    }
  } else {
    // HOLD = DRIVE from any position. Power scales with hold time.
    // Near net + high power = SMASH (put-away)
    flightTime = 0.8; arcMult = 1.0; label = 'DRIVE';
    if (inKitchen && power > 0.5) {
      label = power > 0.7 ? 'SMASH!' : 'SPEED-UP';
    } else if (power > 0.7) {
      label = 'POWER DRIVE!';
    }
    // Power reduces flight time (faster shot)
    flightTime /= (1.0 + power * 0.6);
  }

  // Forehand / Backhand
  if (ball.x > pcx) {
    flightTime *= 0.95;
    player.swingSide = 'forehand';
  } else {
    flightTime *= 1.05;
    player.swingSide = 'backhand';
  }

  // Target: use crosshair X for horizontal aim, but Y depends on shot type
  let targetX = aimTarget.x + (Math.random() - 0.5) * 15;
  let targetY;

  if (isLob) {
    // Lob → deep baseline
    targetY = COURT.Y + 10 + Math.random() * 20;
  } else if (isTap) {
    // Soft shots (dink/drop/reset) → always target kitchen area
    targetY = COURT.NET_Y - COURT.KITCHEN_DEPTH + 5 + Math.random() * (COURT.KITCHEN_DEPTH - 5);
  } else {
    // Hard shots (drive/smash/volley) → use crosshair Y (deep by default)
    targetY = aimTarget.y + (Math.random() - 0.5) * 15;
  }

  targetX = clamp(targetX, COURT.X + 10, COURT.X + COURT.WIDTH - 10);
  targetY = clamp(targetY, COURT.Y + 5, COURT.NET_Y - 5);

  showFeedback(label);
  hitBall(ball, targetX, targetY, flightTime, arcMult);
  ball.lastHitBy = 'player';
  rallyCount++;

  player.animState = player.swingSide || 'forehand';
  player.animFrame = 0;
  playerSwingTimer = 0.25;
  playSFX('hit');
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

  // Show LOB indicator if holding DOWN
  if (isDown(KEYS.DOWN)) {
    drawText(ctx, 'LOB', barX + barW + 3, py - 1, PALETTE.LIGHT_BLUE, 1);
  }
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
  const targetX = serveSide === 'right'
    ? COURT.X + COURT.WIDTH * 0.1 + Math.random() * (COURT.WIDTH * 0.3)
    : COURT.X + COURT.WIDTH * 0.6 + Math.random() * (COURT.WIDTH * 0.3);
  const targetY = COURT.Y + 20 + Math.random() * (COURT.NET_Y - COURT.KITCHEN_DEPTH - COURT.Y - 30);

  serveBall(ball, serveX, serveY, targetX, targetY);
  if (power > 1.3) showFeedback('POWER SERVE!');
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
    // Server scored — emotional message
    if (pointWinner === 'player') {
      faultDisplay = getEmotionalMsg(WINNER_MSGS);
    } else {
      faultDisplay = getEmotionalMsg(LOSER_MSGS);
    }
    playSFX('point');
  } else {
    // Side out
    faultDisplay = getEmotionalMsg(SIDE_OUT_MSGS);
    playSFX('fault');
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
