// MSD Originals: World 03 (mod 3D) — gaya platform penstriman.
// Billboard besar memainkan demo projek sebagai latar; baris "Top Projects" di bawah untuk memilih episod.

function createProjectCinema(root) {
  const total = PROJECTS.length;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0;
  let muted = true;
  let started = false; // video untuk episod semasa sudah dimulakan
  let swapTimer = null;

  root.innerHTML = `
    <div class="nf">
      <div data-billboard class="nf-billboard">
        <div data-backdrop class="nf-backdrop"></div>
        <video data-video class="nf-video" muted playsinline preload="none"></video>
        <div class="nf-shade-left" aria-hidden="true"></div>
        <div class="nf-shade-bottom" aria-hidden="true"></div>

        <div data-info class="nf-info" aria-live="polite"></div>

        <div class="nf-side">
          <button type="button" data-mute class="nf-round" aria-label="Toggle sound"></button>
          <span data-rating class="nf-rating"></span>
        </div>

        <div class="nf-progress" aria-hidden="true"><span data-progress></span></div>

        <div data-sting class="nf-sting" aria-hidden="true">
          <img src="logo.png" alt="" />
        </div>
      </div>

      <div class="nf-row">
        <div class="nf-row-head">
          <h3>Top ${total} Projects Today</h3>
          <span class="nf-row-hint">Select an episode ›</span>
        </div>
        <div data-rail class="nf-rail">
          ${PROJECTS.map(
            (p, i) => `
            <button type="button" data-card="${i}" class="nf-card" aria-label="${esc(p.episode)} ${esc(p.title)}">
              <span class="nf-rank" aria-hidden="true">${i + 1}</span>
              <span class="nf-poster">
                <img src="${esc(p.image)}" alt="" loading="lazy" />
                <span class="nf-card-badge"><img src="logo.png" alt="" /></span>
                <span class="nf-card-title">${esc(p.title)}</span>
                <span class="nf-card-bar"><span data-card-fill></span></span>
              </span>
            </button>`
          ).join('')}
        </div>
      </div>
    </div>`;

  const billboard = $('[data-billboard]', root);
  const backdrop = $('[data-backdrop]', root);
  const video = $('[data-video]', root);
  const info = $('[data-info]', root);
  const progress = $('[data-progress]', root);
  const muteBtn = $('[data-mute]', root);
  const cards = $$('[data-card]', root);

  const isVisible = () => !!root.offsetParent;

  const renderMute = () => {
    muteBtn.innerHTML = icon(muted ? 'volume-x' : 'volume-2', 'w-4 h-4');
    muteBtn.setAttribute('aria-pressed', String(!muted));
    refreshIcons();
  };

  const setProgress = (pct) => {
    progress.style.width = `${pct}%`;
    cards.forEach((card, i) => {
      $('[data-card-fill]', card).style.width = i === active ? `${pct}%` : '0';
    });
  };

  // Latar: pudar silang dari poster lama ke poster baharu
  const showBackdrop = (src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'nf-backdrop-img';
    backdrop.appendChild(img);
    requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('is-in')));
    const old = $$('.nf-backdrop-img', backdrop).slice(0, -1);
    setTimeout(() => old.forEach((el) => el.remove()), 800);
  };

  const startVideo = () => {
    const p = PROJECTS[active];
    if (!p.video || !isVisible()) return;
    if (!started) {
      video.src = p.video;
      video.poster = p.image;
      started = true;
    }
    video.muted = muted;
    video.play().catch(() => {});
  };

  const renderInfo = (p) => {
    info.innerHTML = `
      <div class="nf-original nf-in">
        <img src="logo.png" alt="" />
        <span>MSD ORIGINAL</span>
      </div>
      <h3 class="nf-title nf-in" style="animation-delay:.06s">${esc(p.title)}</h3>
      <div class="nf-meta nf-in" style="animation-delay:.12s">
        <span class="nf-match">${esc(p.category)}</span>
        <span class="nf-hd">HD</span>
        <span>${esc(p.episode)}</span>
        <span class="text-white/40">·</span>
        <span>${String(active + 1).padStart(2, '0')} of ${String(total).padStart(2, '0')}</span>
      </div>
      <p class="nf-desc nf-in" style="animation-delay:.18s">${esc(p.description)}</p>
      <div class="nf-tags nf-in" style="animation-delay:.22s">${p.techStack.map(esc).join('<span>•</span>')}</div>
      <div class="nf-actions nf-in" style="animation-delay:.28s">
        <button type="button" data-play class="nf-btn-play">${icon('play', 'w-5 h-5 fill-current')}<span>Play</span></button>
        <button type="button" data-open-project="${esc(p.id)}" class="nf-btn-info">${icon('info', 'w-5 h-5')}<span>More Info</span></button>
      </div>`;
    refreshIcons();
  };

  function select(idx) {
    active = ((idx % total) + total) % total;
    const p = PROJECTS[active];

    video.pause();
    video.classList.remove('is-playing');
    video.removeAttribute('src');
    video.load();
    started = false;

    showBackdrop(p.image);
    renderInfo(p);
    $('[data-rating]', root).textContent = p.episode;
    cards.forEach((card, i) => {
      card.classList.toggle('is-active', i === active);
      card.setAttribute('aria-current', String(i === active));
    });
    setProgress(0);

    // Seperti platform penstriman: tunjuk poster sekejap, kemudian mula main
    clearTimeout(swapTimer);
    swapTimer = setTimeout(startVideo, reduced ? 0 : 900);
  }

  video.addEventListener('playing', () => video.classList.add('is-playing'));
  video.addEventListener('timeupdate', () => {
    if (video.duration) setProgress((video.currentTime / video.duration) * 100);
  });
  video.addEventListener('ended', () => {
    // Dalam fullscreen: keluar dahulu, kemudian teruskan ke episod seterusnya
    if (isFullscreen()) exitFullscreen();
    select(active + 1);
  });

  const isFullscreen = () => (document.fullscreenElement || document.webkitFullscreenElement) === video;
  const exitFullscreen = () => (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);

  // Play: main dari awal, dengan bunyi & kawalan penuh, dalam skrin penuh
  function playFullscreen() {
    const p = PROJECTS[active];
    if (!p.video) return;
    clearTimeout(swapTimer);
    if (!started) {
      video.src = p.video;
      video.poster = p.image;
      started = true;
    }
    video.currentTime = 0;
    video.muted = false;
    video.controls = true;
    video.classList.add('is-playing');

    // Mesti dipanggil terus dari klik (syarat pelayar untuk skrin penuh)
    const request = video.requestFullscreen || video.webkitRequestFullscreen;
    if (request) {
      Promise.resolve(request.call(video)).catch(() => {});
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen(); // iPhone Safari
    }
    video.play().catch(() => {});
  }

  // Keluar skrin penuh: kembali ke billboard (senyap, tanpa kawalan, terus bermain di latar)
  const onFullscreenChange = () => {
    if (isFullscreen()) return;
    video.controls = false;
    video.muted = muted;
    if (isVisible() && started) video.play().catch(() => {});
  };
  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  video.addEventListener('webkitendfullscreen', onFullscreenChange); // iPhone Safari

  root.addEventListener('click', (e) => {
    const card = e.target.closest('[data-card]');
    if (card) return select(Number(card.dataset.card));
    if (e.target.closest('[data-play]')) return playFullscreen();
    if (e.target.closest('[data-mute]')) {
      muted = !muted;
      video.muted = muted;
      renderMute();
    }
  });

  // Swipe mendatar pada billboard untuk tukar episod
  let dragX = null;
  billboard.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('button')) dragX = e.clientX;
  });
  window.addEventListener('pointerup', (e) => {
    if (dragX === null) return;
    const dx = e.clientX - dragX;
    dragX = null;
    if (Math.abs(dx) > 60) select(active + (dx < 0 ? 1 : -1));
  });

  // Anak panah kiri/kanan bila World 03 kelihatan
  window.addEventListener('keydown', (e) => {
    if (!isVisible() || e.target.closest('input, textarea, select')) return;
    if ($$('#project-modal, #service-modal').some((m) => !m.hidden)) return;
    if (e.key === 'ArrowRight') select(active + 1);
    else if (e.key === 'ArrowLeft') select(active - 1);
  });

  // Hentikan video bila World 03 disembunyikan; sambung selepas modal ditutup
  setInterval(() => {
    if (!video.paused && !isVisible()) video.pause();
  }, 400);
  window.addEventListener('modal-closed', () => {
    if (isVisible() && started) video.play().catch(() => {});
  });

  // Dimainkan setiap kali World 03 dibuka: logo "sting" kemudian billboard muncul
  function play() {
    if (!reduced) replayEntrance(root);
    clearTimeout(swapTimer);
    swapTimer = setTimeout(startVideo, reduced ? 0 : 1400);
  }

  renderMute();
  select(0);
  return { play };
}
