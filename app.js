// Logik utama laman: skrin pembukaan, mod 3D / 2D, dan semua bahagian interaktif.

const WORLD_NAMES = ['IDENTITY', 'CAPABILITIES', 'PROJECTS', 'ARCHITECTURE', 'CONTACT'];

const app = {
  world: -1, // -1 = hab orbit (belum pilih seni bina)
  focus: 0, // seni bina di hadapan orbit (scroll / swipe)
  diving: false, // animasi "masuk ke dalam" sedang berjalan
  is2D: false,
  universe: null, // pengawal adegan 3D (mod 3D)
};

/* ============================================================
   Skrin pembukaan
   ============================================================ */
function initLoadingScreen() {
  const screen = $('#loading-screen');
  const timers = [
    setTimeout(() => $('#intro-identity').classList.add('is-visible'), 1100),
    setTimeout(() => $('#intro-statement').classList.add('is-visible'), 2400),
  ];

  let exiting = false;
  const enter = () => {
    if (exiting) return;
    exiting = true;
    timers.forEach(clearTimeout);
    screen.classList.add('is-exiting');
    setTimeout(() => {
      screen.remove();
      show3DMode();
    }, 650);
  };

  $$('[data-action="enter"]', screen).forEach((btn) => btn.addEventListener('click', enter));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.contains(screen)) enter();
  });
}

/* ============================================================
   Kursor tersuai (peranti tetikus sahaja)
   ============================================================ */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = $('#cursor');
  const dot = $('#cursor-dot');
  const ring = $('#cursor-ring');
  const pos = { x: -100, y: -100 };
  const trail = { x: -100, y: -100 };
  let isPointer = false;

  cursor.classList.add('md:block');
  cursor.style.visibility = 'hidden';

  window.addEventListener('mousemove', (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    cursor.style.visibility = 'visible';
    isPointer = !!e.target.closest('button, a, .cursor-pointer');
    ring.classList.toggle('is-pointer', isPointer);
    dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.visibility = 'hidden';
  });

  const follow = () => {
    trail.x += (pos.x - trail.x) * 0.2;
    trail.y += (pos.y - trail.y) * 0.2;
    const offset = isPointer ? 20 : 14;
    ring.style.transform = `translate3d(${trail.x - offset}px, ${trail.y - offset}px, 0)`;
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);
}

/* ============================================================
   Tukar mod 3D <-> 2D
   ============================================================ */
function show3DMode() {
  app.is2D = false;
  $('#mode-2d').hidden = true;
  closeMobileMenu();
  $('#mode-3d').hidden = false;
  window.scrollTo(0, 0);

  if (app.universe) {
    app.universe.setActive(true);
  } else {
    createUniverse($('#universe-canvas'), {
      labels: WORLD_NAMES,
      labelRoot: $('#orbit-labels'),
      safeArea: orbitSafeArea,
      onSelect: (index) => showWorld(index),
      onFocus: (index) => setOrbitFocus(index),
      onCore: () => diveToArchive(),
    })
      .then((universe) => {
        app.universe = universe;
        universe.setFocus(app.focus);
        universe.setWorld(app.world);
        if (app.is2D) universe.setActive(false);
      })
      .catch((err) => console.error('Gagal memuat adegan 3D:', err));
  }

  showWorld(app.world, true);
}

function show2DMode() {
  app.is2D = true;
  $('#mode-3d').hidden = true;
  $('#mode-2d').hidden = false;
  window.scrollTo(0, 0);

  if (app.universe) app.universe.setActive(false);
}

function openContact() {
  app.world = 4;
  if (app.is2D) {
    $('#contact').scrollIntoView({ behavior: 'smooth' });
  } else {
    showWorld(4);
  }
}

/* ============================================================
   Mod 3D: navigasi antara lima "world"
   ============================================================ */
let worldTransition = 0;

function showWorld(index, immediate = false) {
  if (app.diving) return;
  // Dari hab orbit: main animasi masuk ke dalam struktur dahulu
  if (!immediate && app.world < 0 && index >= 0 && app.universe && !app.is2D) {
    diveInto(index);
    return;
  }
  if (index < 0 && app.world >= 0) setOrbitFocus(app.world);
  applyWorld(index, immediate);
}

// Klik teras tengah: zum masuk ke dalam teras, kemudian buka mod 2D
async function diveToArchive() {
  if (app.diving || !app.universe || app.world >= 0) return;
  app.diving = true;
  $('#orbit-hub').classList.add('is-diving');
  const warp = $('#dive-warp');
  warp.classList.remove('is-active');
  void warp.offsetWidth;
  warp.classList.add('is-active');
  const flash = $('#dive-flash');
  const flashTimer = setTimeout(() => {
    flash.classList.remove('is-active');
    void flash.offsetWidth;
    flash.classList.add('is-active');
  }, 850);

  await app.universe.diveCore();
  clearTimeout(flashTimer);
  warp.classList.remove('is-active');
  $('#orbit-hub').classList.remove('is-diving');
  app.diving = false;

  show2DMode();
  app.universe.resetView();
  // Mod 2D muncul dengan zum keluar dari cahaya
  const mode2d = $('#mode-2d');
  mode2d.classList.remove('is-arriving');
  void mode2d.offsetWidth;
  mode2d.classList.add('is-arriving');
  setTimeout(() => mode2d.classList.remove('is-arriving'), 1300);
}

// Klik matahari MSD dalam hero 2D: halaman zum masuk ke matahari, roket dilancarkan,
// kemudian kamera 3D keluar dari dalam teras ke pandangan hab.
async function portalTo3D(origin) {
  if (app.portaling || !app.is2D) return;
  app.portaling = true;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = (ms) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));
  const r = origin.getBoundingClientRect();
  const main = $('#mode-2d main');
  const m = main.getBoundingClientRect();
  // Zum berpusat pada matahari
  main.style.transformOrigin = `${r.left + r.width / 2 - m.left}px ${r.top + r.height / 2 - m.top}px`;
  const portal = $('#portal');

  $('#mode-2d').classList.add('is-portaling');
  portal.hidden = false;
  portal.className = 'portal is-launch';
  await wait(2300);

  app.world = -1;
  show3DMode();
  if (app.universe) app.universe.emerge();
  $('#mode-2d').classList.remove('is-portaling');
  portal.className = 'portal is-launch is-out';
  await wait(800);
  portal.hidden = true;
  portal.className = 'portal';
  main.style.transformOrigin = '';
  app.portaling = false;
}

async function diveInto(index) {
  app.diving = true;
  setOrbitFocus(index);
  $('#orbit-hub').classList.add('is-diving');
  const warp = $('#dive-warp');
  warp.classList.remove('is-active');
  void warp.offsetWidth;
  warp.classList.add('is-active');

  // Kilatan cahaya tepat ketika kamera menembusi struktur
  const flash = $('#dive-flash');
  const flashTimer = setTimeout(() => {
    flash.classList.remove('is-active');
    void flash.offsetWidth;
    flash.classList.add('is-active');
  }, 850);

  await app.universe.enter(index);
  clearTimeout(flashTimer);
  warp.classList.remove('is-active');
  app.diving = false;
  $('#orbit-hub').classList.remove('is-diving');
  applyWorld(index);
}

function applyWorld(index, immediate = false) {
  app.world = index;
  if (app.universe) app.universe.setWorld(index);
  updateHUD();

  const panels = $$('[data-world-panel]');
  const next = panels[index] || null; // null = hab orbit, tiada panel
  const current = panels.find((p) => !p.hidden && !p.classList.contains('is-leaving'));
  if (current === next && !immediate) return;

  const token = ++worldTransition;

  // Tamatkan serta-merta sebarang peralihan yang masih berjalan.
  panels.forEach((p) => {
    if (p !== current) {
      p.hidden = true;
      p.classList.remove('is-leaving', 'is-before');
    }
  });

  const enterNext = () => {
    if (token !== worldTransition) return;
    panels.forEach((p) => {
      if (p !== next) {
        p.hidden = true;
        p.classList.remove('is-leaving');
      }
    });
    if (!next) return;
    next.classList.add('is-before');
    next.hidden = false;
    void next.offsetWidth; // paksa browser mengira gaya awal sebelum animasi
    next.classList.remove('is-before');
    window.scrollTo(0, 0);
    if (index === 0 && app.identity) app.identity.play();
    if (index === 2 && app.cinema) app.cinema.play();
    if (index === 3 && app.mission) app.mission.play();
    if (index === 4 && app.uplink) app.uplink.play();
    if (index === 1 && app.engineReactor) app.engineReactor.ignite();
  };

  if (current && current !== next && !immediate) {
    current.classList.add('is-leaving');
    setTimeout(enterNext, 350);
  } else {
    enterNext();
  }
}

function updateHUD() {
  const inHub = app.world < 0;
  $('#orbit-hub').hidden = !inHub;
  setClasses($('#world-dim'), inHub, 'opacity-0', 'opacity-60');
  $$('[data-action="orbit"]').forEach((btn) => (btn.hidden = inHub));
  $('#hud-location').textContent = inHub ? 'ORBIT HUB' : `0${app.world + 1} ${WORLD_NAMES[app.world]}`;
  $('#hud-prev').disabled = inHub;
  $('#hud-next').disabled = app.world === WORLD_NAMES.length - 1;
  $('#hud-next [data-label]').textContent = inHub ? `ENTER 0${app.focus + 1} ${WORLD_NAMES[app.focus]}` : 'NEXT ARCHITECTURE';
  $('#hud-next [data-label-short]').textContent = inHub ? `ENTER 0${app.focus + 1}` : 'NEXT';
}

/* ---------- Hab orbit: scroll 01 → 05, klik untuk masuk ---------- */
// Ruang (px) yang perlu dielakkan oleh orbit: tajuk hab di atas, footer HUD di bawah, rel di kanan.
function orbitSafeArea() {
  const title = $('#orbit-hub > div');
  const footer = $('#hud-location').closest('footer');
  const rail = $('#orbit-rail');
  const h = window.innerHeight;
  // Hab belum kelihatan (ukuran 0): guna nilai lalai dalam scenes.js
  if (!title || !title.getBoundingClientRect().height) return null;
  const railWidth = rail && rail.offsetWidth ? window.innerWidth - rail.getBoundingClientRect().left + 16 : 24;
  return {
    top: (title ? title.getBoundingClientRect().bottom : h * 0.25) + 28,
    bottom: (footer ? h - footer.getBoundingClientRect().top : 90) + 24,
    left: Math.min(railWidth, 180),
    right: Math.min(railWidth, 180),
  };
}

function setOrbitFocus(index) {
  const next = Math.max(0, Math.min(WORLD_NAMES.length - 1, index));
  app.focus = next;
  if (app.universe) app.universe.setFocus(next);

  $$('#orbit-rail [data-rail]').forEach((item) => {
    const on = Number(item.dataset.rail) === next;
    item.classList.toggle('is-active', on);
    item.setAttribute('aria-current', String(on));
  });

  if (app.world < 0) updateHUD();
}

function initOrbitHub() {
  const rail = $('#orbit-rail');
  rail.innerHTML =
    WORLD_NAMES.map(
      (name, i) => `
      <button type="button" data-rail="${i}" class="rail-item" aria-label="0${i + 1} ${name}">
        <span class="rail-name">${name}</span>
        <span class="tabular-nums">0${i + 1}</span>
        <span class="rail-tick"></span>
      </button>`
    ).join('') +
    `<div class="rail-scroll" aria-hidden="true"><span class="rail-mouse"></span><span>SCROLL</span></div>`;

  // Klik pada rel: fokus dahulu; klik sekali lagi pada yang aktif untuk masuk
  rail.addEventListener('click', (e) => {
    const item = e.target.closest('[data-rail]');
    if (!item) return;
    const i = Number(item.dataset.rail);
    if (i === app.focus) showWorld(i);
    else setOrbitFocus(i);
  });

  const inHub = () =>
    !app.is2D && app.world < 0 && !app.diving && !$('#loading-screen') && !$$('#project-modal, #service-modal').some((m) => !m.hidden);

  // Scroll roda tetikus / trackpad: satu langkah setiap gerakan
  let lastStep = 0;
  window.addEventListener(
    'wheel',
    (e) => {
      if (!inHub() || Math.abs(e.deltaY) < 8) return;
      const now = performance.now();
      if (now - lastStep < 650) return;
      lastStep = now;
      setOrbitFocus(app.focus + (e.deltaY > 0 ? 1 : -1));
    },
    { passive: true }
  );

  // Papan kekunci: anak panah untuk gerak, Enter untuk masuk
  window.addEventListener('keydown', (e) => {
    if (!inHub() || e.target.closest('input, textarea, select')) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') setOrbitFocus(app.focus + 1);
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') setOrbitFocus(app.focus - 1);
    // Enter pada butang/pautan sudah mencetuskan klik sendiri
    else if (e.key === 'Enter' && !e.target.closest('button, a')) showWorld(app.focus);
    else return;
    e.preventDefault();
  });

  setOrbitFocus(app.focus);
}

function initHUD() {
  $('#hud-prev').addEventListener('click', () => showWorld(Math.max(-1, app.world - 1)));
  $('#hud-next').addEventListener('click', () =>
    showWorld(app.world < 0 ? app.focus : Math.min(WORLD_NAMES.length - 1, app.world + 1))
  );

  // Escape: kembali ke hab orbit (jika tiada modal terbuka)
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || e.defaultPrevented || app.is2D || app.world < 0 || $('#loading-screen')) return;
    if ($$('#project-modal, #service-modal').some((m) => !m.hidden)) return;
    showWorld(-1);
  });
  updateHUD();
}

/* ---------- World 01: Identity ---------- */
function initWorldIdentity() {
  app.identity = createIdentity($('#identity-scan'));
}

/* ---------- World 02: The Engine ---------- */
function initWorldEngine() {
  app.engineReactor = createEngineReactor($('#engine-reactor'));
}

/* ---------- World 03: Projects ---------- */
function initWorldProjects() {
  app.cinema = createProjectCinema($('#project-cinema'));
}

/* ---------- World 04: From Code to Production ---------- */
function initWorldArchitecture() {
  app.mission = createMissionTrajectory($('#mission'));
}

/* ============================================================
   Mod 2D
   ============================================================ */
function initNavigation() {
  const nav = $('#site-nav');
  const progressFill = $('#orbit-progress .h2d-progress-fill');
  const updateNav = () => {
    if (!app.is2D) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
    // Gelang orbit: peratus halaman yang telah dibaca
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    progressFill.style.strokeDashoffset = String(100 - pct);
    $('#orbit-progress').classList.toggle('is-visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
  $('#orbit-progress').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Scrollspy: penunjuk lime meluncur ke pautan seksyen yang sedang dibaca
  const links = $$('#nav2d-links a');
  const indicator = $('#nav2d-links .h2d-indicator');
  const moveIndicator = (link) => {
    links.forEach((a) => a.classList.toggle('is-active', a === link));
    if (!link) return (indicator.style.opacity = '0');
    indicator.style.opacity = '1';
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${link.offsetLeft}px)`;
  };
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = links.find((a) => a.getAttribute('href') === `#${entry.target.id}`);
        moveIndicator(link || null);
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  $$('#mode-2d section[id]').forEach((sec) => spy.observe(sec));

  // Seksyen muncul lembut bila di-scroll (dilangkau jika pengguna minta kurang gerakan)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    $('#mode-2d').classList.add('reveal-ready');
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            reveal.unobserve(entry.target);
          }
        }),
      { rootMargin: '0px 0px -12% 0px' }
    );
    $$('#mode-2d .h2d-reveal').forEach((el) => reveal.observe(el));
  }


  $('#mobile-menu-toggle').addEventListener('click', () => {
    if ($('#mobile-menu').hidden) openMobileMenu();
    else closeMobileMenu();
  });
}

function openMobileMenu() {
  $('#mobile-menu').hidden = false;
  $('#mobile-menu-toggle').setAttribute('aria-expanded', 'true');
  $('[data-icon-open]').hidden = true;
  $('[data-icon-close]').hidden = false;
}

function closeMobileMenu() {
  $('#mobile-menu').hidden = true;
  $('#mobile-menu-toggle').setAttribute('aria-expanded', 'false');
  $('[data-icon-open]').hidden = false;
  $('[data-icon-close]').hidden = true;
}

/* ---------- Borang hubungan ---------- */
function initContactForms() {
  app.uplink = createUplink($('#uplink'));
  initContactForm($('#world-contact'), {
    beforeSuccess: (values, reveal) => app.uplink.transmit(reveal),
    messageError: 'Please enter your project requirements.',
    emailBody: ({ name, email, projectType, message }) =>
      `Hi MSD,\n\nName: ${name}\nEmail: ${email}\nProject: ${projectType}\n\nBrief:\n${message}`,
    whatsappText: ({ name, projectType, message }) =>
      `Hi MSD! My name is ${name || 'Visitor'}. I would like to consult on a ${projectType} project.\n\nBrief: ${message}`,
  });

  initContactForm($('#site-contact'), {
    beforeSuccess: (values, reveal) => app.contact2d.launch(reveal),
    messageError: 'Please write a brief description of your project.',
    emailBody: ({ name, email, projectType, message }) =>
      `Hi MSD,\n\nMy name is ${name}.\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Details:\n${message}\n\nLooking forward to speaking with you!`,
    whatsappText: ({ name, projectType, message }) =>
      `Hi MSD! My name is ${name || 'a visitor'}. I would like to consult on a ${projectType} project.\n\nBrief: ${message}`,
  });
}

/* ============================================================
   Tindakan global (butang dengan data-action / data-world / dll.)
   ============================================================ */
function initGlobalActions() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action], [data-world], [data-goto-world], [data-open-project], [data-close-menu]');
    if (!target) return;

    if (target.matches('[data-close-menu]')) closeMobileMenu();

    const action = target.dataset.action;
    if (action === 'to-2d') show2DMode();
    else if (action === 'to-3d') show3DMode();
    else if (action === 'portal-3d') portalTo3D(target);
    else if (action === 'contact') openContact();
    else if (action === 'orbit') showWorld(-1);

    if (target.dataset.world !== undefined) showWorld(Number(target.dataset.world));
    if (target.dataset.gotoWorld !== undefined) showWorld(Number(target.dataset.gotoWorld));
    if (target.dataset.openProject) openProjectModal(target.dataset.openProject);
  });

  $('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#footer-year').textContent = new Date().getFullYear();
}

/* ============================================================
   Mula
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initGlobalActions();
  initModals();
  initCustomCursor();

  // Mod 3D
  initHUD();
  initOrbitHub();
  initWorldIdentity();
  initWorldEngine();
  initWorldProjects();
  initWorldArchitecture();

  // Mod 2D
  initNavigation();
  initEngine2D();
  initSkills2D();
  initProjects2D();
  app.altitude = initAltitude2D();
  initPhases2D();
  initServices2D();
  initAbout2D();
  app.contact2d = initContact2D();

  initContactForms();
  initTutorial();
  refreshIcons();

  initLoadingScreen();
});
