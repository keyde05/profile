// Fungsi kecil yang digunakan oleh semua skrip lain.

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

// Elak teks (terutamanya input pengguna) daripada ditafsir sebagai HTML.
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Ikon Lucide: tulis <i data-lucide="nama">, kemudian panggil refreshIcons() untuk tukar kepada SVG.
function icon(name, className = '') {
  return `<i data-lucide="${name}" class="${className}"></i>`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

// Tukar antara dua set kelas Tailwind (aktif / tidak aktif) pada satu elemen.
function setClasses(el, isOn, onClasses, offClasses) {
  const on = onClasses.split(/\s+/).filter(Boolean);
  const off = offClasses.split(/\s+/).filter(Boolean);
  el.classList.remove(...on, ...off);
  el.classList.add(...(isOn ? on : off));
}

// Sama seperti setClasses, tetapi untuk lebih daripada dua keadaan.
// variants: { namaKeadaan: 'kelas kelas ...' }
function applyVariant(el, key, variants) {
  const all = Object.values(variants).join(' ').split(/\s+/).filter(Boolean);
  el.classList.remove(...all);
  el.classList.add(...variants[key].split(/\s+/).filter(Boolean));
}

// Banner gambar untuk panel butiran modul Engine.
function moduleImage(src, alt) {
  if (!src) return '';
  return `
    <div class="relative mb-6 rounded-xl overflow-hidden border border-white/10 aspect-[21/9] bg-[#08090B]">
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" class="w-full h-full object-cover fade-in" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#101318] via-[#101318]/20 to-transparent pointer-events-none"></div>
    </div>`;
}

// Media statik projek: gambar, atau placeholder jika tiada gambar.
function projectMedia(project, className = '') {
  if (project.image) {
    return `<img src="${esc(project.image)}" alt="${esc(project.title)}" loading="lazy" class="${className}" />`;
  }
  return `
    <div class="w-full h-full flex flex-col items-center justify-center gap-3 tech-grid">
      <img src="logo.png" alt="" class="w-16 h-16 object-contain opacity-60" />
      <span class="text-xs font-mono tracking-widest text-[#9299A5] uppercase text-center px-4">${esc(project.title)}</span>
    </div>`;
}

// Pengorbit: gerakkan elemen HTML di sepanjang orbit elips di dalam `container`.
// items: [{ el, rx, ry, speed, phase, tilt }] — rx/ry ialah pecahan lebar/tinggi bekas, tilt dalam darjah.
// Separuh bawah orbit dianggap "di hadapan" (lebih besar & di atas planet), separuh atas "di belakang".
function createOrbiters(container, items) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const orbiters = items.map((item) => ({ speed: 0.4, phase: 0, tilt: 0, ...item, angle: item.phase || 0 }));
  let boost = 1;
  let last = performance.now();

  const tick = (now) => {
    requestAnimationFrame(tick);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!container.offsetParent) return; // tidak kelihatan: jangan kira
    const w = container.clientWidth;
    const h = container.clientHeight;
    orbiters.forEach((o) => {
      if (!reduced) o.angle += dt * o.speed * boost;
      const ex = Math.cos(o.angle) * o.rx * w;
      const ey = Math.sin(o.angle) * o.ry * h;
      const t = (o.tilt * Math.PI) / 180;
      const x = w / 2 + ex * Math.cos(t) - ey * Math.sin(t);
      const y = h / 2 + ex * Math.sin(t) + ey * Math.cos(t);
      const depth = Math.sin(o.angle); // 1 = paling hadapan, -1 = paling belakang
      o.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%) scale(${(0.82 + depth * 0.18).toFixed(3)})`;
      o.el.style.zIndex = depth > 0 ? '4' : '1';
      o.el.style.opacity = (0.55 + ((depth + 1) / 2) * 0.45).toFixed(2);
    });
  };
  requestAnimationFrame(tick);

  return {
    setBoost(value) {
      boost = value;
    },
  };
}

// Senarai teknologi dipisahkan dengan "/" (gaya tanpa pil).
function slashList(items) {
  return items
    .map((item) => `<span>${esc(item)}</span>`)
    .join('<span class="text-white/20" aria-hidden="true">/</span>');
}
