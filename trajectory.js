// Mission Trajectory: World 04 (mod 3D) — satu request terbang seperti kapal angkasa melalui 7 planet
// (lapisan seni bina), dari pengguna hingga aplikasi langsung.

const TRAJ_W = 600;
const TRAJ_H = 400;

// Kedudukan planet (unit SVG) — laluan melengkung dari kiri bawah ke kanan atas
const TRAJ_STOPS = [
  [70, 318],
  [160, 196],
  [262, 112],
  [338, 222],
  [420, 306],
  [506, 208],
  [540, 78],
];
const TRAJ_SIZES = [34, 30, 32, 36, 30, 30, 42]; // diameter planet (unit SVG)
const TRAJ_COLORS = ['#36D9FF', '#B7FF3C', '#A78BFA', '#FFB547', '#5EEAD4', '#7DD3FC', '#B7FF3C'];
const TRAJ_ICONS = {
  user: 'user',
  frontend: 'layout-template',
  backend: 'code-xml',
  database: 'database',
  server: 'server',
  deployment: 'globe',
  'live-app': 'rocket',
};
const TRAJ_SHORT = { deployment: 'DEPLOY', 'live-app': 'LIVE APP' };

// Laluan licin (Catmull-Rom) disampel menjadi garisan halus — kedudukan kapal dikira dari sini
function buildTrajectory(points, steps = 28) {
  const out = [];
  const stopIndex = [0];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    for (let s = i === 0 ? 0 : 1; s <= steps; s++) {
      const t = s / steps;
      const t2 = t * t;
      const t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
    stopIndex.push(out.length - 1);
  }
  const cum = [0];
  for (let i = 1; i < out.length; i++) cum.push(cum[i - 1] + Math.hypot(out[i][0] - out[i - 1][0], out[i][1] - out[i - 1][1]));
  return { points: out, cum, stopAt: stopIndex.map((i) => cum[i]), length: cum[cum.length - 1] };
}

function createMissionTrajectory(root) {
  const layers = ARCHITECTURE_LAYERS;
  const total = layers.length;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const logs = ARCHITECTURE_FLOW_LOGS.steps.map((line) => {
    const m = line.match(/^\[(\d+)ms\]\s*(.*)$/);
    return m ? { ms: Number(m[1]), text: m[2] } : { ms: 0, text: line };
  });
  const traj = buildTrajectory(TRAJ_STOPS);
  const pathD = 'M' + traj.points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L');

  // Kedudukan & arah pada jarak tertentu di sepanjang laluan
  const pointAt = (len) => {
    const d = Math.max(0, Math.min(traj.length, len));
    let i = 1;
    while (i < traj.cum.length - 1 && traj.cum[i] < d) i++;
    const [x0, y0] = traj.points[i - 1];
    const [x1, y1] = traj.points[i];
    const seg = traj.cum[i] - traj.cum[i - 1] || 1;
    const t = (d - traj.cum[i - 1]) / seg;
    return { x: x0 + (x1 - x0) * t, y: y0 + (y1 - y0) * t, angle: (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI };
  };

  const stars = Array.from({ length: 70 }, (_, i) => {
    const x = (i * 97.3) % TRAJ_W;
    const y = (i * 53.7 + (i % 5) * 31) % TRAJ_H;
    const r = 0.5 + ((i * 13) % 4) * 0.3;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" class="${i % 5 === 0 ? 'traj-star twinkle' : 'traj-star'}" style="animation-delay:${(i % 9) * 0.35}s" />`;
  }).join('');

  let selected = 0;
  let run = null;

  root.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div class="lg:col-span-7">
        <div data-space class="traj-space">
          <svg viewBox="0 0 ${TRAJ_W} ${TRAJ_H}" class="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <filter id="traj-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <linearGradient id="traj-lit" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stop-color="#36D9FF" />
                <stop offset="100%" stop-color="#B7FF3C" />
              </linearGradient>
            </defs>

            <g>${stars}</g>
            <ellipse cx="300" cy="230" rx="330" ry="120" class="traj-far-orbit" />
            <ellipse cx="300" cy="230" rx="250" ry="80" class="traj-far-orbit" />

            <path class="traj-path" d="${pathD}" />
            <path class="traj-idle" d="${pathD}" />
            <path data-lit class="traj-lit" d="${pathD}" />

            <g data-ship class="traj-ship" opacity="0">
              <circle r="12" fill="rgba(183,255,60,0.18)" />
              <g data-ship-body>
                <path d="M9 0 L-6 -5.5 L-3 0 L-6 5.5 Z" fill="#EAFFC2" filter="url(#traj-glow)" />
                <path d="M-4 0 L-13 -2.5 L-11 0 L-13 2.5 Z" fill="#FFB547" class="traj-flame" />
              </g>
            </g>
          </svg>

          ${layers
            .map((layer, i) => {
              const [x, y] = TRAJ_STOPS[i];
              return `
              <button type="button" data-planet="${i}" class="traj-planet" style="left:${(x / TRAJ_W) * 100}%; top:${(y / TRAJ_H) * 100}%; --p:${TRAJ_COLORS[i]}; --s:${(TRAJ_SIZES[i] / TRAJ_W) * 100}cqw" aria-label="${esc(layer.title)}">
                <span class="traj-planet-body">${icon(TRAJ_ICONS[layer.id] || 'circle', 'w-3.5 h-3.5')}</span>
                <span class="traj-planet-name">${esc(TRAJ_SHORT[layer.id] || layer.title)}</span>
                <span data-ms class="traj-planet-ms"></span>
              </button>`;
            })
            .join('')}

          <div data-arrived class="traj-arrived" aria-hidden="true">ARRIVED · 200 OK</div>
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button type="button" data-launch class="px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer bg-[#B7FF3C] hover:bg-[#a5ee2e] text-[#08090B] shadow-[0_0_25px_rgba(183,255,60,0.35)] disabled:opacity-50 disabled:cursor-wait">
            ${icon('rocket', 'w-3.5 h-3.5')}<span data-launch-label>Launch Request</span>
          </button>
          <div class="flex items-center gap-4 text-[11px] font-mono">
            <span class="text-[#9299A5]">PAYLOAD <span class="text-[#36D9FF]">POST /api/register</span></span>
            <span class="text-[#9299A5]">TRAVEL TIME <span data-latency class="text-[#B7FF3C] tabular-nums">0ms</span></span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-4">
        <div data-detail class="p-5 sm:p-6 rounded-2xl bg-[#101318]/90 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden relative"></div>

        <div class="traj-log">
          <div class="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
            <span class="flex items-center gap-1.5 text-[#36D9FF]">${icon('satellite', 'w-3.5 h-3.5')}<span>MISSION LOG</span></span>
            <span data-status class="text-[#9299A5]">STANDBY</span>
          </div>
          <div data-logs class="traj-logs pt-2 space-y-1"></div>
        </div>
      </div>
    </div>`;

  const space = $('[data-space]', root);
  const lit = $('[data-lit]', root);
  const ship = $('[data-ship]', root);
  const shipBody = $('[data-ship-body]', root);
  const planets = $$('[data-planet]', root);
  const detail = $('[data-detail]', root);
  const logBox = $('[data-logs]', root);
  const status = $('[data-status]', root);
  const latency = $('[data-latency]', root);
  const launchBtn = $('[data-launch]', root);
  const launchLabel = $('[data-launch-label]', root);

  lit.style.strokeDasharray = `${traj.length}`;
  lit.style.strokeDashoffset = `${traj.length}`;

  const renderDetail = (i) => {
    const layer = layers[i];
    detail.innerHTML = `
      <div class="traj-detail-glow" style="--p:${TRAJ_COLORS[i]}"></div>
      <div class="traj-in relative flex items-center justify-between gap-3">
        <span class="text-[11px] font-mono tracking-widest uppercase" style="color:${TRAJ_COLORS[i]}">Stop 0${i + 1} · ${esc(layer.subtitle)}</span>
        <span class="traj-detail-planet" style="--p:${TRAJ_COLORS[i]}"></span>
      </div>
      <h3 class="traj-wipe relative mt-1 text-2xl sm:text-3xl font-black font-display tracking-tight text-[#F4F5F7]">${esc(layer.title)}</h3>
      <p class="traj-in relative mt-3 text-sm text-[#F4F5F7]/85 leading-relaxed" style="animation-delay:.08s">${esc(layer.description)}</p>
      <div class="traj-in relative mt-4 flex flex-wrap gap-2" style="animation-delay:.14s">
        ${layer.technologies
          .map((t) => `<span class="px-2.5 py-1 rounded-full bg-[#08090B] border border-white/10 text-[11px] font-mono text-[#F4F5F7]">${esc(t)}</span>`)
          .join('')}
      </div>
      <div class="traj-in relative mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5" style="animation-delay:.2s">
        <div class="p-3 rounded-xl bg-[#08090B]/90 border border-white/10">
          <span class="text-[10px] font-mono text-[#B7FF3C] uppercase tracking-wider">Skills Connected</span>
          <p class="mt-1 text-xs text-[#9299A5] leading-relaxed">${esc(layer.skillsConnected)}</p>
        </div>
        <div class="p-3 rounded-xl bg-[#08090B]/90 border border-white/10">
          <span class="text-[10px] font-mono text-[#36D9FF] uppercase tracking-wider">Project Example</span>
          <p class="mt-1 text-xs text-[#9299A5] leading-relaxed">${esc(layer.relatedProject)}</p>
        </div>
      </div>`;
    refreshIcons();
  };

  const select = (i) => {
    selected = i;
    planets.forEach((planet, k) => planet.classList.toggle('is-selected', k === i));
    renderDetail(i);
  };

  const addLog = (entry, i) => {
    const row = document.createElement('div');
    row.className = 'traj-log-row';
    row.innerHTML = `<span class="text-[#9299A5]">T+${String(entry.ms).padStart(3, '0')}ms</span> <span class="${i === total - 1 ? 'text-[#B7FF3C]' : 'text-[#F4F5F7]'}">${esc(entry.text)}</span>`;
    logBox.appendChild(row);
    logBox.scrollTop = logBox.scrollHeight;
  };

  const placeShip = (len) => {
    const p = pointAt(len);
    ship.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
    shipBody.setAttribute('transform', `rotate(${p.angle.toFixed(1)})`);
    lit.style.strokeDashoffset = `${traj.length - len}`;
  };

  const reset = () => {
    if (run) cancelAnimationFrame(run.frame);
    run = null;
    space.classList.remove('is-arrived', 'is-flying');
    planets.forEach((planet) => {
      planet.classList.remove('is-visited', 'is-arriving');
      $('[data-ms]', planet).textContent = '';
    });
    lit.style.strokeDashoffset = `${traj.length}`;
    ship.setAttribute('opacity', '0');
    logBox.innerHTML = `<div class="text-[#9299A5]">${esc(ARCHITECTURE_FLOW_LOGS.start.replace(/^\[\d+ms\]\s*/, ''))}</div>`;
    latency.textContent = '0ms';
    status.textContent = 'STANDBY';
  };

  const arrive = (i) => {
    const planet = planets[i];
    planet.classList.remove('is-arriving');
    void planet.offsetWidth;
    planet.classList.add('is-arriving', 'is-visited');
    $('[data-ms]', planet).textContent = `${logs[i].ms}ms`;
    latency.textContent = `${logs[i].ms}ms`;
    addLog(logs[i], i);
    select(i);
  };

  function finish() {
    run = null;
    space.classList.remove('is-flying');
    space.classList.add('is-arrived');
    status.textContent = 'ARRIVED · 200 OK';
    launchBtn.disabled = false;
    launchLabel.textContent = 'Launch Again';
  }

  function launch() {
    reset();
    space.classList.add('is-flying');
    launchBtn.disabled = true;
    launchLabel.textContent = 'In Transit…';
    status.textContent = 'IN TRANSIT';
    arrive(0);

    if (reduced) {
      for (let i = 1; i < total; i++) arrive(i);
      lit.style.strokeDashoffset = '0';
      finish();
      return;
    }

    ship.setAttribute('opacity', '1');
    placeShip(0);
    const TRAVEL_MS = 620;
    const HOLD_MS = 240;
    let stage = 0;
    let segStart = performance.now() + HOLD_MS;

    const step = (now) => {
      const t = Math.max(0, Math.min(1, (now - segStart) / TRAVEL_MS));
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      placeShip(traj.stopAt[stage] + (traj.stopAt[stage + 1] - traj.stopAt[stage]) * e);
      if (t >= 1) {
        stage++;
        arrive(stage);
        if (stage >= total - 1) return finish();
        segStart = now + HOLD_MS;
      }
      run.frame = requestAnimationFrame(step);
    };
    run = { frame: requestAnimationFrame(step) };
  }

  root.addEventListener('click', (e) => {
    const planet = e.target.closest('[data-planet]');
    if (planet) return select(Number(planet.dataset.planet));
    if (e.target.closest('[data-launch]')) launch();
  });

  reset();
  select(0);

  // Dimainkan setiap kali World 04 dibuka: pelancaran pertama secara automatik
  return {
    play() {
      setTimeout(() => {
        if (root.offsetParent) launch();
      }, 500);
    },
  };
}
