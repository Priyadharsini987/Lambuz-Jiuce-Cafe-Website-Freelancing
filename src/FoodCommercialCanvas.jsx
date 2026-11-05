import { useEffect, useRef, useState } from 'react';

// Generates an offscreen canvas rendering realistic food & beverage stages
export default function FoodCommercialCanvas() {
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState('juice'); // 'juice' | 'burger'
  const animStateRef = useRef({
    time: 0,
    stage: 'juice',
    particles: [],
    steamParticles: [],
    lastSwitch: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // High-DPI sizing
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = 560;
    const height = 520;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Realistic gradient helper functions
    const drawShadow = (x, y, rx, ry, opacity = 0.4) => {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rx);
      grad.addColorStop(0, `rgba(0, 0, 0, ${opacity})`);
      grad.addColorStop(0.6, `rgba(0, 0, 0, ${opacity * 0.4})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    };

    // Realistic Strawberry Piece
    const drawStrawberry = (x, y, rot, scale = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      // Depth shadow
      drawShadow(0, 18, 14, 5, 0.3);

      // Berry Body
      ctx.beginPath();
      ctx.moveTo(0, 24);
      ctx.bezierCurveTo(-18, 12, -22, -14, 0, -18);
      ctx.bezierCurveTo(22, -14, 18, 12, 0, 24);
      const grad = ctx.createRadialGradient(-4, -6, 2, 0, 2, 24);
      grad.addColorStop(0, '#ff4757');
      grad.addColorStop(0.4, '#e8142c');
      grad.addColorStop(0.85, '#b3091e');
      grad.addColorStop(1, '#5c030d');
      ctx.fillStyle = grad;
      ctx.fill();

      // Specular highlight (moist freshness)
      ctx.beginPath();
      ctx.ellipse(-6, -6, 5, 8, -0.3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fill();

      // Golden achenes (seeds)
      const seeds = [
        [-8, -8], [-2, -10], [6, -8],
        [-11, -1], [-4, -2], [4, -1], [10, -2],
        [-8, 6], [-1, 7], [7, 5],
        [-4, 14], [3, 13],
        [0, 19]
      ];
      seeds.forEach(([sx, sy]) => {
        ctx.beginPath();
        ctx.ellipse(sx, sy, 1.2, 2, 0.2, 0, Math.PI * 2);
        ctx.fillStyle = '#f6e58d';
        ctx.fill();
        ctx.strokeStyle = 'rgba(120, 10, 20, 0.6)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Fresh Green Calyx / Leaves
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.bezierCurveTo(-8, -26, -14, -22, -12, -16);
      ctx.bezierCurveTo(-4, -24, 4, -24, 12, -16);
      ctx.bezierCurveTo(14, -22, 8, -26, 0, -18);
      ctx.fillStyle = '#2ed573';
      ctx.fill();

      ctx.restore();
    };

    // Realistic Mango Chunk
    const drawMangoChunk = (x, y, rot, scale = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      drawShadow(0, 16, 16, 6, 0.35);

      ctx.beginPath();
      ctx.roundRect(-16, -14, 32, 28, [6, 10, 8, 12]);
      const mGrad = ctx.createLinearGradient(-14, -14, 14, 14);
      mGrad.addColorStop(0, '#ffeaa7');
      mGrad.addColorStop(0.3, '#ffbe76');
      mGrad.addColorStop(0.7, '#f0932b');
      mGrad.addColorStop(1, '#e67e22');
      ctx.fillStyle = mGrad;
      ctx.fill();

      // Juice sheen
      ctx.beginPath();
      ctx.ellipse(-6, -6, 10, 4, -0.4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();

      // Soft pulp texture lines
      ctx.strokeStyle = 'rgba(230, 126, 34, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-10, -4);
      ctx.lineTo(8, -2);
      ctx.moveTo(-8, 4);
      ctx.lineTo(10, 6);
      ctx.stroke();

      ctx.restore();
    };

    // Realistic Pineapple Wedge
    const drawPineappleWedge = (x, y, rot, scale = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      drawShadow(0, 16, 18, 6, 0.3);

      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(22, 16);
      ctx.quadraticCurveTo(0, 22, -22, 16);
      ctx.closePath();
      const pGrad = ctx.createRadialGradient(0, 2, 4, 0, 2, 24);
      pGrad.addColorStop(0, '#fff200');
      pGrad.addColorStop(0.5, '#fed330');
      pGrad.addColorStop(0.85, '#f7b731');
      pGrad.addColorStop(1, '#e58e26');
      ctx.fillStyle = pGrad;
      ctx.fill();

      // Fibrous pulp specks
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      ctx.ellipse(-4, 0, 8, 12, 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Realistic Orange Wedge
    const drawOrangeWedge = (x, y, rot, scale = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      drawShadow(0, 14, 16, 5, 0.3);

      ctx.beginPath();
      ctx.arc(0, 0, 22, 0.1 * Math.PI, 0.9 * Math.PI, false);
      ctx.closePath();
      const oGrad = ctx.createRadialGradient(0, 4, 3, 0, 6, 22);
      oGrad.addColorStop(0, '#fffa65');
      oGrad.addColorStop(0.5, '#ff9f1a');
      oGrad.addColorStop(0.9, '#ff793f');
      oGrad.addColorStop(1, '#cd6133');
      ctx.fillStyle = oGrad;
      ctx.fill();

      // Rind curve
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0.1 * Math.PI, 0.9 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#e67e22';
      ctx.stroke();

      ctx.restore();
    };

    // Realistic Ice Cube with refracted highlights
    const drawIceCube = (x, y, rot, size = 26) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);

      ctx.beginPath();
      ctx.roundRect(-size / 2, -size / 2, size, size, 4);
      const iceGrad = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2);
      iceGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
      iceGrad.addColorStop(0.3, 'rgba(220, 245, 255, 0.35)');
      iceGrad.addColorStop(0.7, 'rgba(180, 225, 250, 0.25)');
      iceGrad.addColorStop(1, 'rgba(255, 255, 255, 0.55)');
      ctx.fillStyle = iceGrad;
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Inner air bubbles & facets
      ctx.beginPath();
      ctx.moveTo(-size / 3, -size / 4);
      ctx.lineTo(size / 4, -size / 3);
      ctx.lineTo(size / 3, size / 4);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    // -------------------------------------------------------------
    // RENDER: FRUIT JUICE & SMOOTHIE SEQUENCE
    // -------------------------------------------------------------
    const renderJuiceScene = (progress) => {
      // Background soft ambient glow (seamless with cafe dark theme)
      const glow = ctx.createRadialGradient(280, 280, 40, 280, 280, 240);
      glow.addColorStop(0, 'rgba(242, 154, 31, 0.16)');
      glow.addColorStop(0.5, 'rgba(26, 168, 154, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Phase 1: 0 - 0.32 -> Blender jar with falling fruits and vortex blending
      // Phase 2: 0.33 - 1.0 -> Glass filling with smooth liquid stream, ice, and garnish
      const glassX = 330;
      const glassY = 270;
      const glassW = 100;
      const glassH = 175;

      // Cast ambient shadow under glass & blender
      drawShadow(glassX, glassY + glassH + 10, 65, 14, 0.6);
      drawShadow(160, 440, 75, 16, 0.5);

      // 1. Transparent Blender Jar (Left Side)
      const blendAlpha = progress < 0.6 ? 1 : Math.max(0, 1 - (progress - 0.6) * 4);
      if (blendAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = blendAlpha;
        const bX = 160;
        const bY = 230;

        // Blender Base
        ctx.beginPath();
        ctx.moveTo(bX - 45, bY + 160);
        ctx.lineTo(bX + 45, bY + 160);
        ctx.lineTo(bX + 52, bY + 205);
        ctx.lineTo(bX - 52, bY + 205);
        ctx.closePath();
        const baseGrad = ctx.createLinearGradient(bX - 50, 0, bX + 50, 0);
        baseGrad.addColorStop(0, '#222');
        baseGrad.addColorStop(0.3, '#3a3a3e');
        baseGrad.addColorStop(0.7, '#222');
        baseGrad.addColorStop(1, '#111');
        ctx.fillStyle = baseGrad;
        ctx.fill();

        // Blender Dial & LED
        ctx.beginPath();
        ctx.arc(bX, bY + 182, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#f29a1f';
        ctx.fill();
        ctx.shadowColor = '#f29a1f';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Glass Pitcher
        ctx.beginPath();
        ctx.moveTo(bX - 38, bY + 155);
        ctx.lineTo(bX - 54, bY);
        ctx.lineTo(bX + 54, bY);
        ctx.lineTo(bX + 38, bY + 155);
        ctx.closePath();
        const pitchGrad = ctx.createLinearGradient(bX - 55, 0, bX + 55, 0);
        pitchGrad.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
        pitchGrad.addColorStop(0.15, 'rgba(255, 255, 255, 0.08)');
        pitchGrad.addColorStop(0.85, 'rgba(255, 255, 255, 0.08)');
        pitchGrad.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
        ctx.fillStyle = pitchGrad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Blender Blade & Vortex Liquid in blender
        const blendSpin = progress * Math.PI * 16;
        if (progress > 0.12 && progress < 0.6) {
          ctx.save();
          // Vortex liquid fill
          ctx.beginPath();
          ctx.ellipse(bX, bY + 90, 42, 50, 0, 0, Math.PI * 2);
          const vGrad = ctx.createRadialGradient(bX, bY + 90, 2, bX, bY + 90, 45);
          vGrad.addColorStop(0, '#ffbe76');
          vGrad.addColorStop(0.4, '#f0932b');
          vGrad.addColorStop(0.85, '#e8142c');
          vGrad.addColorStop(1, '#9b0e1e');
          ctx.fillStyle = vGrad;
          ctx.fill();

          // Vortex swirl streaks
          ctx.rotate(blendSpin * 0.1);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(bX, bY + 90, 26, 0, Math.PI * 1.3);
          ctx.stroke();
          ctx.restore();
        }

        // Falling fruits entering blender
        if (progress < 0.28) {
          const dropP = progress / 0.28;
          // Strawberry drops
          const sY = -20 + dropP * 260;
          drawStrawberry(bX - 18, sY, dropP * 4, 0.9);

          // Mango Chunk drops
          const mY = -60 + dropP * 290;
          drawMangoChunk(bX + 15, mY, -dropP * 3.5, 0.95);

          // Pineapple wedge drops
          const pY = -90 + dropP * 310;
          drawPineappleWedge(bX, pY, dropP * 2.5, 0.85);

          // Orange wedge drops
          const oY = -130 + dropP * 340;
          drawOrangeWedge(bX + 12, oY, -dropP * 4, 0.9);
        }

        ctx.restore();
      }

      // 2. Smoothie Pour Stream into Glass
      if (progress > 0.22 && progress < 0.85) {
        ctx.save();
        const pourP = Math.min(1, (progress - 0.22) / 0.15);
        const pourYEnd = glassY + glassH - 20;

        ctx.beginPath();
        ctx.moveTo(175, 235);
        ctx.bezierCurveTo(240, 220, glassX - 10, 180, glassX, pourYEnd);
        ctx.lineWidth = 14 * pourP;
        ctx.lineCap = 'round';
        const streamGrad = ctx.createLinearGradient(175, 220, glassX, pourYEnd);
        streamGrad.addColorStop(0, '#f0932b');
        streamGrad.addColorStop(0.5, '#e84142');
        streamGrad.addColorStop(1, '#ff6b81');
        ctx.strokeStyle = streamGrad;
        ctx.stroke();

        // Stream highlight
        ctx.lineWidth = 3.5 * pourP;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.stroke();

        // Splash drops at point of contact
        ctx.fillStyle = '#ff4757';
        for (let i = 0; i < 4; i++) {
          const spX = glassX + (Math.sin(progress * 40 + i) * 16);
          const spY = (pourYEnd - 12) + (Math.cos(progress * 30 + i) * 8);
          ctx.beginPath();
          ctx.arc(spX, spY, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // 3. High-Quality Transparent Drinking Glass
      ctx.save();
      // Glass Body Path
      const topW = glassW;
      const botW = glassW * 0.72;
      ctx.beginPath();
      ctx.moveTo(glassX - topW / 2, glassY);
      ctx.lineTo(glassX - botW / 2, glassY + glassH);
      ctx.quadraticCurveTo(glassX, glassY + glassH + 12, glassX + botW / 2, glassY + glassH);
      ctx.lineTo(glassX + topW / 2, glassY);
      ctx.closePath();

      // Clip for inner filling smoothie liquid
      ctx.save();
      ctx.clip();

      // Liquid rising
      const fillProgress = Math.min(1, Math.max(0, (progress - 0.28) / 0.48));
      if (fillProgress > 0) {
        const currentLiquidHeight = (glassH + 10) * fillProgress;
        const currentY = glassY + glassH + 10 - currentLiquidHeight;

        ctx.beginPath();
        ctx.rect(glassX - topW, currentY, topW * 2, glassH * 2);
        const lGrad = ctx.createLinearGradient(0, currentY, 0, glassY + glassH);
        lGrad.addColorStop(0, '#ff6b81');
        lGrad.addColorStop(0.3, '#ee5253');
        lGrad.addColorStop(0.7, '#f0932b');
        lGrad.addColorStop(1, '#e15f41');
        ctx.fillStyle = lGrad;
        ctx.fill();

        // Liquid surface meniscus
        ctx.beginPath();
        const topCurW = botW + (topW - botW) * fillProgress;
        ctx.ellipse(glassX, currentY, topCurW / 2, 7, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#ff7979';
        ctx.fill();

        // Cream swirl on top
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(glassX, currentY, topCurW * 0.28, 0.2, Math.PI * 1.4);
        ctx.stroke();
      }

      // Floating Ice Cubes in Glass
      if (progress > 0.55) {
        const iceP = Math.min(1, (progress - 0.55) / 0.15);
        const ice1Y = (glassY + 45) * iceP + (1 - iceP) * (glassY - 30);
        drawIceCube(glassX - 16, ice1Y, 0.3, 24);
        drawIceCube(glassX + 18, ice1Y + 12, -0.25, 22);
      }

      // Straw Sliding into Glass
      if (progress > 0.68) {
        const strawP = Math.min(1, (progress - 0.68) / 0.14);
        const strawTopY = (glassY - 50) + (1 - strawP) * -40;
        const strawBotY = glassY + glassH - 15;

        ctx.beginPath();
        ctx.moveTo(glassX + 24, strawTopY);
        ctx.lineTo(glassX - 14, strawBotY);
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#1aa89a';
        ctx.stroke();

        // White stripe on straw
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.restore(); // end clip

      // Glass Outer Wall Shading & Refraction (Photorealistic glass shine)
      const gShine = ctx.createLinearGradient(glassX - topW / 2, 0, glassX + topW / 2, 0);
      gShine.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
      gShine.addColorStop(0.12, 'rgba(255, 255, 255, 0.12)');
      gShine.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
      gShine.addColorStop(1, 'rgba(255, 255, 255, 0.45)');
      ctx.strokeStyle = gShine;
      ctx.lineWidth = 3.5;
      ctx.stroke();

      // Specular highlight streaks down glass
      ctx.beginPath();
      ctx.moveTo(glassX - topW / 2 + 8, glassY + 15);
      ctx.lineTo(glassX - botW / 2 + 6, glassY + glassH - 10);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Top Glass Rim
      ctx.beginPath();
      ctx.ellipse(glassX, glassY, topW / 2, 6, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();

      // 4. Strawberry Garnish on Rim
      if (progress > 0.78) {
        const garP = Math.min(1, (progress - 0.78) / 0.12);
        ctx.save();
        ctx.translate(glassX - topW / 2 + 6, glassY - 6);
        ctx.scale(garP, garP);
        drawStrawberry(0, 0, 0.55, 0.85);
        ctx.restore();
      }
    };

    // -------------------------------------------------------------
    // RENDER: BURGER ASSEMBLY SEQUENCE (Photorealistic Food Animation)
    // -------------------------------------------------------------
    const renderBurgerScene = (progress) => {
      // Warm culinary backdrop glow
      const bGlow = ctx.createRadialGradient(280, 270, 30, 280, 270, 250);
      bGlow.addColorStop(0, 'rgba(242, 154, 31, 0.18)');
      bGlow.addColorStop(0.6, 'rgba(109, 76, 65, 0.1)');
      bGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bGlow;
      ctx.fillRect(0, 0, width, height);

      const cx = 280;
      const baseY = 360;

      // Cast ambient wood-table shadow
      drawShadow(cx, baseY + 36, 115, 22, 0.65);

      // Camera sway / cinematic finishing angle
      const camSway = Math.sin(progress * Math.PI * 2) * 2;
      ctx.save();
      ctx.translate(0, camSway);

      // Ease out cubic helper
      const ease = (t) => 1 - Math.pow(1 - Math.max(0, Math.min(1, t)), 3);

      // 1. Toasted Bottom Bun (progress 0.0 - 0.18)
      const bBunP = ease(progress / 0.18);
      const bBunY = baseY + (1 - bBunP) * 120;
      if (progress > 0) {
        ctx.save();
        ctx.translate(cx, bBunY);
        // Bun bread
        ctx.beginPath();
        ctx.moveTo(-90, 0);
        ctx.quadraticCurveTo(-92, 28, -70, 36);
        ctx.lineTo(70, 36);
        ctx.quadraticCurveTo(92, 28, 90, 0);
        ctx.closePath();
        const bGrad = ctx.createLinearGradient(0, -5, 0, 36);
        bGrad.addColorStop(0, '#f5cd79');
        bGrad.addColorStop(0.3, '#e58e26');
        bGrad.addColorStop(0.85, '#b75f0a');
        bGrad.addColorStop(1, '#783804');
        ctx.fillStyle = bGrad;
        ctx.fill();

        // Toasted edge rim
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Grilled Seasoned Patty (progress 0.18 - 0.35)
      if (progress > 0.14) {
        const pattyP = ease((progress - 0.14) / 0.18);
        const pattyY = (baseY - 18) + (1 - pattyP) * -160;
        ctx.save();
        ctx.translate(cx, pattyY);

        drawShadow(0, 16, 90, 14, 0.45 * pattyP);

        // Patty Body
        ctx.beginPath();
        ctx.roundRect(-94, -14, 188, 30, [10, 10, 12, 12]);
        const pGrad = ctx.createLinearGradient(0, -14, 0, 16);
        pGrad.addColorStop(0, '#533529');
        pGrad.addColorStop(0.25, '#3e2723');
        pGrad.addColorStop(0.65, '#2b1b17');
        pGrad.addColorStop(1, '#1b100d');
        ctx.fillStyle = pGrad;
        ctx.fill();

        // Char grill marks
        ctx.strokeStyle = '#120a08';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        for (let i = -65; i <= 65; i += 28) {
          ctx.moveTo(i - 8, -10);
          ctx.lineTo(i + 14, 12);
        }
        ctx.stroke();

        // Juicy glistening specks
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        for (let j = 0; j < 6; j++) {
          ctx.beginPath();
          ctx.arc(-60 + j * 24, -4 + (j % 2) * 8, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // 3. Melted Cheese Drapes naturally (progress 0.32 - 0.50)
      if (progress > 0.28) {
        const chP = ease((progress - 0.28) / 0.18);
        const chY = (baseY - 32) + (1 - chP) * -180;
        ctx.save();
        ctx.translate(cx, chY);

        // Natural melting corners draped over patty
        ctx.beginPath();
        ctx.moveTo(-96, 0);
        ctx.lineTo(96, 0);
        ctx.lineTo(94, 6);
        // Right melted drip
        ctx.quadraticCurveTo(80, 26, 68, 10);
        ctx.lineTo(35, 12);
        // Center melted drip
        ctx.quadraticCurveTo(20, 32, 4, 12);
        ctx.lineTo(-30, 12);
        // Left melted drip
        ctx.quadraticCurveTo(-50, 30, -68, 10);
        ctx.lineTo(-94, 6);
        ctx.closePath();

        const chGrad = ctx.createLinearGradient(0, -5, 0, 26);
        chGrad.addColorStop(0, '#fff200');
        chGrad.addColorStop(0.3, '#ffc048');
        chGrad.addColorStop(0.8, '#ffa801');
        chGrad.addColorStop(1, '#ff5e57');
        ctx.fillStyle = chGrad;
        ctx.fill();

        // Melt sheen highlight
        ctx.beginPath();
        ctx.moveTo(-80, 2);
        ctx.lineTo(80, 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.stroke();
        ctx.restore();
      }

      // 4. Tomato Slices (progress 0.46 - 0.62)
      if (progress > 0.42) {
        const tomP = ease((progress - 0.42) / 0.18);
        const tomY = (baseY - 48) + (1 - tomP) * -180;
        ctx.save();
        ctx.translate(cx, tomY);

        // Left Tomato Slice
        ctx.beginPath();
        ctx.ellipse(-42, 0, 48, 10, -0.06, 0, Math.PI * 2);
        const tGrad1 = ctx.createRadialGradient(-42, 0, 4, -42, 0, 48);
        tGrad1.addColorStop(0, '#ff4d4d');
        tGrad1.addColorStop(0.65, '#eb2f06');
        tGrad1.addColorStop(1, '#b71540');
        ctx.fillStyle = tGrad1;
        ctx.fill();

        // Right Tomato Slice
        ctx.beginPath();
        ctx.ellipse(40, 2, 48, 10, 0.06, 0, Math.PI * 2);
        const tGrad2 = ctx.createRadialGradient(40, 2, 4, 40, 2, 48);
        tGrad2.addColorStop(0, '#ff4d4d');
        tGrad2.addColorStop(0.65, '#eb2f06');
        tGrad2.addColorStop(1, '#b71540');
        ctx.fillStyle = tGrad2;
        ctx.fill();

        ctx.restore();
      }

      // 5. Crisp Wavy Lettuce (progress 0.58 - 0.74)
      if (progress > 0.54) {
        const letP = ease((progress - 0.54) / 0.18);
        const letY = (baseY - 64) + (1 - letP) * -190;
        ctx.save();
        ctx.translate(cx, letY);

        ctx.beginPath();
        ctx.moveTo(-102, 0);
        // Wavy crispy folds
        for (let x = -102; x <= 102; x += 18) {
          ctx.quadraticCurveTo(x + 5, -8, x + 10, 2);
          ctx.quadraticCurveTo(x + 14, 10, x + 18, 0);
        }
        ctx.lineTo(100, 10);
        ctx.quadraticCurveTo(0, 18, -102, 10);
        ctx.closePath();

        const lGrad = ctx.createLinearGradient(0, -8, 0, 16);
        lGrad.addColorStop(0, '#78e08f');
        lGrad.addColorStop(0.35, '#38ada9');
        lGrad.addColorStop(0.85, '#079992');
        lGrad.addColorStop(1, '#0c2461');
        ctx.fillStyle = lGrad;
        ctx.fill();

        // Crisp leaf ridges
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-80, -2);
        ctx.lineTo(-40, 4);
        ctx.moveTo(10, 3);
        ctx.lineTo(70, -3);
        ctx.stroke();

        ctx.restore();
      }

      // 6. Golden Sesame Top Bun (progress 0.68 - 0.86)
      if (progress > 0.64) {
        const topBunP = ease((progress - 0.64) / 0.18);
        const topBunY = (baseY - 86) + (1 - topBunP) * -220;
        ctx.save();
        ctx.translate(cx, topBunY);

        // Golden Domed Top Bun
        ctx.beginPath();
        ctx.moveTo(-96, 6);
        ctx.quadraticCurveTo(-98, -65, 0, -68);
        ctx.quadraticCurveTo(98, -65, 96, 6);
        ctx.quadraticCurveTo(0, 12, -96, 6);
        ctx.closePath();

        const tbGrad = ctx.createRadialGradient(0, -36, 12, 0, -20, 85);
        tbGrad.addColorStop(0, '#ffeaa7');
        tbGrad.addColorStop(0.28, '#fdcb6e');
        tbGrad.addColorStop(0.65, '#e17055');
        tbGrad.addColorStop(0.92, '#b75f0a');
        tbGrad.addColorStop(1, '#633005');
        ctx.fillStyle = tbGrad;
        ctx.fill();

        // Bun Glossy Specular Highlight
        ctx.beginPath();
        ctx.ellipse(0, -42, 65, 14, -0.04, 0, Math.PI * 2);
        const glossGrad = ctx.createLinearGradient(0, -56, 0, -28);
        glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glossGrad;
        ctx.fill();

        // Scattered white & golden sesame seeds
        const sesames = [
          [-55, -28], [-38, -45], [-18, -52], [6, -53], [32, -46], [58, -30],
          [-45, -12], [-22, -26], [0, -32], [24, -24], [46, -14],
          [-30, -4], [-10, -10], [14, -8], [34, -2]
        ];
        sesames.forEach(([sx, sy], idx) => {
          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate((idx * 0.4) - 0.6);
          ctx.beginPath();
          ctx.ellipse(0, 0, 2, 3.8, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#fff9d2';
          ctx.fill();
          ctx.restore();
        });

        ctx.restore();
      }

      // 7. Subtle Warm Culinary Steam (progress > 0.8)
      if (progress > 0.78) {
        ctx.save();
        const steamTime = progress * 14;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        for (let s = -40; s <= 40; s += 36) {
          ctx.beginPath();
          const sX = cx + s + Math.sin(steamTime + s) * 6;
          const sY = baseY - 160;
          ctx.moveTo(sX, sY);
          ctx.bezierCurveTo(sX - 10, sY - 35, sX + 12, sY - 65, sX - 4, sY - 95);
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.restore(); // end camera sway
    };

    // Main animation loop
    const loopDuration = 10000; // 10s per sequence
    let startTime = null;

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Cycle between Juice and Burger smoothly
      const totalCycle = (elapsed % (loopDuration * 2)) / (loopDuration * 2);
      const isJuice = totalCycle < 0.5;
      const stageProgress = (totalCycle % 0.5) * 2; // 0 to 1

      // Keep React state in sync for tab indicators without thrashing
      const currentStage = isJuice ? 'juice' : 'burger';
      if (animStateRef.current.stage !== currentStage) {
        animStateRef.current.stage = currentStage;
        setActiveStage(currentStage);
      }

      ctx.clearRect(0, 0, width, height);

      if (isJuice) {
        renderJuiceScene(stageProgress);
      } else {
        renderBurgerScene(stageProgress);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="commercial-canvas-wrapper">
      <canvas ref={canvasRef} className="commercial-food-canvas" />

      {/* Subtle indicator bar (no borders, seamlessly integrated) */}
      <div className="commercial-status-pill">
        <span className={`status-dot ${activeStage === 'juice' ? 'active' : ''}`} />
        <span className="status-label">
          {activeStage === 'juice' ? 'Fresh Fruit & Cold Smoothie' : 'Gourmet Seasoned Burger'}
        </span>
      </div>
    </div>
  );
}
