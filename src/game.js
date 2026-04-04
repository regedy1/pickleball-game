// ============================================================
// GAME — Composition root
// ============================================================

import { GameState, GameMode, SCORING } from './constants.js';
import { StateMachine } from './states/state-machine.js';
import { TitleScreen } from './states/title-screen.js';
import { ModeSelect } from './states/mode-select.js';
import { PlayerSetup } from './states/player-setup.js';
import { Gameplay } from './states/gameplay.js';
import { PointEnd } from './states/point-end.js';
import { GameEnd } from './states/game-end.js';
import { MatchEnd } from './states/match-end.js';
import { HowToPlay } from './states/how-to-play.js';
import { Settings } from './states/settings.js';
import { Paused } from './states/paused.js';

export function createGame() {
  const gameCtx = {
    player: {
      name: 'PLAYER',
      dupr: 3.5,
      avatar: 0,
      x: 0, y: 0,
      vx: 0, vy: 0,
      facing: 'up',
      frame: 0,
    },
    opponent: {
      name: 'AI',
      dupr: 3.5,
      avatar: 1,
      x: 0, y: 0,
      vx: 0, vy: 0,
      facing: 'down',
      frame: 0,
    },
    score: {
      player: 0,
      opponent: 0,
      games: [0, 0],
      serving: 'player',
    },
    gameMode: GameMode.MENS_SINGLES,
    gameWinner: null,
    matchWinner: null,
    stateMachine: null,
  };

  const states = {
    [GameState.TITLE_SCREEN]: TitleScreen,
    [GameState.MODE_SELECT]: ModeSelect,
    [GameState.PLAYER_SETUP]: PlayerSetup,
    [GameState.GAMEPLAY]: Gameplay,
    [GameState.POINT_END]: PointEnd,
    [GameState.GAME_END]: GameEnd,
    [GameState.MATCH_END]: MatchEnd,
    [GameState.HOW_TO_PLAY]: HowToPlay,
    [GameState.SETTINGS]: Settings,
    [GameState.PAUSED]: Paused,
  };

  gameCtx.stateMachine = new StateMachine(gameCtx, states, GameState.TITLE_SCREEN);
  return gameCtx;
}
