// ============================================================
// BALL PHYSICS ENGINE
// ============================================================

import { COURT, BALL } from './constants.js';
import { clamp } from './utils.js';

export function createBall() {
  return {
    x: 0, y: 0,
    z: 0,             // virtual height
    vx: 0, vy: 0,
    vz: 0,
    active: false,
    bounced: false,    // has bounced on current side
    lastHitBy: null,   // 'player' or 'opponent'
    landed: false,     // ball has come to rest
    netCooldown: 0,    // seconds to ignore net collision after a hit
    prevY: 0,          // previous Y for swept net detection
    bouncedInCourt: false, // once true, ball can't be called out-of-bounds
  };
}

export function updateBall(ball, dt) {
  if (!ball.active || ball.landed) return;

  // Store previous Y for swept net detection
  ball.prevY = ball.y;

  // Apply velocity
  ball.x += ball.vx * dt;
  ball.y += ball.vy * dt;

  // Gravity on z
  ball.vz += BALL.GRAVITY * dt;
  ball.z += ball.vz * dt;

  // Net cooldown countdown
  if (ball.netCooldown > 0) ball.netCooldown -= dt;

  // Bounce off ground
  if (ball.z <= 0) {
    ball.z = 0;

    // Check if this bounce is inside the court
    const inCourtX = ball.x >= COURT.X && ball.x <= COURT.X + COURT.WIDTH;
    const inCourtY = ball.y >= COURT.Y && ball.y <= COURT.Y + COURT.HEIGHT;
    if (inCourtX && inCourtY) {
      ball.bouncedInCourt = true; // ball is in play — can't be called out anymore
    }

    if (Math.abs(ball.vz) < 15) {
      ball.vz = 0;
      ball.landed = true;
    } else {
      ball.vz = Math.abs(ball.vz) * BALL.BOUNCE_DAMPING;
      ball.bounced = true;
    }
    ball.vx *= 0.85;
    ball.vy *= 0.85;
  }

  return checkBallBoundaries(ball);
}

function checkBallBoundaries(ball) {
  const result = { netHit: false, outOfBounds: false, side: null };

  // Net collision — swept detection: did ball cross NET_Y while below net height?
  if (ball.z < BALL.NET_HEIGHT && ball.netCooldown <= 0) {
    const netY = COURT.NET_Y;
    const crossedNet = (ball.prevY < netY && ball.y >= netY) ||
                       (ball.prevY > netY && ball.y <= netY);
    if (crossedNet && ball.x >= COURT.X && ball.x <= COURT.X + COURT.WIDTH) {
      result.netHit = true;
      // Kill the ball at the net
      ball.y = netY;
      ball.vx *= 0.15;
      ball.vy = 0;
      ball.vz = 5;
      ball.netCooldown = 2.0;
    }
  }

  // Out of bounds — only if ball hasn't already bounced in court
  // (in pickleball, where the ball BOUNCES matters, not where it rolls to)
  if (!ball.bouncedInCourt) {
    if (ball.x < COURT.X - 5 || ball.x > COURT.X + COURT.WIDTH + 5) {
      result.outOfBounds = true;
    }
    if (ball.y < COURT.Y - 5 || ball.y > COURT.Y + COURT.HEIGHT + 5) {
      result.outOfBounds = true;
    }
  }

  result.side = ball.y < COURT.NET_Y ? 'opponent' : 'player';
  return result;
}

export function serveBall(ball, fromX, fromY, targetX, targetY, server = 'player') {
  ball.x = fromX;
  ball.y = fromY;
  ball.z = 8;
  ball.active = true;
  ball.bounced = false;
  ball.landed = false;
  ball.netCooldown = 0.3;
  ball.lastHitBy = server;

  // Use the same "land at target" physics as hitBall
  const dx = targetX - fromX;
  const dy = targetY - fromY;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const g = Math.abs(BALL.GRAVITY);

  // Serve flight time ~1.0s
  const flightTime = 1.0;
  let vz = 0.5 * g * flightTime;
  // Ensure net clearance
  const minVz = Math.sqrt(2 * g * (BALL.NET_HEIGHT + 10));
  vz = Math.max(vz, minVz);

  const actualFlightTime = 2 * vz / g;
  const hSpeed = dist / Math.max(actualFlightTime, 0.1);

  ball.vx = (dx / dist) * hSpeed;
  ball.vy = (dy / dist) * hSpeed;
  ball.vz = vz;
}

export function hitBall(ball, targetX, targetY, flightTime, arcMult, safeNet = true) {
  // Ball lands at the target. Speed determined by flight time.
  // flightTime: seconds in air (0.3=smash, 0.7=drive, 1.6=lob)
  // arcMult: height multiplier (1.0=flat, 2.5=lob)
  // safeNet: true=guarantee net clearance (soft shots), false=flat & risky (hard shots)

  const dx = targetX - ball.x;
  const dy = targetY - ball.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const g = Math.abs(BALL.GRAVITY);
  const ft = Math.max(flightTime, 0.2);

  // Base vz from desired flight time
  let vz = 0.5 * g * ft;

  // Net clearance — accounts for ball's current height
  const crossesNet = (ball.y < COURT.NET_Y && targetY > COURT.NET_Y) ||
                     (ball.y > COURT.NET_Y && targetY < COURT.NET_Y);
  if (crossesNet) {
    const heightNeeded = Math.max(BALL.NET_HEIGHT - ball.z, 0);
    if (safeNet) {
      // Soft shots: generous margin
      const minVz = Math.sqrt(2 * g * (heightNeeded + 8));
      vz = Math.max(vz, minVz);
    } else if (heightNeeded > 0) {
      // Hard shots: minimal boost only if ball is below net
      // If ball is already above net (smash), NO boost → full speed
      const minVz = Math.sqrt(2 * g * (heightNeeded + 1));
      vz = Math.max(vz, minVz);
    }
  }

  // Apply arc multiplier
  vz *= Math.max(arcMult || 1.0, 1.0);

  // Horizontal speed from actual flight time → ball lands at target
  const actualFT = 2 * vz / g;
  const hSpeed = dist / Math.max(actualFT, 0.1);

  ball.vx = (dx / dist) * hSpeed;
  ball.vy = (dy / dist) * hSpeed;
  ball.vz = vz;
  ball.z = Math.max(ball.z, 3);
  ball.bounced = false;
  ball.landed = false;
  ball.bouncedInCourt = false; // reset — new trajectory needs fresh OOB check
  ball.netCooldown = 0.2;
}

export function isInKitchen(x, y) {
  return x >= COURT.X && x <= COURT.X + COURT.WIDTH &&
         y >= COURT.NET_Y - COURT.KITCHEN_DEPTH && y <= COURT.NET_Y + COURT.KITCHEN_DEPTH;
}

export function getBallSide(ball) {
  return ball.y < COURT.NET_Y ? 'opponent' : 'player';
}

// Predict where ball will land (used by AI and landing marker)
export function predictLanding(ball) {
  let px = ball.x, py = ball.y, pz = ball.z, pvz = ball.vz;
  let pvx = ball.vx, pvy = ball.vy;
  const dt = 1 / 60;
  for (let i = 0; i < 180; i++) {
    pvz += BALL.GRAVITY * dt;
    pz += pvz * dt;
    px += pvx * dt;
    py += pvy * dt;
    if (pz <= 0) {
      // Apply ground friction on first bounce (matches updateBall)
      pvx *= 0.85;
      pvy *= 0.85;
      return { x: px, y: py };
    }
  }
  return { x: px, y: py };
}
