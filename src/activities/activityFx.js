import { useEffect, useRef } from "react";

// Shared confetti/sparkle burst effect used by every Discover activity
// component. One canvas, mounted once per page (idempotent by id), so
// dropping several activities on one slide doesn't stack up N canvases.
const CANVAS_ID = "sa-fx-canvas";

export const CONFETTI = ["#FF6B4A", "#F2A900", "#22A67E", "#2E97C7", "#8E6FCE"];

let particles = [];
let rafId = null;

function ensureCanvas() {
  let canvas = document.getElementById(CANVAS_ID);
  if (canvas) return canvas;
  canvas = document.createElement("canvas");
  canvas.id = CANVAS_ID;
  canvas.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:999;";
  document.body.appendChild(canvas);
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener("resize", resize);
  const ctx = canvas.getContext("2d");
  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.12; p.life -= 0.017; p.rot += p.vrot;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });
    particles = particles.filter((p) => p.life > 0);
    rafId = requestAnimationFrame(tick);
  };
  if (!rafId) tick();
  return canvas;
}

function burst(x, y, colors = CONFETTI, count = 16) {
  ensureCanvas();
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = 2 + Math.random() * 4;
    particles.push({
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2,
      size: 4 + Math.random() * 4, color: colors[Math.floor(Math.random() * colors.length)],
      life: 1, rot: Math.random() * 360, vrot: (Math.random() - 0.5) * 20,
    });
  }
}

export function burstFromElement(el, colors, count) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, colors, count);
}

// Call once per activity component to make sure the shared canvas exists.
export function useActivityFx() {
  useEffect(() => { ensureCanvas(); }, []);
}
