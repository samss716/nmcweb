// scripts/app.js

// Grab the canvas living INSIDE the posters/announcements section
const canvas = document.getElementById('hydraCanvas');

// Bail out safely if the canvas isn't present
if (canvas) {
  // Create a Hydra instance bound to THIS canvas only
  const hydra = new Hydra({
    canvas,
    detectAudio: false,
    enableStreamCapture: false
  });

  // Keep Hydra's render resolution matched to the element's CSS size (and DPR)
  const resizeToContainer = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2)); // cap DPR for perf if desired
    hydra.setResolution(
      Math.floor(rect.width * dpr),
      Math.floor(rect.height * dpr)
    );
  };

  // Observe size changes of the section
  const ro = new ResizeObserver(resizeToContainer);
  ro.observe(canvas.parentElement);
  window.addEventListener('orientationchange', resizeToContainer);
  window.addEventListener('load', resizeToContainer);
  resizeToContainer();

  // --- Your visual (same as before, but now in JS) ---
  // Feel free to tweak params to taste
  osc(10, 0.1, 0.8)
    .rotate(0, 0.1)
    .kaleid()
    .color(-1, 1)
    .out();
}
