// ============================================================
// PICKLEBALL RULES ENGINE
// ============================================================

import { SCORING, COURT } from './constants.js';

export const ServeState = {
  WAITING: 'WAITING',
  SERVED: 'SERVED',
  IN_PLAY: 'IN_PLAY',
};

export const FaultReason = {
  NET: 'NET FAULT',
  OUT: 'OUT OF BOUNDS',
  KITCHEN_SERVE: 'SERVE IN KITCHEN',
  KITCHEN_VOLLEY: 'KITCHEN VOLLEY',
  DOUBLE_BOUNCE: 'DOUBLE BOUNCE VIOLATION',
  NOT_RETURNED: 'NOT RETURNED',
};

export function createRulesState() {
  return {
    serveState: ServeState.WAITING,
    serving: 'player',         // who is serving
    bounceCount: { player: 0, opponent: 0 },
    doubleBounceCleared: { player: false, opponent: false },
    rallyCount: 0,
    lastFault: null,
    lastFaultReason: null,
  };
}

export function resetForServe(rules, serving) {
  rules.serveState = ServeState.WAITING;
  rules.bounceCount = { player: 0, opponent: 0 };
  rules.doubleBounceCleared = { player: false, opponent: false };
  rules.rallyCount = 0;
  rules.lastFault = null;
  rules.lastFaultReason = null;
  if (serving !== undefined) {
    rules.serving = serving;
  }
}

export function onServe(rules) {
  rules.serveState = ServeState.SERVED;
}

export function onBallBounce(rules, side) {
  rules.bounceCount[side]++;

  // After serve: ball must bounce on receiver's side (first bounce)
  // Then receiver hits it back, and it must bounce on server's side (second bounce)
  // After both sides have had one bounce, the double-bounce rule is cleared
  if (rules.serveState === ServeState.SERVED) {
    rules.serveState = ServeState.IN_PLAY;
  }
}

export function onBallHit(rules, hitter) {
  rules.rallyCount++;

  // Two-bounce rule (pickleball):
  // Rally hit 1 = receiver returning serve → ball MUST have bounced on their side
  // Rally hit 2 = server returning the return → ball MUST have bounced on their side
  // After that, volleys are allowed
  if (rules.rallyCount <= 2 && !rules.doubleBounceCleared[hitter]) {
    if (rules.bounceCount[hitter] === 0) {
      return { fault: true, reason: FaultReason.DOUBLE_BOUNCE, against: hitter };
    }
  }

  // Once you've let it bounce, mark rule as cleared for this player
  if (rules.bounceCount[hitter] > 0) {
    rules.doubleBounceCleared[hitter] = true;
  }

  // Reset bounce count for the other side (they need a fresh bounce)
  const otherSide = hitter === 'player' ? 'opponent' : 'player';
  rules.bounceCount[otherSide] = 0;

  return { fault: false };
}

export function checkKitchenVolley(ball, hitter, hitterY) {
  // Disabled for now — kitchen volley detection was too aggressive
  // TODO: re-enable with proper bounce tracking
  return { fault: false };
}

export function checkServeLanding(ball, serveSide, server = 'player') {
  // Serve must land in the diagonal service box, past the kitchen
  const inCourt = ball.x >= COURT.X && ball.x <= COURT.X + COURT.WIDTH;

  if (server === 'player') {
    // Player serves to opponent side (top half): y >= COURT.Y and y < NET_Y - KITCHEN_DEPTH
    const pastKitchen = ball.y < COURT.NET_Y - COURT.KITCHEN_DEPTH;
    const inBounds = ball.y >= COURT.Y;

    if (!inCourt || !inBounds) {
      return { fault: true, reason: FaultReason.OUT };
    }
    if (!pastKitchen) {
      return { fault: true, reason: FaultReason.KITCHEN_SERVE };
    }

    // Check correct service box (left/right) — opponent's perspective
    const centerX = COURT.CENTER_X;
    if (serveSide === 'right' && ball.x > centerX) {
      return { fault: true, reason: FaultReason.OUT };
    }
    if (serveSide === 'left' && ball.x < centerX) {
      return { fault: true, reason: FaultReason.OUT };
    }
  } else {
    // Opponent serves to player side (bottom half): y > NET_Y + KITCHEN_DEPTH and y <= COURT.Y + COURT.HEIGHT
    const pastKitchen = ball.y > COURT.NET_Y + COURT.KITCHEN_DEPTH;
    const inBounds = ball.y <= COURT.Y + COURT.HEIGHT;

    if (!inCourt || !inBounds) {
      return { fault: true, reason: FaultReason.OUT };
    }
    if (!pastKitchen) {
      return { fault: true, reason: FaultReason.KITCHEN_SERVE };
    }

    // Check correct service box (left/right) — player's perspective
    const centerX = COURT.CENTER_X;
    if (serveSide === 'right' && ball.x < centerX) {
      return { fault: true, reason: FaultReason.OUT };
    }
    if (serveSide === 'left' && ball.x > centerX) {
      return { fault: true, reason: FaultReason.OUT };
    }
  }

  return { fault: false };
}

export function getServeSide(score, server) {
  const serverScore = score[server];
  return serverScore % 2 === 0 ? 'right' : 'left';
}

export function scorePoint(score, rules, pointWinner) {
  // Side-out scoring (real pickleball):
  // - Only the SERVER can score
  // - If server wins rally → server gets point + keeps serving
  // - If receiver wins rally → no point, serve switches (side-out)
  if (pointWinner === score.serving) {
    // Server won → score a point, keep serving
    score[pointWinner]++;
  } else {
    // Receiver won → no point scored, serve switches
    score.serving = pointWinner;
  }
}

export function checkGameOver(score) {
  const p = score.player;
  const o = score.opponent;
  const target = SCORING.POINTS_TO_WIN;
  const winBy = SCORING.WIN_BY;

  if (p >= target && p - o >= winBy) return 'player';
  if (o >= target && o - p >= winBy) return 'opponent';
  return null;
}

export function checkMatchOver(score) {
  const needed = Math.ceil(SCORING.BEST_OF / 2);
  if (score.games[0] >= needed) return 'player';
  if (score.games[1] >= needed) return 'opponent';
  return null;
}
