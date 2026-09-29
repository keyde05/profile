// Komponen yang digunakan di lebih dari satu tempat:
// Project Theatre, modal projek, modal servis dan borang hubungan.

/* ============================================================
   Modal umum: buka / tutup, Escape, klik latar belakang
   ============================================================ */
function openModal(modal) {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.hidden = true;
  $$('video', modal).forEach((video) => video.pause());
  if (!$$('#project-modal, #service-modal').some((m) => !m.hidden)) {
    document.body.style.overflow = '';
    window.dispatchEvent(new Event('modal-closed')); // Project Theatre sambung main video
  }
}

function initModals() {
  $$('#project-modal, #service-modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-close-modal]')) closeModal(modal);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = $$('#project-modal, #service-modal').filter((m) => !m.hidden);
    if (!open.length) return;
    open.forEach(closeModal);
    e.preventDefault(); // Esc ini hanya untuk tutup modal, bukan keluar dari world
  });
}

/* ============================================================
   Modal case study projek
   ============================================================ */
function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  const modal = $('#project-modal');
  const field = (name) => $(`[data-field="${name}"]`, modal);

  field('episode').textContent = project.episode;
  field('title').textContent = project.title;
  field('meta').textContent = `${project.category} · ${project.techStack.join(' · ')}`;
  field('media').innerHTML = project.video
    ? `<video src="${esc(project.video)}" poster="${esc(project.image)}" controls autoplay muted playsinline class="w-full h-full object-contain bg-black"></video>`
    : projectMedia(project, 'w-full h-full object-cover');
  field('media-overlay').hidden = Boolean(project.video);
  field('media-labels').hidden = Boolean(project.video);
  field('overview').textContent = project.fullOverview;
  field('frontend').textContent = project.architectureDetails.frontend;
  field('backend').textContent = project.architectureDetails.backend;
  field('database').textContent = project.architectureDetails.database;
  field('deployment').textContent = project.architectureDetails.deployment;

  field('highlights').innerHTML = project.keyHighlights
    .map(
      (h) => `
      <div class="flex items-start gap-3 p-3 rounded-lg bg-[#08090B]/50 border border-white/5">
        ${icon('circle-check-big', 'w-4 h-4 text-[#B7FF3C] shrink-0 mt-0.5')}
        <span class="text-xs sm:text-sm text-[#F4F5F7] leading-relaxed">${esc(h)}</span>
      </div>`
    )
    .join('');

  // Hentikan video lain (Project Theatre) supaya hanya video modal yang dimainkan.
  $$('video').forEach((video) => !modal.contains(video) && video.pause());

  refreshIcons();
  openModal(modal);
  $('.overflow-y-auto', modal.firstElementChild).scrollTop = 0;
}

/* ============================================================
   Modal butiran servis
   ============================================================ */
const SERVICE_ICONS = {
  1: ['code', '#B7FF3C'],
  2: ['globe', '#36D9FF'],
  3: ['shopping-bag', '#B7FF3C'],
  4: ['layout-dashboard', '#36D9FF'],
  5: ['server', '#B7FF3C'],
  6: ['credit-card', '#36D9FF'],
  7: ['shield-check', '#B7FF3C'],
  8: ['zap', '#36D9FF'],
  9: ['database', '#B7FF3C'],
  10: ['bug', '#36D9FF'],
};

function serviceIcon(id) {
  const [name, color] = SERVICE_ICONS[id] || ['code', '#F4F5F7'];
  return icon(name, `w-5 h-5 text-[${color}]`);
}

function openServiceModal(serviceId) {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return;

  const modal = $('#service-modal');
  const field = (name) => $(`[data-field="${name}"]`, modal);

  field('icon').innerHTML = serviceIcon(service.id);
  field('meta').textContent = `${service.category} · Service 0${service.id}`;
  field('title').textContent = service.title;
  field('desc').textContent = service.shortDesc;
  field('deliverables').innerHTML = service.deliverables
    .map(
      (d) => `
      <div class="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#08090B] border border-white/5">
        ${icon('check', 'w-4 h-4 text-[#B7FF3C] shrink-0 mt-0.5')}
        <span class="text-xs text-[#F4F5F7]">${esc(d)}</span>
      </div>`
    )
    .join('');
  field('tech').innerHTML = service.techUsed
    .map((t) => `<span class="px-2.5 py-1 rounded bg-[#171B22] border border-white/10 text-xs font-mono text-[#36D9FF]">${esc(t)}</span>`)
    .join('');

  refreshIcons();
  openModal(modal);
}

/* ============================================================
   Borang hubungan (digunakan dalam mod 3D dan mod 2D)
   Borang hanya menyediakan pautan emel / WhatsApp; tiada data dihantar ke server.
   ============================================================ */
function initContactForm(root, options) {
  const form = $('[data-contact-form]', root);
  const errorBox = $('[data-error]', root);
  const success = $('[data-success]', root);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const projectType = form.elements.projectType.value;
    const message = form.elements.message.value;

    let error = null;
    if (!name.trim()) error = 'Please enter your name.';
    else if (!email.trim() || !email.includes('@')) error = 'Please provide a valid email address.';
    else if (!message.trim()) error = options.messageError;

    errorBox.textContent = error || '';
    errorBox.hidden = !error;
    if (error) return;

    const values = { name, email, projectType, message };
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - from ${name || 'Client'}`);
    $('[data-mailto]', success).href =
      `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${encodeURIComponent(options.emailBody(values))}`;
    $('[data-whatsapp]', success).href =
      `https://wa.me/60177751194?text=${encodeURIComponent(options.whatsappText(values))}`;

    const outName = $('[data-out-name]', success);
    const outType = $('[data-out-type]', success);
    if (outName) outName.textContent = name;
    if (outType) outType.textContent = projectType;

    const reveal = () => {
      form.hidden = true;
      success.hidden = false;
    };
    // Pilihan: mainkan animasi (cth. uplink) dahulu, kemudian paparkan kejayaan
    if (options.beforeSuccess) options.beforeSuccess(values, reveal);
    else reveal();
  });

  const resetBtn = $('[data-reset]', success);
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.elements.message.value = '';
      success.hidden = true;
      form.hidden = false;
    });
  }
}
