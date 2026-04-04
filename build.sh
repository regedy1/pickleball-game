#!/bin/bash
# Build script: concatenate ES modules into a single pickleball.html

set -e

ORDER=(
  src/constants.js
  src/utils.js
  src/input.js
  src/font.js
  src/sprites.js
  src/audio.js
  src/physics.js
  src/rules.js
  src/renderer.js
  src/ai.js
  src/states/state-machine.js
  src/states/title-screen.js
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
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PICKLE SMASH</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000;display:flex;justify-content:center;align-items:center;height:100vh;overflow:hidden}
canvas{image-rendering:pixelated;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor}
</style>
</head>
<body>
<canvas id="game"></canvas>
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
