// Launch Station: World 05 (mod 3D) — satelit saluran hubungan mengorbit planet MSD + borang "Mission Brief".

const LAUNCH_STAGES = ['PREPARING', 'LIFT-OFF', 'IN ORBIT', 'DELIVERED'];

function createUplink(root) {
  const station = $('[data-station]', root);
  const clock = $('[data-clock]', root);
  const form = $('[data-contact-form]', root);
  const progress = $('[data-uplink]', root);
  const bar = $('[data-uplink-bar]', root);
  const stageLabel = $('[data-uplink-stage]', root);
  const counter = $('[data-char-count]', root);
  const submitBtn = $('button[type="submit"]', form);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Satelit: tiga orbit condong (sama dengan elips SVG dalam markup)
  const orbiters = createOrbiters(station, [
    { el: $('[data-sat="0"]', root), rx: 0.44, ry: 0.15, tilt: -14, speed: 0.34, phase: 0.6 },
    { el: $('[data-sat="1"]', root), rx: 0.36, ry: 0.22, tilt: 22, speed: -0.28, phase: 2.4 },
    { el: $('[data-sat="2"]', root), rx: 0.28, ry: 0.11, tilt: -38, speed: 0.46, phase: 4.2 },
  ]);

  // Jam masa tempatan Malaysia (langsung)
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kuala_Lumpur',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const tickClock = () => {
    if (root.offsetParent) clock.textContent = fmt.format(new Date());
  };
  tickClock();
  setInterval(tickClock, 1000);

  // Kiraan aksara mesej
  const message = form.elements.message;
  const updateCount = () => (counter.textContent = String(message.value.length));
  message.addEventListener('input', updateCount);
  updateCount();

  // Animasi pelancaran sebelum pilihan penghantaran dipaparkan
  function transmit(done) {
    if (reduced) return done();
    submitBtn.disabled = true;
    progress.hidden = false;
    station.classList.remove('is-launching');
    void station.offsetWidth;
    station.classList.add('is-launching');
    root.classList.add('is-launching');
    orbiters.setBoost(5);

    const stepMs = 480;
    LAUNCH_STAGES.forEach((stage, i) => {
      setTimeout(() => {
        stageLabel.textContent = stage;
        bar.style.width = `${((i + 1) / LAUNCH_STAGES.length) * 100}%`;
        $$('[data-stage-dot]', progress).forEach((dot, k) => dot.classList.toggle('is-on', k <= i));
      }, i * stepMs);
    });

    setTimeout(() => {
      station.classList.remove('is-launching');
      root.classList.remove('is-launching');
      orbiters.setBoost(1);
      progress.hidden = true;
      bar.style.width = '0';
      submitBtn.disabled = false;
      done();
    }, LAUNCH_STAGES.length * stepMs + 350);
  }

  // Dimainkan setiap kali World 05 dibuka
  function play() {
    tickClock();
    if (!reduced) replayEntrance(root);
  }

  return { play, transmit };
}
