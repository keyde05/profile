// Mod 2D: seksyen bertema orbit (Engine, Capabilities, Projects, Architecture, Workflow, Services, About, Contact).

const ORBIT_PALETTE = ['#B7FF3C', '#36D9FF', '#A78BFA', '#FFB547', '#5EEAD4', '#7DD3FC'];
const REDUCED_2D = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Jalankan `fn` sekali apabila elemen mula kelihatan pada skrin
function onceVisible(el, fn, threshold = 0.3) {
  if (!('IntersectionObserver' in window)) return fn();
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        fn();
      }
    },
    { threshold }
  );
  io.observe(el);
}

// Main video dalam skrin penuh dengan bunyi & kawalan; kembali senyap bila keluar
function playVideoFullscreen(video) {
  video.currentTime = 0;
  video.muted = false;
  video.controls = true;
  const request = video.requestFullscreen || video.webkitRequestFullscreen;
  if (request) Promise.resolve(request.call(video)).catch(() => {});
  else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
  video.play().catch(() => {});

  const restore = () => {
    if ((document.fullscreenElement || document.webkitFullscreenElement) === video) return;
    video.controls = false;
    video.muted = true;
    document.removeEventListener('fullscreenchange', restore);
    document.removeEventListener('webkitfullscreenchange', restore);
    video.removeEventListener('webkitendfullscreen', restore);
  };
  document.addEventListener('fullscreenchange', restore);
  document.addEventListener('webkitfullscreenchange', restore);
  video.addEventListener('webkitendfullscreen', restore);
}

/* ============================================================
   01 · Inside the MSD Engine — "Constellation"
   ============================================================ */
function initEngine2D() {
  const root = $('#engine-orbit');
  const items = ENGINE_MODULES;
  const icons = { frontend: 'layers', backend: 'cpu', infrastructure: 'server', cms: 'globe', tools: 'terminal' };
  let active = 0;

  // Titik di sepanjang lengkung Bézier kuadratik (koordinat viewBox 1000 x 200)
  const P0 = [30, 170], P1 = [500, -40], P2 = [970, 170];
  const pointAt = (t) => [
    (1 - t) ** 2 * P0[0] + 2 * (1 - t) * t * P1[0] + t ** 2 * P2[0],
    (1 - t) ** 2 * P0[1] + 2 * (1 - t) * t * P1[1] + t ** 2 * P2[1],
  ];

  root.innerHTML = `
    <div class="eng2d-track">
      <svg viewBox="0 0 1000 200" preserveAspectRatio="none" class="eng2d-arc" aria-hidden="true">
        <path d="M${P0} Q${P1} ${P2}" class="eng2d-arc-base" />
        <path d="M${P0} Q${P1} ${P2}" class="eng2d-arc-flow" />
      </svg>
      ${items
        .map((m, i) => {
          const [x, y] = pointAt(0.1 + (i / (items.length - 1)) * 0.8);
          return `
          <button type="button" data-eng="${i}" class="eng2d-planet" style="left:${x / 10}%; top:${y / 2}%; --p:${ORBIT_PALETTE[i]}" aria-label="${esc(m.title)}">
            <span class="eng2d-orb">${icon(icons[m.id] || 'cpu', 'w-5 h-5')}</span>
            <span class="eng2d-name">${esc(m.title.replace(/ (ENGINE|SOLUTIONS|TOOLS)$/, ''))}</span>
          </button>`;
        })
        .join('')}
    </div>
    <div data-eng-detail class="eng2d-detail" aria-live="polite"></div>`;

  const detail = $('[data-eng-detail]', root);

  const render = () => {
    const m = items[active];
    const color = ORBIT_PALETTE[active];
    $$('[data-eng]', root).forEach((b, i) => {
      b.classList.toggle('is-active', i === active);
      b.setAttribute('aria-pressed', String(i === active));
    });
    detail.innerHTML = `
      <div class="eng2d-visual" style="--p:${color}">
        <img src="${esc(m.image)}" alt="${esc(m.title)}" loading="lazy" />
      </div>
      <div class="eng2d-copy">
        <span class="eng2d-kicker" style="color:${color}"><span class="eng2d-dot" style="--p:${color}"></span>Planet ${m.code} of 0${items.length}</span>
        <h3 class="rise2d">${esc(m.title)}</h3>
        <p class="rise2d" style="animation-delay:.06s">${esc(m.description)}</p>
        <blockquote class="rise2d" style="animation-delay:.12s; --p:${color}">${esc(m.practicalApplication)}</blockquote>
        <div class="eng2d-moons rise2d" style="animation-delay:.18s">
          ${m.technologies.map((t) => `<span><i style="--p:${color}"></i>${esc(t)}</span>`).join('')}
        </div>
        <div class="eng2d-nav rise2d" style="animation-delay:.24s">
          <button type="button" data-eng-step="-1" class="round2d" aria-label="Previous module">${icon('arrow-left', 'w-4 h-4')}</button>
          <button type="button" data-eng-step="1" class="round2d" aria-label="Next module">${icon('arrow-right', 'w-4 h-4')}</button>
        </div>
      </div>`;
    refreshIcons();
  };

  root.addEventListener('click', (e) => {
    const planet = e.target.closest('[data-eng]');
    const step = e.target.closest('[data-eng-step]');
    if (planet) active = Number(planet.dataset.eng);
    else if (step) active = (active + Number(step.dataset.engStep) + items.length) % items.length;
    else return;
    render();
  });

  render();
}

/* ============================================================
   02 · Technical Capabilities — "Orbit Gauges"
   ============================================================ */
function initSkills2D() {
  const root = $('#skills-orbit');
  const skills = TECHNICAL_SKILLS;
  let active = 0;
  let filter = 'All';

  root.innerHTML = `
    <div class="sk2d-filters" role="group" aria-label="Filter by proficiency">
      ${['All', 'Advanced', 'Proficient'].map((f) => `<button type="button" data-sk-filter="${f}" class="chip2d">${f}</button>`).join('')}
    </div>
    <div class="sk2d-gauges">
      ${skills
        .map(
          (s, i) => `
        <button type="button" data-sk="${i}" class="sk2d-gauge" style="--p:${ORBIT_PALETTE[i]}" aria-label="${esc(s.category)} ${s.percentage}%">
          <span class="sk2d-ring">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="42" class="sk2d-ring-track" />
              <circle cx="50" cy="50" r="42" class="sk2d-ring-fill" pathLength="100" data-pct="${s.percentage}" />
            </svg>
            <span class="sk2d-sat" style="--pct:${s.percentage}"></span>
            <strong>${s.percentage}<small>%</small></strong>
          </span>
          <span class="sk2d-label">${esc(s.category)}</span>
          <span class="sk2d-rank">Rank ${esc(s.rank)}</span>
        </button>`
        )
        .join('')}
    </div>
    <div data-sk-detail class="sk2d-detail" aria-live="polite"></div>`;

  const detail = $('[data-sk-detail]', root);

  const render = () => {
    const s = skills[active];
    const color = ORBIT_PALETTE[active];
    const techs = s.technologies.filter((t) => filter === 'All' || t.proficiency === filter);
    $$('[data-sk]', root).forEach((b, i) => b.classList.toggle('is-active', i === active));
    $$('[data-sk-filter]', root).forEach((b) => {
      b.classList.toggle('is-active', b.dataset.skFilter === filter);
      b.setAttribute('aria-pressed', String(b.dataset.skFilter === filter));
    });
    detail.innerHTML = `
      <div class="sk2d-detail-head">
        <div>
          <span class="eng2d-kicker" style="color:${color}"><span class="eng2d-dot" style="--p:${color}"></span>${s.percentage}% · Rank ${esc(s.rank)}</span>
          <h3>${esc(s.category)}</h3>
        </div>
        <span class="sk2d-count">${techs.length} ${filter === 'All' ? 'technologies' : filter.toLowerCase()}</span>
      </div>
      <div class="sk2d-list">
        ${
          techs.length
            ? techs
                .map(
                  (t, i) => `
            <div class="sk2d-tech rise2d" style="animation-delay:${i * 0.05}s; --p:${color}">
              <span class="sk2d-tech-orbit"><i></i></span>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <strong>${esc(t.name)}</strong>
                  <span class="sk2d-badge ${t.proficiency === 'Advanced' ? 'is-adv' : ''}">${esc(t.proficiency)}</span>
                </div>
                <p>${esc(t.note)}</p>
              </div>
            </div>`
                )
                .join('')
            : `<p class="sk2d-empty">No ${filter.toLowerCase()} technologies in this category.</p>`
        }
      </div>`;
  };

  root.addEventListener('click', (e) => {
    const g = e.target.closest('[data-sk]');
    const f = e.target.closest('[data-sk-filter]');
    if (g) active = Number(g.dataset.sk);
    else if (f) filter = f.dataset.skFilter;
    else return;
    render();
  });

  // Gelang terisi apabila seksyen mula kelihatan
  onceVisible(root, () => {
    $$('.sk2d-ring-fill', root).forEach((c, i) => {
      setTimeout(() => (c.style.strokeDashoffset = String(100 - Number(c.dataset.pct))), REDUCED_2D ? 0 : i * 120);
    });
    root.classList.add('is-filled');
  });

  render();
}

/* ============================================================
   03 · Project Theatre — "Mission Timeline"
   ============================================================ */
function initProjects2D() {
  const root = $('#projects-timeline');

  root.innerHTML = PROJECTS.map(
    (p, i) => `
    <li class="pj2d-item ${i % 2 ? 'is-flip' : ''}" style="--p:${ORBIT_PALETTE[i % ORBIT_PALETTE.length]}">
      <span class="pj2d-node" aria-hidden="true"><span>${esc(p.episode)}</span></span>

      <div class="pj2d-media">
        <img src="${esc(p.image)}" alt="" loading="lazy" />
        ${p.video ? `<video data-src="${esc(p.video)}" poster="${esc(p.image)}" muted loop playsinline preload="none" aria-label="${esc(p.title)} demo"></video>` : ''}
        <span class="pj2d-live"><i></i>Live demo</span>
        ${p.video ? `<button type="button" data-watch class="pj2d-watch" aria-label="Watch ${esc(p.title)} demo in fullscreen">${icon('maximize-2', 'w-4 h-4')}</button>` : ''}
      </div>

      <div class="pj2d-info">
        <div class="pj2d-meta"><span>${esc(p.episode)}</span>${esc(p.category)}</div>
        <h3>${esc(p.title)}</h3>
        ${p.subtitle ? `<p class="pj2d-sub">${esc(p.subtitle)}</p>` : ''}
        <p class="pj2d-desc">${esc(p.description)}</p>
        <ul class="pj2d-features">
          ${(p.features || []).slice(0, 3).map((f) => `<li>${esc(f)}</li>`).join('')}
        </ul>
        <div class="pj2d-stack">${p.techStack.map(esc).join('<i>·</i>')}</div>
        <div class="flex flex-wrap gap-3 pt-1">
          <button data-open-project="${esc(p.id)}" class="h2d-pill-solid">Full Case Study ${icon('arrow-up-right', 'w-4 h-4')}</button>
          ${p.video ? `<button type="button" data-watch class="h2d-pill-ghost">${icon('play', 'w-4 h-4 fill-current')} Watch Demo</button>` : ''}
        </div>
      </div>
    </li>`
  ).join('');

  const visible = new Set();
  const play = (item) => {
    const video = $('video', item);
    if (!video) return;
    if (!video.src) video.src = video.dataset.src;
    video.play().then(() => item.classList.add('is-playing')).catch(() => {});
  };

  // Video demo dimainkan (senyap) hanya bila kad kelihatan
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        const video = $('video', entry.target);
        if (!video) return;
        if (entry.isIntersecting && app.is2D) {
          visible.add(entry.target);
          play(entry.target);
        } else {
          visible.delete(entry.target);
          video.pause();
        }
      }),
    { threshold: 0.55 }
  );
  $$('.pj2d-item', root).forEach((item) => io.observe(item));
  window.addEventListener('modal-closed', () => app.is2D && visible.forEach(play));

  root.addEventListener('click', (e) => {
    if (!e.target.closest('[data-watch]')) return;
    const item = e.target.closest('.pj2d-item');
    const video = $('video', item);
    if (!video.src) video.src = video.dataset.src;
    item.classList.add('is-playing');
    playVideoFullscreen(video);
  });
}

/* ============================================================
   04 · From Code to Production — "Altitude Stack"
   ============================================================ */
function initAltitude2D() {
  const root = $('#altitude');
  const nodes = ARCHITECTURE_NODES;
  const logs = INFRASTRUCTURE_FLOW_LOGS.steps.map((l) => l.replace(/^\[(\d+)ms\]\s*/, (_, ms) => `T+${ms.padStart(3, '0')}ms  `));
  const icons = { ui: 'monitor-smartphone', 'frontend-app': 'layout-template', 'backend-api': 'code-xml', 'mysql-db': 'database', 'vps-server': 'server', deployment: 'satellite' };
  let selected = 0;
  let timers = [];

  // Dilukis dari atas (orbit) ke bawah (tanah): lapisan terakhir di atas
  const order = nodes.map((_, i) => i).reverse();

  root.innerHTML = `
    <div class="alt2d-stack">
      <div class="alt2d-rail" aria-hidden="true"><span data-alt-rocket class="alt2d-rocket">${icon('rocket', 'w-4 h-4')}</span></div>
      ${order
        .map((i) => {
          const n = nodes[i];
          return `
          <button type="button" data-alt="${i}" class="alt2d-band" style="--p:${ORBIT_PALETTE[i]}; --alt:${i}">
            <span class="alt2d-icon">${icon(icons[n.id] || 'circle', 'w-4 h-4')}</span>
            <span class="alt2d-text"><strong>${esc(n.name)}</strong><small>${esc(n.subtitle)}</small></span>
            <span class="alt2d-alt">ALT ${String((i + 1) * 100).padStart(3, '0')}km</span>
          </button>`;
        })
        .join('')}
      <div class="alt2d-ground" aria-hidden="true">Launch pad · Browser</div>
    </div>

    <div class="alt2d-side">
      <div data-alt-detail class="alt2d-detail" aria-live="polite"></div>
      <div class="alt2d-log">
        <div class="alt2d-log-head">
          <span>${icon('satellite-dish', 'w-3.5 h-3.5')} Flight log</span>
          <button type="button" data-alt-launch class="h2d-pill-solid">${icon('rocket', 'w-4 h-4')}<span data-alt-label>Launch Request</span></button>
        </div>
        <div data-alt-logs class="alt2d-logs"></div>
      </div>
    </div>`;

  const rocket = $('[data-alt-rocket]', root);
  const stack = $('.alt2d-stack', root);
  const bands = $$('[data-alt]', root);
  const detail = $('[data-alt-detail]', root);
  const logBox = $('[data-alt-logs]', root);
  const launchBtn = $('[data-alt-launch]', root);
  const band = (i) => bands.find((b) => Number(b.dataset.alt) === i);

  const moveRocket = (i) => {
    const b = i < 0 ? $('.alt2d-ground', root) : band(i);
    const y = b.offsetTop + b.offsetHeight / 2 - stack.clientHeight / 2;
    rocket.style.transform = `translate(-50%, ${y}px)`;
  };

  const renderDetail = () => {
    const n = nodes[selected];
    const color = ORBIT_PALETTE[selected];
    bands.forEach((b) => b.classList.toggle('is-selected', Number(b.dataset.alt) === selected));
    detail.innerHTML = `
      <span class="eng2d-kicker" style="color:${color}"><span class="eng2d-dot" style="--p:${color}"></span>${esc(n.subtitle)}</span>
      <h3 class="rise2d">${esc(n.name)}</h3>
      <p class="rise2d" style="animation-delay:.06s">${esc(n.role)}</p>
      <div class="eng2d-moons rise2d" style="animation-delay:.12s">${n.technologies.map((t) => `<span><i style="--p:${color}"></i>${esc(t)}</span>`).join('')}</div>
      <blockquote class="rise2d" style="animation-delay:.18s; --p:${color}">${esc(n.projectApplication)}</blockquote>`;
    refreshIcons();
  };

  const reset = () => {
    timers.forEach(clearTimeout);
    timers = [];
    bands.forEach((b) => b.classList.remove('is-lit'));
    logBox.innerHTML = `<div class="alt2d-log-row is-muted">${esc(INFRASTRUCTURE_FLOW_LOGS.start.replace(/^\[\d+ms\]\s*/, ''))}</div>`;
    root.classList.remove('is-flying', 'is-orbit');
    moveRocket(-1);
  };

  const launch = () => {
    reset();
    root.classList.add('is-flying');
    launchBtn.disabled = true;
    $('[data-alt-label]', root).textContent = 'Ascending…';
    const stepMs = REDUCED_2D ? 0 : 750;
    nodes.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          moveRocket(i);
          band(i).classList.add('is-lit');
          selected = i;
          renderDetail();
          const row = document.createElement('div');
          row.className = `alt2d-log-row${i === nodes.length - 1 ? ' is-final' : ''}`;
          row.textContent = logs[i];
          logBox.appendChild(row);
          logBox.scrollTop = logBox.scrollHeight;
        }, (i + 1) * stepMs)
      );
    });
    timers.push(
      setTimeout(() => {
        root.classList.remove('is-flying');
        root.classList.add('is-orbit');
        launchBtn.disabled = false;
        $('[data-alt-label]', root).textContent = 'Launch Again';
      }, (nodes.length + 1) * stepMs)
    );
  };

  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-alt]');
    if (b) {
      selected = Number(b.dataset.alt);
      renderDetail();
    } else if (e.target.closest('[data-alt-launch]')) launch();
  });
  window.addEventListener('resize', () => moveRocket(root.classList.contains('is-orbit') ? nodes.length - 1 : -1));

  renderDetail();
  requestAnimationFrame(reset);
  // Pelancaran pertama bila seksyen kelihatan
  onceVisible(root, launch, 0.4);
  return { reset };
}

/* ============================================================
   05 · How I Build — "Moon Phases"
   ============================================================ */
function initPhases2D() {
  const root = $('#phases');
  const stages = WORKFLOW_STAGES;
  const lit = [0.12, 0.35, 0.55, 0.8, 1]; // pecahan bulan yang bercahaya bagi setiap fasa
  let active = 0;

  root.innerHTML = `
    <div class="ph2d-row">
      ${stages
        .map(
          (s, i) => `
        <button type="button" data-ph="${i}" class="ph2d-step" aria-label="Stage ${s.step}: ${esc(s.title)}">
          <span class="ph2d-moon" style="--dark:${(1 - lit[i]).toFixed(2)}"></span>
          <span class="ph2d-num">${s.step}</span>
          <span class="ph2d-title">${esc(s.title)}</span>
        </button>`
        )
        .join('')}
    </div>
    <div data-ph-detail class="ph2d-detail" aria-live="polite"></div>`;

  const detail = $('[data-ph-detail]', root);

  const render = () => {
    const s = stages[active];
    $$('[data-ph]', root).forEach((b, i) => {
      b.classList.toggle('is-active', i === active);
      b.classList.toggle('is-done', i < active);
      b.setAttribute('aria-pressed', String(i === active));
    });
    root.style.setProperty('--ph-progress', `${(active / (stages.length - 1)) * 100}%`);
    detail.innerHTML = `
      <div class="ph2d-copy">
        <span class="eng2d-kicker" style="color:#B7FF3C"><span class="eng2d-dot" style="--p:#B7FF3C"></span>Phase ${s.step} of 0${stages.length} · ${esc(s.subtitle)}</span>
        <h3 class="rise2d">${esc(s.title)}</h3>
        <p class="rise2d" style="animation-delay:.06s">${esc(s.description)}</p>
        <div class="eng2d-nav rise2d" style="animation-delay:.12s">
          <button type="button" data-ph-step="-1" class="round2d" aria-label="Previous phase" ${active === 0 ? 'disabled' : ''}>${icon('arrow-left', 'w-4 h-4')}</button>
          <button type="button" data-ph-step="1" class="round2d" aria-label="Next phase" ${active === stages.length - 1 ? 'disabled' : ''}>${icon('arrow-right', 'w-4 h-4')}</button>
        </div>
      </div>
      <ul class="ph2d-tasks">
        ${s.tasks.map((t, i) => `<li class="rise2d" style="animation-delay:${0.08 + i * 0.06}s">${icon('check', 'w-4 h-4')}<span>${esc(t)}</span></li>`).join('')}
      </ul>`;
    refreshIcons();
  };

  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ph]');
    const step = e.target.closest('[data-ph-step]');
    if (b) active = Number(b.dataset.ph);
    else if (step) active = Math.max(0, Math.min(stages.length - 1, active + Number(step.dataset.phStep)));
    else return;
    render();
  });

  render();
}

/* ============================================================
   06 · What I Can Build — "Service Galaxy"
   ============================================================ */
function initServices2D() {
  const root = $('#services-galaxy');
  const colors = { Development: '#B7FF3C', Infrastructure: '#36D9FF', Maintenance: '#A78BFA' };
  const cats = ['All', ...Object.keys(colors)];
  let filter = 'All';

  root.innerHTML = `
    <div class="sv2d-filters" role="group" aria-label="Filter services">
      ${cats
        .map((c) => {
          const n = c === 'All' ? SERVICES.length : SERVICES.filter((s) => s.category === c).length;
          return `<button type="button" data-sv-filter="${c}" class="chip2d" ${c !== 'All' ? `style="--p:${colors[c]}"` : ''}>${c}<span>${n}</span></button>`;
        })
        .join('')}
    </div>
    <div class="sv2d-grid">
      ${SERVICES.map(
        (s, i) => `
        <button type="button" data-service="${s.id}" data-cat="${esc(s.category)}" class="sv2d-card" style="--p:${colors[s.category] || '#B7FF3C'}">
          <span class="sv2d-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="sv2d-planet">${serviceIcon(s.id)}<span class="sv2d-sat"></span></span>
          <span class="sv2d-cat">${esc(s.category)}</span>
          <span class="sv2d-title">${esc(s.title)}</span>
          <span class="sv2d-desc">${esc(s.shortDesc)}</span>
          <span class="sv2d-more">View scope ${icon('arrow-up-right', 'w-4 h-4')}</span>
        </button>`
      ).join('')}
    </div>`;

  const render = () => {
    $$('[data-sv-filter]', root).forEach((b) => {
      b.classList.toggle('is-active', b.dataset.svFilter === filter);
      b.setAttribute('aria-pressed', String(b.dataset.svFilter === filter));
    });
    $$('[data-service]', root).forEach((card) => {
      card.hidden = filter !== 'All' && card.dataset.cat !== filter;
    });
  };

  root.addEventListener('click', (e) => {
    const f = e.target.closest('[data-sv-filter]');
    if (f) {
      filter = f.dataset.svFilter;
      return render();
    }
    const card = e.target.closest('[data-service]');
    if (card) openServiceModal(Number(card.dataset.service));
  });

  render();
}

/* ============================================================
   07 · The Developer Behind the System
   ============================================================ */
function initAbout2D() {
  $('#about-pillars').innerHTML = ABOUT_PILLARS.map(
    (p, i) => `
    <li class="ab2d-pillar" style="--p:${p.color}">
      <span class="ab2d-pillar-icon">${icon(p.icon, 'w-4 h-4')}</span>
      <div>
        <strong><small>0${i + 1}</small>${esc(p.title)}</strong>
        <p>${esc(p.desc)}</p>
      </div>
    </li>`
  ).join('');

  const system = $('[data-about-system]');
  createOrbiters(system, [
    { el: $('[data-amoon="0"]'), rx: 0.49, ry: 0.14, tilt: -10, speed: 0.2, phase: 0.8 },
    { el: $('[data-amoon="1"]'), rx: 0.42, ry: 0.24, tilt: 16, speed: -0.16, phase: 2.4 },
    { el: $('[data-amoon="2"]'), rx: 0.49, ry: 0.14, tilt: -10, speed: 0.2, phase: 0.8 + Math.PI },
  ]);
}

/* ============================================================
   08 · Contact — "Launch Pad"
   ============================================================ */
function initContact2D() {
  const root = $('#contact');
  const clock = $('[data-ct-clock]', root);
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kuala_Lumpur', hour: '2-digit', minute: '2-digit', hour12: false });
  const tick = () => (clock.textContent = fmt.format(new Date()));
  tick();
  setInterval(tick, 20000);

  const message = $('#site-contact textarea[name="message"]');
  const counter = $('[data-ct-count]', root);
  message.addEventListener('input', () => (counter.textContent = message.value.length));

  // Animasi pelancaran pada butang sebelum pilihan penghantaran dipaparkan
  return {
    launch(done) {
      const btn = $('#site-contact button[type="submit"]');
      if (REDUCED_2D) return done();
      btn.classList.add('is-launching');
      btn.disabled = true;
      setTimeout(() => {
        btn.classList.remove('is-launching');
        btn.disabled = false;
        done();
      }, 1100);
    },
  };
}
