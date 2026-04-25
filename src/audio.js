// ============================================================
// AUDIO ENGINE — Web Audio API, procedural chiptune
// ============================================================

let audioCtx = null;
let masterGain = null;
let musicGain = null;
let sfxGain = null;
let musicEnabled = true;
let sfxEnabled = true;
let currentBGM = null;
let initialized = false;

function ensureInit() {
  if (initialized) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.connect(audioCtx.destination);

  musicGain = audioCtx.createGain();
  musicGain.gain.value = 0.3;
  musicGain.connect(masterGain);

  sfxGain = audioCtx.createGain();
  sfxGain.gain.value = 0.5;
  sfxGain.connect(masterGain);

  initialized = true;
}

export function initAudio() {
  // Called on first user interaction
  ensureInit();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playTone(freq, duration, type = 'square', gainNode = sfxGain, volume = 0.3) {
  if (!initialized) return;
  const osc = audioCtx.createOscillator();
  const env = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  env.gain.value = volume;
  env.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(env);
  env.connect(gainNode);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// SFX
const SFX = {
  hit: () => playTone(440, 0.08, 'square'),
  smash: () => {
    // Sharp, aggressive — clearly different from normal hit
    playTone(220, 0.05, 'square', sfxGain, 0.45);
    setTimeout(() => playTone(880, 0.08, 'sawtooth', sfxGain, 0.4), 30);
  },
  bounce: () => playTone(330, 0.06, 'triangle'),
  fault: () => {
    playTone(150, 0.3, 'square', sfxGain, 0.4);
    setTimeout(() => playTone(100, 0.3, 'square', sfxGain, 0.3), 150);
  },
  // YOU scored — bright, ascending, triumphant
  scoreWin: () => {
    playTone(659, 0.08, 'square', sfxGain, 0.4);
    setTimeout(() => playTone(880, 0.08, 'square', sfxGain, 0.4), 80);
    setTimeout(() => playTone(1175, 0.18, 'square', sfxGain, 0.4), 160);
  },
  // OPPONENT scored — dark, descending, sad
  scoreLose: () => {
    playTone(440, 0.12, 'sawtooth', sfxGain, 0.35);
    setTimeout(() => playTone(330, 0.12, 'sawtooth', sfxGain, 0.35), 120);
    setTimeout(() => playTone(220, 0.2, 'sawtooth', sfxGain, 0.3), 240);
  },
  // Side out (server changes) — neutral two-tone
  sideOut: () => {
    playTone(523, 0.1, 'triangle', sfxGain, 0.35);
    setTimeout(() => playTone(392, 0.15, 'triangle', sfxGain, 0.35), 110);
  },
  // Legacy alias
  point: () => {
    playTone(523, 0.1, 'square');
    setTimeout(() => playTone(659, 0.1, 'square'), 100);
    setTimeout(() => playTone(784, 0.15, 'square'), 200);
  },
  menuMove: () => playTone(600, 0.04, 'square', sfxGain, 0.15),
  menuSelect: () => playTone(800, 0.08, 'square', sfxGain, 0.2),
  serve: () => playTone(350, 0.12, 'triangle'),
  win: () => {
    [523, 659, 784, 1047].forEach((f, i) => {
      setTimeout(() => playTone(f, 0.2, 'square', sfxGain, 0.3), i * 120);
    });
  },
};

export function playSFX(name) {
  if (!sfxEnabled || !SFX[name]) return;
  ensureInit();
  SFX[name]();
}

// BGM — simple looping arpeggios
let bgmInterval = null;

const BGM_PATTERNS = {
  title: {
    notes: [262, 330, 392, 523, 392, 330],
    tempo: 200,
    type: 'triangle',
    volume: 0.15,
  },
  gameplay: {
    notes: [330, 392, 440, 523, 440, 392, 349, 330],
    tempo: 140,
    type: 'square',
    volume: 0.1,
  },
  victory: {
    notes: [523, 659, 784, 1047, 784, 659],
    tempo: 180,
    type: 'triangle',
    volume: 0.2,
  },
};

export function playBGM(track) {
  if (!musicEnabled) return;
  ensureInit();
  stopBGM();
  const pattern = BGM_PATTERNS[track];
  if (!pattern) return;
  let idx = 0;
  currentBGM = track;
  bgmInterval = setInterval(() => {
    if (!musicEnabled) return;
    playTone(pattern.notes[idx], pattern.tempo / 1000 * 0.8, pattern.type, musicGain, pattern.volume);
    idx = (idx + 1) % pattern.notes.length;
  }, pattern.tempo);
}

export function stopBGM() {
  if (bgmInterval) clearInterval(bgmInterval);
  bgmInterval = null;
  currentBGM = null;
}

export function toggleMusic() {
  musicEnabled = !musicEnabled;
  if (!musicEnabled) stopBGM();
  return musicEnabled;
}

export function toggleSFX() {
  sfxEnabled = !sfxEnabled;
  return sfxEnabled;
}

export function isMusicEnabled() { return musicEnabled; }
export function isSFXEnabled() { return sfxEnabled; }
