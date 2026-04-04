# Plan: Retro Pixel Pickleball Game — "PICKLE SMASH"

## Context

Retro arcade-style top-down pixel art pickleball game. Single-player vs AI, pure HTML5 Canvas, no dependencies, single `pickleball.html` file. Full pickleball rules, DUPR-based AI, chiptune audio, pixel art rendering, multiple game screens.

## Tech Constraints

- Single file: `pickleball.html` — no external assets, no npm, no bundler
- Canvas-based: HTML5 `<canvas>` with 2D context
- Internal resolution: 320×180, scaled up with `imageSmoothingEnabled: false`
- Pixel art: 16-32 color palette, chunky pixels, retro NES/GBA aesthetic
- Audio: Web Audio API only — procedural chiptune BGM + SFX, no audio files
- Controls: Keyboard only (arrow keys + Z/X/C/V for shots)
- Vanilla JS only — no libraries

## Phase 1: Foundation (must-have for playable game)

### 1.1 — Boilerplate & Canvas Setup
- HTML structure with `<canvas>`, CSS for fullscreen scaling
- `requestAnimationFrame` loop with fixed 60fps timestep
- Separate `update(dt)` and `render()` functions

### 1.2 — Pixel Font Renderer
- 5×7 dot matrix font data for A-Z, 0-9, common punctuation
- `drawText(ctx, text, x, y, color, scale)` function

### 1.3 — Game State Machine
- States: TITLE_SCREEN, PLAYER_SETUP, GAMEPLAY, POINT_END, GAME_END, MATCH_END, HOW_TO_PLAY, SETTINGS, PAUSED
- Clean state transitions with enter/exit hooks

### 1.4 — Title Screen
- "PICKLE SMASH" pixel art logo
- Animated background (bouncing ball or scrolling court lines)
- Menu: New Game / How to Play / Settings
- Keyboard navigation

### 1.5 — Player Setup Screen
- Name entry (A-Z, 0-9, backspace, max 12 chars)
- DUPR rating entry (1.0–8.0, step 0.1)
- Avatar selection (3-5 pixel art characters)
- Confirm with Enter

### 1.6 — Court Rendering
- Top-down court with correct proportions (20×44ft scaled)
- Kitchen/NVZ zones clearly marked
- Net line, service boxes, baselines, sidelines
- Out-of-bounds darker area, "KITCHEN" label

### 1.7 — Player & Ball Sprites
- 16×24px player sprites (idle, run, swing frames)
- Ball: 4×4px with shadow for height simulation
- Paddle attached to player, ball trail

### 1.8 — Player Movement
- Arrow key movement with acceleration/deceleration
- Constrained to own half, post-shot recovery, sprint with Shift

### 1.9 — Ball Physics
- 2D position (x, y) + virtual height (z, vz)
- Gravity, bounce with damping, net collision, court boundaries
- Shadow rendering based on z height

### 1.10 — Shot System
- Drive (Z), Dink (X), Lob (C), Drop shot (↓+Z), Reset (V)
- Power/accuracy modified by DUPR and timing

### 1.11 — Pickleball Rules Engine
- Rally scoring to 11, win by 2, best of 3
- Serve state machine (diagonal, must clear kitchen)
- Double-bounce rule tracking
- Kitchen/NVZ violation detection + momentum rule
- All fault conditions with reason display

### 1.12 — AI Opponent
- DUPR-driven behavior (6 tiers: Beginner → Elite)
- State machine: Serve → Baseline → Transition → Kitchen Line → Attack → Defense
- Error rate and decision quality scaling with DUPR

### 1.13 — Scoring & HUD
- Persistent scoreboard, shot type indicator, fault banner, "LET IT BOUNCE" hint

### 1.14 — Point/Game Flow
- Point end freeze, game end overlay, match end stats
- Rematch / Main Menu options

## Phase 2: Audio
- Web Audio engine with square/triangle/noise oscillators
- SFX: hit sounds, bounce, fault buzzer, point arpeggio, crowd cheer
- BGM: title theme, gameplay loop (~140 BPM), victory jingle
- M to mute music, N for SFX

## Phase 3: Polish
- Screen shake on hard drives
- Pixel art crowd (wave on points)
- Scanline CRT effect (toggle)
- Confetti on match win, taunt animations
- Settings screen, How to Play screen
- localStorage persistence (name, DUPR, avatar)
- Pause menu (Esc)

## Phase 4: Stretch Goals
- Erne and ATP special shots
- Instant replay on dramatic points
- Local multiplayer (P2 on WASD+JKL)
- Win streak badges

## Code Architecture (sections in single file)
1. CONSTANTS & CONFIG
2. PIXEL FONT DATA
3. AUDIO ENGINE
4. SPRITE DEFINITIONS
5. PHYSICS ENGINE
6. GAME RULES ENGINE
7. AI OPPONENT
8. PLAYER INPUT
9. GAME STATE MACHINE
10. RENDERER
11. MAIN LOOP
12. INIT

## Controls

### Player 1
| Action | Key |
|---|---|
| Move | Arrow keys |
| Drive | Z |
| Dink | X |
| Lob | C |
| Drop shot | ↓ + Z |
| Reset shot | V |
| Serve | Space |
| Pause | Esc / P |

### Player 2 (Local Multiplayer — stretch)
| Action | Key |
|---|---|
| Move | W A S D |
| Drive | J |
| Dink | K |
| Lob | L |
| Serve | F |
