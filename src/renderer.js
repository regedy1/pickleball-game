import { INTERNAL_WIDTH, INTERNAL_HEIGHT, PALETTE, COURT } from './constants.js';
import { drawText, drawTextCentered, measureText } from './font.js';
import { drawPlayerSprite, drawBallSprite } from './sprites.js';

let courtBuffer = null;

export function clearScreen(ctx, color = PALETTE.DARK_BLUE) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, INTERNAL_WIDTH, INTERNAL_HEIGHT);
}

// Build court buffer once — call on init or resize
export function buildCourtBuffer() {
  const canvas = document.createElement('canvas');
  canvas.width = INTERNAL_WIDTH;
  canvas.height = INTERNAL_HEIGHT;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // --- Helper: pseudo-random from coordinates (deterministic) ---
  function hash(x, y, seed) {
    return ((x * 73 + y * 137 + seed * 31) % 997 + 997) % 997;
  }

  // Fence boundary (10px outside court)
  const fenceX = COURT.X - 10;
  const fenceY = COURT.Y - 10;
  const fenceW = COURT.WIDTH + 20;
  const fenceH = COURT.HEIGHT + 20;
  // Gate center at bottom for the stone path
  const gateCenter = COURT.CENTER_X;
  const gateHalf = 4; // 8px gap

  // --- 1. Grass Base (3-shade 4x4 tile pattern) ---
  function drawGrass(c) {
    const GL = '#52b788';
    const GD = '#40916c';
    const GA = '#74c69d';

    for (let ty = 0; ty < INTERNAL_HEIGHT; ty += 4) {
      for (let tx = 0; tx < INTERNAL_WIDTH; tx += 4) {
        const tileIdx = (Math.floor(tx / 4) + Math.floor(ty / 4)) % 2;
        c.fillStyle = tileIdx === 0 ? GL : GD;
        c.fillRect(tx, ty, 4, 4);
        // L-shaped accent in corner for texture
        c.fillStyle = GA;
        if (tileIdx === 0) {
          c.fillRect(tx, ty, 2, 1);
          c.fillRect(tx, ty + 1, 1, 1);
        } else {
          c.fillRect(tx + 2, ty + 2, 2, 1);
          c.fillRect(tx + 3, ty + 3, 1, 1);
        }
      }
    }
    // Blade accent marks every 6px
    c.fillStyle = GA;
    for (let y = 0; y < INTERNAL_HEIGHT; y += 3) {
      for (let x = 0; x < INTERNAL_WIDTH; x += 6) {
        c.fillRect(x + (y % 2), y, 1, 1);
      }
    }
  }

  // --- 2. Stone Path (bottom center to court gate) ---
  function drawStonePath(c) {
    const pathW = 20;
    const pathX = gateCenter - pathW / 2;
    const pathTop = fenceY + fenceH; // bottom of fence
    const pathBottom = INTERNAL_HEIGHT;

    // Stone colors
    const stoneColor = '#d4b896';
    const mortarColor = '#a08060';
    const stoneHighlight = '#e0c8a8';

    // Fill mortar background
    c.fillStyle = mortarColor;
    c.fillRect(pathX, pathTop, pathW, pathBottom - pathTop);

    // Draw staggered stones
    for (let sy = pathTop; sy < pathBottom; sy += 4) {
      const row = Math.floor((sy - pathTop) / 4);
      const offset = (row % 2 === 0) ? 0 : 3;
      for (let sx = pathX + offset; sx < pathX + pathW; sx += 5) {
        const sw = Math.min(4, pathX + pathW - sx);
        if (sw <= 0) continue;
        c.fillStyle = stoneColor;
        c.fillRect(sx, sy, sw, 3);
        // Highlight on top edge
        c.fillStyle = stoneHighlight;
        c.fillRect(sx, sy, sw, 1);
      }
    }

    // Grass edge transition: darker green pixels on both sides
    c.fillStyle = '#3a7a5a';
    for (let y = pathTop; y < pathBottom; y += 2) {
      c.fillRect(pathX - 1, y, 1, 1);
      c.fillRect(pathX + pathW, y, 1, 1);
    }
  }

  // --- 3. Tree drawing function ---
  function drawTree(c, x, y, size) {
    // size: 'small' (8x12), 'medium' (12x18), 'large' (16x22)
    let cw, ch, tw, th;
    if (size === 'small') { cw = 8; ch = 7; tw = 3; th = 5; }
    else if (size === 'medium') { cw = 12; ch = 10; tw = 3; th = 8; }
    else { cw = 16; ch = 12; tw = 4; th = 10; }

    const trunkX = x + Math.floor(cw / 2) - Math.floor(tw / 2);
    const trunkY = y + ch - 2;

    // Trunk
    c.fillStyle = '#5c3a1a';
    c.fillRect(trunkX, trunkY, tw, th);
    // Trunk dark edge
    c.fillStyle = '#3d2710';
    c.fillRect(trunkX, trunkY, 1, th);

    // Canopy - outer (dark green)
    c.fillStyle = '#1e6b3a';
    c.fillRect(x, y + 2, cw, ch - 2);
    c.fillRect(x + 1, y + 1, cw - 2, 1);
    c.fillRect(x + 2, y, cw - 4, 1);

    // Canopy - middle (medium green)
    c.fillStyle = '#2d8f4e';
    c.fillRect(x + 2, y + 3, cw - 4, ch - 5);
    c.fillRect(x + 1, y + 2, cw - 2, ch - 5);

    // Canopy - inner highlight (light green, top area)
    c.fillStyle = '#4aba6e';
    c.fillRect(x + 2, y + 2, cw - 5, Math.floor(ch / 3));
    c.fillRect(x + 3, y + 1, cw - 7, 1);

    // Sunlight highlight dots (top-left)
    c.fillStyle = '#ffffff';
    c.fillRect(x + 3, y + 2, 1, 1);
    if (cw >= 12) {
      c.fillRect(x + 5, y + 1, 1, 1);
    }
  }

  // --- Tree shadow function ---
  function drawTreeShadow(c, x, y, size) {
    let cw, ch;
    if (size === 'small') { cw = 8; ch = 12; }
    else if (size === 'medium') { cw = 12; ch = 18; }
    else { cw = 16; ch = 22; }

    const shadowX = x + 2;
    const shadowY = y + ch - 2;
    const sw = cw - 2;
    const sh = Math.floor(cw / 3);

    c.fillStyle = 'rgba(0,0,0,0.15)';
    c.fillRect(shadowX + 1, shadowY, sw - 2, sh);
    c.fillRect(shadowX, shadowY + 1, sw, sh - 2);
  }

  // Tree positions: [x, y, size]
  const trees = [
    // Top row (above bleachers) - 5 trees
    [40, 2, 'large'],
    [100, 5, 'medium'],
    [200, 0, 'large'],
    [430, 3, 'medium'],
    [540, 1, 'large'],
    // Left side - 3 trees
    [20, 80, 'medium'],
    [10, 160, 'large'],
    [30, 240, 'medium'],
    // Right side - 3 trees
    [580, 90, 'medium'],
    [590, 180, 'large'],
    [570, 260, 'medium'],
    // Bottom corners - 2 trees
    [40, 310, 'medium'],
    [560, 315, 'medium'],
  ];

  // --- 4. Flower Beds ---
  function drawFlowerBeds(c) {
    const beds = [
      // Near the stone path (bottom area)
      { x: gateCenter + 16, y: INTERNAL_HEIGHT - 30, w: 14, h: 10 },
      { x: gateCenter - 30, y: INTERNAL_HEIGHT - 25, w: 12, h: 8 },
      // Near left trees
      { x: 55, y: 110, w: 12, h: 8 },
      // Near right trees
      { x: 560, y: 130, w: 14, h: 8 },
    ];

    const flowerColors = ['#e63946', '#f4d35e', '#ff69b4', '#ffffff', '#9b59b6'];

    for (const bed of beds) {
      // Soil base
      c.fillStyle = '#5c4033';
      c.fillRect(bed.x, bed.y, bed.w, bed.h);
      // Lighter inner soil
      c.fillStyle = '#6d4c3a';
      c.fillRect(bed.x + 1, bed.y + 1, bed.w - 2, bed.h - 2);

      // Flowers (3x3 cross shape)
      const numFlowers = 3 + hash(bed.x, bed.y, 7) % 2;
      for (let f = 0; f < numFlowers; f++) {
        const fx = bed.x + 2 + (f * Math.floor((bed.w - 4) / numFlowers));
        const fy = bed.y + 2 + hash(f, bed.x, 13) % (bed.h - 5);
        const fcolor = flowerColors[hash(fx, fy, 99) % flowerColors.length];
        // Center
        c.fillStyle = '#f4d35e';
        c.fillRect(fx + 1, fy + 1, 1, 1);
        // Petals (cross)
        c.fillStyle = fcolor;
        c.fillRect(fx + 1, fy, 1, 1);     // top
        c.fillRect(fx + 1, fy + 2, 1, 1); // bottom
        c.fillRect(fx, fy + 1, 1, 1);     // left
        c.fillRect(fx + 2, fy + 1, 1, 1); // right
      }
    }
  }

  // --- 5. Bushes ---
  function drawBushes(c) {
    const bushPositions = [
      [65, 50], [130, 15], [480, 10], [600, 100],
      [15, 200], [600, 220], [80, 290], [530, 300],
    ];

    for (const [bx, by] of bushPositions) {
      // Shadow
      c.fillStyle = '#2a6a3a';
      c.fillRect(bx, by + 3, 5, 1);
      // Main body
      c.fillStyle = '#3a8a50';
      c.fillRect(bx, by + 1, 5, 2);
      c.fillRect(bx + 1, by + 3, 3, 1);
      // Highlight top
      c.fillStyle = '#5ab06a';
      c.fillRect(bx + 1, by, 3, 1);
      c.fillRect(bx, by + 1, 5, 1);
    }
  }

  // --- 6. Bleachers (4 rows with 30+ spectators) ---
  function drawBleachers(c) {
    const bx = COURT.X;
    const bw = COURT.WIDTH;
    const bleachBottom = COURT.Y - 12; // just above fence

    // 4 rows of bench seats, 5px tall, 3px spacing
    const rowHeight = 5;
    const rowGap = 3;
    for (let r = 0; r < 4; r++) {
      const ry = bleachBottom - (r + 1) * (rowHeight + rowGap);
      // Bench seat
      c.fillStyle = '#b0b0b0'; // light top
      c.fillRect(bx, ry, bw, 1);
      c.fillStyle = '#9e9e9e'; // main gray
      c.fillRect(bx, ry + 1, bw, rowHeight - 2);
      c.fillStyle = '#7e7e7e'; // darker front edge
      c.fillRect(bx, ry + rowHeight - 1, bw, 1);
    }

    // 32 spectators across 4 rows
    const skinTones = ['#ffd5b0', '#d4a373', '#8d5524'];
    const shirtColors = ['#e63946', '#48cae4', '#f4d35e', '#ee6c4d', '#2d6a4f', '#9b59b6', '#f39c12', '#1abc9c'];
    const numSpectators = 32;
    const spacing = Math.floor(bw / (numSpectators / 4));

    for (let i = 0; i < numSpectators; i++) {
      const row = i % 4;
      const col = Math.floor(i / 4);
      const ry = bleachBottom - (row + 1) * (rowHeight + rowGap);
      const sx = bx + 4 + col * spacing + (hash(i, 0, 77) % 3) - 1;
      const baseY = ry - 7;

      // Head (2x2)
      c.fillStyle = skinTones[hash(i, 1, 33) % 3];
      c.fillRect(sx + 1, baseY, 2, 2);

      // Hat (every 4th)
      if (i % 4 === 0) {
        c.fillStyle = shirtColors[(i + 3) % shirtColors.length];
        c.fillRect(sx, baseY - 1, 4, 1);
      }

      // Body/shirt (3x3)
      c.fillStyle = shirtColors[i % shirtColors.length];
      c.fillRect(sx, baseY + 2, 4, 3);

      // Waving arms (every 6th)
      if (i % 6 === 2) {
        c.fillStyle = '#ffffff';
        c.fillRect(sx - 1, baseY + 1, 1, 1);
        c.fillRect(sx + 5, baseY + 1, 1, 1);
      }
    }
  }

  // --- 7. Banner & Signage ---
  function drawBanner(c) {
    const bannerY = 8;
    const poleH = 14;
    const poleLeftX = COURT.X + 20;
    const poleRightX = COURT.X + COURT.WIDTH - 22;
    const bannerX = poleLeftX + 2;
    const bannerW = poleRightX - poleLeftX - 2;

    // Poles
    c.fillStyle = '#444444';
    c.fillRect(poleLeftX, bannerY, 2, poleH);
    c.fillRect(poleRightX, bannerY, 2, poleH);
    // Pole caps
    c.fillStyle = '#666666';
    c.fillRect(poleLeftX - 1, bannerY, 4, 1);
    c.fillRect(poleRightX - 1, bannerY, 4, 1);

    // Banner cloth (purple background)
    c.fillStyle = '#2d1b69';
    c.fillRect(bannerX, bannerY + 2, bannerW, 7);
    // Top edge highlight
    c.fillStyle = '#3d2b79';
    c.fillRect(bannerX, bannerY + 2, bannerW, 1);
    // Bottom edge
    c.fillStyle = '#1d0b59';
    c.fillRect(bannerX, bannerY + 8, bannerW, 1);

    // "PICKLE SMASH" text centered on banner
    drawTextCentered(c, 'PICKLE SMASH', COURT.CENTER_X, bannerY + 3, PALETTE.YELLOW, 1);
  }

  // --- 8. White Picket Fence ---
  function drawFence(c) {
    const fx = fenceX;
    const fy = fenceY;
    const fw = fenceW;
    const fh = fenceH;

    const white = '#f0f0f0';
    const rail = '#d0d0d0';
    const shadow = '#c0c0c0';

    // Draw fence on all 4 sides
    // Horizontal rails at 3px and 6px from picket top
    function drawPicketRun(startX, endX, baseY, isHorizontal) {
      if (isHorizontal) {
        // Horizontal rail lines
        c.fillStyle = rail;
        c.fillRect(startX, baseY + 3, endX - startX, 1);
        c.fillRect(startX, baseY + 6, endX - startX, 1);

        // Vertical pickets every 6px
        for (let px = startX; px < endX; px += 6) {
          // Skip gate opening at bottom
          if (baseY > fy + fh / 2) { // bottom fence
            if (px >= gateCenter - gateHalf && px <= gateCenter + gateHalf) continue;
          }
          c.fillStyle = white;
          c.fillRect(px, baseY, 2, 8);
          // Pointed top (1px triangle)
          c.fillRect(px, baseY - 1, 2, 1);
          c.fillRect(px, baseY - 2, 1, 1); // tip
          // Shadow on right edge
          c.fillStyle = shadow;
          c.fillRect(px + 1, baseY + 1, 1, 7);
        }
      }
    }

    // Top fence
    drawPicketRun(fx, fx + fw, fy, true);
    // Bottom fence
    drawPicketRun(fx, fx + fw, fy + fh - 8, true);

    // Left side fence (vertical - draw rotated pickets)
    c.fillStyle = rail;
    c.fillRect(fx + 3, fy, 1, fh);
    c.fillRect(fx + 6, fy, 1, fh);
    for (let py = fy; py < fy + fh; py += 6) {
      c.fillStyle = white;
      c.fillRect(fx, py, 8, 2);
      c.fillRect(fx - 1, py, 1, 2);
      c.fillRect(fx - 2, py, 1, 1);
      c.fillStyle = shadow;
      c.fillRect(fx, py + 1, 8, 1);
    }

    // Right side fence
    c.fillStyle = rail;
    c.fillRect(fx + fw - 4, fy, 1, fh);
    c.fillRect(fx + fw - 7, fy, 1, fh);
    for (let py = fy; py < fy + fh; py += 6) {
      c.fillStyle = white;
      c.fillRect(fx + fw - 8, py, 8, 2);
      c.fillRect(fx + fw, py, 1, 2);
      c.fillRect(fx + fw + 1, py, 1, 1);
      c.fillStyle = shadow;
      c.fillRect(fx + fw - 8, py + 1, 8, 1);
    }
  }

  // --- 9. Court Surface ---
  function drawCourtSurface(c) {
    const CG = PALETTE.COURT_GREEN || '#2d6a4f';
    const CG_LIGHT = '#2f6f52';
    const CG_DARK = '#285e45';
    const courtShades = [CG, CG_LIGHT, CG_DARK];

    const KG = PALETTE.KITCHEN_GREEN || '#40916c';
    const KG_LIGHT = '#4a9b76';
    const KG_DARK = '#3a8562';
    const kitchenShades = [KG, KG_LIGHT, KG_DARK];

    // Main court: 3-shade subtle texture in 3x3 blocks
    for (let y = COURT.Y; y < COURT.Y + COURT.HEIGHT; y += 3) {
      for (let x = COURT.X; x < COURT.X + COURT.WIDTH; x += 3) {
        const inKitchen = (y >= COURT.NET_Y - COURT.KITCHEN_DEPTH && y < COURT.NET_Y) ||
                          (y >= COURT.NET_Y && y < COURT.NET_Y + COURT.KITCHEN_DEPTH);
        const shades = inKitchen ? kitchenShades : courtShades;
        const idx = (Math.floor(x / 3) + Math.floor(y / 3)) % 3;
        c.fillStyle = shades[idx];
        const w = Math.min(3, COURT.X + COURT.WIDTH - x);
        const h = Math.min(3, COURT.Y + COURT.HEIGHT - y);
        c.fillRect(x, y, w, h);
      }
    }

    // Kitchen crosshatch pattern
    c.fillStyle = 'rgba(255,255,255,0.06)';
    for (let y = COURT.NET_Y - COURT.KITCHEN_DEPTH; y < COURT.NET_Y; y += 4) {
      for (let x = COURT.X; x < COURT.X + COURT.WIDTH; x += 4) {
        c.fillRect(x + (y % 8 < 4 ? 0 : 2), y, 1, 1);
      }
    }
    for (let y = COURT.NET_Y; y < COURT.NET_Y + COURT.KITCHEN_DEPTH; y += 4) {
      for (let x = COURT.X; x < COURT.X + COURT.WIDTH; x += 4) {
        c.fillRect(x + (y % 8 < 4 ? 0 : 2), y, 1, 1);
      }
    }

    // Depth shading on court edges
    c.fillStyle = 'rgba(0,0,0,0.12)';
    c.fillRect(COURT.X, COURT.Y + COURT.HEIGHT - 3, COURT.WIDTH, 3);
    c.fillRect(COURT.X + COURT.WIDTH - 3, COURT.Y, 3, COURT.HEIGHT);
    c.fillStyle = 'rgba(255,255,255,0.06)';
    c.fillRect(COURT.X, COURT.Y, COURT.WIDTH, 2);
    c.fillRect(COURT.X, COURT.Y, 2, COURT.HEIGHT);

    // Service box labels
    const topLeftBoxCX = COURT.X + Math.floor((COURT.CENTER_X - COURT.X) / 2);
    const topRightBoxCX = COURT.CENTER_X + Math.floor((COURT.X + COURT.WIDTH - COURT.CENTER_X) / 2);
    const topBoxCY = COURT.Y + Math.floor((COURT.NET_Y - COURT.KITCHEN_DEPTH - COURT.Y) / 2);
    const botBoxCY = COURT.NET_Y + COURT.KITCHEN_DEPTH + Math.floor((COURT.Y + COURT.HEIGHT - COURT.NET_Y - COURT.KITCHEN_DEPTH) / 2);

    const labelColor = 'rgba(255,255,255,0.15)';
    drawTextCentered(c, 'R', topRightBoxCX, topBoxCY - 3, labelColor, 1);
    drawTextCentered(c, 'L', topLeftBoxCX, topBoxCY - 3, labelColor, 1);
    drawTextCentered(c, 'L', topRightBoxCX, botBoxCY - 3, labelColor, 1);
    drawTextCentered(c, 'R', topLeftBoxCX, botBoxCY - 3, labelColor, 1);
  }

  // --- Court lines ---
  function drawCourtLines(c) {
    c.fillStyle = PALETTE.LINE_WHITE;
    c.fillRect(COURT.X, COURT.Y, COURT.WIDTH, 1);
    c.fillRect(COURT.X, COURT.Y + COURT.HEIGHT - 1, COURT.WIDTH, 1);
    c.fillRect(COURT.X, COURT.Y, 1, COURT.HEIGHT);
    c.fillRect(COURT.X + COURT.WIDTH - 1, COURT.Y, 1, COURT.HEIGHT);
    c.fillRect(COURT.X, COURT.NET_Y - COURT.KITCHEN_DEPTH, COURT.WIDTH, 1);
    c.fillRect(COURT.X, COURT.NET_Y + COURT.KITCHEN_DEPTH, COURT.WIDTH, 1);
    const cx = COURT.X + Math.floor(COURT.WIDTH / 2);
    c.fillRect(cx, COURT.Y, 1, COURT.NET_Y - COURT.KITCHEN_DEPTH - COURT.Y);
    c.fillRect(cx, COURT.NET_Y + COURT.KITCHEN_DEPTH, 1, COURT.Y + COURT.HEIGHT - COURT.NET_Y - COURT.KITCHEN_DEPTH);

    // Corner markings
    [
      [COURT.X, COURT.Y, 4, 1], [COURT.X, COURT.Y, 1, 4],
      [COURT.X + COURT.WIDTH - 4, COURT.Y, 4, 1], [COURT.X + COURT.WIDTH - 1, COURT.Y, 1, 4],
      [COURT.X, COURT.Y + COURT.HEIGHT - 1, 4, 1], [COURT.X, COURT.Y + COURT.HEIGHT - 4, 1, 4],
      [COURT.X + COURT.WIDTH - 4, COURT.Y + COURT.HEIGHT - 1, 4, 1], [COURT.X + COURT.WIDTH - 1, COURT.Y + COURT.HEIGHT - 4, 1, 4],
    ].forEach(([x, y, w, h]) => c.fillRect(x, y, w, h));
  }

  // --- Net ---
  function drawNet(c) {
    const netY = COURT.NET_Y;
    const postW = 5, postH = 8;

    // Net shadow
    c.fillStyle = 'rgba(0,0,0,0.18)';
    c.fillRect(COURT.X, netY + 4, COURT.WIDTH, 2);

    // Net posts - left
    c.fillStyle = '#555';
    c.fillRect(COURT.X - 3, netY - 4, postW, postH);
    c.fillStyle = '#777';
    c.fillRect(COURT.X - 2, netY - 4, 2, postH);
    c.fillStyle = '#666';
    c.fillRect(COURT.X - 2, netY - 5, 3, 1);

    // Net posts - right
    c.fillStyle = '#555';
    c.fillRect(COURT.X + COURT.WIDTH - 2, netY - 4, postW, postH);
    c.fillStyle = '#777';
    c.fillRect(COURT.X + COURT.WIDTH - 1, netY - 4, 2, postH);
    c.fillStyle = '#666';
    c.fillRect(COURT.X + COURT.WIDTH - 1, netY - 5, 3, 1);

    // Net mesh
    const meshColor = PALETTE.NET_GRAY || '#b0b0b0';
    for (let row = 0; row < 3; row++) {
      const my = netY - 2 + row;
      for (let x = COURT.X + 2; x < COURT.X + COURT.WIDTH - 2; x++) {
        if ((x + row) % 2 === 0) {
          c.fillStyle = meshColor;
          c.fillRect(x, my, 1, 1);
        }
      }
    }

    // Top cord
    c.fillStyle = '#e8e8e8';
    c.fillRect(COURT.X, netY - 3, COURT.WIDTH, 1);
  }

  // --- Kitchen labels ---
  function drawKitchenLabels(c) {
    drawTextCentered(c, 'KITCHEN', COURT.CENTER_X, COURT.NET_Y - COURT.KITCHEN_DEPTH + 14, 'rgba(255,255,255,0.4)', 1);
    drawTextCentered(c, 'KITCHEN', COURT.CENTER_X, COURT.NET_Y + 14, 'rgba(255,255,255,0.4)', 1);
  }

  // --- 10. Sideline Objects ---
  function drawSidelineObjects(c) {
    const leftX = COURT.X - 40;
    const rightX = COURT.X + COURT.WIDTH + 20;
    const midY = COURT.NET_Y;

    // LEFT SIDE: Park bench (12x6)
    c.fillStyle = '#8b6914';
    c.fillRect(leftX, midY - 20, 12, 2); // top plank
    c.fillRect(leftX, midY - 18, 12, 2); // bottom plank
    c.fillStyle = '#6b5210';
    c.fillRect(leftX, midY - 16, 12, 1); // front edge
    c.fillStyle = '#333333'; // metal legs
    c.fillRect(leftX + 1, midY - 16, 1, 4);
    c.fillRect(leftX + 10, midY - 16, 1, 4);

    // LEFT SIDE: Trash can (4x6)
    c.fillStyle = '#888888';
    c.fillRect(leftX + 2, midY + 5, 4, 6);
    c.fillStyle = '#999999'; // lid
    c.fillRect(leftX + 1, midY + 4, 6, 1);
    c.fillStyle = '#aaaaaa';
    c.fillRect(leftX + 2, midY + 4, 4, 1);
    c.fillStyle = '#777777'; // dark band
    c.fillRect(leftX + 2, midY + 8, 4, 1);

    // LEFT SIDE: Water fountain (5x7)
    c.fillStyle = '#999999'; // gray base
    c.fillRect(leftX + 14, midY + 20, 5, 3);
    c.fillStyle = '#aaaaaa';
    c.fillRect(leftX + 14, midY + 17, 5, 3);
    c.fillStyle = '#64b5f6'; // water basin
    c.fillRect(leftX + 15, midY + 15, 3, 2);
    c.fillStyle = '#90caf9'; // water highlight
    c.fillRect(leftX + 15, midY + 15, 3, 1);

    // RIGHT SIDE: Scoreboard stand (14x16)
    c.fillStyle = '#5c3a1a'; // wooden posts
    c.fillRect(rightX + 1, midY - 10, 2, 16);
    c.fillRect(rightX + 11, midY - 10, 2, 16);
    c.fillStyle = '#222222'; // dark board
    c.fillRect(rightX, midY - 16, 14, 10);
    c.fillStyle = '#333333'; // board border
    c.fillRect(rightX + 1, midY - 15, 12, 8);
    // Score area (white rectangles)
    c.fillStyle = '#e0e0e0';
    c.fillRect(rightX + 3, midY - 13, 3, 4);
    c.fillRect(rightX + 8, midY - 13, 3, 4);
    // Divider
    c.fillStyle = '#666666';
    c.fillRect(rightX + 7, midY - 13, 1, 4);

    // RIGHT SIDE: Ball hopper (6x6, wire frame)
    c.fillStyle = '#888888';
    c.fillRect(rightX + 2, midY + 10, 6, 1); // top rim
    c.fillRect(rightX + 2, midY + 15, 6, 1); // bottom
    c.fillRect(rightX + 2, midY + 10, 1, 6); // left wire
    c.fillRect(rightX + 7, midY + 10, 1, 6); // right wire
    // Cross wires
    c.fillRect(rightX + 2, midY + 12, 6, 1);
    // Balls inside (yellow dots)
    c.fillStyle = '#f4d35e';
    c.fillRect(rightX + 3, midY + 13, 2, 2);
    c.fillRect(rightX + 5, midY + 11, 2, 2);
  }

  // --- 11. Small rocks scattered ---
  function drawRocks(c) {
    const rockPositions = [
      [75, 65], [130, 45], [490, 30], [550, 55],
      [50, 180], [600, 170], [90, 310], [520, 330],
      [gateCenter - 15, INTERNAL_HEIGHT - 18],
      [gateCenter + 18, INTERNAL_HEIGHT - 22],
    ];
    c.fillStyle = '#8a8a8a';
    for (const [rx, ry] of rockPositions) {
      c.fillRect(rx, ry, 2, 2);
    }
    c.fillStyle = '#9a9a9a';
    for (const [rx, ry] of rockPositions) {
      c.fillRect(rx, ry, 1, 1);
    }
  }

  // === Render order (back to front) ===
  // 1. Grass base
  drawGrass(ctx);
  // 2. Stone path
  drawStonePath(ctx);
  // 3. Tree shadows (before trees)
  for (const [tx, ty, ts] of trees) {
    drawTreeShadow(ctx, tx, ty, ts);
  }
  // 4. Flower beds
  drawFlowerBeds(ctx);
  // 5. Bushes
  drawBushes(ctx);
  // 6. Bleachers
  drawBleachers(ctx);
  // 7. Banner
  drawBanner(ctx);
  // 8. Fence
  drawFence(ctx);
  // 9. Court surface + lines + net
  drawCourtSurface(ctx);
  drawCourtLines(ctx);
  drawNet(ctx);
  drawKitchenLabels(ctx);
  // 10. Sideline objects
  drawSidelineObjects(ctx);
  // 11. Small rocks
  drawRocks(ctx);
  // 12. Trees (last — canopy overlaps fence/court edges for depth)
  for (const [tx, ty, ts] of trees) {
    drawTree(ctx, tx, ty, ts);
  }

  courtBuffer = canvas;
}

export function drawCourt(ctx) {
  if (!courtBuffer) buildCourtBuffer();
  ctx.drawImage(courtBuffer, 0, 0);
}

export function drawPlayer(ctx, player) {
  const animState = player.animState || 'idle';
  const animFrame = player.animFrame || 0;
  drawPlayerSprite(ctx, player.x, player.y, player.avatar, player.facing, animState, animFrame, player.gender || 'male');
}

export function drawBall(ctx, ball) {
  if (ball.active) {
    drawBallSprite(ctx, ball.x, ball.y, ball.z, ball.vx || 0, ball.vy || 0);
  }
}

export function drawHUD(ctx, gameCtx) {
  const { player, opponent, score } = gameCtx;
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(0, 0, INTERNAL_WIDTH, 14);
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fillRect(0, 14, INTERNAL_WIDTH, 1);

  // Show serving indicator (*) next to whoever is serving
  const playerServing = score.serving === 'player';
  const playerLabel = `${playerServing ? '* ' : '  '}${player.name}: ${score.player}`;
  const oppLabel = `${!playerServing ? '* ' : '  '}AI: ${score.opponent}`;
  drawText(ctx, playerLabel, 4, 3, playerServing ? PALETTE.YELLOW : PALETTE.WHITE, 1);
  const { width } = measureText(oppLabel, 1);
  drawText(ctx, oppLabel, INTERNAL_WIDTH - width - 4, 3, !playerServing ? PALETTE.YELLOW : PALETTE.LIGHT_GRAY, 1);
  drawTextCentered(ctx, `G ${score.games[0]}-${score.games[1]}`, INTERNAL_WIDTH / 2, 3, PALETTE.YELLOW, 1);
}

export function drawMenu(ctx, items, selectedIndex, x, y, color = PALETTE.WHITE, selectedColor = PALETTE.YELLOW, scale = 1) {
  for (let i = 0; i < items.length; i++) {
    const isSelected = i === selectedIndex;
    const label = isSelected ? `> ${items[i]}` : `  ${items[i]}`;
    drawText(ctx, label, x, y + i * (8 * scale + 3), isSelected ? selectedColor : color, scale);
  }
}

export { drawText, drawTextCentered, measureText };
