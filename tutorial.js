// Tutorial: lawatan berpandu di Orbit Hub. Spotlight menunjuk setiap bahagian,
// kad kecil menerangkannya; pengguna tekan Next / Back / Skip.

const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches;

const visibleEl = (selector) =>
  $$(selector).find((el) => el.offsetParent && getComputedStyle(el).opacity !== '0' && el.getBoundingClientRect().width > 0) || null;

const TOUR_STEPS = [
  {
    icon: 'orbit',
    title: 'Welcome to the MSD orbit',
    text: 'This short tour shows you how to explore the portfolio. It takes less than a minute.',
  },
  {
    icon: 'layers',
    title: 'Five architectures',
    text: 'Each structure on the orbit is one part of the story — 01 Identity, 02 Engine, 03 Projects, 04 Architecture and 05 Contact.',
    target: () => visibleEl('.orbit-label.is-focus'),
  },
  {
    icon: 'mouse',
    title: 'Move through the orbit',
    text: IS_TOUCH
      ? 'Swipe up or down on the orbit to bring the next architecture to the front.'
      : 'Scroll your mouse wheel or use the ↑ ↓ arrow keys. This rail shows which architecture is in front.',
    keys: IS_TOUCH ? [['Swipe', 'up / down']] : [['Scroll', 'mouse wheel'], ['↑ ↓', 'arrow keys'], ['Drag', 'spin by hand']],
    target: () => (IS_TOUCH ? visibleEl('.orbit-label.is-focus') : visibleEl('#orbit-rail')),
  },
  {
    icon: 'scan-eye',
    title: 'Go inside',
    text: 'Press this button — or click any structure — and the camera flies inside to open that world. Press Esc or Orbit View to come back.',
    keys: IS_TOUCH ? [['Tap', 'a structure']] : [['Click', 'a structure'], ['Enter', 'open'], ['Esc', 'back']],
    target: () => visibleEl('#hud-next'),
  },
  {
    icon: 'book-open',
    title: 'The 2D archive',
    text: 'Prefer a normal scrolling page? Click the glowing MSD core to dive into the 2D archive. To fly back, click the glowing MSD sun at the top of the archive.',
    target: () => visibleEl('.core-label'),
  },
  {
    icon: 'send',
    title: 'Get in touch',
    text: 'Have a project in mind? Contact takes you straight to the mission brief form — send it by email or WhatsApp.',
    target: () => visibleEl('#hud-top [data-action="contact"]'),
  },
  {
    icon: 'circle-help',
    title: 'Need this again?',
    text: 'You can replay this tour any time from the help button.',
    target: () => visibleEl('#hud-top [data-action="tutorial"]'),
  },
  {
    icon: 'rocket',
    title: "You're all set",
    text: 'Enjoy exploring — and if you have an idea, let’s build it.',
  },
];

function initTutorial() {
  const root = $('#tutorial');
  const card = $('[data-gt-card]', root);
  const spot = $('[data-gt-spot]', root);
  const total = TOUR_STEPS.length;
  let step = -1;
  let loop = null;
  let lastFocus = null;

  function render() {
    const s = TOUR_STEPS[step];
    const first = step === 0;
    const last = step === total - 1;
    root.dataset.phase = first || last ? 'center' : 'step';
    card.innerHTML = `
      <div class="gt-row">
        <span class="gt-tag">${icon('compass', 'w-3.5 h-3.5')} Tutorial</span>
        <button type="button" data-gt-close class="gt-x" aria-label="Close tutorial">${icon('x', 'w-4 h-4')}</button>
      </div>
      ${first || last ? `<div class="gt-emblem">${icon(s.icon, 'w-7 h-7')}</div>` : ''}
      <div class="gt-step-head">
        ${first || last ? '' : `<span class="gt-step-icon">${icon(s.icon, 'w-4 h-4')}</span>`}
        <h3 id="tutorial-title">${esc(s.title)}</h3>
      </div>
      <p class="gt-text">${esc(s.text)}</p>
      ${s.keys ? `<div class="gt-keys">${s.keys.map(([k, d]) => `<span><kbd>${esc(k)}</kbd>${esc(d)}</span>`).join('')}</div>` : ''}
      <div class="gt-foot">
        <div class="gt-dots" aria-label="Step ${step + 1} of ${total}">
          ${TOUR_STEPS.map((_, i) => `<span class="${i === step ? 'is-on' : i < step ? 'is-done' : ''}"></span>`).join('')}
        </div>
        <div class="gt-nav">
          ${first ? `<button type="button" data-gt-close class="gt-btn is-ghost">Skip</button>` : `<button type="button" data-gt-prev class="gt-btn is-ghost" aria-label="Previous step">${icon('arrow-left', 'w-4 h-4')}</button>`}
          <button type="button" data-gt-next class="gt-btn">${
            first ? 'Start tour' : last ? 'Finish' : 'Next'
          }${icon(last ? 'check' : 'arrow-right', 'w-4 h-4')}</button>
        </div>
      </div>`;
    card.classList.remove('is-in');
    void card.offsetWidth;
    card.classList.add('is-in');
    refreshIcons();
    position();
    $('[data-gt-next]', card).focus({ preventScroll: true });
  }

  // Letak spotlight pada sasaran & kad di sebelahnya (dikemas kini setiap frame kerana orbit bergerak)
  function position() {
    const s = TOUR_STEPS[step];
    const el = s && s.target ? s.target() : null;
    root.dataset.target = el ? 'yes' : 'none';
    if (!el) {
      spot.hidden = true;
      card.style.left = card.style.top = '';
      return;
    }
    const r = el.getBoundingClientRect();
    const pad = 10;
    spot.hidden = false;
    spot.style.transform = `translate(${r.left - pad}px, ${r.top - pad}px)`;
    spot.style.width = `${r.width + pad * 2}px`;
    spot.style.height = `${r.height + pad * 2}px`;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cw = card.offsetWidth;
    const ch = card.offsetHeight;
    const gap = 22;
    let left;
    let top;
    if (vw < 640) {
      // Telefon: kad selebar skrin, di bahagian yang bertentangan dengan sasaran
      left = 12;
      top = r.top + r.height / 2 > vh / 2 ? Math.max(12, r.top - ch - gap) : Math.min(vh - ch - 12, r.bottom + gap);
    } else if (r.right + gap + cw < vw - 16) {
      left = r.right + gap;
      top = r.top + r.height / 2 - ch / 2;
    } else if (r.left - gap - cw > 16) {
      left = r.left - gap - cw;
      top = r.top + r.height / 2 - ch / 2;
    } else {
      left = r.left + r.width / 2 - cw / 2;
      top = r.bottom + gap + ch < vh - 16 ? r.bottom + gap : r.top - gap - ch;
    }
    card.style.left = `${Math.max(12, Math.min(vw - cw - 12, left))}px`;
    card.style.top = `${Math.max(12, Math.min(vh - ch - 12, top))}px`;
  }

  function tick() {
    loop = requestAnimationFrame(tick);
    if (step >= 0) position();
  }

  function go(i) {
    step = Math.max(0, Math.min(total - 1, i));
    render();
  }

  function close() {
    step = -1;
    root.hidden = true;
    spot.hidden = true;
    cancelAnimationFrame(loop);
    loop = null;
    if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus();
  }

  // Pastikan pengguna berada di Orbit Hub mod 3D sebelum lawatan bermula
  function launch() {
    lastFocus = document.activeElement;
    const loading = $('#loading-screen');
    if (loading) $('[data-action="enter"]', loading).click();
    else if (app.is2D) {
      show3DMode();
      showWorld(-1, true);
    } else if (app.world >= 0) showWorld(-1);

    const wait = setInterval(() => {
      if (app.universe && !$('#loading-screen') && app.world < 0 && !app.diving) {
        clearInterval(wait);
        // Beri masa untuk animasi intro orbit selesai
        setTimeout(() => {
          root.hidden = false;
          go(0);
          if (!loop) tick();
        }, 900);
      }
    }, 150);
  }

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-gt-close]')) close();
    else if (e.target.closest('[data-gt-prev]')) go(step - 1);
    else if (e.target.closest('[data-gt-next]')) step === total - 1 ? close() : go(step + 1);
  });

  window.addEventListener(
    'keydown',
    (e) => {
      if (root.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(step + 1);
      else if (e.key === 'ArrowLeft') go(step - 1);
      else return;
      // Jangan biarkan kekunci ini turut menggerakkan orbit / keluar dari hab
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    true
  );

  $$('[data-action="tutorial"]').forEach((btn) => btn.addEventListener('click', launch));
}
