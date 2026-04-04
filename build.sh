#!/bin/bash
# Build script: concatenate ES modules into a single pickleball.html

set -e

ORDER=(
  src/constants.js
  src/utils.js
  src/input.js
  src/touch.js
  src/font.js
  src/sprites.js
  src/audio.js
  src/physics.js
  src/rules.js
  src/renderer.js
  src/ai.js
  src/states/state-machine.js
  src/states/title-screen.js
  src/states/mode-select.js
  src/states/player-setup.js
  src/states/gameplay.js
  src/states/point-end.js
  src/states/game-end.js
  src/states/match-end.js
  src/states/how-to-play.js
  src/states/settings.js
  src/states/paused.js
  src/game.js
  src/main.js
)

mkdir -p dist

JS=""
for file in "${ORDER[@]}"; do
  # Strip import/export lines, preserve everything else
  content=$(sed -E '/^import /d; s/^export (default )?//; s/^export \{[^}]*\}.*$//;' "$file")
  JS="$JS
// === $file ===
$content
"
done

cat > dist/pickleball.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<title>PICKLE SMASH</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#000;display:flex;justify-content:center;align-items:center;height:100%;overflow:hidden;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;overscroll-behavior:none;position:fixed;width:100%}
canvas{image-rendering:pixelated;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor}
#touch-controls{position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:10;display:none}
#touch-controls .btn{pointer-events:auto;position:absolute;border-radius:50%;background:rgba(255,255,255,0.2);border:2px solid rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.7);font-family:monospace;font-weight:bold;font-size:3vw;-webkit-tap-highlight-color:transparent;transition:background 0.08s,border-color 0.08s}
#touch-controls .btn.active{background:rgba(255,255,255,0.35);border-color:rgba(255,255,255,0.6)}
#joystick-zone{pointer-events:auto;position:absolute;left:0;top:0;width:40%;height:100%}
#joystick-base{position:absolute;width:min(30vw,40vh);height:min(30vw,40vh);border-radius:50%;background:rgba(255,255,255,0.06);border:2px solid rgba(255,255,255,0.12);display:none;pointer-events:none}
#joystick-knob{position:absolute;width:min(10vw,14vh);height:min(10vw,14vh);border-radius:50%;background:rgba(255,255,255,0.35);border:2px solid rgba(255,255,255,0.55);display:none;pointer-events:none}
#rotate-prompt{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:#000;color:#fff;font-family:monospace;font-size:5vw;flex-direction:column;align-items:center;justify-content:center;z-index:100;gap:3vh}
#rotate-prompt .rotate-icon{font-size:15vw}
@media(orientation:portrait) and (hover:none) and (pointer:coarse){#rotate-prompt{display:flex!important}#touch-controls,canvas{display:none!important}}
</style>
</head>
<body>
<canvas id="game"></canvas>
<div id="touch-controls"><div id="joystick-zone"><div id="joystick-base"></div><div id="joystick-knob"></div></div></div>
<div id="rotate-prompt"><div class="rotate-icon">&#x21BB;</div><div>ROTATE YOUR DEVICE</div><div style="font-size:3vw;opacity:0.6">LANDSCAPE MODE REQUIRED</div></div>
<script>
(function(){
HTMLEOF

echo "$JS" >> dist/pickleball.html

cat >> dist/pickleball.html << 'HTMLEOF'
})();
</script>
</body>
</html>
HTMLEOF

SIZE=$(wc -c < dist/pickleball.html | tr -d ' ')
echo "Built dist/pickleball.html ($SIZE bytes)"
