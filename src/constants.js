// ============================================================
// CONSTANTS & CONFIG
// ============================================================

// Canvas — 640x360 for rich surroundings (Pokemon-style environment)
export const INTERNAL_WIDTH = 640;
export const INTERNAL_HEIGHT = 360;
export const FPS = 60;
export const DT = 1 / FPS;

// Game States
export const GameState = {
  TITLE_SCREEN: 'TITLE_SCREEN',
  PLAYER_SETUP: 'PLAYER_SETUP',
  MODE_SELECT: 'MODE_SELECT',
  GAMEPLAY: 'GAMEPLAY',
  POINT_END: 'POINT_END',
  GAME_END: 'GAME_END',
  MATCH_END: 'MATCH_END',
  HOW_TO_PLAY: 'HOW_TO_PLAY',
  SETTINGS: 'SETTINGS',
  PAUSED: 'PAUSED',
};

// Game Modes
export const GameMode = {
  MENS_SINGLES: 'MENS_SINGLES',
  WOMENS_SINGLES: 'WOMENS_SINGLES',
  MENS_DOUBLES: 'MENS_DOUBLES',
  WOMENS_DOUBLES: 'WOMENS_DOUBLES',
  MIXED_DOUBLES: 'MIXED_DOUBLES',
};

export const GAME_MODE_LABELS = {
  [GameMode.MENS_SINGLES]: "MEN'S SINGLES",
  [GameMode.WOMENS_SINGLES]: "WOMEN'S SINGLES",
  [GameMode.MENS_DOUBLES]: "MEN'S DOUBLES",
  [GameMode.WOMENS_DOUBLES]: "WOMEN'S DOUBLES",
  [GameMode.MIXED_DOUBLES]: "MIXED DOUBLES",
};

// 16-color retro palette
export const PALETTE = {
  BLACK: '#0f0f23',
  DARK_BLUE: '#1a1a2e',
  DARK_GREEN: '#16213e',
  COURT_GREEN: '#2d6a4f',
  COURT_DARK: '#1b4332',
  KITCHEN_GREEN: '#40916c',
  LINE_WHITE: '#e8e8e8',
  WHITE: '#ffffff',
  YELLOW: '#f4d35e',
  ORANGE: '#ee6c4d',
  RED: '#e63946',
  LIGHT_BLUE: '#48cae4',
  GRAY: '#6c757d',
  LIGHT_GRAY: '#adb5bd',
  BALL_YELLOW: '#f9c74f',
  SHADOW: 'rgba(0,0,0,0.3)',
  SKIN_LIGHT: '#ffd5b0',
  SKIN_MEDIUM: '#d4a373',
  SHIRT_WHITE: '#f0f0f0',
  SHORTS_DARK: '#2d3436',
  SHOE_WHITE: '#e0e0e0',
  FENCE_BROWN: '#8b6914',
  FENCE_DARK: '#5c4a1e',
  BLEACHER_GRAY: '#9e9e9e',
  BLEACHER_DARK: '#757575',
  GRASS_LIGHT: '#52b788',
  GRASS_DARK: '#40916c',
  GRASS_ACCENT: '#74c69d',
  NET_GRAY: '#b0b0b0',
  NET_POST: '#6d6d6d',
  HEADBAND_RED: '#d62828',
  HEADBAND_BLUE: '#0077b6',
};

// Court dimensions (in game pixels, top-down view)
// Real court: 20ft wide x 44ft long, kitchen 7ft from net each side
export const COURT = {
  X: 170,
  Y: 60,
  WIDTH: 300,
  HEIGHT: 240,
  NET_Y: 180,       // center of court (Y + HEIGHT/2)
  KITCHEN_DEPTH: 38,
  LINE_WIDTH: 1,
  CENTER_X: 320,    // X + WIDTH / 2
};

// Player constants
export const PLAYER = {
  WIDTH: 24,
  HEIGHT: 36,
  SPEED: 110,
  ACCEL: 800,
  DECEL: 400,
  SPRINT_MULT: 1.5,
};

// Ball constants
export const BALL = {
  SIZE: 6,
  GRAVITY: -120,
  BOUNCE_DAMPING: 0.5,
  NET_HEIGHT: 8,
  SERVE_SPEED: 140,
  SERVE_VZ: 80,
  DRAG: 0.35,         // per-second horizontal drag during flight
  SPIN_CURVE: 30,     // how much spin affects vertical velocity (units/s²)
};

// Shot types
export const ShotType = {
  DRIVE: 'DRIVE',
  DINK: 'DINK',
  LOB: 'LOB',
  DROP: 'DROP',
  RESET: 'RESET',
};

// Shot configs: { speed, arc (vz), accuracy }
export const SHOT_CONFIG = {
  [ShotType.DRIVE]:  { speed: 100, arc: 70,  accuracy: 0.85 },
  [ShotType.DINK]:   { speed: 35,  arc: 55,  accuracy: 0.95 },
  [ShotType.LOB]:    { speed: 55,  arc: 160, accuracy: 0.75 },
  [ShotType.DROP]:   { speed: 40,  arc: 80,  accuracy: 0.80 },
  [ShotType.RESET]:  { speed: 50,  arc: 65,  accuracy: 0.90 },
};

// Key bindings
// SPACE: tap=soft shot (dink/drop/reset), hold=drive (power bar)
// S: tap=smash, hold=power smash
// D: lob
// Arrows: move + aim crosshair
export const KEYS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  SMASH: ' ',
  POWER_SMASH: 's',
  LOB: 'd',
  RESET: 'a',
  SERVE: ' ',
  CONFIRM: 'Enter',
  PAUSE: 'Escape',
  MUTE_MUSIC: 'm',
  MUTE_SFX: 'n',
};

// DUPR tiers
export const DUPR_TIERS = [
  { name: 'Beginner',     min: 1.0, max: 2.5, errorRate: 0.40, reactionDelay: 0.5 },
  { name: 'Novice',       min: 2.5, max: 3.5, errorRate: 0.30, reactionDelay: 0.4 },
  { name: 'Intermediate', min: 3.5, max: 4.5, errorRate: 0.20, reactionDelay: 0.3 },
  { name: 'Advanced',     min: 4.5, max: 5.5, errorRate: 0.12, reactionDelay: 0.2 },
  { name: 'Pro',          min: 5.5, max: 6.5, errorRate: 0.06, reactionDelay: 0.1 },
  { name: 'Elite',        min: 6.5, max: 8.0, errorRate: 0.03, reactionDelay: 0.05 },
];

// Scoring
export const SCORING = {
  POINTS_TO_WIN: 11,
  WIN_BY: 2,
  BEST_OF: 3,
};

// Avatars — M=male, F=female
export const AVATARS = [
  { name: 'Ace',      color: PALETTE.LIGHT_BLUE,  gender: 'male' },
  { name: 'Blaze',    color: PALETTE.ORANGE,       gender: 'male' },
  { name: 'Spike',    color: PALETTE.YELLOW,        gender: 'male' },
  { name: 'Dash',     color: PALETTE.RED,            gender: 'male' },
  { name: 'Zen',      color: PALETTE.COURT_GREEN,   gender: 'male' },
  { name: 'Luna',     color: '#e879a8',              gender: 'female' },
  { name: 'Nova',     color: '#9b59b6',              gender: 'female' },
  { name: 'Ivy',      color: '#2ecc71',              gender: 'female' },
  { name: 'Ruby',     color: '#e74c3c',              gender: 'female' },
  { name: 'Sky',      color: '#5dade2',              gender: 'female' },
];
