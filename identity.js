// Home Planet: World 01 (mod 3D) — potret di dalam planet bercahaya, tag berkemahiran sebagai bulan yang mengorbit.

function countUp(el, delay = 0, duration = 1100) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  let frame = null;
  const t0 = performance.now() + delay;
  el.textContent = `0${suffix}`;
  const tick = (now) => {
    const t = Math.min(1, Math.max(0, (now - t0) / duration));
    el.textContent = `${Math.round(target * (1 - Math.pow(1 - t, 3)))}${suffix}`;
    if (t < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

// Mainkan semula animasi CSS "masuk" pada sebuah elemen (buang kelas, paksa reflow, tambah semula)
function replayEntrance(el) {
  el.classList.remove('is-entering');
  void el.offsetWidth;
  el.classList.add('is-entering');
}

function createIdentity(root) {
  const system = $('[data-home]', root);
  const counters = $$('[data-count]', root);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cancels = [];

  // Dua orbit (sama dengan elips SVG dalam markup): bulan dalam & bulan luar
  createOrbiters(system, [
    { el: $('[data-moon="0"]', root), rx: 0.47, ry: 0.16, speed: 0.32, phase: 0.4 },
    { el: $('[data-moon="1"]', root), rx: 0.47, ry: 0.16, speed: 0.32, phase: 0.4 + Math.PI },
    { el: $('[data-moon="2"]', root), rx: 0.4, ry: 0.26, speed: -0.24, phase: 2.2 },
    { el: $('[data-moon="3"]', root), rx: 0.4, ry: 0.26, speed: -0.24, phase: 2.2 + Math.PI },
  ]);

  function play() {
    cancels.forEach((c) => c());
    cancels = [];
    if (reduced) return;
    replayEntrance(root);
    counters.forEach((el, i) => cancels.push(countUp(el, 700 + i * 150)));
  }

  return { play };
}
