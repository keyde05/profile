/* ============================================================
   MSD Portfolio — gaya tambahan (selain kelas Tailwind dalam HTML)
   ============================================================ */

* {
  border-color: rgba(255, 255, 255, 0.08);
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: #08090B;
  color: #F4F5F7;
  overflow-x: hidden;
}

h1, h2, h3, h4, .font-display {
  font-family: 'Space Grotesk', system-ui, sans-serif;
}

code, pre, .font-mono {
  font-family: 'JetBrains Mono', monospace;
}

[hidden] {
  display: none !important;
}

/* Supaya pautan #seksyen tidak tersorok di bawah header tetap (mod 2D) */
section[id] {
  scroll-margin-top: 120px;
}

/* Technical grid & architectural pattern utilities */
.tech-grid {
  background-size: 48px 48px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

.tech-grid-dense {
  background-size: 24px 24px;
  background-image:
    linear-gradient(to right, rgba(183, 255, 60, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(183, 255, 60, 0.04) 1px, transparent 1px);
}

.tech-dot-grid {
  background-size: 28px 28px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
}

.vignette-soft {
  background: radial-gradient(circle at center, transparent 0%, #040507 100%);
}

.vignette-strong {
  background: radial-gradient(circle at center, transparent 20%, #040507 90%);
}

/* Custom subtle scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #08090B;
}
::-webkit-scrollbar-thumb {
  background: #1E232D;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #B7FF3C;
}

/* ============================================================
   Animasi umum
   ============================================================ */
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fade-in 0.2s ease-out both;
}

/* ============================================================
   Skrin pembukaan (loading screen)
   ============================================================ */
#loading-screen {
  transition: opacity 0.65s var(--ease-out-expo), transform 0.65s var(--ease-out-expo), filter 0.65s var(--ease-out-expo);
}

#loading-screen.is-exiting {
  opacity: 0;
  transform: scale(1.05);
  filter: blur(10px);
}

@keyframes point-of-light {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.8); opacity: 1; }
  100% { transform: scale(1); opacity: 0.4; }
}

.intro-light {
  animation: point-of-light 1.2s ease-out both;
}

@keyframes reticle-in {
  from { opacity: 0; transform: rotate(45deg) scale(0.2); }
  to { opacity: 1; transform: rotate(0) scale(1); }
}

.intro-reticle {
  animation: reticle-in 1.4s var(--ease-out-expo) 0.3s both;
}

@keyframes draw-path {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}

.intro-path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-path 1.2s ease-in-out 0.4s forwards;
}

.intro-path.delay {
  animation-duration: 1.3s;
  animation-delay: 0.6s;
}

.intro-reveal {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.intro-reveal.lower {
  transform: translateY(20px);
}

.intro-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================================
   Mod 3D: peralihan antara "world"
   ============================================================ */
.world {
  transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo);
}

.world.is-leaving {
  transition-duration: 0.35s;
}

/* Keadaan sebelum masuk */
.world[data-enter="up"].is-before { opacity: 0; transform: translateY(25px); }
.world[data-enter="left"].is-before { opacity: 0; transform: translateX(-30px); }
.world[data-enter="zoom"].is-before { opacity: 0; transform: scale(0.96); }

/* Keadaan semasa keluar */
.world[data-enter="up"].is-leaving { opacity: 0; transform: translateY(-20px); }
.world[data-enter="left"].is-leaving { opacity: 0; transform: translateX(30px); }
.world[data-enter="zoom"].is-leaving { opacity: 0; transform: scale(1.04); }

/* ============================================================
   Kursor tersuai (desktop sahaja)
   ============================================================ */
#cursor-ring {
  width: 28px;
  height: 28px;
  border-color: rgba(255, 255, 255, 0.25);
  transition: width 0.15s, height 0.15s, border-color 0.15s, background-color 0.15s;
}

#cursor-ring.is-pointer {
  width: 40px;
  height: 40px;
  border-color: #B7FF3C;
  background-color: rgba(183, 255, 60, 0.1);
}

/* Animasi kad masuk (dikongsi) */
@keyframes tech-card-in {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.tech-card {
  animation: tech-card-in 0.25s ease-out both;
}

/* ============================================================
   Mod 3D: label hab orbit (mengikut struktur 3D)
   ============================================================ */
.orbit-label {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.7rem 0.35rem 0.35rem;
  border-radius: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(8, 9, 11, 0.8);
  backdrop-filter: blur(10px);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #F4F5F7;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.3s, border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  will-change: transform;
}

.orbit-label::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 1px;
  height: 14px;
  background: linear-gradient(to bottom, rgba(183, 255, 60, 0.7), transparent);
}

.orbit-label-code {
  padding: 0.1rem 0.35rem;
  border-radius: 0.35rem;
  background: rgba(183, 255, 60, 0.12);
  color: #B7FF3C;
  font-weight: 700;
}

.orbit-label.is-hover,
.orbit-label:focus-visible {
  border-color: #B7FF3C;
  background: rgba(16, 19, 24, 0.95);
  box-shadow: 0 0 24px rgba(183, 255, 60, 0.35);
  outline: none;
}

.orbit-label.is-hover .orbit-label-code {
  background: #B7FF3C;
  color: #08090B;
}

/* ============================================================
   Mod 3D: rel orbit (01 → 05), kad fokus & animasi masuk
   ============================================================ */
.orbit-label.is-focus {
  border-color: rgba(183, 255, 60, 0.7);
  box-shadow: 0 0 18px rgba(183, 255, 60, 0.25);
}

.orbit-label.is-focus .orbit-label-code {
  background: #B7FF3C;
  color: #08090B;
}

.rail-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.3rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #9299A5;
  cursor: pointer;
  transition: color 0.25s;
}

.rail-item .rail-name {
  opacity: 0;
  transform: translateX(6px);
  transition: opacity 0.25s, transform 0.25s;
}

.rail-item .rail-tick {
  width: 10px;
  height: 2px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.25);
  transition: width 0.35s var(--ease-out-expo), background-color 0.25s, box-shadow 0.25s;
}

.rail-item:hover,
.rail-item:focus-visible {
  color: #F4F5F7;
  outline: none;
}

.rail-item:hover .rail-name,
.rail-item:focus-visible .rail-name,
.rail-item.is-active .rail-name {
  opacity: 1;
  transform: translateX(0);
}

.rail-item.is-active {
  color: #B7FF3C;
}

.rail-item.is-active .rail-tick {
  width: 28px;
  background: #B7FF3C;
  box-shadow: 0 0 10px #B7FF3C;
}

.rail-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
  align-self: flex-end;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(146, 153, 165, 0.8);
}

.rail-mouse {
  width: 16px;
  height: 24px;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 9px;
  position: relative;
}

.rail-mouse::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 4px;
  width: 2px;
  height: 5px;
  margin-left: -1px;
  border-radius: 2px;
  background: #B7FF3C;
  animation: rail-wheel 1.6s ease-in-out infinite;
}

@keyframes rail-wheel {
  0% { transform: translateY(0); opacity: 1; }
  70% { transform: translateY(8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}

/* Hab hilang semasa kamera masuk */
#orbit-hub {
  transition: opacity 0.35s ease;
}

#orbit-hub.is-diving {
  /* animation: none — animasi fade-in (fill: both) mengunci opacity jika tidak dimatikan */
  animation: none;
  opacity: 0;
}

/* Kilatan + terowong cahaya semasa menembusi struktur */
#dive-flash {
  opacity: 0;
  background:
    radial-gradient(circle at center, rgba(244, 245, 247, 0.95) 0%, rgba(183, 255, 60, 0.55) 18%, rgba(54, 217, 255, 0.18) 45%, transparent 70%);
}

#dive-flash.is-active {
  animation: dive-flash 0.75s ease-out both;
}

@keyframes dive-flash {
  0% { opacity: 0; transform: scale(0.2); }
  35% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0; transform: scale(2.4); }
}

@media (max-width: 639px) {
  .rail-item .rail-name { display: none; }
  .rail-scroll { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  #dive-flash.is-active,
  .rail-mouse::after { animation: none; }
}

/* Label orbit ringkas: nama hanya untuk struktur fokus / hover */
.orbit-label:not(.is-focus):not(.is-hover):not(:focus-visible) {
  padding: 0.3rem;
}

.orbit-label:not(.is-focus):not(.is-hover):not(:focus-visible) .orbit-label-name {
  display: none;
}

/* Label fokus berada di bawah struktur: garisan penunjuk di atas */
.orbit-label.is-focus::after {
  top: auto;
  bottom: 100%;
  background: linear-gradient(to top, rgba(183, 255, 60, 0.8), transparent);
}

.orbit-label.is-focus {
  font-size: 12px;
  padding: 0.45rem 0.9rem 0.45rem 0.45rem;
}

/* Garisan warp: cahaya memecut keluar dari tengah semasa kamera masuk */
#dive-warp {
  opacity: 0;
  background: repeating-conic-gradient(
    from 0deg,
    transparent 0deg 2.6deg,
    rgba(183, 255, 60, 0.55) 2.6deg 2.9deg,
    transparent 2.9deg 6.1deg,
    rgba(54, 217, 255, 0.45) 6.1deg 6.35deg,
    transparent 6.35deg 9deg
  );
  -webkit-mask-image: radial-gradient(circle at center, transparent 12%, rgba(0, 0, 0, 0.9) 45%, #000 75%);
  mask-image: radial-gradient(circle at center, transparent 12%, rgba(0, 0, 0, 0.9) 45%, #000 75%);
}

#dive-warp.is-active {
  animation: dive-warp 1.3s cubic-bezier(0.55, 0, 0.45, 1) both;
}

@keyframes dive-warp {
  0% { opacity: 0; transform: scale(0.6) rotate(0deg); }
  45% { opacity: 0.85; }
  75% { opacity: 0.6; }
  100% { opacity: 0; transform: scale(3.2) rotate(6deg); }
}

@media (prefers-reduced-motion: reduce) {
  #dive-warp.is-active { animation: none; }
}

/* ============================================================
   Tema orbit: utiliti yang dikongsi oleh World 01–05
   ============================================================ */

/* Teks naik perlahan (satu elemen) */
.is-entering .orbit-rise {
  animation: orbit-rise 0.8s var(--ease-out-expo) both;
  animation-delay: var(--delay, 0s);
}

@keyframes orbit-rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: none; }
}

/* Tajuk: huruf "merapat" dari jarak jauh seperti objek masuk ke orbit */
.is-entering .orbit-rise-line {
  animation: orbit-rise-line 1.1s var(--ease-out-expo) both;
  animation-delay: var(--delay, 0s);
}

@keyframes orbit-rise-line {
  from { opacity: 0; letter-spacing: 0.35em; filter: blur(10px); transform: translateY(10px); }
  to { opacity: 1; letter-spacing: -0.025em; filter: blur(0); transform: none; }
}

@keyframes orbit-spin {
  to { transform: rotate(360deg); }
}

@keyframes orbit-twinkle {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}

@keyframes orbit-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}

/* ============================================================
   World 01: Home Planet
   ============================================================ */
.home-system {
  position: relative;
  width: min(420px, 84vw);
  aspect-ratio: 1;
}

.home-orbits {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.home-orbits.is-back { z-index: 1; }
.home-orbits.is-front { z-index: 3; }

.home-orbits ellipse,
.home-orbits path {
  fill: none;
  stroke: rgba(183, 255, 60, 0.45);
  stroke-width: 1.2;
  vector-effect: non-scaling-stroke;
}

.home-orbits .is-cyan { stroke: rgba(54, 217, 255, 0.4); }
.home-orbits.is-back ellipse { stroke-opacity: 0.5; }

.is-entering .home-orbits ellipse,
.is-entering .home-orbits path {
  stroke-dasharray: 1;
  animation: orbit-draw 1.6s var(--ease-out-expo) 0.4s both;
}

.home-planet {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 62%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  overflow: hidden;
  background: radial-gradient(circle at 35% 30%, #1f3a1a 0%, #0f1d14 45%, #070b0a 100%);
  box-shadow:
    0 0 0 1px rgba(183, 255, 60, 0.35),
    0 0 40px rgba(183, 255, 60, 0.35),
    0 0 110px rgba(54, 217, 255, 0.18);
}

/* Permukaan planet: jalur samar yang berputar perlahan */
.home-planet-surface {
  position: absolute;
  inset: -20%;
  background:
    repeating-linear-gradient(170deg, transparent 0 18px, rgba(183, 255, 60, 0.05) 18px 30px),
    radial-gradient(circle at 70% 75%, rgba(54, 217, 255, 0.2), transparent 45%);
  animation: orbit-spin 90s linear infinite;
}

.home-photo {
  position: absolute;
  left: 50%;
  bottom: -2%;
  height: 96%;
  width: auto;
  max-width: none;
  transform: translateX(-50%);
  object-fit: contain;
  object-position: bottom;
}

/* Bayang sfera + cahaya atmosfera di tepi */
.home-planet-shade {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 25%, transparent 45%, rgba(4, 5, 7, 0.55) 78%, rgba(4, 5, 7, 0.9) 100%);
  box-shadow: inset 0 0 0 2px rgba(183, 255, 60, 0.18), inset 6px 8px 24px rgba(234, 255, 194, 0.12);
  pointer-events: none;
}

.is-entering .home-planet {
  animation: home-planet-in 1.3s var(--ease-out-expo) both;
}

@keyframes home-planet-in {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.6); filter: blur(8px); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: blur(0); }
}

/* Bulan (tag) — kedudukan dikira oleh createOrbiters() */
.moon-tag {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.65rem 0.3rem 0.35rem;
  border-radius: 999px;
  background: rgba(8, 9, 11, 0.85);
  border: 1px solid rgba(183, 255, 60, 0.4);
  backdrop-filter: blur(6px);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  color: #B7FF3C;
  white-space: nowrap;
  will-change: transform;
  --m: #B7FF3C;
}

.moon-tag.is-cyan {
  --m: #36D9FF;
  color: #36D9FF;
  border-color: rgba(54, 217, 255, 0.4);
}

.moon-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff, var(--m) 45%, #0b0f0d 100%);
  box-shadow: 0 0 10px var(--m);
}

/* ============================================================
   World 02: Solar System (komponen = planet)
   ============================================================ */
.reactor {
  --size: min(440px, 84vw);
  --node-r: calc(var(--size) * 0.3636); /* 160 / 440 */
  width: var(--size);
  height: var(--size);
}

.reactor-ring {
  transform-origin: 50% 50%;
  transform-box: view-box;
  transition: transform 1.2s cubic-bezier(0.65, 0, 0.35, 1);
}

.reactor-ticks,
.reactor-spin,
.reactor-orbit {
  transform-origin: 50% 50%;
  transform-box: view-box;
}

.reactor-ticks { animation: orbit-spin 160s linear infinite; }
.reactor-spin { animation: orbit-spin 24s linear infinite; }
.reactor-spin.reverse { animation-duration: 36s; animation-direction: reverse; }

.reactor-star { fill: #F4F5F7; opacity: 0.45; }
.reactor-star.twinkle { animation: orbit-twinkle 3s ease-in-out infinite; }

.reactor-pulse {
  transform-origin: 50% 50%;
  transform-box: view-box;
  animation: sun-pulse 3.2s ease-in-out infinite;
}

@keyframes sun-pulse {
  0%, 100% { opacity: 0.6; transform: scale(0.96); }
  50% { opacity: 1; transform: scale(1.06); }
}

.reactor-gauge {
  transition: stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1);
  filter: drop-shadow(0 0 8px rgba(183, 255, 60, 0.7));
}

.reactor-pointer {
  filter: drop-shadow(0 0 6px #B7FF3C);
  animation: orbit-twinkle 2s ease-in-out infinite;
}

/* Tali graviti dari matahari ke planet */
.energy-line {
  stroke: rgba(255, 255, 255, 0.12);
  stroke-width: 1;
  stroke-dasharray: 1 5;
  stroke-linecap: round;
}

.energy-line.is-active {
  stroke: rgba(183, 255, 60, 0.7);
  stroke-width: 1.6;
  animation: gravity-flow 1.2s linear infinite;
}

@keyframes gravity-flow {
  to { stroke-dashoffset: -12; }
}

.reactor-node-pos {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  transition: transform 1.2s cubic-bezier(0.65, 0, 0.35, 1);
}

/* Planet */
.reactor-node {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%) scale(1);
  width: calc(var(--size) * 0.13);
  height: calc(var(--size) * 0.13);
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 0;
  background: radial-gradient(circle at 32% 28%, #ffffffcc 0%, var(--p) 24%, color-mix(in srgb, var(--p) 40%, #05070a) 65%, #05070a 100%);
  box-shadow: 0 0 18px color-mix(in srgb, var(--p) 45%, transparent), inset -6px -8px 14px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  transition: transform 0.5s var(--ease-out-expo), box-shadow 0.4s;
}

/* Gelang planet (seperti Saturnus) — muncul pada planet aktif */
.reactor-node::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 175%;
  height: 48%;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--p) 75%, transparent);
  transform: translate(-50%, -50%) rotate(-18deg) scale(0.4);
  opacity: 0;
  transition: opacity 0.4s, transform 0.6s var(--ease-out-expo);
  pointer-events: none;
}

.reactor-node:hover,
.reactor-node:focus-visible {
  outline: none;
  box-shadow: 0 0 30px color-mix(in srgb, var(--p) 70%, transparent), inset -6px -8px 14px rgba(0, 0, 0, 0.55);
}

.reactor-node-code {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: clamp(10px, calc(var(--size) * 0.03), 13px);
  color: #08090B;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
}

.reactor-node-name {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(8px, calc(var(--size) * 0.021), 10px);
  letter-spacing: 0.12em;
  color: #9299A5;
  white-space: nowrap;
  transition: color 0.3s;
}

.reactor-node.is-active {
  transform: translate(-50%, -50%) scale(1.35);
  box-shadow: 0 0 40px color-mix(in srgb, var(--p) 75%, transparent), inset -6px -8px 14px rgba(0, 0, 0, 0.5);
}

.reactor-node.is-active::before {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(-18deg) scale(1);
}

.reactor-node.is-active .reactor-node-name {
  color: var(--p);
}

/* "Big bang" semasa World 02 dibuka */
.reactor.is-igniting::before {
  content: '';
  position: absolute;
  inset: 30%;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(234, 255, 194, 0.6), rgba(183, 255, 60, 0.15) 50%, transparent 70%);
  animation: big-bang 1.3s ease-out forwards;
  pointer-events: none;
}

@keyframes big-bang {
  0% { opacity: 1; transform: scale(0.3); }
  100% { opacity: 0; transform: scale(2.2); }
}

/* Panel planet */
.spec-planet-glow {
  position: absolute;
  right: -80px;
  top: -80px;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--p) 25%, transparent), transparent 70%);
  pointer-events: none;
}

.spec-planet-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff, var(--p) 45%, #05070a 100%);
  box-shadow: 0 0 10px var(--p);
}

.spec-in {
  animation: tech-card-in 0.5s ease-out both;
}

.spec-wipe {
  animation: orbit-rise-line 0.9s var(--ease-out-expo) both;
}

/* Teknologi sebagai bulan */
.moon-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem 0.35rem 0.4rem;
  border-radius: 999px;
  background: rgba(8, 9, 11, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #F4F5F7;
  animation: tech-card-in 0.45s ease-out both;
}

.moon-pill-orbit {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  border: 1px solid rgba(183, 255, 60, 0.35);
  animation: orbit-spin 3s linear infinite;
}

.moon-pill-orbit span {
  position: absolute;
  top: -3px;
  left: 50%;
  width: 5px;
  height: 5px;
  margin-left: -2.5px;
  border-radius: 999px;
  background: #B7FF3C;
  box-shadow: 0 0 6px #B7FF3C;
}

/* ============================================================
   World 03: MSD Originals (gaya platform penstriman)
   ============================================================ */
.nf {
  position: relative;
}

.nf-billboard {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 7.2;
  min-height: 360px;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #000;
  box-shadow: 0 40px 90px -40px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08);
  touch-action: pan-y;
}

.nf-backdrop,
.nf-backdrop-img,
.nf-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.nf-backdrop-img {
  object-fit: cover;
  object-position: top center;
  opacity: 0;
  transform: scale(1.06);
  transition: opacity 0.8s ease, transform 6s ease-out;
}

.nf-backdrop-img.is-in {
  opacity: 1;
  transform: scale(1);
}

.nf-video {
  object-fit: cover;
  object-position: top center;
  opacity: 0;
  transition: opacity 0.9s ease;
}

.nf-video.is-playing {
  opacity: 1;
}

.nf-shade-left {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4, 5, 7, 0.97) 0%, rgba(4, 5, 7, 0.9) 30%, rgba(4, 5, 7, 0.55) 48%, rgba(4, 5, 7, 0.1) 68%, transparent 80%);
  pointer-events: none;
}

.nf-shade-bottom {
  position: absolute;
  inset: auto 0 0 0;
  height: 45%;
  background: linear-gradient(to top, rgba(4, 5, 7, 0.97), rgba(4, 5, 7, 0.5) 50%, transparent);
  pointer-events: none;
}

.nf-info {
  position: absolute;
  left: clamp(1.25rem, 4vw, 3rem);
  bottom: clamp(1.25rem, 4vw, 2.75rem);
  width: min(460px, 60%);
  z-index: 2;
}

.nf-original {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.35em;
  color: #B7FF3C;
}

.nf-original img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.nf-title {
  margin-top: 0.5rem;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1.75rem, 4.2vw, 3.4rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
}

.nf-meta {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  font-size: 13px;
  font-weight: 600;
  color: #d4d7dd;
}

.nf-match {
  color: #B7FF3C;
  font-weight: 700;
}

.nf-hd {
  padding: 0 0.3rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  font-size: 10px;
  line-height: 1.4;
}

.nf-desc {
  margin-top: 0.7rem;
  font-size: clamp(13px, 1.2vw, 15px);
  line-height: 1.55;
  color: #e5e7eb;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.nf-tags {
  margin-top: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  font-size: 12px;
  color: #9aa1ad;
}

.nf-tags span {
  color: #4b5563;
}

.nf-actions {
  margin-top: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.nf-btn-play,
.nf-btn-info {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 1.4rem 0.65rem 1.1rem;
  border-radius: 0.4rem;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.15s;
}

.nf-btn-play {
  background: #fff;
  color: #08090B;
}

.nf-btn-play:hover {
  background: rgba(255, 255, 255, 0.78);
}

.nf-btn-info {
  background: rgba(109, 109, 110, 0.7);
  color: #fff;
}

.nf-btn-info:hover {
  background: rgba(109, 109, 110, 0.45);
}

.nf-btn-play:active,
.nf-btn-info:active {
  transform: scale(0.97);
}

.nf-side {
  position: absolute;
  right: 0;
  bottom: clamp(1.5rem, 4.5vw, 3rem);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.nf-round {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nf-round:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* Label klasifikasi di tepi kanan (gaya penstriman) */
.nf-rating {
  padding: 0.35rem 2.6rem 0.35rem 0.8rem;
  border-left: 3px solid #B7FF3C;
  background: rgba(51, 51, 51, 0.6);
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
}

.nf-progress {
  position: absolute;
  inset: auto 0 0 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.12);
  z-index: 2;
}

.nf-progress span {
  display: block;
  height: 100%;
  width: 0;
  background: #B7FF3C;
  box-shadow: 0 0 10px #B7FF3C;
  transition: width 0.25s linear;
}

/* Logo "sting" semasa World 03 dibuka */
.nf-sting {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: grid;
  place-items: center;
  background: #000;
  opacity: 0;
  pointer-events: none;
}

.nf-sting img {
  width: min(140px, 30%);
  filter: drop-shadow(0 0 30px rgba(183, 255, 60, 0.6));
}

.is-entering .nf-sting {
  animation: nf-sting-bg 1.5s ease both;
}

.is-entering .nf-sting img {
  animation: nf-sting-logo 1.5s cubic-bezier(0.7, 0, 0.3, 1) both;
}

@keyframes nf-sting-bg {
  0%, 60% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes nf-sting-logo {
  0% { transform: scale(0.6); opacity: 0; }
  25% { transform: scale(1); opacity: 1; }
  55% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(7); opacity: 0; }
}

.nf-in {
  animation: nf-in 0.6s var(--ease-out-expo) both;
}

@keyframes nf-in {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}

/* Baris "Top Projects" */
.nf-row {
  margin-top: 1.5rem;
}

.nf-row-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.nf-row-head h3 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1rem, 1.6vw, 1.3rem);
  font-weight: 700;
  color: #F4F5F7;
}

.nf-row-hint {
  font-size: 12px;
  color: #B7FF3C;
}

.nf-rail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
}

.nf-card {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  text-align: left;
}

/* Nombor ranking gergasi bergaya outline */
.nf-rank {
  flex-shrink: 0;
  width: 38%;
  margin-right: -10%;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(4.5rem, 9vw, 8rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.08em;
  color: #08090B;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
  transition: -webkit-text-stroke-color 0.3s;
}

.nf-card.is-active .nf-rank,
.nf-card:hover .nf-rank {
  -webkit-text-stroke-color: #B7FF3C;
}

.nf-poster {
  position: relative;
  z-index: 1;
  flex: 1;
  aspect-ratio: 16 / 10;
  border-radius: 0.4rem;
  overflow: hidden;
  background: #111;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.9);
  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s;
}

.nf-poster img:first-child {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(0.7);
  transition: filter 0.3s;
}

.nf-card:hover .nf-poster,
.nf-card:focus-visible .nf-poster {
  transform: scale(1.08);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.95);
}

.nf-card:focus-visible {
  outline: none;
}

.nf-card:hover .nf-poster img:first-child,
.nf-card.is-active .nf-poster img:first-child {
  filter: brightness(1);
}

.nf-card.is-active .nf-poster {
  box-shadow: 0 0 0 2px #B7FF3C, 0 12px 30px -10px rgba(183, 255, 60, 0.4);
}

.nf-card-badge {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 20px;
  height: 20px;
}

.nf-card-badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.8));
}

.nf-card-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.4rem 0.5rem 0.55rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nf-card-bar {
  position: absolute;
  left: 0.5rem;
  right: 0.5rem;
  bottom: 4px;
  height: 2px;
  background: rgba(255, 255, 255, 0.25);
}

.nf-card-bar span {
  display: block;
  height: 100%;
  width: 0;
  background: #B7FF3C;
  transition: width 0.25s linear;
}

.is-entering .nf-card {
  animation: nf-in 0.6s var(--ease-out-expo) both;
}

.is-entering .nf-card:nth-child(1) { animation-delay: 1.2s; }
.is-entering .nf-card:nth-child(2) { animation-delay: 1.3s; }
.is-entering .nf-card:nth-child(3) { animation-delay: 1.4s; }
.is-entering .nf-card:nth-child(4) { animation-delay: 1.5s; }
.is-entering .nf-card:nth-child(5) { animation-delay: 1.6s; }

@media (max-width: 767px) {
  .nf-billboard {
    aspect-ratio: auto;
    height: 480px;
  }

  .nf-shade-left {
    background: linear-gradient(to top, rgba(4, 5, 7, 0.98) 0%, rgba(4, 5, 7, 0.9) 55%, rgba(4, 5, 7, 0.35) 80%, rgba(4, 5, 7, 0.1) 100%);
  }

  .nf-info {
    width: auto;
    right: 1.25rem;
    bottom: 1.25rem;
  }

  .nf-side {
    top: 1rem;
    bottom: auto;
  }

  .nf-rating {
    padding-right: 1rem;
  }

  .nf-rail {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 0.5rem;
    margin-right: -1rem;
  }

  .nf-rank {
    font-size: 5rem;
  }

  .nf-card {
    flex: 0 0 62%;
    scroll-snap-align: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nf-backdrop-img,
  .nf-video,
  .nf-poster { transition: none; }
  .nf-in,
  .is-entering .nf-sting,
  .is-entering .nf-sting img,
  .is-entering .nf-card { animation: none; }
}

/* ============================================================
   World 04: Mission Trajectory
   ============================================================ */
.traj-space {
  position: relative;
  width: 100%;
  aspect-ratio: 600 / 400;
  container-type: inline-size;
  border-radius: 1.25rem;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 88%, rgba(54, 217, 255, 0.16), transparent 35%),
    radial-gradient(circle at 90% 18%, rgba(183, 255, 60, 0.14), transparent 35%),
    linear-gradient(160deg, #0b0f17 0%, #06070a 70%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.6), 0 30px 70px -30px rgba(0, 0, 0, 0.9);
}

.traj-star { fill: #F4F5F7; opacity: 0.4; }
.traj-star.twinkle { animation: orbit-twinkle 3.2s ease-in-out infinite; }

.traj-far-orbit {
  fill: none;
  stroke: rgba(255, 255, 255, 0.06);
  stroke-width: 1;
}

.traj-path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.12);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.traj-idle {
  fill: none;
  stroke: rgba(54, 217, 255, 0.5);
  stroke-width: 1.5;
  stroke-dasharray: 2 10;
  stroke-linecap: round;
  animation: traj-idle 3s linear infinite;
}

@keyframes traj-idle {
  to { stroke-dashoffset: -48; }
}

.traj-lit {
  fill: none;
  stroke: url(#traj-lit);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: url(#traj-glow);
}

.traj-ship { transition: opacity 0.3s; }

.traj-flame {
  transform-origin: -4px 0;
  animation: traj-flame 0.12s ease-in-out infinite alternate;
}

@keyframes traj-flame {
  from { transform: scaleX(0.7); opacity: 0.8; }
  to { transform: scaleX(1.2); opacity: 1; }
}

/* Planet perhentian */
.traj-planet {
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.traj-planet-body {
  position: relative;
  display: grid;
  place-items: center;
  width: max(26px, var(--s));
  height: max(26px, var(--s));
  border-radius: 999px;
  color: #08090B;
  background: radial-gradient(circle at 32% 28%, #ffffffcc 0%, var(--p) 26%, color-mix(in srgb, var(--p) 38%, #05070a) 68%, #05070a 100%);
  box-shadow: 0 0 14px color-mix(in srgb, var(--p) 35%, transparent), inset -5px -6px 12px rgba(0, 0, 0, 0.55);
  filter: saturate(0.55) brightness(0.8);
  transition: filter 0.4s, box-shadow 0.4s, transform 0.4s var(--ease-out-expo);
}

/* Orbit kecil di sekeliling setiap planet */
.traj-planet-body::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 170%;
  height: 55%;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--p) 45%, transparent);
  transform: translate(-50%, -50%) rotate(-20deg);
  pointer-events: none;
}

.traj-planet:hover .traj-planet-body,
.traj-planet:focus-visible .traj-planet-body {
  filter: none;
  outline: none;
}

.traj-planet.is-visited .traj-planet-body {
  filter: none;
  box-shadow: 0 0 26px color-mix(in srgb, var(--p) 70%, transparent), inset -5px -6px 12px rgba(0, 0, 0, 0.5);
}

.traj-planet.is-selected .traj-planet-body {
  transform: scale(1.15);
}

.traj-planet.is-arriving .traj-planet-body {
  animation: traj-arrive 0.7s var(--ease-out-expo);
}

@keyframes traj-arrive {
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--p) 80%, transparent); }
  100% { box-shadow: 0 0 0 22px transparent, 0 0 26px color-mix(in srgb, var(--p) 70%, transparent); }
}

.traj-planet-name {
  margin-top: 5px;
  padding: 1px 6px;
  border-radius: 999px;
  background: rgba(6, 7, 10, 0.75);
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(8px, 1.6cqw, 10px);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #9299A5;
  white-space: nowrap;
  transition: color 0.3s;
}

.traj-planet.is-visited .traj-planet-name,
.traj-planet.is-selected .traj-planet-name {
  color: #F4F5F7;
}

.traj-planet-ms {
  position: absolute;
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  font-weight: 700;
  color: var(--p);
  white-space: nowrap;
}

.traj-arrived {
  position: absolute;
  left: calc(540 / 600 * 100%);
  top: calc(78 / 400 * 100%);
  transform: translate(-70%, 60%) scale(0.5);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 800;
  color: #08090B;
  background: #B7FF3C;
  opacity: 0;
  pointer-events: none;
  z-index: 3;
  white-space: nowrap;
}

.traj-space.is-arrived .traj-arrived {
  animation: traj-arrived 2s var(--ease-out-expo) forwards;
}

@keyframes traj-arrived {
  0% { opacity: 0; transform: translate(-70%, 60%) scale(0.5); }
  20% { opacity: 1; transform: translate(-70%, 110%) scale(1); }
  80% { opacity: 1; }
  100% { opacity: 0; transform: translate(-70%, 110%) scale(1); }
}

.traj-space.is-arrived::after {
  content: '';
  position: absolute;
  left: calc(540 / 600 * 100%);
  top: calc(78 / 400 * 100%);
  width: 50px;
  height: 50px;
  margin: -25px 0 0 -25px;
  border-radius: 999px;
  border: 2px solid #B7FF3C;
  pointer-events: none;
  animation: traj-ripple 1.3s ease-out forwards;
}

@keyframes traj-ripple {
  from { opacity: 1; transform: scale(0.5); }
  to { opacity: 0; transform: scale(5); }
}

.traj-detail-glow {
  position: absolute;
  right: -70px;
  top: -70px;
  width: 200px;
  height: 200px;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--p) 22%, transparent), transparent 70%);
  pointer-events: none;
}

.traj-detail-planet {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: radial-gradient(circle at 32% 28%, #fff, var(--p) 40%, #05070a 100%);
  box-shadow: 0 0 14px var(--p);
}

.traj-log {
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(8, 10, 14, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  line-height: 1.55;
}

.traj-logs {
  min-height: 150px;
  max-height: 190px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.traj-log-row {
  animation: tech-card-in 0.3s ease-out both;
}

.traj-in {
  animation: tech-card-in 0.45s ease-out both;
}

.traj-wipe {
  animation: orbit-rise-line 0.8s var(--ease-out-expo) both;
}

/* ============================================================
   World 05: Launch Station
   ============================================================ */
.station {
  position: relative;
  width: min(360px, 80vw);
  aspect-ratio: 1;
}

.station-orbits {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.station-orbits.is-back { z-index: 1; }
.station-orbits.is-front { z-index: 3; }

.station-orbits ellipse,
.station-orbits path {
  fill: none;
  stroke: rgba(183, 255, 60, 0.4);
  stroke-width: 1.1;
  vector-effect: non-scaling-stroke;
  transition: stroke 0.3s;
}

.station-orbits .is-cyan { stroke: rgba(54, 217, 255, 0.4); }
.station-orbits .is-white { stroke: rgba(244, 245, 247, 0.28); }

.station.is-launching .station-orbits ellipse,
.station.is-launching .station-orbits path {
  stroke: rgba(183, 255, 60, 0.85);
}

.is-entering .station-orbits ellipse,
.is-entering .station-orbits path {
  stroke-dasharray: 1;
  animation: orbit-draw 1.6s var(--ease-out-expo) 0.3s both;
}

.station-planet {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 34%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: radial-gradient(circle at 32% 28%, #22341c 0%, #0e1812 55%, #050807 100%);
  box-shadow: 0 0 0 1px rgba(183, 255, 60, 0.35), 0 0 40px rgba(183, 255, 60, 0.3), inset -10px -12px 24px rgba(0, 0, 0, 0.6);
  animation: station-glow 3s ease-in-out infinite;
}

@keyframes station-glow {
  50% { box-shadow: 0 0 0 1px rgba(183, 255, 60, 0.5), 0 0 60px rgba(183, 255, 60, 0.45), inset -10px -12px 24px rgba(0, 0, 0, 0.6); }
}

.is-entering .station-planet {
  animation: home-planet-in 1.2s var(--ease-out-expo) both, station-glow 3s ease-in-out 1.2s infinite;
}

/* Satelit (kedudukan dikira oleh createOrbiters) */
.satellite {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  will-change: transform;
  --c: #B7FF3C;
}

.satellite.is-cyan { --c: #36D9FF; }
.satellite.is-white { --c: #F4F5F7; }

.satellite-body {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  color: #08090B;
  background: radial-gradient(circle at 35% 30%, #fff, var(--c) 50%, color-mix(in srgb, var(--c) 40%, #05070a) 100%);
  box-shadow: 0 0 16px color-mix(in srgb, var(--c) 60%, transparent);
  transition: transform 0.25s var(--ease-out-expo);
}

.satellite-label {
  padding: 1px 7px;
  border-radius: 999px;
  background: rgba(8, 9, 11, 0.85);
  border: 1px solid color-mix(in srgb, var(--c) 40%, transparent);
  color: var(--c);
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

a.satellite:hover .satellite-body,
a.satellite:focus-visible .satellite-body {
  transform: scale(1.2);
}

a.satellite:focus-visible {
  outline: none;
}

/* Roket dilancarkan dari bawah ke orbit */
.station-rocket {
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: -6%;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  margin-left: -18px;
  border-radius: 999px;
  color: #08090B;
  background: #B7FF3C;
  box-shadow: 0 0 24px #B7FF3C;
  opacity: 0;
  transform: rotate(-45deg);
  pointer-events: none;
}

.station.is-launching .station-rocket {
  animation: station-launch 1.9s cubic-bezier(0.55, 0, 0.3, 1) forwards;
}

@keyframes station-launch {
  0% { opacity: 0; transform: translateY(40px) rotate(-45deg) scale(0.6); }
  15% { opacity: 1; }
  60% { transform: translateY(-190px) rotate(-45deg) scale(1); opacity: 1; }
  100% { transform: translateY(-190px) translateX(140px) rotate(45deg) scale(0.4); opacity: 0; }
}

/* Borang */
.uplink-console {
  position: relative;
  border-radius: 1.5rem;
  background: rgba(16, 19, 24, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
  box-shadow: 0 30px 70px -30px rgba(0, 0, 0, 0.9);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.uplink.is-launching .uplink-console {
  border-color: rgba(183, 255, 60, 0.5);
  box-shadow: 0 0 50px -10px rgba(183, 255, 60, 0.35);
}

.uplink-mini-orbit {
  position: relative;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid rgba(183, 255, 60, 0.35);
  animation: orbit-spin 6s linear infinite;
}

.uplink-mini-orbit::before {
  content: '';
  position: absolute;
  inset: 11px;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff, #B7FF3C 50%, #1a2a10 100%);
}

.uplink-mini-orbit span {
  position: absolute;
  top: -3px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 999px;
  background: #36D9FF;
  box-shadow: 0 0 6px #36D9FF;
}

.uplink-label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #9299A5;
}

.uplink-label.flex {
  display: flex;
}

.uplink-field input,
.uplink-field textarea {
  width: 100%;
  margin-top: 0.4rem;
  padding: 0.7rem 0.9rem;
  border-radius: 0.9rem;
  background: rgba(8, 9, 11, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #F4F5F7;
  font-size: 14px;
  resize: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.uplink-field input::placeholder,
.uplink-field textarea::placeholder {
  color: rgba(146, 153, 165, 0.55);
}

.uplink-field input:focus,
.uplink-field textarea:focus {
  outline: none;
  border-color: rgba(183, 255, 60, 0.6);
  box-shadow: 0 0 0 4px rgba(183, 255, 60, 0.1);
}

.uplink-chip {
  position: relative;
  cursor: pointer;
}

.uplink-chip input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.uplink-chip span {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(8, 9, 11, 0.8);
  font-size: 12px;
  color: #9299A5;
  transition: all 0.2s;
}

.uplink-chip:hover span {
  color: #F4F5F7;
  border-color: rgba(54, 217, 255, 0.5);
}

.uplink-chip input:checked + span {
  color: #08090B;
  background: #B7FF3C;
  border-color: #B7FF3C;
  box-shadow: 0 0 16px rgba(183, 255, 60, 0.4);
}

.uplink-chip input:focus-visible + span {
  outline: 2px solid #36D9FF;
  outline-offset: 2px;
}

.uplink-send {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.95rem;
  border-radius: 999px;
  background: #B7FF3C;
  color: #08090B;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(183, 255, 60, 0.3);
  transition: box-shadow 0.25s, transform 0.15s;
}

.uplink-send:hover { box-shadow: 0 0 40px rgba(183, 255, 60, 0.55); }
.uplink-send:active { transform: scale(0.99); }
.uplink-send:disabled { opacity: 0.6; cursor: wait; }

.uplink-progress {
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  background: rgba(8, 9, 11, 0.9);
  border: 1px solid rgba(183, 255, 60, 0.3);
}

.uplink-bar {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #36D9FF, #B7FF3C);
  box-shadow: 0 0 10px #B7FF3C;
  transition: width 0.45s var(--ease-out-expo);
}

.uplink-stage-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  transition: background-color 0.2s, box-shadow 0.2s;
}

.uplink-stage-dot.is-on {
  background: #B7FF3C;
  box-shadow: 0 0 6px #B7FF3C;
}

.uplink-delivered {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  color: #08090B;
  background: radial-gradient(circle at 35% 30%, #fff, #B7FF3C 55%, #6f9a22 100%);
  box-shadow: 0 0 0 8px rgba(183, 255, 60, 0.12), 0 0 40px rgba(183, 255, 60, 0.5);
  animation: home-planet-in 0.7s var(--ease-out-expo) both;
}

.is-entering .uplink-console {
  animation: orbit-rise 0.9s var(--ease-out-expo) 0.2s both;
}

/* ============================================================
   Kurangkan gerakan
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .reactor-ring,
  .reactor-node-pos,
  .reactor-gauge { transition: none; }

  .is-entering .orbit-rise,
  .is-entering .orbit-rise-line,
  .home-planet-surface,
  .is-entering .home-planet,
  .is-entering .home-orbits ellipse,
  .is-entering .home-orbits path,
  .reactor-ticks,
  .reactor-spin,
  .reactor-pulse,
  .reactor-pointer,
  .reactor-star.twinkle,
  .energy-line.is-active,
  .reactor.is-igniting::before,
  .spec-in,
  .spec-wipe,
  .moon-pill,
  .moon-pill-orbit,
  .traj-star.twinkle,
  .traj-idle,
  .traj-flame,
  .traj-planet.is-arriving .traj-planet-body,
  .traj-space.is-arrived .traj-arrived,
  .traj-space.is-arrived::after,
  .traj-log-row,
  .traj-in,
  .traj-wipe,
  .station-planet,
  .is-entering .station-planet,
  .is-entering .station-orbits ellipse,
  .is-entering .station-orbits path,
  .station.is-launching .station-rocket,
  .uplink-mini-orbit,
  .uplink-delivered,
  .is-entering .uplink-console { animation: none; }
}

/* ============================================================
   Mod 2D: "Orbit Editorial"
   ============================================================ */

/* Latar bintang + nebula (tetap, di belakang semua kandungan) */
.h2d-sky {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(ellipse 60% 45% at 85% 0%, rgba(54, 217, 255, 0.07), transparent 70%),
    radial-gradient(ellipse 55% 40% at 0% 100%, rgba(183, 255, 60, 0.05), transparent 70%),
    linear-gradient(to bottom, #04050a 0%, #06070a 60%, #07100c 100%);
  /* Pusat Bumi (di bawah skrin) — bintang & bulan berputar mengelilinginya */
  --earth-x: 50vw;
  --earth-y: calc(100vh + 70vmax);
}

/* Bintang: lapisan besar berpusat pada Bumi, berputar perlahan seperti langit malam */
.sky-stars {
  position: absolute;
  left: var(--earth-x);
  top: var(--earth-y);
  width: 330vmax;
  height: 330vmax;
  margin: -165vmax 0 0 -165vmax;
  background-image:
    radial-gradient(1px 1px at 12% 18%, rgba(255, 255, 255, 0.8), transparent),
    radial-gradient(1px 1px at 28% 72%, rgba(255, 255, 255, 0.55), transparent),
    radial-gradient(1.5px 1.5px at 44% 34%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1px 1px at 63% 81%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 77% 22%, rgba(183, 255, 60, 0.75), transparent),
    radial-gradient(1px 1px at 88% 58%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1.5px 1.5px at 6% 90%, rgba(54, 217, 255, 0.75), transparent),
    radial-gradient(1px 1px at 53% 8%, rgba(255, 255, 255, 0.55), transparent);
  background-size: 260px 260px, 340px 340px, 300px 300px, 420px 420px, 520px 520px, 380px 380px, 600px 600px, 460px 460px;
  animation: sky-rotate 360s linear infinite;
  will-change: transform;
}

.sky-stars.is-far {
  opacity: 0.5;
  background-size: 180px 180px, 230px 230px, 210px 210px, 290px 290px, 350px 350px, 260px 260px, 400px 400px, 310px 310px;
  animation-duration: 540s;
}

@keyframes sky-rotate {
  to { transform: rotate(360deg); }
}

/* Orbit bulan: berpusat pada Bumi; bulan terbit di kiri, melintasi langit, terbenam di kanan */
.sky-orbit {
  position: absolute;
  left: var(--earth-x);
  top: var(--earth-y);
  width: 0;
  height: 0;
  --arc: 29deg; /* separuh sudut laluan: terbit di tepi kiri, terbenam di tepi kanan */
  animation: moon-orbit 90s linear infinite;
  will-change: transform;
}

@keyframes moon-orbit {
  from { transform: rotate(calc(var(--arc) * -1)); }
  to { transform: rotate(var(--arc)); }
}

.sky-moon {
  --m: clamp(56px, 7vw, 108px);
  position: absolute;
  left: calc(var(--m) / -2);
  top: calc(-1 * (70vmax + 100vh - 15vh) - var(--m) / 2);
  width: var(--m);
  height: var(--m);
  border-radius: 999px;
  background: radial-gradient(circle at 38% 34%, #fbfdf2 0%, #e6ecd6 38%, #b7bfa4 70%, #8a927a 100%);
  box-shadow:
    inset calc(var(--m) * -0.28) calc(var(--m) * -0.06) calc(var(--m) * 0.22) rgba(6, 8, 12, 0.85),
    0 0 40px rgba(234, 255, 194, 0.28),
    0 0 120px rgba(183, 255, 60, 0.12);
  animation: moon-fade 90s linear infinite;
}

/* Kawah bulan */
.sky-moon-craters {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background:
    radial-gradient(circle at 30% 30%, rgba(120, 128, 108, 0.55) 0 7%, transparent 8%),
    radial-gradient(circle at 58% 52%, rgba(120, 128, 108, 0.45) 0 11%, transparent 12%),
    radial-gradient(circle at 40% 68%, rgba(120, 128, 108, 0.4) 0 6%, transparent 7%),
    radial-gradient(circle at 70% 28%, rgba(120, 128, 108, 0.35) 0 4%, transparent 5%);
  mix-blend-mode: multiply;
}

/* Pudar semasa terbit/terbenam di ufuk */
@keyframes moon-fade {
  0% { opacity: 0; }
  8% { opacity: 0.55; }
  92% { opacity: 0.55; }
  100% { opacity: 0; }
}

/* Ufuk Bumi di bawah skrin dengan atmosfera bercahaya */
.sky-earth {
  position: absolute;
  left: 50%;
  bottom: -118vmax;
  width: 180vmax;
  height: 130vmax;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 0%, #0f2419 0%, #08130e 18%, #050807 40%);
  box-shadow:
    0 -2px 0 rgba(183, 255, 60, 0.35),
    0 -20px 60px rgba(54, 217, 255, 0.18),
    0 -60px 140px rgba(183, 255, 60, 0.1);
  opacity: 0.9;
}

@media (max-width: 639px) {
  .h2d-sky { --earth-y: calc(100vh + 55vmax); }
  .sky-orbit { --arc: 13deg; }
  .sky-moon { top: calc(-1 * (55vmax + 100vh - 13vh) - var(--m) / 2); }
  .sky-earth { bottom: -122vmax; }
}

@media (prefers-reduced-motion: reduce) {
  .sky-stars,
  .sky-orbit,
  .sky-moon { animation: none; }
  .sky-orbit { transform: rotate(-22deg); }
}

/* Navigasi pil */
.h2d-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.45rem 0.5rem 0.45rem 1rem;
  border-radius: 999px;
  background: rgba(12, 14, 18, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.h2d-nav.is-scrolled {
  background: rgba(10, 12, 16, 0.85);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.9);
}

.h2d-links {
  position: relative;
  align-items: center;
  gap: 0.15rem;
}

.h2d-links a {
  position: relative;
  z-index: 1;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 500;
  color: #a3a9b4;
  transition: color 0.25s;
}

.h2d-links a:hover,
.h2d-links a:focus-visible {
  color: #F4F5F7;
  outline: none;
}

.h2d-links a.is-active {
  color: #08090B;
}

.h2d-indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-radius: 999px;
  background: #B7FF3C;
  box-shadow: 0 0 18px rgba(183, 255, 60, 0.45);
  opacity: 0;
  transition: transform 0.45s var(--ease-out-expo), width 0.45s var(--ease-out-expo), opacity 0.3s;
}

.h2d-pill-solid,
.h2d-pill-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.25s, transform 0.15s;
}

.h2d-pill-solid {
  color: #08090B;
  background: #B7FF3C;
  box-shadow: 0 0 22px rgba(183, 255, 60, 0.3);
}

.h2d-pill-solid:hover {
  background: #c6ff63;
  box-shadow: 0 0 32px rgba(183, 255, 60, 0.5);
}

.h2d-pill-ghost {
  color: #F4F5F7;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.h2d-pill-ghost:hover {
  border-color: rgba(54, 217, 255, 0.55);
  background: rgba(54, 217, 255, 0.06);
}

.h2d-pill-solid.is-lg,
.h2d-pill-ghost.is-lg {
  padding: 0.9rem 1.5rem;
  font-size: 14px;
}

.h2d-pill-solid:active,
.h2d-pill-ghost:active {
  transform: scale(0.98);
}

.h2d-drawer-link {
  display: flex;
  align-items: baseline;
  gap: 0.9rem;
  padding: 0.55rem 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #F4F5F7;
  transition: color 0.2s;
}

.h2d-drawer-link span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #B7FF3C;
}

.h2d-drawer-link:hover {
  color: #B7FF3C;
}

/* Hero */
.h2d-serif {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #B7FF3C;
  text-shadow: 0 0 40px rgba(183, 255, 60, 0.35);
}

.h2d-system {
  position: relative;
  width: min(520px, 88vw);
  aspect-ratio: 1;
}

.h2d-orbits {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.h2d-orbits.is-back { z-index: 1; }
.h2d-orbits.is-front { z-index: 3; }

.h2d-orbits ellipse,
.h2d-orbits path {
  fill: none;
  stroke: rgba(183, 255, 60, 0.4);
  stroke-width: 1.2;
  vector-effect: non-scaling-stroke;
}

.h2d-orbits .is-cyan { stroke: rgba(54, 217, 255, 0.35); }
.h2d-orbits.is-back ellipse { stroke-opacity: 0.45; }

.h2d-planet {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 66%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  overflow: hidden;
  background: radial-gradient(circle at 35% 28%, #17231a 0%, #0b100e 55%, #050607 100%);
  box-shadow:
    0 0 0 1px rgba(183, 255, 60, 0.3),
    0 0 50px rgba(183, 255, 60, 0.22),
    0 0 120px rgba(54, 217, 255, 0.12),
    inset -18px -22px 50px rgba(0, 0, 0, 0.7);
}

.h2d-moon {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 86px;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(10, 12, 16, 0.85);
  border: 1px solid rgba(183, 255, 60, 0.4);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 22px rgba(183, 255, 60, 0.15);
  will-change: transform;
}

.h2d-moon strong {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1;
  color: #F4F5F7;
}

.h2d-moon span {
  margin-top: 2px;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #B7FF3C;
}

.h2d-moon.is-cyan { border-color: rgba(54, 217, 255, 0.45); box-shadow: 0 0 22px rgba(54, 217, 255, 0.15); }
.h2d-moon.is-cyan span { color: #36D9FF; }
.h2d-moon.is-violet { border-color: rgba(167, 139, 250, 0.45); box-shadow: 0 0 22px rgba(167, 139, 250, 0.15); }
.h2d-moon.is-violet span { color: #A78BFA; }

.h2d-hero-copy > * {
  animation: orbit-rise 0.9s var(--ease-out-expo) both;
}

.h2d-hero-copy > *:nth-child(2) { animation-delay: 0.08s; }
.h2d-hero-copy > *:nth-child(3) { animation-delay: 0.16s; }
.h2d-hero-copy > *:nth-child(4) { animation-delay: 0.24s; }
.h2d-hero-copy > *:nth-child(5) { animation-delay: 0.32s; }

.h2d-scroll-cue {
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 11px;
  color: #9299A5;
  transition: color 0.2s;
}

.h2d-scroll-cue:hover {
  color: #B7FF3C;
}

.h2d-scroll-mouse {
  position: relative;
  width: 18px;
  height: 28px;
  border-radius: 10px;
  border: 1.5px solid currentColor;
}

.h2d-scroll-mouse::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 5px;
  width: 2px;
  height: 6px;
  margin-left: -1px;
  border-radius: 2px;
  background: #B7FF3C;
  animation: rail-wheel 1.6s ease-in-out infinite;
}

/* Seksyen */
.h2d-section {
  isolation: isolate;
}

/* Lengkung orbit bercahaya sebagai pemisah seksyen */
.h2d-section::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: min(1200px, 120vw);
  height: 120px;
  transform: translate(-50%, -60px);
  border-radius: 50%;
  border-top: 1px solid rgba(183, 255, 60, 0.18);
  box-shadow: 0 -1px 30px -6px rgba(183, 255, 60, 0.12);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 25%, #000 75%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 25%, #000 75%, transparent);
  pointer-events: none;
  z-index: -1;
}

/* Nombor seksyen gergasi bergaya outline */
.h2d-section::before {
  content: attr(data-num);
  position: absolute;
  top: clamp(2.5rem, 6vw, 4.5rem);
  right: max(1rem, calc((100vw - 80rem) / 2 + 1rem));
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(6rem, 16vw, 13rem);
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
  pointer-events: none;
  z-index: -1;
}

.h2d-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(183, 255, 60, 0.07);
  border: 1px solid rgba(183, 255, 60, 0.22);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B7FF3C;
}

.h2d-eyebrow.is-cyan {
  background: rgba(54, 217, 255, 0.07);
  border-color: rgba(54, 217, 255, 0.22);
  color: #36D9FF;
}

/* Kad dalam seksyen: lebih bulat, berkaca */
#mode-2d main .rounded-2xl { border-radius: 1.5rem; }
#mode-2d main .rounded-3xl { border-radius: 1.75rem; }
#mode-2d main .rounded-xl { border-radius: 1rem; }

#mode-2d main [class*="bg-[#101318]"] {
  background-color: rgba(18, 21, 27, 0.62);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

#mode-2d main [class*="bg-[#08090B]"],
#mode-2d main [class*="bg-[#0A0C0F]"] {
  background-color: rgba(8, 9, 12, 0.72);
}

/* Muncul bila di-scroll */
.reveal-ready .h2d-reveal > div {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s ease, transform 0.9s var(--ease-out-expo);
}

.reveal-ready .h2d-reveal.is-in > div {
  opacity: 1;
  transform: none;
}

/* Butang kembali ke atas: gelang kemajuan */
.h2d-progress {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 45;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  color: #F4F5F7;
  background: rgba(10, 12, 16, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s, color 0.2s;
}

.h2d-progress.is-visible {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}

.h2d-progress:hover {
  color: #B7FF3C;
}

.h2d-progress .h2d-progress-ring {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
}

.h2d-progress-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 2.5;
}

.h2d-progress-fill {
  fill: none;
  stroke: #B7FF3C;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  filter: drop-shadow(0 0 4px rgba(183, 255, 60, 0.6));
}

.h2d-footer {
  background: linear-gradient(to bottom, transparent, rgba(8, 9, 12, 0.9) 40%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .h2d-indicator,
  .h2d-progress { transition: none; }
  .h2d-hero-copy > *,
  .h2d-scroll-mouse::after { animation: none; }
}


/* Skrin kecil: sembunyikan "Let's Talk" dalam nav supaya butang menu muat */
@media (max-width: 639px) {
  .h2d-nav .h2d-pill-solid {
    display: none;
  }

  .h2d-nav {
    padding-left: 0.75rem;
  }
}

@media (max-width: 639px) {
  .h2d-moon {
    min-width: 0;
    padding: 0.3rem 0.55rem;
  }

  .h2d-moon strong { font-size: 0.95rem; }
  .h2d-moon span { font-size: 8px; }
}

/* ============================================================
   Mobile: mod 3D
   ============================================================ */
@media (max-width: 639px) {
  /* Butang header cukup besar untuk jari */
  .hud-btn {
    min-height: 40px;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }

  /* Dok navigasi bawah: kekal di bawah skrin dengan latar pudar supaya kandungan tidak bertindih */
  #hud-dock {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.75rem 0.75rem max(0.75rem, env(safe-area-inset-bottom));
    background: linear-gradient(to top, rgba(4, 5, 7, 0.97) 55%, rgba(4, 5, 7, 0));
  }

  #hud-dock .hud-location {
    padding: 0.7rem 0.8rem;
    max-width: 40vw;
  }

  #hud-dock button {
    min-height: 44px;
    min-width: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  #hud-dock button[hidden] {
    display: none;
  }

  /* Ruang di bawah setiap world supaya kandungan terakhir tidak tersorok di bawah dok */
  .world > div {
    padding-bottom: 7.5rem;
  }

  /* World 04: tanda "ARRIVED" lebih kecil, di sebelah kiri planet terakhir */
  .traj-arrived {
    font-size: 9px;
    padding: 0.2rem 0.5rem;
  }

  @keyframes traj-arrived {
    0% { opacity: 0; transform: translate(-115%, -40%) scale(0.5); }
    20% { opacity: 1; transform: translate(-115%, -40%) scale(1); }
    80% { opacity: 1; }
    100% { opacity: 0; transform: translate(-115%, -40%) scale(1); }
  }
}

/* Peranti sentuh: label orbit & poster lebih mudah ditekan */
@media (pointer: coarse) {
  .orbit-label {
    min-height: 40px;
    min-width: 44px;
    justify-content: center;
  }
}

@media (max-width: 639px) {
  #hud-top {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: max(1rem, env(safe-area-inset-top)) 1rem 1.5rem;
    background: linear-gradient(to bottom, rgba(4, 5, 7, 0.95) 55%, rgba(4, 5, 7, 0));
  }
}

/* ============================================================
   Mod 2D: seksyen bertema orbit
   ============================================================ */

/* Tajuk seksyen */
.h2d-head {
  max-width: 48rem;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.h2d-title {
  margin-top: 1rem;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(2.2rem, 5.2vw, 4rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: #F4F5F7;
}

.h2d-title em {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #B7FF3C;
}

.h2d-lead {
  margin-top: 1rem;
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  line-height: 1.65;
  color: #a3a9b4;
}

/* Umum */
.rise2d {
  animation: orbit-rise 0.6s var(--ease-out-expo) both;
}

.round2d {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  color: #F4F5F7;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
}

.round2d:hover:not(:disabled) {
  border-color: #B7FF3C;
  color: #B7FF3C;
}

.round2d:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.chip2d {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  min-height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  font-size: 13px;
  font-weight: 600;
  color: #a3a9b4;
  cursor: pointer;
  transition: all 0.2s;
  --p: #B7FF3C;
}

.chip2d span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  opacity: 0.7;
}

.chip2d:hover {
  color: #F4F5F7;
  border-color: color-mix(in srgb, var(--p) 50%, transparent);
}

.chip2d.is-active {
  color: #08090B;
  background: var(--p);
  border-color: var(--p);
  box-shadow: 0 0 18px color-mix(in srgb, var(--p) 45%, transparent);
}

.eng2d-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.eng2d-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff, var(--p) 45%, #05070a 100%);
  box-shadow: 0 0 10px var(--p);
}

.eng2d-moons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.eng2d-moons span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem 0.4rem 0.5rem;
  border-radius: 999px;
  background: rgba(8, 9, 12, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
  color: #F4F5F7;
}

.eng2d-moons i {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--p);
  box-shadow: 0 0 8px var(--p);
}

/* ---------- 01 Constellation ---------- */
.eng2d-track {
  position: relative;
  height: clamp(150px, 20vw, 230px);
  margin: 0 auto 2.5rem;
}

.eng2d-arc {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.eng2d-arc path {
  fill: none;
  vector-effect: non-scaling-stroke;
}

.eng2d-arc-base {
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 1.5;
}

.eng2d-arc-flow {
  stroke: rgba(183, 255, 60, 0.6);
  stroke-width: 1.5;
  stroke-dasharray: 2 14;
  animation: eng2d-flow 3s linear infinite;
}

@keyframes eng2d-flow {
  to { stroke-dashoffset: -64; }
}

.eng2d-planet {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.eng2d-orb {
  display: grid;
  place-items: center;
  width: clamp(46px, 6vw, 64px);
  height: clamp(46px, 6vw, 64px);
  border-radius: 999px;
  color: #08090B;
  background: radial-gradient(circle at 32% 28%, #ffffffcc 0%, var(--p) 25%, color-mix(in srgb, var(--p) 40%, #05070a) 68%, #05070a 100%);
  box-shadow: 0 0 18px color-mix(in srgb, var(--p) 40%, transparent), inset -6px -8px 14px rgba(0, 0, 0, 0.5);
  filter: saturate(0.6) brightness(0.8);
  transition: transform 0.5s var(--ease-out-expo), filter 0.3s, box-shadow 0.3s;
}

.eng2d-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #9299A5;
  white-space: nowrap;
  transition: color 0.3s;
}

.eng2d-planet:hover .eng2d-orb,
.eng2d-planet:focus-visible .eng2d-orb {
  filter: none;
}

.eng2d-planet:focus-visible { outline: none; }

.eng2d-planet.is-active .eng2d-orb {
  filter: none;
  transform: scale(1.25);
  box-shadow: 0 0 0 8px color-mix(in srgb, var(--p) 14%, transparent), 0 0 40px color-mix(in srgb, var(--p) 70%, transparent), inset -6px -8px 14px rgba(0, 0, 0, 0.45);
}

.eng2d-planet.is-active .eng2d-name {
  color: var(--p);
}

.eng2d-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 1.75rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

@media (min-width: 900px) {
  .eng2d-detail { grid-template-columns: 1fr 1.1fr; }
}

.eng2d-visual {
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 30px 60px -30px color-mix(in srgb, var(--p) 60%, transparent);
}

.eng2d-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fade-in 0.5s ease both;
}

.eng2d-copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.eng2d-copy h3,
.alt2d-detail h3,
.ph2d-copy h3,
.sk2d-detail h3 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1.5rem, 2.6vw, 2.1rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #F4F5F7;
}

.eng2d-copy p,
.alt2d-detail p,
.ph2d-copy p {
  color: #c9cdd4;
  line-height: 1.65;
}

.eng2d-copy blockquote,
.alt2d-detail blockquote {
  padding: 0.9rem 1.1rem;
  border-left: 2px solid var(--p);
  border-radius: 0 0.9rem 0.9rem 0;
  background: color-mix(in srgb, var(--p) 6%, transparent);
  font-size: 14px;
  color: #a3a9b4;
  line-height: 1.6;
}

.eng2d-nav {
  display: flex;
  gap: 0.6rem;
  padding-top: 0.25rem;
}

@media (max-width: 639px) {
  .eng2d-name { display: none; }
  .eng2d-planet.is-active .eng2d-name { display: block; position: absolute; top: 100%; margin-top: 0.6rem; }
}

/* ---------- 02 Orbit Gauges ---------- */
.sk2d-filters,
.sv2d-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.sk2d-gauges {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) { .sk2d-gauges { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .sk2d-gauges { grid-template-columns: repeat(5, 1fr); } }

.sk2d-gauge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.4rem 0.75rem 1.2rem;
  border-radius: 1.5rem;
  background: rgba(18, 21, 27, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: border-color 0.3s, transform 0.35s var(--ease-out-expo), background-color 0.3s;
}

.sk2d-gauge:hover { transform: translateY(-4px); }

.sk2d-gauge.is-active {
  border-color: color-mix(in srgb, var(--p) 55%, transparent);
  background: color-mix(in srgb, var(--p) 6%, rgba(18, 21, 27, 0.7));
}

.sk2d-ring {
  position: relative;
  display: grid;
  place-items: center;
  width: clamp(92px, 11vw, 120px);
  aspect-ratio: 1;
}

.sk2d-ring svg {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
}

.sk2d-ring-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 6;
}

.sk2d-ring-fill {
  fill: none;
  stroke: var(--p);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  filter: drop-shadow(0 0 6px var(--p));
  transition: stroke-dashoffset 1.4s var(--ease-out-expo);
}

/* Satelit kecil di hujung gelang */
.sk2d-sat {
  position: absolute;
  inset: 0;
  transform: rotate(0deg);
  transition: transform 1.4s var(--ease-out-expo);
}

.sk2d-sat::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 3px;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 0 10px var(--p), 0 0 0 3px color-mix(in srgb, var(--p) 40%, transparent);
  opacity: 0;
  transition: opacity 0.3s 1s;
}

.is-filled .sk2d-sat { transform: rotate(calc(var(--pct) * 3.6deg)); }
.is-filled .sk2d-sat::after { opacity: 1; }

.sk2d-ring strong {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1.5rem, 2.4vw, 1.9rem);
  font-weight: 700;
  color: #F4F5F7;
}

.sk2d-ring small {
  font-size: 0.6em;
  color: var(--p);
}

.sk2d-label {
  font-size: 14px;
  font-weight: 600;
  color: #F4F5F7;
  text-align: center;
}

.sk2d-rank {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--p);
}

.sk2d-detail {
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 1.75rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.sk2d-detail-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.sk2d-detail-head h3 { margin-top: 0.4rem; }

.sk2d-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #9299A5;
}

.sk2d-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 768px) { .sk2d-list { grid-template-columns: 1fr 1fr; } }

.sk2d-tech {
  display: flex;
  gap: 0.9rem;
  padding: 1rem;
  border-radius: 1.1rem;
  background: rgba(8, 9, 12, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.sk2d-tech strong {
  font-size: 15px;
  color: #F4F5F7;
}

.sk2d-tech p {
  margin-top: 0.3rem;
  font-size: 13px;
  line-height: 1.55;
  color: #9299A5;
}

.sk2d-tech-orbit {
  position: relative;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-top: 2px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--p) 45%, transparent);
  animation: orbit-spin 5s linear infinite;
}

.sk2d-tech-orbit i {
  position: absolute;
  top: -3px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 999px;
  background: var(--p);
  box-shadow: 0 0 6px var(--p);
}

.sk2d-badge {
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #9299A5;
}

.sk2d-badge.is-adv {
  border-color: rgba(183, 255, 60, 0.4);
  color: #B7FF3C;
}

.sk2d-empty {
  color: #9299A5;
  font-size: 14px;
}

/* ---------- 03 Mission Timeline ---------- */
.pj2d {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(3.5rem, 8vw, 6rem);
  list-style: none;
  padding: 0;
}

/* Garis orbit menegak */
.pj2d::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 22px;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(183, 255, 60, 0.5) 8%, rgba(54, 217, 255, 0.4) 92%, transparent);
}

.pj2d-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-left: 60px;
}

.pj2d-node {
  position: absolute;
  left: 22px;
  top: 0;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: #06070a;
  border: 1px solid color-mix(in srgb, var(--p) 60%, transparent);
  box-shadow: 0 0 0 6px #06070a, 0 0 24px color-mix(in srgb, var(--p) 45%, transparent);
  z-index: 1;
}

.pj2d-node span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  font-weight: 800;
  color: var(--p);
}

@media (min-width: 1024px) {
  .pj2d::before { left: 50%; }
  .pj2d-item {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    padding-left: 0;
  }
  .pj2d-node { left: 50%; top: 50%; transform: translate(-50%, -50%); width: 52px; height: 52px; }
  .pj2d-item.is-flip .pj2d-media { order: 2; }
  .pj2d-item.is-flip .pj2d-info { order: 1; text-align: right; align-items: flex-end; }
  .pj2d-item.is-flip .pj2d-features li { flex-direction: row-reverse; }
}

.pj2d-media {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 1.5rem;
  overflow: hidden;
  background: #000;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 40px 80px -40px color-mix(in srgb, var(--p) 60%, transparent);
  transition: transform 0.5s var(--ease-out-expo);
}

.pj2d-item:hover .pj2d-media {
  transform: translateY(-4px) rotate(-0.4deg);
}

.pj2d-media img,
.pj2d-media video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.pj2d-media video {
  opacity: 0;
  transition: opacity 0.8s;
}

.pj2d-item.is-playing video {
  opacity: 1;
}

.pj2d-live {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(6, 7, 10, 0.75);
  backdrop-filter: blur(6px);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #F4F5F7;
  opacity: 0;
  transition: opacity 0.4s;
}

.pj2d-live i {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #ef4444;
  animation: orbit-twinkle 1.4s ease-in-out infinite;
}

.pj2d-item.is-playing .pj2d-live { opacity: 1; }

.pj2d-watch {
  position: absolute;
  right: 0.9rem;
  bottom: 0.9rem;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: rgba(6, 7, 10, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #F4F5F7;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.pj2d-watch:hover {
  background: #B7FF3C;
  color: #08090B;
}

.pj2d-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
}

.pj2d-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 13px;
  color: var(--p);
  font-weight: 600;
}

.pj2d-meta span {
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--p) 45%, transparent);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
}

.pj2d-info h3 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1.7rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #F4F5F7;
}

.pj2d-sub {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-size: 1.2rem;
  color: #a3a9b4;
}

.pj2d-desc {
  color: #c9cdd4;
  line-height: 1.65;
}

.pj2d-features {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  list-style: none;
  padding: 0;
}

.pj2d-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 14px;
  color: #a3a9b4;
}

.pj2d-features li::before {
  content: '';
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: var(--p);
  box-shadow: 0 0 8px var(--p);
}

.pj2d-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #9299A5;
}

.pj2d-stack i {
  font-style: normal;
  color: #3f4550;
}

/* ---------- 04 Altitude Stack ---------- */
.alt2d {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .alt2d { grid-template-columns: 1.05fr 1fr; gap: 2rem; }
}

.alt2d-stack {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem 1.25rem 1.25rem 4.25rem;
  border-radius: 1.75rem;
  background:
    radial-gradient(ellipse 120% 60% at 50% 0%, rgba(54, 217, 255, 0.1), transparent 60%),
    linear-gradient(to bottom, #060910 0%, #0a1210 70%, #111c12 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

/* Rel pelancaran + roket */
.alt2d-rail {
  position: absolute;
  left: 2.1rem;
  top: 1.25rem;
  bottom: 1.25rem;
  width: 2px;
  background: linear-gradient(to top, rgba(183, 255, 60, 0.5), rgba(54, 217, 255, 0.35));
  border-radius: 2px;
}

.alt2d-rocket {
  position: absolute;
  left: 50%;
  top: 50%;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-top: -17px;
  border-radius: 999px;
  color: #08090B;
  background: #B7FF3C;
  box-shadow: 0 0 20px #B7FF3C;
  transform: translate(-50%, 0);
  transition: transform 0.7s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: 2;
}

.alt2d-rocket svg {
  transform: rotate(-45deg);
}

.alt2d.is-flying .alt2d-rocket::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 6px;
  height: 22px;
  margin-left: -3px;
  border-radius: 6px;
  background: linear-gradient(to bottom, #FFB547, transparent);
  animation: traj-flame 0.12s ease-in-out infinite alternate;
}

.alt2d-band {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.4s, border-color 0.4s, box-shadow 0.4s;
}

.alt2d-band:hover {
  border-color: color-mix(in srgb, var(--p) 40%, transparent);
}

.alt2d-band.is-lit {
  background: color-mix(in srgb, var(--p) 9%, transparent);
  border-color: color-mix(in srgb, var(--p) 45%, transparent);
  box-shadow: inset 4px 0 0 var(--p);
}

.alt2d-band.is-selected {
  border-color: var(--p);
}

.alt2d-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  color: var(--p);
  background: color-mix(in srgb, var(--p) 12%, transparent);
}

.alt2d-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.alt2d-text strong {
  font-size: 14px;
  font-weight: 700;
  color: #F4F5F7;
}

.alt2d-text small {
  font-size: 12px;
  color: #9299A5;
}

.alt2d-alt {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #6b7280;
  white-space: nowrap;
}

.alt2d-ground {
  padding: 0.6rem 1rem;
  border-top: 1px dashed rgba(183, 255, 60, 0.3);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B7FF3C;
}

.alt2d.is-orbit .alt2d-stack {
  box-shadow: 0 0 60px -20px rgba(183, 255, 60, 0.5);
}

.alt2d-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.alt2d-detail {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border-radius: 1.75rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.alt2d-log {
  padding: 1rem 1.1rem;
  border-radius: 1.5rem;
  background: rgba(8, 9, 12, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.alt2d-log-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.alt2d-log-head > span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #36D9FF;
}

.alt2d-log-head .h2d-pill-solid:disabled {
  opacity: 0.6;
  cursor: wait;
}

.alt2d-logs {
  padding-top: 0.75rem;
  max-height: 180px;
  min-height: 120px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  line-height: 1.6;
}

.alt2d-log-row {
  color: #d4d7dd;
  white-space: pre-wrap;
  animation: tech-card-in 0.3s ease-out both;
}

.alt2d-log-row.is-muted { color: #9299A5; }
.alt2d-log-row.is-final { color: #B7FF3C; }

@media (max-width: 639px) {
  .alt2d-stack { padding-left: 3.5rem; }
  .alt2d-rail { left: 1.7rem; }
  .alt2d-alt { display: none; }
}

/* ---------- 05 Moon Phases ---------- */
.ph2d-row {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
}

/* Laluan orbit yang menghubungkan fasa + kemajuan */
.ph2d-row::before,
.ph2d-row::after {
  content: '';
  position: absolute;
  top: clamp(26px, 4vw, 38px);
  left: 10%;
  height: 2px;
  border-radius: 2px;
}

.ph2d-row::before {
  right: 10%;
  background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0 6px, transparent 6px 12px);
}

.ph2d-row::after {
  width: calc(var(--ph-progress, 0%) * 0.8);
  background: linear-gradient(90deg, #36D9FF, #B7FF3C);
  box-shadow: 0 0 10px rgba(183, 255, 60, 0.6);
  transition: width 0.7s var(--ease-out-expo);
}

.ph2d-step {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.ph2d-moon {
  --ms: clamp(52px, 8vw, 76px);
  width: var(--ms);
  aspect-ratio: 1;
  border-radius: 999px;
  background: radial-gradient(circle at 60% 40%, #f5ffe0, #cfe8a0 55%, #93b25e 100%);
  /* Bayang dalam membentuk fasa bulan: offset lebih besar = lebih gelap */
  box-shadow:
    inset calc(var(--dark) * var(--ms)) 0 0 0 #0b0f12,
    0 0 0 6px #06070a;
  filter: grayscale(0.6) brightness(0.65);
  transition: filter 0.4s, transform 0.5s var(--ease-out-expo);
}

.ph2d-step:hover .ph2d-moon { filter: grayscale(0.2) brightness(0.9); }
.ph2d-step.is-done .ph2d-moon { filter: grayscale(0.2) brightness(0.85); }

.ph2d-step.is-active .ph2d-moon {
  filter: none;
  transform: scale(1.12);
  box-shadow:
    inset calc(var(--dark) * var(--ms)) 0 0 0 #0b0f12,
    0 0 0 6px #06070a,
    0 0 40px rgba(183, 255, 60, 0.55);
}

.ph2d-step:focus-visible { outline: none; }
.ph2d-step:focus-visible .ph2d-moon { outline: 2px solid #36D9FF; outline-offset: 8px; }

.ph2d-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #9299A5;
}

.ph2d-title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(11px, 1.4vw, 15px);
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #9299A5;
  transition: color 0.3s;
}

.ph2d-step.is-active .ph2d-title,
.ph2d-step.is-active .ph2d-num {
  color: #B7FF3C;
}

.ph2d-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 1.75rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 900px) { .ph2d-detail { grid-template-columns: 1fr 1fr; align-items: center; } }

.ph2d-copy {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.ph2d-tasks {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  list-style: none;
  padding: 0;
}

.ph2d-tasks li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.85rem 1rem;
  border-radius: 1rem;
  background: rgba(8, 9, 12, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 14px;
  line-height: 1.5;
  color: #d4d7dd;
}

.ph2d-tasks svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: #B7FF3C;
}

@media (max-width: 479px) {
  .ph2d-title { font-size: 9.5px; letter-spacing: 0.02em; }
}

/* ---------- 06 Service Galaxy ---------- */
.sv2d-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) { .sv2d-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .sv2d-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1280px) { .sv2d-grid { grid-template-columns: repeat(5, 1fr); } }

.sv2d-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 1.4rem 1.25rem 1.25rem;
  border-radius: 1.5rem;
  background: rgba(18, 21, 27, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  animation: tech-card-in 0.4s ease-out both;
  transition: transform 0.35s var(--ease-out-expo), border-color 0.3s, box-shadow 0.35s;
}

.sv2d-card::before {
  content: '';
  position: absolute;
  right: -40%;
  top: -40%;
  width: 90%;
  aspect-ratio: 1;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--p) 16%, transparent), transparent 65%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.sv2d-card:hover,
.sv2d-card:focus-visible {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--p) 45%, transparent);
  box-shadow: 0 24px 50px -26px color-mix(in srgb, var(--p) 55%, transparent);
  outline: none;
}

.sv2d-card:hover::before,
.sv2d-card:focus-visible::before { opacity: 1; }

.sv2d-num {
  position: absolute;
  top: 1.1rem;
  right: 1.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #4b5563;
}

.sv2d-planet {
  position: relative;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  color: var(--p);
  background: color-mix(in srgb, var(--p) 10%, rgba(8, 9, 12, 0.9));
  border: 1px solid color-mix(in srgb, var(--p) 35%, transparent);
}

.sv2d-planet svg { color: var(--p) !important; }

/* Satelit mengorbit ikon bila hover */
.sv2d-sat {
  position: absolute;
  inset: -7px;
  border-radius: 999px;
  border: 1px dashed color-mix(in srgb, var(--p) 40%, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.sv2d-sat::after {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 999px;
  background: var(--p);
  box-shadow: 0 0 8px var(--p);
}

.sv2d-card:hover .sv2d-sat,
.sv2d-card:focus-visible .sv2d-sat {
  opacity: 1;
  animation: orbit-spin 3s linear infinite;
}

.sv2d-cat {
  margin-top: 0.35rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--p);
}

.sv2d-title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.25;
  color: #F4F5F7;
}

.sv2d-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: #9299A5;
}

.sv2d-more {
  margin-top: auto;
  padding-top: 0.6rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 13px;
  font-weight: 600;
  color: #F4F5F7;
  transition: color 0.2s, gap 0.2s;
}

.sv2d-card:hover .sv2d-more {
  color: var(--p);
  gap: 0.6rem;
}

/* ---------- 07 About ---------- */
.ab2d-system {
  position: relative;
  width: min(460px, 84vw);
  aspect-ratio: 1;
}

.ab2d-planet {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 64%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  overflow: hidden;
  background: radial-gradient(circle at 35% 28%, #1f3a1a 0%, #0f1d14 45%, #070b0a 100%);
  box-shadow: 0 0 0 1px rgba(183, 255, 60, 0.35), 0 0 50px rgba(183, 255, 60, 0.3), 0 0 110px rgba(54, 217, 255, 0.15);
}

.ab2d-planet img {
  position: absolute;
  left: 50%;
  bottom: -2%;
  height: 96%;
  width: auto;
  max-width: none;
  transform: translateX(-50%);
}

.ab2d-planet::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 25%, transparent 50%, rgba(4, 5, 7, 0.5) 80%, rgba(4, 5, 7, 0.85) 100%);
  pointer-events: none;
}

.ab2d-quote {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1.2;
  color: #F4F5F7;
}

.ab2d-pillars {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  list-style: none;
  padding: 0;
}

.ab2d-pillar {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.95rem 1.1rem;
  border-radius: 1.1rem;
  background: rgba(18, 21, 27, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: border-color 0.3s, transform 0.35s var(--ease-out-expo);
}

.ab2d-pillar:hover {
  border-color: color-mix(in srgb, var(--p) 40%, transparent);
  transform: translateX(4px);
}

.ab2d-pillar-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  color: var(--p);
  border: 1px solid color-mix(in srgb, var(--p) 40%, transparent);
  background: color-mix(in srgb, var(--p) 8%, transparent);
}

.ab2d-pillar-icon svg { color: var(--p) !important; }

.ab2d-pillar strong {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 15px;
  color: #F4F5F7;
}

.ab2d-pillar strong small {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--p);
}

.ab2d-pillar p {
  margin-top: 0.2rem;
  font-size: 13.5px;
  line-height: 1.55;
  color: #9299A5;
}

/* ---------- 08 Contact ---------- */
.ct2d-channel {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-radius: 1.5rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.3s, transform 0.35s var(--ease-out-expo), box-shadow 0.35s;
}

.ct2d-channel:hover,
.ct2d-channel:focus-visible {
  border-color: color-mix(in srgb, var(--p) 50%, transparent);
  transform: translateY(-3px);
  box-shadow: 0 20px 40px -24px color-mix(in srgb, var(--p) 60%, transparent);
  outline: none;
}

.ct2d-orbit {
  position: relative;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  color: #08090B;
  background: radial-gradient(circle at 35% 30%, #fff, var(--p) 50%, color-mix(in srgb, var(--p) 40%, #05070a) 100%);
  box-shadow: 0 0 20px color-mix(in srgb, var(--p) 45%, transparent);
}

.ct2d-orbit::after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 999px;
  border: 1px dashed color-mix(in srgb, var(--p) 45%, transparent);
  animation: orbit-spin 10s linear infinite;
}

.ct2d-channel small,
.ct2d-stat small {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9299A5;
}

.ct2d-channel strong {
  display: block;
  margin-top: 0.15rem;
  font-size: clamp(14px, 1.4vw, 16px);
  font-weight: 700;
  color: #F4F5F7;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ct2d-channel em,
.ct2d-stat em {
  display: block;
  font-style: normal;
  font-size: 12px;
  color: #9299A5;
}

.ct2d-arrow {
  margin-left: auto;
  flex-shrink: 0;
  color: #9299A5;
  transition: color 0.2s, transform 0.2s;
}

.ct2d-channel:hover .ct2d-arrow {
  color: var(--p);
  transform: translate(2px, -2px);
}

.ct2d-stat {
  padding: 1rem 1.1rem;
  border-radius: 1.25rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.ct2d-stat strong {
  display: block;
  margin: 0.2rem 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #F4F5F7;
}

.ct2d-card {
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 1.75rem;
  background: rgba(18, 21, 27, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 0.9);
}

.ct2d-send .ct2d-rocket {
  display: grid;
  place-items: center;
  transition: transform 0.2s;
}

.ct2d-send.is-launching .ct2d-rocket {
  animation: ct2d-launch 1.1s cubic-bezier(0.55, 0, 0.3, 1) forwards;
}

@keyframes ct2d-launch {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, 2px); }
  100% { transform: translate(240px, -120px) scale(0.6); opacity: 0; }
}

/* Kurangkan gerakan */
@media (prefers-reduced-motion: reduce) {
  .rise2d,
  .eng2d-arc-flow,
  .sk2d-tech-orbit,
  .pj2d-live i,
  .alt2d.is-flying .alt2d-rocket::after,
  .alt2d-log-row,
  .sv2d-card,
  .sv2d-card:hover .sv2d-sat,
  .ct2d-orbit::after,
  .ct2d-send.is-launching .ct2d-rocket { animation: none; }
  .sk2d-ring-fill,
  .sk2d-sat,
  .alt2d-rocket,
  .ph2d-row::after { transition: none; }
}

/* Label teras tengah (klik untuk mod 2D) */
.core-label {
  border-color: rgba(54, 217, 255, 0.4);
}

.core-label .orbit-label-code {
  background: rgba(54, 217, 255, 0.15);
  color: #36D9FF;
}

.core-label::after {
  top: auto;
  bottom: 100%;
  background: linear-gradient(to top, rgba(54, 217, 255, 0.7), transparent);
}

.core-label.is-hover {
  border-color: #36D9FF;
  box-shadow: 0 0 24px rgba(54, 217, 255, 0.4);
}

.core-label.is-hover .orbit-label-code {
  background: #36D9FF;
  color: #08090B;
}

/* Mod 2D muncul dari dalam teras */
#mode-2d.is-arriving {
  animation: arrive-2d 1.2s var(--ease-out-expo) both;
}

@keyframes arrive-2d {
  from { opacity: 0; transform: scale(1.12); filter: blur(12px) brightness(2); }
  to { opacity: 1; transform: none; filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  #mode-2d.is-arriving { animation: none; }
}

/* Label teras sentiasa penuh (bukan label ringkas) */
.orbit-label.core-label {
  padding: 0.35rem 0.7rem 0.35rem 0.35rem;
}

.orbit-label.core-label .orbit-label-name {
  display: inline !important;
}

/* ============================================================
   Mod 2D hero: Tech Solar System
   ============================================================ */
.tss {
  --size: min(480px, 86vw);
  position: relative;
  width: var(--size);
  aspect-ratio: 1;
}

.tss-glow {
  position: absolute;
  inset: 12%;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(183, 255, 60, 0.16), rgba(54, 217, 255, 0.06) 45%, transparent 70%);
  filter: blur(10px);
}

.tss-ring {
  --r: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--d);
  aspect-ratio: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  animation: tss-spin var(--t) linear infinite;
}

.tss-ring-0 { --d: 46%; --t: 28s; border-color: rgba(167, 139, 250, 0.3); }
.tss-ring-1 { --d: 72%; --t: 44s; border-color: rgba(54, 217, 255, 0.22); animation-direction: reverse; }
.tss-ring-2 { --d: 98%; --t: 64s; border-style: dashed; border-color: rgba(183, 255, 60, 0.22); }

@keyframes tss-spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Lencana diletakkan di tepi gelang, kemudian diputar semula supaya sentiasa tegak */
.tss-ring .tss-badge {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  transform: rotate(var(--a)) translateY(calc(var(--size) * var(--k) * -1)) rotate(calc(var(--a) * -1));
}

.tss-ring-0 .tss-badge { --k: 0.23; }
.tss-ring-1 .tss-badge { --k: 0.36; }
.tss-ring-2 .tss-badge { --k: 0.49; }

.tss-badge span {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.7rem 0.35rem 0.45rem;
  border-radius: 999px;
  background: rgba(10, 12, 16, 0.88);
  border: 1px solid color-mix(in srgb, var(--c) 45%, transparent);
  box-shadow: 0 0 18px color-mix(in srgb, var(--c) 18%, transparent);
  font-size: 12px;
  font-weight: 600;
  color: #F4F5F7;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  animation: tss-counter var(--t) linear infinite;
  animation-direction: inherit;
}

/* Putar lawan arah gelang supaya teks tidak terbalik */
.tss-ring-1 .tss-badge span { animation-direction: normal; }
.tss-ring-0 .tss-badge span,
.tss-ring-2 .tss-badge span { animation-direction: reverse; }

@keyframes tss-counter {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.tss-badge i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff, var(--c) 55%);
  box-shadow: 0 0 8px var(--c);
}

.tss-sun {
  position: absolute;
  left: 50%;
  top: 50%;
  display: grid;
  place-items: center;
  width: 24%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #22341c, #0c140f 60%, #060807);
  box-shadow: 0 0 0 1px rgba(183, 255, 60, 0.45), 0 0 40px rgba(183, 255, 60, 0.35), inset -8px -10px 20px rgba(0, 0, 0, 0.6);
}

.tss-sun img {
  position: relative;
  z-index: 1;
  width: 64%;
  height: auto;
}

.tss-pulse {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 1.5px solid rgba(183, 255, 60, 0.6);
  animation: tss-pulse 2.6s ease-out infinite;
}

@keyframes tss-pulse {
  from { transform: scale(1); opacity: 0.8; }
  to { transform: scale(2.4); opacity: 0; }
}

.tss-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  width: min(480px, 100%);
  margin: 0;
}

.tss-stats > div {
  padding: 0.85rem 0.9rem;
  border-radius: 1.1rem;
  background: rgba(18, 21, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 2px solid var(--c);
}

.tss-stats dt {
  font-size: 11px;
  color: #9299A5;
}

.tss-stats dd {
  margin: 0.15rem 0 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1.4rem, 2.4vw, 1.8rem);
  font-weight: 700;
  color: #F4F5F7;
}

@media (max-width: 639px) {
  .tss { --size: 74vw; margin: 1.5rem 0; }
  .tss-badge span { font-size: 10.5px; padding: 0.25rem 0.55rem 0.25rem 0.35rem; }
}

@media (prefers-reduced-motion: reduce) {
  .tss-ring,
  .tss-badge span,
  .tss-pulse { animation: none; }
}

/* ============================================================
   Skrin pembukaan: latar angkasa
   ============================================================ */
.intro-space {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 42%, rgba(183, 255, 60, 0.08), transparent 70%),
    radial-gradient(ellipse 60% 50% at 90% 0%, rgba(54, 217, 255, 0.08), transparent 70%),
    #040507;
}

.intro-stars {
  position: absolute;
  left: 50%;
  top: 42%;
  width: 220vmax;
  height: 220vmax;
  margin: -110vmax 0 0 -110vmax;
  background-image:
    radial-gradient(1px 1px at 12% 18%, rgba(255, 255, 255, 0.85), transparent),
    radial-gradient(1px 1px at 28% 72%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1.5px 1.5px at 44% 34%, rgba(255, 255, 255, 0.75), transparent),
    radial-gradient(1px 1px at 63% 81%, rgba(255, 255, 255, 0.55), transparent),
    radial-gradient(1.5px 1.5px at 77% 22%, rgba(183, 255, 60, 0.8), transparent),
    radial-gradient(1px 1px at 88% 58%, rgba(255, 255, 255, 0.65), transparent),
    radial-gradient(1.5px 1.5px at 6% 90%, rgba(54, 217, 255, 0.8), transparent);
  background-size: 240px 240px, 320px 320px, 280px 280px, 400px 400px, 500px 500px, 360px 360px, 580px 580px;
  animation: sky-rotate 300s linear infinite;
}

.intro-stars.is-far {
  opacity: 0.45;
  background-size: 160px 160px, 210px 210px, 190px 190px, 270px 270px, 330px 330px, 240px 240px, 380px 380px;
  animation-duration: 460s;
  animation-direction: reverse;
}

/* Gelang orbit berpusat pada monogram, setiap satu membawa sebuah planet kecil */
.intro-orbit {
  position: absolute;
  left: 50%;
  top: 30%;
  width: var(--d);
  height: var(--d);
  margin: calc(var(--d) / -2) 0 0 calc(var(--d) / -2);
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  animation: intro-orbit var(--t) linear infinite, intro-orbit-in 1.6s var(--ease-out-expo) both;
}

.intro-orbit.is-tilt {
  border-style: dashed;
  border-color: rgba(183, 255, 60, 0.1);
  animation-direction: reverse, normal;
}

.intro-orbit span {
  position: absolute;
  left: 50%;
  top: 0;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2) 0 0 calc(var(--s) / -2);
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff, var(--c) 50%, color-mix(in srgb, var(--c) 35%, #05070a) 100%);
  box-shadow: 0 0 14px var(--c);
}

@keyframes intro-orbit {
  to { transform: rotate(360deg); }
}

@keyframes intro-orbit-in {
  from { opacity: 0; scale: 0.4; }
  to { opacity: 1; scale: 1; }
}

/* Komet sekali-sekala melintas */
.intro-comet {
  position: absolute;
  top: 12%;
  left: -20%;
  width: 180px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, transparent, rgba(234, 255, 194, 0.9));
  transform: rotate(-18deg);
  animation: intro-comet 9s ease-in 2s infinite;
  opacity: 0;
}

@keyframes intro-comet {
  0% { opacity: 0; translate: 0 0; }
  4% { opacity: 1; }
  14% { opacity: 0; translate: 130vw 42vh; }
  100% { opacity: 0; translate: 130vw 42vh; }
}

.intro-horizon {
  position: absolute;
  left: 50%;
  bottom: -128vmax;
  width: 190vmax;
  height: 140vmax;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 0%, #0f2419 0%, #08130e 18%, #050807 40%);
  box-shadow: 0 -2px 0 rgba(183, 255, 60, 0.3), 0 -24px 70px rgba(54, 217, 255, 0.16), 0 -70px 150px rgba(183, 255, 60, 0.08);
  animation: horizon-rise 1.6s var(--ease-out-expo) 0.3s both;
}

@media (max-width: 639px) {
  .intro-orbit { top: 27%; }
}

/* ============================================================
   Tutorial: lawatan berpandu
   ============================================================ */
.gt {
  position: fixed;
  inset: 0;
  z-index: 70;
  pointer-events: none;
}

/* Latar gelap bila tiada sasaran (langkah pembuka & penutup) */
.gt-dim {
  position: absolute;
  inset: 0;
  background: rgba(3, 4, 6, 0.7);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s;
}

.gt[data-target="none"] .gt-dim {
  opacity: 1;
  pointer-events: auto;
}

/* Spotlight: gelang bercahaya + bayang gelap di sekeliling sasaran */
.gt-spot {
  position: fixed;
  left: 0;
  top: 0;
  border-radius: 999px;
  border: 2px solid #B7FF3C;
  box-shadow: 0 0 0 9999px rgba(3, 4, 6, 0.6), 0 0 28px rgba(183, 255, 60, 0.55);
  transition: width 0.35s var(--ease-out-expo), height 0.35s var(--ease-out-expo);
  animation: gt-spot 1.8s ease-in-out infinite;
}

@keyframes gt-spot {
  50% { box-shadow: 0 0 0 9999px rgba(3, 4, 6, 0.6), 0 0 44px rgba(183, 255, 60, 0.8); }
}

/* Kad penerangan */
.gt-card {
  position: fixed;
  left: 50%;
  top: 50%;
  width: min(360px, calc(100vw - 24px));
  padding: 1.1rem 1.2rem 1rem;
  border-radius: 1.4rem;
  background: linear-gradient(160deg, rgba(20, 24, 31, 0.97), rgba(10, 12, 16, 0.97));
  border: 1px solid rgba(183, 255, 60, 0.3);
  box-shadow: 0 30px 70px -30px rgba(0, 0, 0, 0.95), 0 0 40px -14px rgba(183, 255, 60, 0.35);
  pointer-events: auto;
  transition: left 0.35s var(--ease-out-expo), top 0.35s var(--ease-out-expo);
}

.gt-card.is-in {
  animation: gt-card-in 0.4s var(--ease-out-expo) both;
}

@keyframes gt-card-in {
  from { opacity: 0; scale: 0.96; }
  to { opacity: 1; scale: 1; }
}

/* Langkah pembuka & penutup: kad di tengah */
.gt[data-phase="center"] .gt-card {
  width: min(420px, calc(100vw - 24px));
  padding: 1.4rem 1.5rem 1.2rem;
  text-align: center;
  transform: translate(-50%, -50%);
}

.gt-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}

.gt-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: rgba(183, 255, 60, 0.1);
  border: 1px solid rgba(183, 255, 60, 0.3);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B7FF3C;
}

.gt-x {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  color: #9299A5;
  cursor: pointer;
}

.gt-x:hover { color: #F4F5F7; background: rgba(255, 255, 255, 0.06); }

.gt-emblem {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  margin: 1rem auto 0;
  border-radius: 999px;
  color: #08090B;
  background: radial-gradient(circle at 35% 30%, #fff, #B7FF3C 55%, #6f9a22 100%);
  box-shadow: 0 0 0 8px rgba(183, 255, 60, 0.1), 0 0 36px rgba(183, 255, 60, 0.45);
}

.gt-step-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.8rem;
}

.gt[data-phase="center"] .gt-step-head { justify-content: center; }

.gt-step-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  color: #B7FF3C;
  background: rgba(183, 255, 60, 0.1);
  border: 1px solid rgba(183, 255, 60, 0.3);
}

.gt-card h3 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #F4F5F7;
}

.gt[data-phase="center"] .gt-card h3 { font-size: 1.45rem; }

.gt-text {
  margin-top: 0.5rem;
  font-size: 14px;
  line-height: 1.6;
  color: #c9cdd4;
}

.gt-keys {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.9rem;
  margin-top: 0.7rem;
  font-size: 12.5px;
  color: #a3a9b4;
}

.gt-keys span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.gt-keys kbd {
  padding: 0.1rem 0.45rem;
  border-radius: 0.4rem;
  border: 1px solid rgba(183, 255, 60, 0.4);
  border-bottom-width: 2px;
  background: rgba(183, 255, 60, 0.08);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: #B7FF3C;
}

.gt-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.gt-dots {
  display: flex;
  gap: 5px;
}

.gt-dots span {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  transition: width 0.3s var(--ease-out-expo), background-color 0.3s;
}

.gt-dots span.is-done { background: rgba(183, 255, 60, 0.5); }
.gt-dots span.is-on { width: 18px; background: #B7FF3C; }

.gt-nav {
  display: flex;
  gap: 0.45rem;
}

.gt-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 40px;
  min-width: 40px;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: #B7FF3C;
  color: #08090B;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(183, 255, 60, 0.3);
  transition: background-color 0.2s, box-shadow 0.2s;
}

.gt-btn:hover { background: #c6ff63; }

.gt-btn.is-ghost {
  padding: 0.5rem 0.75rem;
  background: transparent;
  color: #F4F5F7;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: none;
}

.gt-btn.is-ghost:hover { border-color: rgba(54, 217, 255, 0.6); }

@media (prefers-reduced-motion: reduce) {
  .intro-stars,
  .intro-orbit,
  .intro-comet,
  .intro-horizon,
  .gt-spot,
  .gt-card.is-in { animation: none; }
  .gt-card { transition: none; }
  .intro-comet { display: none; }
}

/* ============================================================
   Portal 2D → 3D
   ============================================================ */
button.tss-sun {
  cursor: pointer;
  transition: transform 0.4s var(--ease-out-expo), box-shadow 0.4s;
}

button.tss-sun:hover,
button.tss-sun:focus-visible {
  transform: translate(-50%, -50%) scale(1.08);
  box-shadow: 0 0 0 1px rgba(183, 255, 60, 0.8), 0 0 70px rgba(183, 255, 60, 0.6), inset -8px -10px 20px rgba(0, 0, 0, 0.6);
  outline: none;
}

.tss-sun-label {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(8, 9, 12, 0.85);
  border: 1px solid rgba(183, 255, 60, 0.35);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #B7FF3C;
  white-space: nowrap;
  opacity: 0.75;
  transition: opacity 0.3s, background-color 0.3s, color 0.3s;
}

button.tss-sun:hover .tss-sun-label,
button.tss-sun:focus-visible .tss-sun-label {
  opacity: 1;
  background: #B7FF3C;
  color: #08090B;
}

/* Fasa 1: halaman 2D zum masuk ke dalam matahari */
#mode-2d main {
  transition: transform 0.8s cubic-bezier(0.6, 0, 0.9, 0.4), opacity 0.7s ease-in, filter 0.8s;
}

#mode-2d.is-portaling main {
  transform: scale(1.6);
  opacity: 0;
  filter: blur(6px) brightness(1.5);
}

/* Fasa 2–4: babak pelancaran roket (jumlah 2.6s) */
.portal {
  position: fixed;
  inset: 0;
  z-index: 90;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(ellipse 80% 60% at 50% 100%, #0d1f16 0%, #05080a 55%, #030406 100%);
  opacity: 0;
}

.portal.is-launch {
  pointer-events: auto;
  animation: pl-in 2.6s linear forwards;
}

@keyframes pl-in {
  0%, 18% { opacity: 0; }
  28%, 100% { opacity: 1; }
}

.portal.is-out {
  animation: pl-out 0.8s ease-out forwards;
}

@keyframes pl-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Bintang: kemudian menjadi garisan laju ke bawah bila roket memecut */
.pl-stars {
  position: absolute;
  left: 0;
  right: 0;
  top: -200%;
  height: 300%;
  background-image:
    radial-gradient(1.5px 1.5px at 12% 18%, #fff, transparent),
    radial-gradient(1px 1px at 28% 72%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1.5px 1.5px at 44% 34%, rgba(255, 255, 255, 0.85), transparent),
    radial-gradient(1px 1px at 63% 81%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1.5px 1.5px at 77% 22%, rgba(183, 255, 60, 0.9), transparent),
    radial-gradient(1px 1px at 88% 58%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1.5px 1.5px at 6% 90%, rgba(54, 217, 255, 0.9), transparent);
  background-size: 220px 220px, 300px 300px, 260px 260px, 360px 360px, 440px 440px, 330px 330px, 520px 520px;
  transform-origin: 50% 100%;
}

.is-launch .pl-stars {
  animation: pl-stars 2.6s cubic-bezier(0.6, 0, 0.85, 0.5) forwards;
}

@keyframes pl-stars {
  0%, 45% { transform: translateY(0) scaleY(1); }
  100% { transform: translateY(66%) scaleY(5); }
}

/* Ufuk Bumi — jatuh ke bawah bila roket naik */
.pl-horizon {
  position: absolute;
  left: 50%;
  bottom: -150vmax;
  width: 200vmax;
  height: 170vmax;
  margin-left: -100vmax;
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 0%, #163020 0%, #0a1710 16%, #050807 40%);
  box-shadow: 0 -2px 0 rgba(183, 255, 60, 0.5), 0 -30px 80px rgba(54, 217, 255, 0.2), 0 -80px 160px rgba(183, 255, 60, 0.12);
  transform: translateY(0);
}

.is-launch .pl-horizon {
  animation: pl-horizon 2.6s cubic-bezier(0.6, 0, 0.85, 0.5) forwards;
}

@keyframes pl-horizon {
  0%, 46% { transform: translateY(0); }
  100% { transform: translateY(80vh); }
}

/* Roket */
.pl-rocket {
  --rs: clamp(56px, 7vw, 84px);
  position: absolute;
  left: 50%;
  bottom: 18vh;
  width: var(--rs);
  margin-left: calc(var(--rs) / -2);
}

.pl-rocket-svg {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 18px rgba(183, 255, 60, 0.35));
}

.is-launch .pl-rocket {
  animation: pl-rocket 2.6s linear forwards;
}

@keyframes pl-rocket {
  0%, 22% { opacity: 0; transform: translateY(20px) scale(0.7); }
  30% { opacity: 1; transform: translateY(0) scale(1); }
  33% { transform: translate(-2px, 0); }
  36% { transform: translate(2px, 1px); }
  39% { transform: translate(-2px, -1px); }
  42% { transform: translate(2px, 0); }
  46% { transform: translate(0, 0); }
  60% { transform: translateY(-14vh); }
  100% { opacity: 1; transform: translateY(-120vh) scaleY(1.15); }
}

/* Api enjin */
.pl-flame {
  position: absolute;
  left: 50%;
  top: 71%; /* muncung roket (y=88 daripada 120 dalam SVG) */
  width: 30%;
  height: 0;
  margin-left: -15%;
  border-radius: 50% 50% 50% 50% / 20% 20% 80% 80%;
  background: linear-gradient(to bottom, #fff 0%, #fff6c2 15%, #FFB547 45%, rgba(255, 122, 89, 0.6) 75%, transparent 100%);
  filter: blur(1.5px) drop-shadow(0 0 16px #FFB547);
  transform-origin: 50% 0;
}

.is-launch .pl-flame {
  animation: pl-flame 2.6s linear forwards, pl-flicker 0.08s linear infinite alternate;
}

@keyframes pl-flame {
  0%, 31% { height: 0; }
  36% { height: calc(var(--rs) * 0.5); }
  46% { height: calc(var(--rs) * 0.9); }
  100% { height: calc(var(--rs) * 2.2); }
}

@keyframes pl-flicker {
  from { transform: scaleX(0.85) scaleY(0.95); }
  to { transform: scaleX(1.1) scaleY(1.05); }
}

/* Asap di tapak pelancaran */
.pl-smoke {
  position: absolute;
  left: 50%;
  bottom: 14vh;
  width: 0;
  height: 0;
}

.pl-smoke span {
  position: absolute;
  width: 90px;
  height: 90px;
  margin: -45px 0 0 -45px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(220, 230, 225, 0.55), rgba(140, 150, 145, 0.15) 60%, transparent 70%);
  opacity: 0;
}

.is-launch .pl-smoke span {
  animation: pl-smoke 2.6s ease-out forwards;
}

.pl-smoke span:nth-child(1) { --dx: -110px; }
.pl-smoke span:nth-child(2) { --dx: 110px; animation-delay: 0.05s; }
.pl-smoke span:nth-child(3) { --dx: -45px; animation-delay: 0.1s; }
.pl-smoke span:nth-child(4) { --dx: 55px; animation-delay: 0.15s; }

@keyframes pl-smoke {
  0%, 33% { opacity: 0; transform: translate(0, 0) scale(0.3); }
  45% { opacity: 1; }
  80% { opacity: 0.5; transform: translate(var(--dx), 30px) scale(2.4); }
  100% { opacity: 0; transform: translate(calc(var(--dx) * 1.4), 60vh) scale(3); }
}

/* Kilatan bila tiba di orbit */
.pl-flash {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 20%, #f7ffe6, rgba(183, 255, 60, 0.6) 40%, transparent 75%);
  opacity: 0;
}

.is-launch .pl-flash {
  animation: pl-flash 2.6s ease-in forwards;
}

@keyframes pl-flash {
  0%, 82% { opacity: 0; }
  100% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  #mode-2d main { transition: none; }
  .portal.is-launch,
  .portal.is-out,
  .portal * { animation: none !important; }
}

/* ============================================================
   Pembetulan mobile
   ============================================================ */

/* Label portal di bawah gelang luar, bukan di tengah orbit (elak bertindih dengan lencana) */
.tss { margin-bottom: 1.75rem; }

.tss-sun-label {
  top: calc(100% + var(--size) * 0.38 + 6px);
}

/* Kiraan aksara tidak patah baris */
.uplink-label.flex {
  gap: 0.75rem;
}

.uplink-label.flex > span:last-child {
  flex-shrink: 0;
  white-space: nowrap;
}

@media (max-width: 639px) {
  /* Bulan latar lebih kecil & malap supaya tidak mengganggu teks */
  .sky-moon { --m: 44px; }

  @keyframes moon-fade {
    0% { opacity: 0; }
    8% { opacity: 0.3; }
    92% { opacity: 0.3; }
    100% { opacity: 0; }
  }

  /* Butang gelang ↑ lebih kecil di penjuru */
  .h2d-progress {
    right: 0.75rem;
    bottom: 0.75rem;
    width: 40px;
    height: 40px;
  }

  .uplink-label { font-size: 10.5px; }
}

@media (max-width: 639px) {
  #hud-dock .hud-location {
    flex: 1 1 auto;
    max-width: none;
    font-size: 11px;
  }
}

/* ============================================================
   Suis bahasa: planet + bulan-bulan bahasa yang terbang ke orbit
   ============================================================ */
.lang-planet {
  --p: #36D9FF; /* warna planet ikut bahasa aktif */
  position: relative;
  flex-shrink: 0;
  z-index: 60;
}

.lang-planet[data-active="ms"] { --p: #B7FF3C; }
.lang-planet[data-active="zh"] { --p: #FF7A59; }
.lang-planet[data-active="en"] { --p: #36D9FF; }

.lang-planet-core {
  position: relative;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: radial-gradient(circle at 34% 28%, #ffffff 0%, var(--p) 42%, color-mix(in srgb, var(--p) 45%, #05070a) 100%);
  box-shadow: 0 0 18px color-mix(in srgb, var(--p) 55%, transparent), inset -5px -6px 10px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.3s, background 0.4s;
}

.lang-planet-core [data-lang-code] {
  position: relative;
  z-index: 1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 800;
  color: #08090B;
}

/* Gelang condong yang sentiasa berputar */
.lang-planet-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 58px;
  height: 18px;
  margin: -9px 0 0 -29px;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--p) 70%, transparent);
  border-top-color: transparent;
  transform: rotate(-18deg);
  pointer-events: none;
  animation: lang-planet-ring 5s ease-in-out infinite;
}

@keyframes lang-planet-ring {
  0%, 100% { transform: rotate(-18deg); }
  50% { transform: rotate(14deg); }
}

.lang-planet-core:hover,
.lang-planet.is-open .lang-planet-core {
  transform: scale(1.08);
  box-shadow: 0 0 28px color-mix(in srgb, var(--p) 75%, transparent), inset -5px -6px 10px rgba(0, 0, 0, 0.35);
}

.lang-planet-core:focus-visible {
  outline: 2px solid #F4F5F7;
  outline-offset: 4px;
}

/* Denyut bila bahasa baharu "mendarat" */
.lang-planet.is-landing .lang-planet-core {
  animation: lang-land 0.7s var(--ease-out-expo);
}

@keyframes lang-land {
  0% { transform: scale(0.7); box-shadow: 0 0 0 0 color-mix(in srgb, var(--p) 80%, transparent); }
  60% { transform: scale(1.18); }
  100% { transform: scale(1); box-shadow: 0 0 0 18px transparent, 0 0 18px color-mix(in srgb, var(--p) 55%, transparent); }
}

/* Bulan-bulan: berpusat pada planet, tersusun di lengkung orbit di bawahnya */
.lang-moons {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Lengkung orbit putus-putus */
.lang-moons::before {
  content: '';
  position: absolute;
  left: -76px;
  top: -76px;
  width: 152px;
  height: 152px;
  border-radius: 999px;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  -webkit-mask-image: linear-gradient(to bottom, transparent 52%, #000 60%);
  mask-image: linear-gradient(to bottom, transparent 52%, #000 60%);
  animation: fade-in 0.4s ease both;
  pointer-events: none;
}

.lang-moons li {
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(var(--a)) translateX(76px) rotate(calc(var(--a) * -1));
  animation: lang-moon-out 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: calc(var(--n) * 0.06s);
}

@keyframes lang-moon-out {
  from { transform: rotate(calc(var(--a) - 90deg)) translateX(0) rotate(calc((var(--a) - 90deg) * -1)) scale(0.2); opacity: 0; }
  to { transform: rotate(var(--a)) translateX(76px) rotate(calc(var(--a) * -1)) scale(1); opacity: 1; }
}

.lang-moons button {
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(circle at 34% 28%, #ffffff 0%, var(--c) 45%, color-mix(in srgb, var(--c) 40%, #05070a) 100%);
  box-shadow: 0 0 14px color-mix(in srgb, var(--c) 45%, transparent), inset -4px -5px 9px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: transform 0.3s var(--ease-out-expo), box-shadow 0.3s;
}

.lang-moons button b {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 800;
  color: #08090B;
}

.lang-moons button[lang="zh-Hans"] b {
  font-family: system-ui, 'Microsoft YaHei', 'PingFang SC', sans-serif;
  font-size: 14px;
}

/* Nama penuh: muncul di bawah bulan bila hover / fokus / aktif */
.lang-moons button span {
  position: absolute;
  top: calc(100% + 7px);
  left: 50%;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(10, 12, 16, 0.92);
  border: 1px solid color-mix(in srgb, var(--c) 45%, transparent);
  font-size: 11px;
  font-weight: 600;
  color: #F4F5F7;
  white-space: nowrap;
  transform: translateX(-50%) translateY(-4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.25s var(--ease-out-expo);
}

.lang-moons button:hover,
.lang-moons button:focus-visible {
  transform: translate(-50%, -50%) scale(1.18);
  box-shadow: 0 0 26px color-mix(in srgb, var(--c) 75%, transparent), inset -4px -5px 9px rgba(0, 0, 0, 0.3);
  outline: none;
}

.lang-moons button:hover span,
.lang-moons button:focus-visible span {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Bulan aktif: gelang putih menandakan pilihan semasa */
.lang-moons button[aria-selected="true"]::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 999px;
  border: 1.5px solid #F4F5F7;
  opacity: 0.8;
}

@media (max-width: 639px) {
  .lang-planet-core { width: 40px; height: 40px; }
}

@media (prefers-reduced-motion: reduce) {
  .lang-planet-ring,
  .lang-planet.is-landing .lang-planet-core,
  .lang-moons li,
  .lang-moons::before { animation: none; }
}

/* Gelombang orbit semasa bertukar bahasa */
.lang-wave {
  position: fixed;
  left: var(--x);
  top: var(--y);
  z-index: 120;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 999px;
  border: 2px solid rgba(183, 255, 60, 0.8);
  box-shadow: 0 0 30px rgba(183, 255, 60, 0.5), inset 0 0 30px rgba(54, 217, 255, 0.3);
  pointer-events: none;
  animation: lang-wave 0.9s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
}

@keyframes lang-wave {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(160); opacity: 0; }
}

/* Teks "berkelip" sekejap ketika ditukar */
html.lang-switching body {
  --lang-blur: 1;
}

html.lang-switching main,
html.lang-switching .world,
html.lang-switching #orbit-hub,
html.lang-switching #loading-screen > .relative {
  animation: lang-flicker 0.6s ease both;
}

@keyframes lang-flicker {
  0% { filter: none; opacity: 1; }
  35% { filter: blur(4px); opacity: 0.35; }
  100% { filter: none; opacity: 1; }
}

/* Bahasa Cina: jarak huruf biasa (tracking lebar tidak sesuai untuk aksara Cina) */
html[lang="zh-Hans"] body * {
  letter-spacing: 0.02em !important;
}

@media (prefers-reduced-motion: reduce) {
  .lang-wave,
  html.lang-switching main,
  html.lang-switching .world,
  html.lang-switching #orbit-hub,
  html.lang-switching #loading-screen > .relative { animation: none; }
}
