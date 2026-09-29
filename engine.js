// Solar System: World 02 (mod 3D).
// Lima komponen ialah planet yang mengorbit matahari; orbit berputar supaya planet aktif berada di puncak.

const REACTOR_SIZE = 440; // koordinat SVG (viewBox)
const REACTOR_CENTER = REACTOR_SIZE / 2;
const REACTOR_NODE_R = 160; // jejari kedudukan komponen (unit SVG)
const GAUGE_R = 76;
const GAUGE_C = 2 * Math.PI * GAUGE_R;
const AUTOPLAY_MS = 7000;
// Warna setiap planet (ikut susunan ENGINE_COMPONENTS)
const PLANET_COLORS = ['#B7FF3C', '#36D9FF', '#A78BFA', '#FFB547', '#5EEAD4'];

function createEngineReactor(root) {
  const items = ENGINE_COMPONENTS;
  const total = items.length;
  const stepDeg = 360 / total;
  let active = 0;
  let ringRot = 0; // putaran terkumpul (darjah) — sentiasa ikut laluan terpendek
  let shownScore = 0;
  let counterFrame = null;
  let autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let autoStart = performance.now();

  const shortName = (title) => title.split(/\s|&/)[0];
  const scoreOf = (comp) => parseInt(comp.score, 10) || 0;
  const nodePoint = (i, r = REACTOR_NODE_R) => {
    const a = ((i * stepDeg - 90) * Math.PI) / 180;
    return [REACTOR_CENTER + Math.cos(a) * r, REACTOR_CENTER + Math.sin(a) * r];
  };

  // Debu bintang (kedudukan tetap, bukan rawak, supaya sama setiap kali)
  const stars = Array.from({ length: 46 }, (_, i) => {
    const a = i * 2.39996; // sudut emas
    const r = 60 + ((i * 37) % 160);
    const x = REACTOR_CENTER + Math.cos(a) * r;
    const y = REACTOR_CENTER + Math.sin(a) * r;
    const size = 0.6 + ((i * 7) % 5) * 0.25;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size}" class="${i % 4 === 0 ? 'reactor-star twinkle' : 'reactor-star'}" style="animation-delay:${(i % 7) * 0.4}s" />`;
  }).join('');

  const energyLines = items
    .map((_, i) => {
      const [x, y] = nodePoint(i, REACTOR_NODE_R - 36);
      const [x0, y0] = nodePoint(i, GAUGE_R + 10);
      return `<line data-energy="${i}" class="energy-line" x1="${x0}" y1="${y0}" x2="${x}" y2="${y}" />`;
    })
    .join('');

  root.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      <div class="lg:col-span-5 flex justify-center">
        <div data-reactor class="reactor relative">
          <svg viewBox="0 0 ${REACTOR_SIZE} ${REACTOR_SIZE}" class="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
            <defs>
              <linearGradient id="reactor-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#B7FF3C" />
                <stop offset="100%" stop-color="#36D9FF" />
              </linearGradient>
              <radialGradient id="reactor-sun" cx="40%" cy="35%" r="70%">
                <stop offset="0%" stop-color="#1d2a14" />
                <stop offset="60%" stop-color="#0c120b" />
                <stop offset="100%" stop-color="#08090B" />
              </radialGradient>
              <radialGradient id="reactor-core-grad">
                <stop offset="0%" stop-color="rgba(183,255,60,0.35)" />
                <stop offset="70%" stop-color="rgba(183,255,60,0.04)" />
                <stop offset="100%" stop-color="rgba(183,255,60,0)" />
              </radialGradient>
            </defs>

            <g class="reactor-ticks">${stars}</g>
            <circle cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="206" fill="none" stroke="rgba(255,255,255,0.06)" />
            <circle class="reactor-orbit" cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${REACTOR_NODE_R}" fill="none" stroke="rgba(183,255,60,0.28)" />

            <g data-ring-svg class="reactor-ring">${energyLines}</g>

            <circle cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${GAUGE_R + 40}" fill="url(#reactor-core-grad)" class="reactor-pulse" />
            <circle cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${GAUGE_R}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="10" />
            <circle data-gauge class="reactor-gauge" cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${GAUGE_R}" fill="none" stroke="url(#reactor-grad)" stroke-width="10" stroke-linecap="round"
              stroke-dasharray="${GAUGE_C}" stroke-dashoffset="${GAUGE_C}" transform="rotate(-90 ${REACTOR_CENTER} ${REACTOR_CENTER})" />
            <circle cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${GAUGE_R - 16}" fill="url(#reactor-sun)" />
            <circle class="reactor-spin" cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${GAUGE_R - 24}" fill="none" stroke="rgba(54,217,255,0.45)" stroke-dasharray="14 10" />
            <circle class="reactor-spin reverse" cx="${REACTOR_CENTER}" cy="${REACTOR_CENTER}" r="${GAUGE_R + 26}" fill="none" stroke="rgba(183,255,60,0.25)" stroke-dasharray="3 12" />

            <!-- Penanda puncak orbit -->
            <circle cx="${REACTOR_CENTER}" cy="4" r="4" fill="#B7FF3C" class="reactor-pointer" />
          </svg>

          <!-- Paparan tengah -->
          <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span class="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#9299A5]">PROFICIENCY</span>
            <span class="text-3xl sm:text-5xl font-black font-mono tabular-nums text-[#F4F5F7] leading-none mt-1"><span data-score>0</span><span class="text-[#B7FF3C] text-xl sm:text-2xl">%</span></span>
            <span data-core-title class="mt-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#36D9FF]"></span>
          </div>

          <!-- Komponen (butang HTML supaya boleh diklik & diakses) -->
          <div data-ring class="reactor-ring absolute inset-0">
            ${items
              .map(
                (comp, i) => `
              <div data-node-pos="${i}" class="reactor-node-pos">
                <button type="button" data-node="${i}" class="reactor-node" style="--p:${PLANET_COLORS[i % PLANET_COLORS.length]}" aria-label="${esc(comp.title)}">
                  <span class="reactor-node-code">${comp.code}</span>
                  <span class="reactor-node-name">${esc(shortName(comp.title))}</span>
                </button>
              </div>`
              )
              .join('')}
          </div>
        </div>
      </div>

      <div class="lg:col-span-7" data-spec aria-live="polite"></div>
    </div>`;

  const reactor = $('[data-reactor]', root);
  const ringSvg = $('[data-ring-svg]', root);
  const ringHtml = $('[data-ring]', root);
  const gauge = $('[data-gauge]', root);
  const scoreEl = $('[data-score]', root);
  const spec = $('[data-spec]', root);
  const nodePos = $$('[data-node-pos]', root);

  const layoutRing = () => {
    ringSvg.style.transform = `rotate(${ringRot}deg)`;
    ringHtml.style.transform = `rotate(${ringRot}deg)`;
    nodePos.forEach((el, i) => {
      const a = i * stepDeg;
      // Letak di sekeliling bulatan, kemudian pusing semula supaya teks sentiasa tegak
      el.style.transform = `rotate(${a}deg) translateY(calc(var(--node-r) * -1)) rotate(${-a - ringRot}deg)`;
    });
  };

  const countTo = (target) => {
    cancelAnimationFrame(counterFrame);
    const from = shownScore;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / 1000);
      const e = 1 - Math.pow(1 - t, 3);
      shownScore = Math.round(from + (target - from) * e);
      scoreEl.textContent = shownScore;
      if (t < 1) counterFrame = requestAnimationFrame(tick);
    };
    counterFrame = requestAnimationFrame(tick);
  };

  const renderSpec = (comp) => {
    spec.innerHTML = `
      <div class="engine-spec relative p-5 sm:p-7 rounded-2xl bg-[#101318]/90 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div class="spec-planet-glow" style="--p:${PLANET_COLORS[active % PLANET_COLORS.length]}"></div>

        <div class="spec-in flex items-center justify-between text-[11px] font-mono">
          <span class="flex items-center gap-2 tracking-widest" style="color:${PLANET_COLORS[active % PLANET_COLORS.length]}">
            <span class="spec-planet-dot" style="--p:${PLANET_COLORS[active % PLANET_COLORS.length]}"></span>PLANET ${comp.code}
          </span>
          <span class="text-[#9299A5]">ORBIT ${comp.code} OF 0${total}</span>
        </div>

        <h3 class="spec-wipe mt-2 text-2xl sm:text-3xl font-black font-display tracking-tight text-[#F4F5F7]">${esc(comp.title)}</h3>

        ${
          comp.image
            ? `<div class="spec-in relative mt-4 rounded-xl overflow-hidden border border-white/10 aspect-[21/7] bg-[#08090B]" style="animation-delay:.08s">
                <img src="${esc(comp.image)}" alt="${esc(comp.title)}" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#101318] via-transparent to-transparent"></div>
              </div>`
            : ''
        }

        <p class="spec-in mt-4 text-sm sm:text-[15px] text-[#F4F5F7]/85 leading-relaxed" style="animation-delay:.14s">${esc(comp.role)}</p>

        <div class="spec-in mt-5" style="animation-delay:.2s">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#9299A5]">Moons · Core Technologies</span>
            <span class="text-[11px] font-mono text-[#B7FF3C]">${comp.technologies.length} ${comp.technologies.length === 1 ? 'MOON' : 'MOONS'}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            ${comp.technologies
              .map(
                (tech, i) => `
              <span class="moon-pill" style="animation-delay:${0.25 + i * 0.07}s">
                <span class="moon-pill-orbit" style="animation-duration:${3 + (i % 3)}s"><span></span></span>
                <span>${esc(tech)}</span>
              </span>`
              )
              .join('')}
          </div>
        </div>

        <div class="spec-in mt-5 p-3.5 rounded-xl bg-[#08090B]/90 border border-white/10" style="animation-delay:.3s">
          <div class="flex items-center gap-2 text-[11px] font-mono text-[#36D9FF]">
            ${icon('circle-check', 'w-3.5 h-3.5')}<span>HIGHLIGHTED REAL-WORLD PROJECT</span>
          </div>
          <p class="mt-1 text-xs sm:text-sm text-[#9299A5] leading-relaxed">${esc(comp.relatedProject)}</p>
        </div>

        <div class="spec-in mt-5 flex items-center justify-between gap-3" style="animation-delay:.36s">
          <div class="flex items-center gap-2">
            <button type="button" data-step="-1" class="p-2.5 rounded-lg bg-[#08090B] border border-white/10 text-[#F4F5F7] hover:border-[#B7FF3C] hover:text-[#B7FF3C] transition-colors cursor-pointer" aria-label="Previous component">${icon('arrow-left', 'w-4 h-4')}</button>
            <button type="button" data-step="1" class="p-2.5 rounded-lg bg-[#08090B] border border-white/10 text-[#F4F5F7] hover:border-[#B7FF3C] hover:text-[#B7FF3C] transition-colors cursor-pointer" aria-label="Next component">${icon('arrow-right', 'w-4 h-4')}</button>
          </div>
          <button type="button" data-autoplay class="flex items-center gap-2 text-[11px] font-mono text-[#9299A5] hover:text-[#F4F5F7] transition-colors cursor-pointer">
            ${icon(autoplay ? 'pause' : 'play', 'w-3.5 h-3.5')}<span>${autoplay ? 'AUTO-ORBIT ON' : 'AUTO-ORBIT OFF'}</span>
          </button>
        </div>

        <div class="absolute bottom-0 inset-x-0 h-0.5 bg-white/5">
          <div data-auto-progress class="h-full bg-gradient-to-r from-[#B7FF3C] to-[#36D9FF]" style="width:0"></div>
        </div>
      </div>`;
    refreshIcons();
  };

  function select(idx, { fromUser = false } = {}) {
    const next = ((idx % total) + total) % total;
    // Laluan terpendek supaya cincin tidak berpusing jauh
    let delta = (-next * stepDeg - ringRot) % 360;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    ringRot += delta;
    active = next;
    if (fromUser) autoplay = false;
    autoStart = performance.now();

    const comp = items[next];
    layoutRing();
    $$('[data-node]', root).forEach((btn, i) => {
      btn.classList.toggle('is-active', i === next);
      btn.setAttribute('aria-pressed', String(i === next));
    });
    $$('[data-energy]', root).forEach((line, i) => line.classList.toggle('is-active', i === next));
    gauge.style.strokeDashoffset = String(GAUGE_C * (1 - scoreOf(comp) / 100));
    $('[data-core-title]', root).textContent = shortName(comp.title);
    countTo(scoreOf(comp));
    renderSpec(comp);
  }

  // Dihidupkan setiap kali World 02 dibuka: cincin berpusing penuh & gauge naik dari kosong
  function ignite() {
    reactor.classList.remove('is-igniting');
    void reactor.offsetWidth;
    reactor.classList.add('is-igniting');
    ringRot -= 360;
    shownScore = 0;
    gauge.style.transition = 'none';
    gauge.style.strokeDashoffset = String(GAUGE_C);
    void gauge.getBoundingClientRect();
    gauge.style.transition = '';
    select(active);
  }

  root.addEventListener('click', (e) => {
    const node = e.target.closest('[data-node]');
    if (node) return select(Number(node.dataset.node), { fromUser: true });
    const step = e.target.closest('[data-step]');
    if (step) return select(active + Number(step.dataset.step), { fromUser: true });
    if (e.target.closest('[data-autoplay]')) {
      autoplay = !autoplay;
      autoStart = performance.now();
      renderSpec(items[active]);
    }
  });

  // Autoplay: bergerak ke komponen seterusnya selagi World 02 kelihatan
  setInterval(() => {
    const bar = $('[data-auto-progress]', root);
    if (!autoplay || !root.offsetParent) {
      if (bar) bar.style.width = '0';
      autoStart = performance.now();
      return;
    }
    const t = (performance.now() - autoStart) / AUTOPLAY_MS;
    if (bar) bar.style.width = `${Math.min(100, t * 100)}%`;
    if (t >= 1) select(active + 1);
  }, 100);

  select(0);
  return { ignite };
}
