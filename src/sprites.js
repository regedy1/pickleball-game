import { PALETTE, AVATARS } from './constants.js';

export function drawPlayerSprite(ctx, x, y, avatarIndex, facing, animState, animFrame, gender = 'male') {
  const avatar = AVATARS[avatarIndex] || AVATARS[0];
  const color = avatar.color;
  const px = Math.floor(x);
  const py = Math.floor(y);

  const state = animState || 'idle';
  const frame = animFrame || 0;

  // --- Shadow ---
  ctx.fillStyle = PALETTE.SHADOW;
  ctx.fillRect(px + 4, py + 33, 16, 3);
  ctx.fillRect(px + 6, py + 35, 12, 1);

  // --- Legs (skin) — walk cycle for 'walk', static for everything else ---
  ctx.fillStyle = PALETTE.SKIN_LIGHT;
  if (state === 'walk') {
    const walk = Math.floor(frame) % 4;
    if (walk === 0 || walk === 2) {
      ctx.fillRect(px + 7, py + 27, 3, 5);
      ctx.fillRect(px + 14, py + 27, 3, 5);
    } else if (walk === 1) {
      ctx.fillRect(px + 6, py + 27, 3, 5);
      ctx.fillRect(px + 15, py + 26, 3, 5);
    } else {
      ctx.fillRect(px + 7, py + 26, 3, 5);
      ctx.fillRect(px + 14, py + 27, 3, 5);
    }
  } else {
    // Static stance for idle, forehand, backhand, serve
    ctx.fillRect(px + 7, py + 27, 3, 5);
    ctx.fillRect(px + 14, py + 27, 3, 5);
  }

  // --- Shoes ---
  ctx.fillStyle = PALETTE.SHOE_WHITE;
  if (state === 'walk') {
    const walk = Math.floor(frame) % 4;
    if (walk === 0 || walk === 2) {
      ctx.fillRect(px + 6, py + 32, 4, 2);
      ctx.fillRect(px + 14, py + 32, 4, 2);
    } else if (walk === 1) {
      ctx.fillRect(px + 5, py + 32, 4, 2);
      ctx.fillRect(px + 15, py + 31, 4, 2);
    } else {
      ctx.fillRect(px + 7, py + 31, 4, 2);
      ctx.fillRect(px + 13, py + 32, 4, 2);
    }
  } else {
    ctx.fillRect(px + 6, py + 32, 4, 2);
    ctx.fillRect(px + 14, py + 32, 4, 2);
  }

  // --- Shorts ---
  ctx.fillStyle = PALETTE.SHORTS_DARK;
  ctx.fillRect(px + 6, py + 22, 12, 5);
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(px + 6, py + 22, 1, 5);

  // --- Torso (avatar color) ---
  ctx.fillStyle = color;
  ctx.fillRect(px + 5, py + 11, 14, 11);
  // Collar
  ctx.fillStyle = PALETTE.SHIRT_WHITE;
  ctx.fillRect(px + 8, py + 11, 8, 2);
  // Side shading
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.fillRect(px + 5, py + 13, 2, 9);
  ctx.fillRect(px + 17, py + 13, 2, 9);
  // Number on back (when facing up)
  if (facing === 'up') {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(px + 10, py + 15, 4, 5);
  }

  // --- Head (rounded 10x9) ---
  ctx.fillStyle = PALETTE.SKIN_LIGHT;
  ctx.fillRect(px + 7, py + 3, 10, 8);
  ctx.fillRect(px + 8, py + 2, 8, 1);
  ctx.fillRect(px + 8, py + 11, 8, 1);
  // Ears
  if (facing !== 'up') {
    ctx.fillRect(px + 6, py + 5, 1, 3);
    ctx.fillRect(px + 17, py + 5, 1, 3);
  }

  // --- Hair ---
  const hairColor = gender === 'female' ? '#6b3a2a' : '#4a3728';
  ctx.fillStyle = hairColor;
  ctx.fillRect(px + 7, py, 10, 3);
  ctx.fillRect(px + 8, py - 1, 8, 1);
  ctx.fillRect(px + 7, py + 3, 1, 3);
  ctx.fillRect(px + 16, py + 3, 1, 3);
  if (gender === 'female') {
    ctx.fillRect(px + 10, py - 2, 4, 1);
    ctx.fillRect(px + 11, py - 3, 2, 1);
  }

  // --- Headband ---
  ctx.fillStyle = avatarIndex % 2 === 0 ? (PALETTE.HEADBAND_RED || '#d62828') : (PALETTE.HEADBAND_BLUE || '#0077b6');
  ctx.fillRect(px + 7, py + 3, 10, 2);

  // --- Face ---
  if (facing !== 'up') {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(px + 9, py + 6, 2, 2);
    ctx.fillRect(px + 13, py + 6, 2, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(px + 9, py + 6, 1, 1);
    ctx.fillRect(px + 13, py + 6, 1, 1);
    if (facing === 'down') {
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(px + 10, py + 9, 4, 1);
    }
  }

  // --- Arms + Paddle (state-dependent) ---
  switch (state) {
    case 'forehand':
      drawForehandArms(ctx, px, py, facing, frame);
      break;
    case 'backhand':
      drawBackhandArms(ctx, px, py, facing, frame);
      break;
    case 'serve':
      drawServeArms(ctx, px, py, facing, frame);
      break;
    case 'walk':
      drawIdleArms(ctx, px, py, facing);
      break;
    case 'idle':
    default:
      drawIdleArms(ctx, px, py, facing);
      break;
  }
}

// --- Idle / Walk arms: paddle held at right side, arm down ---
function drawIdleArms(ctx, px, py, facing) {
  ctx.fillStyle = PALETTE.SKIN_LIGHT;

  if (facing === 'left') {
    // Left arm (paddle side)
    ctx.fillRect(px + 2, py + 13, 3, 7);
    // Right arm
    ctx.fillRect(px + 19, py + 14, 3, 6);
    // Paddle
    drawPaddle(ctx, px - 3, py + 10, 6, 8);
    // Handle
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 1, py + 18, 2, 3);
  } else if (facing === 'right') {
    // Right arm (paddle side)
    ctx.fillRect(px + 19, py + 13, 3, 7);
    // Left arm
    ctx.fillRect(px + 2, py + 14, 3, 6);
    // Paddle
    drawPaddle(ctx, px + 21, py + 10, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 21, py + 18, 2, 3);
  } else if (facing === 'up') {
    // Left arm
    ctx.fillRect(px + 2, py + 14, 3, 6);
    // Right arm (paddle side)
    ctx.fillRect(px + 19, py + 12, 3, 6);
    // Paddle
    drawPaddle(ctx, px + 20, py + 7, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 22, py + 15, 2, 3);
  } else {
    // Facing down
    ctx.fillRect(px + 2, py + 14, 3, 6);
    ctx.fillRect(px + 19, py + 14, 3, 6);
    drawPaddle(ctx, px + 22, py + 12, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 22, py + 20, 2, 3);
  }
}

// --- Forehand: 3 frames (windUp=0, contact=1, followThrough=2) ---
function drawForehandArms(ctx, px, py, facing, frame) {
  ctx.fillStyle = PALETTE.SKIN_LIGHT;

  if (frame === 0) {
    // Wind up: right arm pulled back behind body, paddle behind at px+20, tilted
    // Left arm forward for balance
    ctx.fillRect(px + 1, py + 13, 4, 5);   // left arm forward
    ctx.fillRect(px + 19, py + 12, 4, 6);  // right arm pulled back
    drawPaddle(ctx, px + 20, py + 8, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 21, py + 16, 2, 3);
  } else if (frame === 1) {
    // Contact: right arm extended forward-right, paddle fully extended
    // Bigger paddle on contact (7x9)
    ctx.fillRect(px + 2, py + 14, 3, 5);   // left arm at side
    ctx.fillRect(px + 18, py + 11, 6, 4);  // right arm fully extended
    drawPaddle(ctx, px + 22, py + 10, 7, 9);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 24, py + 19, 2, 3);
    // Motion lines behind paddle
    drawMotionLines(ctx, px + 17, py + 13, 'left');
  } else {
    // Follow through: right arm swung across body to the left
    ctx.fillRect(px + 2, py + 15, 3, 5);   // left arm relaxed
    ctx.fillRect(px + 4, py + 13, 6, 4);   // right arm crossed over
    drawPaddle(ctx, px - 2, py + 12, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 2, py + 20, 2, 3);
  }
}

// --- Backhand: 3 frames, mirror of forehand on LEFT side ---
function drawBackhandArms(ctx, px, py, facing, frame) {
  ctx.fillStyle = PALETTE.SKIN_LIGHT;

  if (frame === 0) {
    // Wind up: left arm pulled back behind body, paddle behind at px-4
    // Right arm forward for balance
    ctx.fillRect(px + 19, py + 13, 4, 5);  // right arm forward
    ctx.fillRect(px + 1, py + 12, 4, 6);   // left arm pulled back
    drawPaddle(ctx, px - 4, py + 8, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px - 1, py + 16, 2, 3);
  } else if (frame === 1) {
    // Contact: left arm extended forward-left, paddle at px-6, py+10
    // Bigger paddle on contact (7x9)
    ctx.fillRect(px + 19, py + 14, 3, 5);  // right arm at side
    ctx.fillRect(px, py + 11, 6, 4);       // left arm fully extended
    drawPaddle(ctx, px - 6, py + 10, 7, 9);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px - 4, py + 19, 2, 3);
    // Motion lines behind paddle
    drawMotionLines(ctx, px + 3, py + 13, 'right');
  } else {
    // Follow through: left arm swung across to the right
    ctx.fillRect(px + 19, py + 15, 3, 5);  // right arm relaxed
    ctx.fillRect(px + 14, py + 13, 6, 4);  // left arm crossed over
    drawPaddle(ctx, px + 18, py + 12, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 20, py + 20, 2, 3);
  }
}

// --- Serve: 2 frames (toss=0, strike=1) ---
function drawServeArms(ctx, px, py, facing, frame) {
  ctx.fillStyle = PALETTE.SKIN_LIGHT;

  if (frame === 0) {
    // Toss: both arms up, left arm holds ball above head, right arm pulled back with paddle
    ctx.fillRect(px + 3, py + 6, 3, 8);    // left arm raised up
    ctx.fillRect(px + 18, py + 8, 3, 7);   // right arm pulled back with paddle
    // Ball above left hand (small yellow dot)
    ctx.fillStyle = PALETTE.BALL_YELLOW || '#f9c74f';
    ctx.fillRect(px + 3, py + 2, 3, 3);
    // Paddle held back
    drawPaddle(ctx, px + 19, py + 4, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 20, py + 12, 2, 3);
  } else {
    // Strike: right arm fully extended upward, paddle at top, ball leaving
    ctx.fillRect(px + 3, py + 12, 3, 6);   // left arm back down
    ctx.fillRect(px + 18, py + 2, 3, 10);  // right arm fully extended up
    // Paddle at top
    drawPaddle(ctx, px + 19, py - 4, 6, 8);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 20, py + 4, 2, 3);
  }
}

// --- Helper: draw paddle face + edge highlight ---
function drawPaddle(ctx, x, y, w, h) {
  ctx.fillStyle = '#44cc44';
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = '#66ee66';
  ctx.fillRect(x, y, w, 1);
}

// --- Helper: draw motion lines (2-3 trailing dots) ---
function drawMotionLines(ctx, x, y, direction) {
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  const dx = direction === 'left' ? -3 : 3;
  ctx.fillRect(x, y, 1, 1);
  ctx.fillRect(x + dx, y - 2, 1, 1);
  ctx.fillRect(x + dx * 2, y + 1, 1, 1);
}

let ballTrail = [];

export function drawBallSprite(ctx, x, y, z, vx = 0, vy = 0) {
  const px = Math.floor(x);
  const py = Math.floor(y);
  const height = Math.max(0, z);
  const ballRise = Math.floor(height * 0.3); // pixels the ball rises visually

  ballTrail.push({ x: px, y: py });
  if (ballTrail.length > 5) ballTrail.shift();

  // Trail (follows the elevated ball position)
  for (let i = 0; i < ballTrail.length - 1; i++) {
    const t = ballTrail[i];
    const alpha = (i + 1) / ballTrail.length * 0.25;
    const size = Math.max(1, Math.floor(3 * (i + 1) / ballTrail.length));
    ctx.fillStyle = `rgba(249, 199, 79, ${alpha})`;
    ctx.fillRect(t.x + 1, t.y + 1 - ballRise, size, size);
  }

  // === GROUND SHADOW (stays at ground, GROWS larger + fainter with height) ===
  const shadowGrow = 1.0 + height * 0.02; // shadow spreads with height
  const shadowAlpha = Math.max(0.06, 0.45 - height * 0.003); // fainter with height
  const shadowW = Math.max(4, Math.floor(8 * shadowGrow));
  const shadowH = Math.max(2, Math.floor(3 * shadowGrow));
  const shadowX = px + 3 - Math.floor(shadowW / 2);
  const shadowY = py + 4;

  // Elliptical shadow with soft edges
  ctx.fillStyle = `rgba(0,0,0,${shadowAlpha * 0.5})`;
  ctx.fillRect(shadowX - 1, shadowY, shadowW + 2, shadowH); // outer
  ctx.fillStyle = `rgba(0,0,0,${shadowAlpha})`;
  ctx.fillRect(shadowX, shadowY, shadowW, shadowH);          // inner
  if (shadowH > 1) {
    ctx.fillStyle = `rgba(0,0,0,${shadowAlpha * 0.7})`;
    ctx.fillRect(shadowX + 1, shadowY + 1, shadowW - 2, shadowH - 1);
  }

  // === Vertical line connecting ball to shadow (height indicator) ===
  if (ballRise > 4) {
    ctx.fillStyle = `rgba(0,0,0,${Math.min(0.15, shadowAlpha * 0.3)})`;
    ctx.fillRect(px + 3, py + 3 - ballRise, 1, ballRise);
  }

  // === BALL (elevated by height) ===
  const ballY = py - ballRise;
  ctx.fillStyle = PALETTE.BALL_YELLOW;
  ctx.fillRect(px + 1, ballY, 4, 6);
  ctx.fillRect(px, ballY + 1, 6, 4);

  // Seam
  ctx.fillStyle = '#e0a030';
  ctx.fillRect(px + 3, ballY + 3, 1, 2);
  ctx.fillRect(px + 2, ballY + 4, 1, 1);

  // Highlight
  ctx.fillStyle = '#fff';
  ctx.fillRect(px + 1, ballY + 1, 2, 1);
  ctx.fillRect(px + 1, ballY + 2, 1, 1);

  // Glow at high altitude (lobs)
  if (height > 30) {
    ctx.fillStyle = 'rgba(255,255,200,0.15)';
    ctx.fillRect(px - 1, ballY - 1, 8, 8);
  }
}

export function resetBallTrail() {
  ballTrail = [];
}
