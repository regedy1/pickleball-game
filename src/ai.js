// ============================================================
// AI OPPONENT — Retro Tennis-style AI
// Moves to predicted landing spot. Can enter kitchen after bounce.
// ============================================================

import { COURT, BALL, DUPR_TIERS, ShotType, SHOT_CONFIG, PLAYER } from './constants.js';
import { clamp, distance, randRange } from './utils.js';
import { predictLanding } from './physics.js';

export function createAI(dupr) {
  const tier = DUPR_TIERS.find(t => dupr >= t.min && dupr <= t.max) || DUPR_TIERS[0];
  return {
    tier,
    reactionTimer: 0,
  };
}

export function updateAI(ai, opponent, ball, rules, dt) {
  const tier = ai.tier;

  // Default ready position — behind kitchen line
  let targetX = COURT.CENTER_X;
  let targetY = COURT.NET_Y - COURT.KITCHEN_DEPTH - 20;

  if (ball.active && !ball.landed) {
    // Reset reaction timer when ball changes to player's hit
    if (ball.lastHitBy === 'player' && ai._lastSeenHitBy !== 'player') {
      ai.reactionTimer = 0;
    }
    ai._lastSeenHitBy = ball.lastHitBy;

    ai.reactionTimer += dt;
    const reacted = ai.reactionTimer >= tier.reactionDelay;

    // Always predict landing to start moving early
    const landing = predictLanding(ball);
    const ballComingToAI = ball.vy < 0 || landing.y < COURT.NET_Y;

    if (ballComingToAI && (reacted || ball.lastHitBy === 'opponent')) {
      // Ball heading toward AI side — move to intercept
      targetX = clamp(landing.x, COURT.X + 15, COURT.X + COURT.WIDTH - 15);

      // During two-bounce phase: stay BEHIND the landing spot to let ball bounce
      const mustWaitForBounce = (rules.rallyCount + 1) <= 2 &&
        !rules.doubleBounceCleared.opponent && rules.bounceCount.opponent === 0;

      if (mustWaitForBounce) {
        // Position behind the predicted landing spot (further from net)
        targetY = clamp(landing.y - 20, COURT.Y + 5, COURT.NET_Y - COURT.KITCHEN_DEPTH - 10);
      } else if (ball.bouncedInCourt) {
        // Ball already bounced — can approach freely
        targetY = clamp(landing.y, COURT.Y + 5, COURT.NET_Y - 10);
      } else {
        // Stay behind kitchen line
        targetY = clamp(landing.y, COURT.Y + 5, COURT.NET_Y - COURT.KITCHEN_DEPTH - 5);
      }
    } else if (!ballComingToAI) {
      // Ball going to player's side — return to ready position
      targetX = COURT.CENTER_X;
      targetY = COURT.NET_Y - COURT.KITCHEN_DEPTH - 15;
    }
  }

  // Move toward target
  const speed = PLAYER.SPEED * (0.8 + tier.min * 0.04);
  const dx = targetX - opponent.x - PLAYER.WIDTH / 2;
  const dy = targetY - opponent.y - PLAYER.HEIGHT / 2;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist > 3) {
    opponent.vx = (dx / dist) * speed;
    opponent.vy = (dy / dist) * speed;
  } else {
    opponent.vx = 0;
    opponent.vy = 0;
  }

  // Facing
  if (Math.abs(opponent.vx) > Math.abs(opponent.vy)) {
    opponent.facing = opponent.vx < 0 ? 'left' : 'right';
  } else {
    opponent.facing = opponent.vy > 0 ? 'down' : 'up';
  }

  // Animation
  if (Math.abs(opponent.vx) > 5 || Math.abs(opponent.vy) > 5) {
    opponent.animTime = (opponent.animTime || 0) + dt;
    opponent.animState = 'walk';
    opponent.animFrame = Math.floor(opponent.animTime / 0.15) % 4;
  } else {
    opponent.animState = 'idle';
    opponent.animFrame = 0;
    opponent.animTime = 0;
  }

  // Try to hit the ball — generous hit range
  if (ball.active && !ball.landed && ball.lastHitBy !== 'opponent') {
    const ballDist = distance(
      opponent.x + PLAYER.WIDTH / 2,
      opponent.y + PLAYER.HEIGHT / 2,
      ball.x, ball.y
    );

    if (ballDist < 35 && ball.z < 35) {
      return tryHitBall(ai, opponent, ball, tier, rules);
    }
  }

  return null;
}

function tryHitBall(ai, opponent, ball, tier, rules) {
  // TWO-BOUNCE RULE: AI must let ball bounce during the first two rally hits
  // rallyCount is incremented INSIDE onBallHit, so check current count
  // Rally hit 0→1 = receiver's first return (must bounce)
  // Rally hit 1→2 = server's first return (must bounce)
  const nextRallyCount = rules.rallyCount + 1;
  if (nextRallyCount <= 2 && !rules.doubleBounceCleared.opponent) {
    if (rules.bounceCount.opponent === 0) {
      return null; // Ball hasn't bounced on AI's side yet — WAIT
    }
    // Ball just bounced — let it rise a bit so the bounce is visually clear
    // (otherwise AI hits on the same frame as the bounce and looks like it skipped it)
    if (ball.z < 6) return null;
  }
  // Universal anti-snap: never hit on the exact bounce frame
  if (ball.z < 2 && ball.vz > 0) return null;

  // Very low whiff rate
  const whiffChance = tier.errorRate * 0.08;
  if (Math.random() < whiffChance) return null;

  // Kitchen volley check — can't volley while in kitchen
  const aiCenterY = opponent.y + PLAYER.HEIGHT / 2;
  const inKitchen = aiCenterY >= COURT.NET_Y - COURT.KITCHEN_DEPTH && aiCenterY <= COURT.NET_Y;
  if (inKitchen && rules.bounceCount.opponent === 0) {
    return null; // In kitchen + ball hasn't bounced = would be a volley fault, so wait
  }

  // Target: player's side, well within bounds
  const margin = 35;
  const targetX = clamp(
    COURT.CENTER_X + randRange(-70, 70),
    COURT.X + margin,
    COURT.X + COURT.WIDTH - margin
  );

  let targetY, flightTime, arcMult;
  const r = Math.random();

  if (tier.min >= 5.0) {
    // Pro: strategic variety
    if (r < 0.35) {
      targetY = COURT.NET_Y + COURT.KITCHEN_DEPTH + randRange(30, 80);
      flightTime = 0.8; arcMult = 1.0; // fast drive
    } else if (r < 0.65) {
      targetY = COURT.NET_Y + COURT.KITCHEN_DEPTH + randRange(10, 30);
      flightTime = 0.9; arcMult = 1.0; // dink
    } else {
      targetY = COURT.Y + COURT.HEIGHT - randRange(20, 50);
      flightTime = 1.6; arcMult = 2.0; // lob
    }
  } else if (tier.min >= 3.0) {
    targetY = COURT.NET_Y + COURT.KITCHEN_DEPTH + randRange(25, 65);
    flightTime = 0.9 + Math.random() * 0.3;
    arcMult = 1.0 + Math.random() * 0.3;
  } else {
    // Beginner: consistent, safe shots to mid-court
    targetY = COURT.NET_Y + COURT.KITCHEN_DEPTH + randRange(30, 60);
    flightTime = 1.0 + Math.random() * 0.2;
    arcMult = 1.0 + Math.random() * 0.2;
  }

  return { hit: true, targetX, targetY, flightTime, arcMult };
}

export function aiServe(opponent, ball, serveSide) {
  opponent.y = COURT.Y + 2;
  const serveX = opponent.x + PLAYER.WIDTH / 2;
  const serveY = opponent.y + PLAYER.HEIGHT;

  // Cross-court serve: AI's right side targets player's right (screen right)
  // AI's right = screen left, so cross-court = screen right
  // serveSide is from AI's perspective based on AI's score
  const targetX = serveSide === 'right'
    ? COURT.X + COURT.WIDTH * 0.55 + Math.random() * (COURT.WIDTH * 0.2)   // cross to screen right
    : COURT.X + COURT.WIDTH * 0.25 + Math.random() * (COURT.WIDTH * 0.2);  // cross to screen left
  const targetY = COURT.NET_Y + COURT.KITCHEN_DEPTH + randRange(20, 50);

  return { serveX, serveY, targetX, targetY };
}

export function resetAI(ai) {
  ai.reactionTimer = 0;
}
