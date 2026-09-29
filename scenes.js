// Adegan 3D (Three.js). Three.js dimuat dari CDN hanya bila diperlukan.

const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.js';
let threePromise = null;

function loadThree() {
  if (!threePromise) threePromise = import(THREE_URL);
  return threePromise;
}

// Kesan pasca-pemprosesan (glow neon) & persekitaran pantulan. Gagal dengan senyap jika CDN tiada.
let postFXPromise = null;

function loadPostFX() {
  if (!postFXPromise) {
    postFXPromise = Promise.all([
      import('three/addons/postprocessing/EffectComposer.js'),
      import('three/addons/postprocessing/RenderPass.js'),
      import('three/addons/postprocessing/UnrealBloomPass.js'),
      import('three/addons/postprocessing/OutputPass.js'),
      import('three/addons/environments/RoomEnvironment.js'),
    ])
      .then(([composer, render, bloom, output, room]) => ({
        EffectComposer: composer.EffectComposer,
        RenderPass: render.RenderPass,
        UnrealBloomPass: bloom.UnrealBloomPass,
        OutputPass: output.OutputPass,
        RoomEnvironment: room.RoomEnvironment,
      }))
      .catch((err) => {
        console.warn('Kesan glow tidak dimuatkan:', err);
        return null;
      });
  }
  return postFXPromise;
}

function pointerXY(e) {
  const p = e.touches ? e.touches[0] : e;
  return { x: p.clientX, y: p.clientY };
}

/* ============================================================
   Mod 3D: hab orbit — teras MSD di tengah, lima seni bina
   (01–05) mengorbit di sekelilingnya. Klik satu untuk masuk.
   ============================================================ */
async function createUniverse(container, { labels = [], labelRoot = null, onSelect = () => {}, onFocus = () => {}, onCore = () => {}, safeArea = null } = {}) {
  const THREE = await loadThree();
  const fx = await loadPostFX();

  const ORBIT_RADIUS = 11;
  const COUNT = labels.length || 5;

  // SCENE, FOG & CAMERA
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040507);
  scene.fog = new THREE.FogExp2(0x040507, 0.009);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
  camera.position.set(0, 8, 30);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  // Amaran ketepatan pengkompil shader (ANGLE/Direct3D di Windows) tidak berbahaya; jangan semak log program.
  renderer.debug.checkShaderErrors = false;
  renderer.setSize(width, height);
  let pixelRatio = Math.min(window.devicePixelRatio, 1.25);
  renderer.setPixelRatio(pixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  container.appendChild(renderer.domElement);
  const canvas = renderer.domElement;

  // Persekitaran pantulan: permukaan logam memantulkan cahaya dan tidak lagi hitam legam
  if (fx) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new fx.RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.7;
    pmrem.dispose();
  }

  // Glow neon (bloom)
  const BLOOM_BASE = 0.55;
  let composer = null;
  let bloomPass = null;
  if (fx) {
    composer = new fx.EffectComposer(renderer);
    composer.addPass(new fx.RenderPass(scene, camera));
    bloomPass = new fx.UnrealBloomPass(new THREE.Vector2(width, height), BLOOM_BASE, 0.4, 0.42);
    composer.addPass(bloomPass);
    composer.addPass(new fx.OutputPass());
  }

  // LIGHTING
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  scene.add(new THREE.HemisphereLight(0x9fdcff, 0x0b0f14, 0.9));

  const limeKeyLight = new THREE.PointLight(0xb7ff3c, 4.5, 60);
  limeKeyLight.position.set(10, 15, 15);
  scene.add(limeKeyLight);

  const cyanRimLight = new THREE.PointLight(0x36d9ff, 3.8, 60);
  cyanRimLight.position.set(-15, -10, -5);
  scene.add(cyanRimLight);

  const coreWhiteLight = new THREE.DirectionalLight(0xf4f5f7, 1.2);
  coreWhiteLight.position.set(0, 30, 20);
  scene.add(coreWhiteLight);

  const coreGlow = new THREE.PointLight(0xb7ff3c, 2.2, 18);
  scene.add(coreGlow);

  // MATERIALS
  const blackChromeMaterial = new THREE.MeshStandardMaterial({
    color: 0x1c2533,
    emissive: 0x0a121c,
    metalness: 0.85,
    roughness: 0.28,
  });
  const acidLimeWire = new THREE.MeshBasicMaterial({ color: 0xb7ff3c, wireframe: true, transparent: true, opacity: 0.6 });
  const cyanWire = new THREE.MeshBasicMaterial({ color: 0x36d9ff, wireframe: true, transparent: true, opacity: 0.55 });
  const cyanGlowMaterial = new THREE.MeshStandardMaterial({
    color: 0x36d9ff,
    emissive: 0x1a6f86,
    emissiveIntensity: 0.9,
    metalness: 0.6,
    roughness: 0.25,
    transparent: true,
    opacity: 0.8,
  });
  const limeEnergyMaterial = new THREE.MeshStandardMaterial({
    color: 0xb7ff3c,
    emissive: 0x3d6600,
    emissiveIntensity: 0.9,
    metalness: 0.5,
    roughness: 0.3,
  });
  const limeEdge = new THREE.LineBasicMaterial({ color: 0xb7ff3c, transparent: true, opacity: 0.8 });
  const cyanEdge = new THREE.LineBasicMaterial({ color: 0x36d9ff, transparent: true, opacity: 0.7 });
  const edges = (geo, mat = limeEdge) => new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat);

  // TERAS MSD (tengah)
  const core = new THREE.Group();
  scene.add(core);

  const monolithMesh = new THREE.Mesh(new THREE.OctahedronGeometry(2.6, 0), blackChromeMaterial);
  core.add(monolithMesh);
  const wireOcta = new THREE.Mesh(new THREE.OctahedronGeometry(2.8, 1), acidLimeWire);
  core.add(wireOcta);
  core.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 0), limeEnergyMaterial));

  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(4, 0.04, 16, 100), acidLimeWire);
  ring1.rotation.x = Math.PI / 3;
  core.add(ring1);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(4.8, 0.03, 16, 100), cyanGlowMaterial);
  ring2.rotation.y = Math.PI / 4;
  ring2.rotation.x = -Math.PI / 6;
  core.add(ring2);

  // LALUAN ORBIT
  const orbitPlane = new THREE.Group();
  orbitPlane.rotation.x = 0.16;
  scene.add(orbitPlane);

  const orbitRing = new THREE.Mesh(new THREE.TorusGeometry(ORBIT_RADIUS, 0.035, 8, 160), acidLimeWire);
  orbitRing.rotation.x = Math.PI / 2;
  orbitPlane.add(orbitRing);
  const orbitRingOuter = new THREE.Mesh(new THREE.TorusGeometry(ORBIT_RADIUS + 0.9, 0.015, 6, 160), cyanWire);
  orbitRingOuter.rotation.x = Math.PI / 2;
  orbitPlane.add(orbitRingOuter);

  // Titik-titik data yang bergerak di sepanjang orbit
  const pulseCount = 60;
  const pulseGeo = new THREE.BufferGeometry();
  const pulsePos = new Float32Array(pulseCount * 3);
  pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePos, 3));
  const pulses = new THREE.Points(
    pulseGeo,
    new THREE.PointsMaterial({ color: 0xb7ff3c, size: 0.16, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending })
  );
  orbitPlane.add(pulses);

  // LIMA SENI BINA
  const builders = [
    // 01 IDENTITY: menara monolit
    (g) => {
      const tower = new THREE.Mesh(new THREE.OctahedronGeometry(1.2, 0), blackChromeMaterial);
      tower.scale.y = 1.8;
      g.add(tower);
      const shell = new THREE.Mesh(new THREE.OctahedronGeometry(1.35, 1), acidLimeWire);
      shell.scale.y = 1.8;
      g.add(shell);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.03, 8, 64), cyanGlowMaterial);
      halo.rotation.x = Math.PI / 2;
      g.add(halo);
      g.userData.spin = (t) => {
        halo.position.y = Math.sin(t * 1.5) * 1.2;
      };
    },
    // 02 CAPABILITIES: enjin simpulan
    (g) => {
      const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.95, 0.3, 120, 16), blackChromeMaterial);
      g.add(knot);
      const knotWire = new THREE.Mesh(new THREE.TorusKnotGeometry(1.0, 0.32, 60, 8), acidLimeWire);
      g.add(knotWire);
      const moons = [];
      for (let i = 0; i < 3; i++) {
        const m = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22, 0), i % 2 ? cyanGlowMaterial : limeEnergyMaterial);
        g.add(m);
        moons.push(m);
      }
      g.userData.spin = (t) => {
        knot.rotation.x = t * 0.6;
        knotWire.rotation.z = -t * 0.5;
        moons.forEach((m, i) => {
          const a = t * 1.4 + (i * Math.PI * 2) / 3;
          m.position.set(Math.cos(a) * 2, Math.sin(a * 0.5) * 0.6, Math.sin(a) * 2);
        });
      };
    },
    // 03 PROJECTS: dinding skrin
    (g) => {
      const screens = [];
      for (let i = 0; i < 3; i++) {
        const screen = new THREE.Group();
        const geo = new THREE.BoxGeometry(1.9, 1.15, 0.08);
        screen.add(new THREE.Mesh(geo, blackChromeMaterial));
        screen.add(edges(geo, i === 1 ? limeEdge : cyanEdge));
        const face = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.95), i === 1 ? limeEnergyMaterial : cyanGlowMaterial);
        face.position.z = 0.05;
        face.material = face.material.clone();
        face.material.transparent = true;
        face.material.opacity = 0.35;
        screen.add(face);
        screen.position.set((i - 1) * 1.25, (i - 1) * 0.55, -Math.abs(i - 1) * 0.6);
        screen.rotation.y = (1 - i) * 0.45;
        g.add(screen);
        screens.push(screen);
      }
      g.userData.spin = (t) => {
        screens.forEach((s, i) => (s.position.y = (i - 1) * 0.55 + Math.sin(t * 1.6 + i) * 0.12));
      };
    },
    // 04 ARCHITECTURE: rak pelayan bertingkat
    (g) => {
      const tiers = [];
      for (let t = 0; t < 4; t++) {
        const geo = new THREE.BoxGeometry(2.3 - t * 0.35, 0.36, 1.5 - t * 0.22);
        const tier = new THREE.Group();
        tier.add(new THREE.Mesh(geo, t % 2 === 0 ? blackChromeMaterial : cyanGlowMaterial));
        tier.add(edges(geo));
        tier.position.y = (t - 1.5) * 0.72;
        g.add(tier);
        tiers.push(tier);
      }
      const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.4, 8), limeEnergyMaterial);
      g.add(spine);
      g.userData.spin = (t) => {
        tiers.forEach((tier, i) => (tier.rotation.y = Math.sin(t * 0.9 + i * 0.8) * 0.35));
      };
    },
    // 05 CONTACT: menara isyarat
    (g) => {
      const mast = new THREE.Mesh(new THREE.ConeGeometry(0.85, 2.4, 6), blackChromeMaterial);
      mast.position.y = -0.4;
      g.add(mast);
      const mastEdges = edges(new THREE.ConeGeometry(0.87, 2.42, 6));
      mastEdges.position.copy(mast.position);
      g.add(mastEdges);
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 24), limeEnergyMaterial);
      orb.position.y = 1.2;
      g.add(orb);
      const waves = [0, 1, 2].map(() => {
        const w = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.025, 8, 48), cyanGlowMaterial.clone());
        w.position.y = 1.2;
        w.rotation.x = Math.PI / 2;
        g.add(w);
        return w;
      });
      g.userData.spin = (t) => {
        waves.forEach((w, i) => {
          const phase = (t * 0.7 + i / 3) % 1;
          w.scale.setScalar(1 + phase * 3);
          w.material.opacity = 0.9 * (1 - phase);
        });
      };
    },
  ];

  // Kecerunan menegak (terang di bawah, pudar ke atas) untuk pancaran cahaya
  const beamGradient = (() => {
    const c = document.createElement('canvas');
    c.width = 4;
    c.height = 128;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#000');
    grad.addColorStop(0.55, '#333');
    grad.addColorStop(1, '#fff');
    g.fillStyle = grad;
    g.fillRect(0, 0, 4, 128);
    return new THREE.CanvasTexture(c);
  })();

  // Cahaya sorotan yang mengikut struktur fokus
  const focusLight = new THREE.PointLight(0xb7ff3c, 0, 14, 1.6);
  scene.add(focusLight);

  // Denyut tenaga yang bergerak dari teras ke struktur fokus
  const energyPulse = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xeaffc2, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending })
  );
  scene.add(energyPulse);

  const hitTargets = [];
  // Teras tengah juga boleh diklik (masuk ke mod 2D)
  const coreHit = new THREE.Mesh(new THREE.SphereGeometry(3.4, 16, 16), new THREE.MeshBasicMaterial({ visible: false }));
  coreHit.userData.index = -2;
  scene.add(coreHit);
  hitTargets.push(coreHit);
  const nodes = Array.from({ length: COUNT }, (_, i) => {
    const group = new THREE.Group();
    const model = new THREE.Group();
    (builders[i] || builders[0])(model);
    group.add(model);

    const pad = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 0.16, 6), blackChromeMaterial);
    pad.position.y = -2.3;
    group.add(pad);
    const accent = i % 2 ? 0x36d9ff : 0xb7ff3c;
    const padRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.05, 8, 64),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.5 })
    );
    padRing.rotation.x = Math.PI / 2;
    padRing.position.y = -2.2;
    group.add(padRing);

    // Pancaran cahaya dari tapak (hanya menyala untuk struktur fokus)
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 1.7, 8, 40, 1, true),
      new THREE.MeshBasicMaterial({
        color: accent,
        alphaMap: beamGradient,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    beam.position.y = 1.7;
    group.add(beam);

    // Gelombang riak apabila struktur menjadi fokus
    const ripple = new THREE.Mesh(
      new THREE.RingGeometry(2.0, 2.18, 64),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.y = -2.18;
    group.add(ripple);

    // Kawasan klik yang lebih besar daripada model
    const hit = new THREE.Mesh(new THREE.SphereGeometry(2.8, 12, 12), new THREE.MeshBasicMaterial({ visible: false }));
    hit.userData.index = i;
    group.add(hit);
    hitTargets.push(hit);

    // Garisan data dari teras ke struktur
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: i % 2 ? 0x36d9ff : 0xb7ff3c, transparent: true, opacity: 0.22 }));
    orbitPlane.add(line);

    orbitPlane.add(group);
    return { group, model, padRing, beam, ripple, line, accent, scale: 0, lift: 0, liftVel: 0, spinBoost: 0, rippleT: 1, glow: 0 };
  });

  // Label HTML (butang sebenar, boleh diklik & diakses papan kekunci)
  if (labelRoot) {
    labelRoot.innerHTML = labels
      .map(
        (name, i) => `
        <button type="button" data-world="${i}" class="orbit-label" style="opacity:0">
          <span class="orbit-label-code">0${i + 1}</span>
          <span class="orbit-label-name">${name}</span>
        </button>`
      )
      .join('');
  }
  const labelEls = labelRoot ? Array.from(labelRoot.querySelectorAll('.orbit-label')) : [];
  let coreLabel = null;
  if (labelRoot) {
    coreLabel = document.createElement('button');
    coreLabel.type = 'button';
    coreLabel.className = 'orbit-label core-label';
    coreLabel.style.opacity = '0';
    coreLabel.innerHTML = '<span class="orbit-label-code">MSD</span><span class="orbit-label-name">CORE · 2D ARCHIVE</span>';
    coreLabel.setAttribute('aria-label', 'Enter the MSD core — accessible 2D archive');
    coreLabel.addEventListener('click', () => onCore());
    labelRoot.appendChild(coreLabel);
  }
  const labelWidth = new Map();
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver((entries) =>
      entries.forEach((entry) => labelWidth.set(entry.target, entry.borderBoxSize?.[0]?.inlineSize || entry.target.offsetWidth))
    );
    labelEls.forEach((el) => ro.observe(el));
  }
  // Tulis gaya hanya bila nilainya berubah
  const setStyle = (el, prop, value) => {
    if (el.style[prop] !== value) el.style[prop] = value;
  };

  // STARFIELD
  const starCount = 650;
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  const colorLime = new THREE.Color(0xb7ff3c);
  const colorCyan = new THREE.Color(0x36d9ff);
  const colorWhite = new THREE.Color(0xf4f5f7);

  for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 120;
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
    starPos[i * 3 + 2] = (Math.random() - 0.5) * 120;

    const pick = Math.random();
    const c = pick > 0.6 ? colorLime : pick > 0.3 ? colorCyan : colorWhite;
    starColors[i * 3] = c.r;
    starColors[i * 3 + 1] = c.g;
    starColors[i * 3 + 2] = c.b;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starField = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ size: 0.14, vertexColors: true, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending })
  );
  scene.add(starField);

  // KEADAAN
  let active = true;
  let selected = -1; // -1 = hab orbit
  let hovered = -1;
  let focus = 0; // struktur di hadapan orbit (dipilih dengan scroll / swipe)
  let orbitAngle = Math.PI / 2;
  let orbitVel = 0; // halaju sudut (animasi spring)
  let coreHover = 0;
  let lastFocus = -1;
  const introStart = performance.now();
  let mouseX = 0;
  let mouseY = 0;
  let drag = null;
  let dive = null; // animasi "masuk ke dalam" struktur

  const STEP = (Math.PI * 2) / COUNT;
  const BASE_FOV = camera.fov;
  const DIVE_MS = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1300;

  // Sudut orbit yang meletakkan struktur i di hadapan kamera (paling dekat dengan sudut semasa)
  const frontAngleFor = (i) => {
    const t = Math.PI / 2 - i * STEP;
    return t + Math.round((orbitAngle - t) / (Math.PI * 2)) * Math.PI * 2;
  };
  const nearestFront = () => ((Math.round((Math.PI / 2 - orbitAngle) / STEP) % COUNT) + COUNT) % COUNT;
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOutBack = (t) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hubCamPos = new THREE.Vector3();
  const targetCamPos = new THREE.Vector3();
  const targetCamLook = new THREE.Vector3();
  const currentLook = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const tmp = new THREE.Vector3();

  const hubLook = new THREE.Vector3();

  // Titik sempadan orbit (termasuk ketinggian struktur & label) untuk mengira bingkai kamera
  const boundsPoints = [];
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2;
    const x = Math.cos(a) * (ORBIT_RADIUS + 2.2);
    const z = Math.sin(a) * (ORBIT_RADIUS + 2.2);
    boundsPoints.push(new THREE.Vector3(x, -3.2, z), new THREE.Vector3(x, 4.2, z));
  }
  boundsPoints.forEach((pt) => pt.applyEuler(orbitPlane.rotation));

  // Letak kamera supaya seluruh orbit muat dalam ruang kosong antara tajuk dan footer
  const updateHubCamera = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    const area = (safeArea && safeArea()) || { top: h * 0.28, bottom: h * 0.12, left: 24, right: 24 };
    // Sempadan sasaran dalam koordinat NDC (-1..1)
    const box = {
      top: 1 - (2 * area.top) / h,
      bottom: -1 + (2 * area.bottom) / h,
      left: -1 + (2 * area.left) / w,
      right: 1 - (2 * area.right) / w,
    };
    const elevation = camera.aspect < 1 ? 0.75 : 0.36;
    const fitCam = camera.clone();
    const p = new THREE.Vector3();

    const measure = (dist, lookY) => {
      fitCam.position.set(0, Math.sin(elevation) * dist + lookY, Math.cos(elevation) * dist);
      fitCam.lookAt(0, lookY, 0);
      fitCam.updateMatrixWorld();
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      boundsPoints.forEach((pt) => {
        p.copy(pt).project(fitCam);
        minX = Math.min(minX, p.x);
        maxX = Math.max(maxX, p.x);
        minY = Math.min(minY, p.y);
        maxY = Math.max(maxY, p.y);
      });
      return { minX, maxX, minY, maxY };
    };

    let dist = 20;
    let lookY = 0;
    for (; dist < 160; dist += 1) {
      // Laraskan lookY supaya orbit berada di tengah ruang menegak yang ada
      for (let k = 0; k < 6; k++) {
        const m = measure(dist, lookY);
        const offset = (m.maxY + m.minY) / 2 - (box.top + box.bottom) / 2;
        lookY += offset * dist * 0.35;
      }
      const m = measure(dist, lookY);
      if (m.maxY <= box.top && m.minY >= box.bottom && m.minX >= box.left && m.maxX <= box.right) break;
    }
    hubLook.set(0, lookY, 0);
    hubCamPos.set(0, Math.sin(elevation) * dist + lookY, Math.cos(elevation) * dist);
  };
  updateHubCamera();
  camera.position.copy(hubCamPos);
  currentLook.copy(hubLook);

  // INTERAKSI: pilih struktur (raycast) & seret untuk putar orbit
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  const pick = (clientX, clientY) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(hitTargets, false)[0];
    return hit ? hit.object.userData.index : -1;
  };

  const setHovered = (idx) => {
    hovered = idx;
    canvas.style.cursor = selected >= 0 ? '' : idx >= 0 || idx === -2 ? 'pointer' : 'grab';
    labelEls.forEach((el, i) => el.classList.toggle('is-hover', i === idx));
    if (coreLabel) coreLabel.classList.toggle('is-hover', idx === -2);
  };

  // Hab: sentuhan pada kanvas dikawal oleh orbit. World: benarkan skrol halaman biasa.
  const setTouchMode = () => (canvas.style.touchAction = selected < 0 ? 'none' : 'auto');
  setTouchMode();

  canvas.addEventListener('pointerdown', (e) => {
    if (!active || selected >= 0 || dive) return;
    drag = { startX: e.clientX, startY: e.clientY, lastX: e.clientX, moved: 0, spun: false };
  });

  window.addEventListener('pointermove', (e) => {
    if (!active) return;
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    if (drag) {
      const dx = e.clientX - drag.lastX;
      drag.lastX = e.clientX;
      drag.moved = Math.max(drag.moved, Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY));
      // Seret mendatar = putar orbit; seret menegak dikendalikan semasa lepas (swipe)
      if (Math.abs(e.clientX - drag.startX) > Math.abs(e.clientY - drag.startY)) {
        orbitAngle += dx * 0.006;
        drag.spun = true;
      }
    } else if (selected < 0 && !dive && e.target === canvas) {
      setHovered(pick(e.clientX, e.clientY));
    } else if (e.target !== canvas && !e.target.closest?.('.orbit-label')) {
      setHovered(-1);
    }
  });

  window.addEventListener('pointerup', (e) => {
    if (!drag) return;
    const d = drag;
    drag = null;
    const dy = e.clientY - d.startY;

    if (d.moved < 6) {
      // Ketik: masuk ke struktur yang diketik
      if (selected < 0 && e.target === canvas) {
        const idx = pick(e.clientX, e.clientY);
        if (idx >= 0) onSelect(idx);
        else if (idx === -2) onCore();
      }
    } else if (d.spun) {
      // Selepas putar dengan tangan, snap ke struktur paling hampir di hadapan
      onFocus(nearestFront());
    } else if (Math.abs(dy) > 40) {
      // Swipe ke atas = seterusnya (sama seperti scroll ke bawah)
      onFocus(Math.max(0, Math.min(COUNT - 1, focus + (dy < 0 ? 1 : -1))));
    }
  });

  labelEls.forEach((el, i) => {
    el.addEventListener('pointerenter', () => setHovered(i));
    el.addEventListener('pointerleave', () => setHovered(-1));
  });

  window.addEventListener('resize', () => {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    if (composer) composer.setSize(w, h);
    updateHubCamera();
  });

  // ANIMATION LOOP
  const timer = new THREE.Timer();
  let frameId = null;

  let lastFrameAt = 0;
  let slowFrames = 0;
  let sampledFrames = 0;
  let bloomEnabled = !!composer;

  // Kualiti adaptif: jika purata frame terlalu perlahan, kurangkan beban secara berperingkat
  const adaptQuality = (frameMs) => {
    if (selected >= 0 || dive) return; // ukur hanya di hab (paparan penuh)
    sampledFrames++;
    if (frameMs > 26) slowFrames++;
    if (sampledFrames < 90) return;
    const mostlySlow = slowFrames / sampledFrames > 0.5;
    sampledFrames = 0;
    slowFrames = 0;
    if (!mostlySlow) return;
    if (pixelRatio > 1) {
      pixelRatio = 1;
      renderer.setPixelRatio(1);
      if (composer) composer.setPixelRatio(1);
    } else if (bloomEnabled) {
      bloomEnabled = false;
    }
  };

  const animate = (timestamp = performance.now()) => {
    frameId = requestAnimationFrame(animate);
    const inWorld = selected >= 0 && !dive;
    // Adegan di belakang panel world tidak perlu 60 fps
    if (inWorld && timestamp - lastFrameAt < 32) return;
    if (lastFrameAt) adaptQuality(timestamp - lastFrameAt);
    lastFrameAt = timestamp;

    timer.update(timestamp);
    const delta = Math.min(timer.getDelta(), 0.05);
    const elapsed = timer.getElapsed();

    const now = performance.now();

    // Fokus bertukar: riak pada tapak + pusingan pantas
    if (focus !== lastFocus) {
      if (lastFocus >= 0) {
        nodes[focus].rippleT = 0;
        nodes[focus].spinBoost = 9;
      }
      lastFocus = focus;
    }

    // Orbit: fizik spring (memecut, perlahan, sedikit melantun) ke struktur fokus
    if (drag) {
      orbitVel = 0;
    } else if (selected < 0) {
      orbitVel += (frontAngleFor(focus) - orbitAngle) * 26 * delta;
      orbitVel *= Math.exp(-7 * delta);
      orbitAngle += orbitVel * delta;
    }

    nodes.forEach((node, i) => {
      const isFocus = selected < 0 && i === focus;
      // Intro: struktur keluar dari teras satu demi satu
      const intro = REDUCED ? 1 : clamp01((now - introStart - 250 - i * 140) / 1100);
      const introEase = easeOutBack(intro);
      const radius = ORBIT_RADIUS * Math.min(1, easeInOutCubic(intro) * 1.02);

      const a = orbitAngle + (i / COUNT) * Math.PI * 2;
      node.group.position.set(Math.cos(a) * radius, Math.sin(a * 2 + i + elapsed * 0.6) * 0.35, Math.sin(a) * radius);

      // Angkat struktur fokus dengan spring (melantun sedikit)
      node.liftVel += ((isFocus ? 1.1 : 0) - node.lift) * 90 * delta;
      node.liftVel *= Math.exp(-11 * delta);
      node.lift += node.liftVel * delta;
      node.model.position.y = node.lift + Math.sin(elapsed * 1.4 + i) * 0.12;

      const targetScale = i === selected ? 1.2 : selected >= 0 ? 0.8 : isFocus ? 1.25 : i === hovered ? 1.12 : 0.92;
      node.scale += (targetScale * introEase - node.scale) * Math.min(1, delta * 9);
      node.group.scale.setScalar(Math.max(0.001, node.scale));

      node.spinBoost *= Math.exp(-3 * delta);
      node.model.rotation.y += delta * ((i === hovered || isFocus ? 1.0 : 0.3) + node.spinBoost);
      node.model.userData.spin?.(elapsed);
      node.padRing.rotation.z = elapsed * (i % 2 ? -0.6 : 0.6);

      // Cahaya fokus: pancaran, tapak & riak
      node.glow += ((isFocus ? 1 : i === hovered ? 0.4 : 0) - node.glow) * Math.min(1, delta * 6);
      node.beam.material.opacity = node.glow * (0.09 + Math.sin(elapsed * 3) * 0.02);
      node.beam.scale.set(1, 0.4 + node.glow * 0.6, 1);
      node.beam.position.y = -2.2 + 4 * (0.4 + node.glow * 0.6);
      node.padRing.material.opacity = 0.3 + node.glow * 0.5;
      if (node.rippleT < 1) {
        node.rippleT = Math.min(1, node.rippleT + delta / 0.9);
        const r = easeInOutCubic(node.rippleT);
        node.ripple.scale.setScalar(1 + r * 1.6);
        node.ripple.material.opacity = (1 - node.rippleT) * 0.9;
      } else {
        node.ripple.material.opacity = 0;
      }

      const pos = node.line.geometry.attributes.position;
      pos.setXYZ(1, node.group.position.x, node.group.position.y, node.group.position.z);
      pos.needsUpdate = true;
      node.line.material.opacity = i === hovered || i === selected ? 0.35 : 0.1;
    });

    for (let p = 0; p < pulseCount; p++) {
      const a = (p / pulseCount) * Math.PI * 2 + elapsed * 0.35;
      pulsePos[p * 3] = Math.cos(a) * ORBIT_RADIUS;
      pulsePos[p * 3 + 1] = 0;
      pulsePos[p * 3 + 2] = Math.sin(a) * ORBIT_RADIUS;
    }
    pulseGeo.attributes.position.needsUpdate = true;

    // Cahaya sorotan & denyut tenaga dari teras ke struktur fokus
    if (selected < 0 && !dive) {
      const fNode = nodes[focus];
      fNode.group.getWorldPosition(tmp);
      focusLight.position.set(tmp.x, tmp.y + 4, tmp.z);
      focusLight.color.setHex(fNode.accent);
      focusLight.intensity += (22 - focusLight.intensity) * Math.min(1, delta * 4);
      const pt = (elapsed * 0.9) % 1;
      energyPulse.position.set(tmp.x * pt, tmp.y * pt + Math.sin(pt * Math.PI) * 1.2, tmp.z * pt);
      energyPulse.scale.setScalar(0.6 + Math.sin(pt * Math.PI) * 0.8);
      energyPulse.visible = true;
    } else {
      focusLight.intensity += (0 - focusLight.intensity) * Math.min(1, delta * 4);
      energyPulse.visible = false;
    }

    // Kamera
    const narrow = camera.aspect < 1;
    const worldView = (index) => {
      // Kedudukan "di dalam" orbit: baru melepasi struktur, memandang ke arah teras
      nodes[index].group.getWorldPosition(tmp);
      const dir = new THREE.Vector3(tmp.x, 0, tmp.z).normalize();
      const forward = dir.clone().negate();
      const right = new THREE.Vector3().crossVectors(forward, up).normalize();
      return {
        pos: tmp.clone().addScaledVector(forward, 3).add(new THREE.Vector3(0, 1.2, 0)),
        look: tmp.clone().addScaledVector(forward, 20).addScaledVector(right, narrow ? 0 : -7),
      };
    };

    // Terjun ke dalam teras: melalui pusat, memandang terus ke hadapan
    const coreView = () => {
      const dir = camera.position.clone().setY(0).normalize();
      return { pos: dir.clone().multiplyScalar(0.3), look: dir.clone().multiplyScalar(-30) };
    };

    if (dive) {
      // Animasi masuk: kamera meluncur menembusi struktur dengan kesan "warp" pada FOV
      const t = Math.min(1, (performance.now() - dive.t0) / DIVE_MS);
      const e = easeInOutCubic(t);
      const end = dive.index === -2 ? coreView() : worldView(dive.index);
      camera.position.lerpVectors(dive.from, end.pos, e);
      currentLook.lerpVectors(dive.lookFrom, end.look, Math.min(1, e * 1.6));
      // Warp paling kuat ketika kamera paling laju (tengah perjalanan)
      camera.fov = BASE_FOV + Math.pow(Math.sin(e * Math.PI), 2) * 42;
      if (bloomPass) bloomPass.strength = BLOOM_BASE + Math.pow(Math.sin(e * Math.PI), 2) * 1.2;
      camera.updateProjectionMatrix();
      camera.lookAt(currentLook);
      if (t >= 1) {
        const done = dive.resolve;
        dive = null;
        done();
      }
    } else {
      if (selected >= 0) {
        const view = worldView(selected);
        targetCamPos.copy(view.pos);
        targetCamLook.copy(view.look);
      } else {
        targetCamPos.copy(hubCamPos);
        targetCamLook.copy(hubLook);
      }
      camera.position.x += (targetCamPos.x + mouseX * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (targetCamPos.y + mouseY * 1.2 - camera.position.y) * 0.05;
      camera.position.z += (targetCamPos.z - camera.position.z) * 0.05;
      currentLook.lerp(targetCamLook, 0.06);
      if (bloomPass) bloomPass.strength += (BLOOM_BASE - bloomPass.strength) * 0.1;
      if (Math.abs(camera.fov - BASE_FOV) > 0.01) {
        camera.fov += (BASE_FOV - camera.fov) * 0.1;
        camera.updateProjectionMatrix();
      }
      camera.lookAt(currentLook);
    }

    monolithMesh.rotation.y = elapsed * 0.2;
    monolithMesh.rotation.x = elapsed * 0.12;
    wireOcta.rotation.y = -elapsed * 0.25;
    ring1.rotation.z = elapsed * 0.15;
    ring2.rotation.z = -elapsed * 0.2;
    coreGlow.intensity = 2.4 + Math.sin(elapsed * 2) * 0.8;
    const coreIntro = REDUCED ? 1 : easeOutBack(clamp01((now - introStart) / 900));
    coreHover += ((hovered === -2 ? 1 : 0) - coreHover) * Math.min(1, delta * 8);
    core.scale.setScalar(Math.max(0.001, coreIntro * (1 + Math.sin(elapsed * 2) * 0.025 + coreHover * 0.18)));
    wireOcta.rotation.y -= delta * coreHover * 2;
    coreGlow.intensity += coreHover * 3;
    const ringIntro = REDUCED ? 1 : easeInOutCubic(clamp01((now - introStart - 150) / 1200));
    orbitRing.scale.setScalar(Math.max(0.001, ringIntro));
    orbitRingOuter.scale.setScalar(Math.max(0.001, ringIntro));
    orbitRingOuter.rotation.z = elapsed * 0.05;
    starField.rotation.y = elapsed * 0.015;

    // Label ikut kedudukan struktur pada skrin
    if (labelEls.length) {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      nodes.forEach((node, i) => {
        const el = labelEls[i];
        const isFocus = i === focus;
        node.group.getWorldPosition(tmp);
        // Label fokus di bawah tapak struktur (tidak bertindih dengan teras); yang lain di atas
        tmp.y += (isFocus ? -2.7 : 3.1) * node.scale;
        const depth = tmp.distanceTo(camera.position);
        // 0 = paling depan orbit, 1 = paling belakang
        const rel = (depth - camera.position.length() + ORBIT_RADIUS) / (2 * ORBIT_RADIUS);
        tmp.project(camera);
        const visible = selected < 0 && !dive && tmp.z < 1;
        // Kekalkan label dalam skrin (penting untuk skrin sempit)
        const half = (labelWidth.get(el) || 110) / 2 + 8;
        const sx = Math.min(w - half, Math.max(half, (tmp.x * 0.5 + 0.5) * w));
        el.style.transform = `translate(${sx.toFixed(1)}px, ${((-tmp.y * 0.5 + 0.5) * h).toFixed(1)}px) translate(-50%, ${isFocus ? '14px' : '-100%'})`;
        const shown = visible && node.scale > 0.5;
        setStyle(el, 'opacity', shown ? (isFocus ? 1 : Math.max(0.6, Math.min(0.95, 1 - rel * 0.45))).toFixed(2) : '0');
        setStyle(el, 'pointerEvents', visible ? 'auto' : 'none');
        setStyle(el, 'zIndex', String(1000 - Math.round(depth * 10)));
        if (el.tabIndex !== (visible ? 0 : -1)) el.tabIndex = visible ? 0 : -1;
        if (el.classList.contains('is-focus') !== isFocus) el.classList.toggle('is-focus', isFocus);
      });
    }

    if (coreLabel) {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      tmp.set(0, -4.2, 0).project(camera);
      const show = selected < 0 && !dive && tmp.z < 1;
      coreLabel.style.transform = `translate(${((tmp.x * 0.5 + 0.5) * w).toFixed(1)}px, ${((-tmp.y * 0.5 + 0.5) * h).toFixed(1)}px) translate(-50%, 0)`;
      coreLabel.style.opacity = show ? (hovered === -2 ? '1' : '0.75') : '0';
      coreLabel.style.pointerEvents = show ? 'auto' : 'none';
      coreLabel.tabIndex = show ? 0 : -1;
    }

    // Bloom hanya bila adegan dilihat penuh (hab / animasi masuk)
    if (composer && bloomEnabled && !inWorld) composer.render();
    else renderer.render(scene, camera);
  };
  animate();

  return {
    // index -1 = kembali ke hab orbit (struktur terakhir kekal di hadapan)
    setWorld(index) {
      if (dive) return;
      if (index < 0 && selected >= 0) focus = selected;
      selected = index;
      setHovered(-1);
      setTouchMode();
    },
    setFocus(index) {
      focus = Math.max(0, Math.min(COUNT - 1, index));
    },
    // Animasi masuk ke struktur; selesai (resolve) bila kamera sudah berada di dalam
    enter(index) {
      return new Promise((resolve) => {
        if (dive) dive.resolve();
        selected = index;
        focus = index;
        setHovered(-1);
        setTouchMode();
        if (!DIVE_MS || !active) return resolve();
        dive = { index, from: camera.position.clone(), lookFrom: currentLook.clone(), t0: performance.now(), resolve };
      });
    },
    // Animasi terjun ke dalam teras (sebelum bertukar ke mod 2D)
    diveCore() {
      return new Promise((resolve) => {
        if (dive) dive.resolve();
        setHovered(-1);
        if (!DIVE_MS || !active) return resolve();
        dive = { index: -2, from: camera.position.clone(), lookFrom: currentLook.clone(), t0: performance.now(), resolve };
      });
    },
    // Kembalikan kamera ke pandangan hab (dipanggil selepas meninggalkan mod 3D)
    // Kamera bermula di dalam teras, kemudian berundur ke pandangan hab (transisi dari mod 2D)
    emerge() {
      if (dive) return;
      selected = -1;
      camera.position.copy(hubCamPos).multiplyScalar(0.06);
      currentLook.copy(hubLook);
      camera.fov = BASE_FOV + 38;
      camera.updateProjectionMatrix();
      setHovered(-1);
      setTouchMode();
    },
    resetView() {
      selected = -1;
      camera.position.copy(hubCamPos);
      currentLook.copy(hubLook);
      camera.fov = BASE_FOV;
      camera.updateProjectionMatrix();
      setTouchMode();
    },
    // Hentikan render & input bila mod 3D disembunyikan.
    setActive(isActive) {
      active = isActive;
      drag = null;
      if (!isActive && dive) {
        const done = dive.resolve;
        dive = null;
        done();
      }
      if (isActive && frameId === null) {
        timer.update(); // buang jurang masa semasa dijeda supaya delta tidak melompat
        animate();
      } else if (!isActive && frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    },
  };
}
