// Semua kandungan portfolio. Edit fail ini untuk tukar teks, projek, servis, dll.


const PERSONAL_INFO = {
  fullName: 'Muhammad Shafiq Danial Bin Sharudin',
  brandName: 'MSD',
  websiteTitle: 'Muhammad Shafiq Danial | Full Stack Developer',
  professionalTitle: 'Full Stack Developer · PHP & Web Solutions Specialist',
  tagline: 'I Build Digital Solutions From Code to Production.',
  supportingStatement: 'From frontend interfaces to backend architecture, database management, and server deployment — transforming ideas into functional digital solutions.',
  bio: 'Full Stack Developer with experience designing, building, and launching web applications from concept to production. Skilled in frontend and backend development, database management, server deployment, and hosting configuration.',
  email: 'shafiqopz9@gmail.com',
  whatsappNumber: '+60 17-775 1194',
  whatsappLink: 'https://wa.me/60177751194?text=Hi%20MSD%2C%20I%20would%20like%20to%20discuss%20a%20web%20project%20with%20you.',
  location: 'Malaysia',
  timezone: 'UTC+8 (MYT)',
  logo: 'logo.png',
  portrait: 'MUHAMMAD%20SHAFIQ%20DANIAL%20BIN%20SHARUDIN.png',
  statusFigures: [
    { label: 'EXPERIENCE', value: '5+ YEARS' },
    { label: 'CAPABILITIES', value: '10+' },
    { label: 'TECHNOLOGIES', value: '20+' }
  ]
};

const PROJECTS = [
  {
    id: 'mn-sport',
    episode: 'EP.01',
    title: 'MN SPORT',
    subtitle: 'Sports Apparel & Equipment Web Platform',
    category: 'Full Stack Web Application',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'A complete web application built with full-stack skills, from database design to UI implementation.',
    fullOverview: 'MN SPORT is an end-to-end web application crafted with custom PHP and MySQL architecture. The platform features an athletic, high-contrast user interface tailored for sports gear presentation, dynamic product filtering, relational database schema for inventory records, and structured session handling.',
    keyHighlights: [
      'Engineered structured relational schema in MySQL for item cataloging and user inquiries',
      'Implemented responsive UI with custom CSS and vanilla JavaScript interaction models',
      'Developed server-side PHP data controllers for processing requests securely without external dependencies',
      'Optimized asset loading and query performance for rapid browser rendering'
    ],
    image: 'mnsport-poster.jpg',
    video: '20260616-0340-30.9267073.mp4',
    architectureDetails: {
      frontend: 'HTML5, CSS3, Vanilla JavaScript, Responsive Grid Layouts',
      backend: 'Native PHP OOP / MVC architecture with parameter sanitization',
      database: 'MySQL Relational Schema, indexed keys for item lookups',
      deployment: 'Linux Web Server environment, Apache/cPanel, SSL configured'
    },
    features: [
      'Product catalog display with athletic styling',
      'Category-based query filtering',
      'Contact & order enquiry processing',
      'Administrative data views for catalog maintenance'
    ]
  },
  {
    id: 'convoy-together',
    episode: 'EP.02',
    title: 'Convoy Together, Respect Each Other',
    subtitle: 'Automotive Community Convoy Experience',
    category: 'Full Stack Web Application',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'A full-stack web experience created for an automotive convoy event featuring the Perodua and Proton communities.',
    fullOverview: 'Built specifically for the Malaysian automotive enthusiast community, this application united Perodua and Proton car clubs under the "Convoy Together, Respect Each Other" initiative. The platform provided participants with real-time briefing schedules, safety protocols, convoy staging points, and community registration management.',
    keyHighlights: [
      'Coordinated enthusiast community data across multiple Malaysian automotive clubs',
      'Integrated waypoint schedules and staging area checkpoints for highway convoys',
      'Custom PHP backend ensuring rapid participant lookup on mobile devices during the event',
      'Dark automotive-themed interface optimized for field legibility under varying light conditions'
    ],
    image: 'convoy-poster.jpg',
    video: '20260804-0606-29.9563790.mp4',
    architectureDetails: {
      frontend: 'Dark automotive visual layout, mobile-first responsive design',
      backend: 'PHP REST API endpoints for participant lookup and schedule feeds',
      database: 'MySQL database storing convoy checkpoints, car club chapters, and entries',
      deployment: 'Production VPS with HTTPS/SSL and cPanel DNS routing'
    },
    features: [
      'Car club chapter grouping (Proton & Perodua)',
      'Highway checkpoint & route itinerary viewer',
      'Participant check-in validation',
      'Safety guideline and community code of conduct'
    ]
  },
  {
    id: 'mega-proton-attack',
    episode: 'EP.03',
    title: 'MEGA PROTON ATTACK',
    subtitle: 'Automotive Meet & Event Registration System',
    category: 'Event Registration System',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'An online registration system for a car meet event, featuring package categories, payment details, a live participant list with payment status, and convoy route and meeting schedules.',
    fullOverview: 'The MEGA PROTON ATTACK system was designed and deployed as the central digital hub for a large-scale automotive car meet. It streamlined what was previously manual sign-ups into an automated, database-backed workflow: handling tiered entry packages, payment submission verifications, a live public/admin participant status tracker, and convoy dispatch schedules.',
    keyHighlights: [
      'Automated registration workflow with multi-tier vehicle package selection',
      'Implemented live participant registry with real-time payment status indicators',
      'Engineered relational database tables connecting drivers, car models, packages, and payment slips',
      'Interactive route briefing module displaying rally points, marshaling schedules, and track arrival windows'
    ],
    image: 'megaproton-poster.jpg',
    video: 'sges.mp4',
    architectureDetails: {
      frontend: 'High-contrast event portal UI, live filterable participant tables, dynamic form validation',
      backend: 'PHP transaction handling, file upload verification for payment proofs, sanitization filters',
      database: 'MySQL normalized schema (participants, packages, payments, routes)',
      deployment: 'Production hosting with cPanel, automated DB backups, SSL certification'
    },
    features: [
      'Online event registration with form validation',
      'Registration package categories (Standard, Trackside VIP, Enthusiast Fleet)',
      'Payment details & slip verification pipeline',
      'Participant list with live payment status (Paid, Verified, Pending)',
      'Convoy routes and meeting schedules with time markers'
    ]
  },
  {
    id: 'syhariq-portfolio',
    episode: 'EP.04',
    title: 'SYHARIQ PORTFOLIO',
    subtitle: 'Comic-Style Personal Portfolio for a Social Media Strategist',
    category: 'Personal Portfolio Website',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'A bold, manga-inspired personal portfolio for social media strategist Aemierul Syhariq, featuring comic panels, animated effects, and an interactive 3D work carousel.',
    fullOverview: 'A personal brand website built to showcase the work and results of a social media strategist. The interface borrows from comic book and manga design — halftone textures, speech-bubble bios, sound-effect typography and punchy hover animations — to make the profile memorable, while still presenting key metrics, services, skills, a work gallery, achievements and contact routes clearly.',
    keyHighlights: [
      'Comic / manga visual language: halftone dots, panel borders, speech bubbles and sound-effect lettering',
      'Interactive 3D drag-to-spin carousel for browsing work episodes and photo sets',
      'Language switcher and light/dark theme toggle',
      'Animated hover effects and responsive layout across desktop and mobile'
    ],
    image: 'syhariq-poster.jpg',
    video: 'portfoliomirul.mp4',
    architectureDetails: {
      frontend: 'Semantic HTML5, custom CSS animations, vanilla JavaScript interactions',
      backend: 'Static front-end site — no server-side processing required',
      database: 'Not required — content is served directly from the page',
      deployment: 'Static web hosting with custom domain and SSL'
    },
    features: [
      'Profile hero with key social media metrics',
      'Services, skills and achievements sections',
      '3D drag-to-spin work gallery',
      'Language and theme toggles'
    ]
  }
];

const ENGINE_MODULES = [
  {
    id: 'frontend',
    image: 'frontend.png',
    code: '01',
    title: 'FRONTEND ENGINE',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Responsive Design'],
    description: 'Engineering fluid, high-performance interfaces crafted with semantic markup, modern CSS architecture, and clean vanilla JavaScript or component-driven logic.',
    practicalApplication: 'Applied in client-facing portals like MN Sport and Mega Proton Attack to deliver sub-second rendering, mobile responsiveness, and tactile event registration forms.',
    accentColor: '#B7FF3C'
  },
  {
    id: 'backend',
    image: 'backend.png',
    code: '02',
    title: 'BACKEND & DATABASE',
    technologies: ['PHP', 'MySQL', 'REST API Development', 'Authentication', 'Authorization', 'Database Design', 'Query Optimization'],
    description: 'Building secure server-side logic, normalized database schemas, session architectures, and fast RESTful endpoints that handle transactional web flows.',
    practicalApplication: 'Powers the core business logic of the Mega Proton Attack registration engine and Convoy Together participant management system with sanitized SQL queries.',
    accentColor: '#36D9FF'
  },
  {
    id: 'infrastructure',
    image: 'hosting.png',
    code: '03',
    title: 'INFRASTRUCTURE',
    technologies: ['VPS Management', 'Linux Server', 'cPanel', 'Hostinger', 'SSL Certificates', 'Domain Configuration', 'Deployment'],
    description: 'Provisioning and administering production environments, configuring web servers, enforcing HTTPS/SSL, routing DNS records, and orchestrating smooth deployments.',
    practicalApplication: 'Ensures websites run with zero unplanned downtime, strict SSL encryption, automated database backups, and optimized DNS propagation.',
    accentColor: '#B7FF3C'
  },
  {
    id: 'cms',
    image: 'cms.png',
    code: '04',
    title: 'CMS SOLUTIONS',
    technologies: ['WordPress', 'CMS Theme Customization', 'Plugin Integration', 'Content Architecture'],
    description: 'Developing versatile CMS-based platforms enabling non-technical stakeholders to manage content effortlessly while maintaining clean code standards.',
    practicalApplication: 'Delivered for client business platforms requiring rapid content publication, custom post types, and intuitive editorial controls.',
    accentColor: '#36D9FF'
  },
  {
    id: 'tools',
    image: 'tools.png',
    code: '05',
    title: 'DEVELOPMENT TOOLS',
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman'],
    description: 'Utilizing strict version control, collaborative Git branching, API endpoint testing via Postman, and disciplined code workflows.',
    practicalApplication: 'Maintains codebase integrity, facilitates clean feature branching, and verifies all REST endpoints before staging and production rollout.',
    accentColor: '#B7FF3C'
  }
];

const TECHNICAL_SKILLS = [
  {
    id: 'frontend-dev',
    category: 'Frontend Development',
    percentage: 89,
    rank: 'S',
    technologies: [
      { name: 'HTML5 Semantic Markup', proficiency: 'Advanced', note: 'Accessible structure, SEO-ready DOM hierarchy' },
      { name: 'CSS3 & Modern Styling', proficiency: 'Advanced', note: 'Flexbox, Grid, keyframe animations, responsive design' },
      { name: 'JavaScript (ES6+)', proficiency: 'Advanced', note: 'DOM manipulation, async fetch, event delegation' },
      { name: 'Bootstrap & Frameworks', proficiency: 'Proficient', note: 'Component rapid prototyping, grid consistency' },
      { name: 'Cross-Device Responsiveness', proficiency: 'Advanced', note: 'Mobile-first optimization, touch target calibration' }
    ]
  },
  {
    id: 'backend-db',
    category: 'Backend & Database',
    percentage: 83,
    rank: 'A',
    technologies: [
      { name: 'PHP (Object-Oriented & Procedural)', proficiency: 'Advanced', note: 'MVC patterns, request lifecycles, file processing' },
      { name: 'MySQL Relational Databases', proficiency: 'Advanced', note: 'Normalized schemas, indexing, foreign keys' },
      { name: 'REST API Development', proficiency: 'Proficient', note: 'JSON responses, CRUD operations, endpoint security' },
      { name: 'Authentication & Session Auth', proficiency: 'Proficient', note: 'Bcrypt password hashing, tokenized sessions, RBAC' },
      { name: 'Database Query Optimization', proficiency: 'Proficient', note: 'Query profiling, index tuning, join optimization' }
    ]
  },
  {
    id: 'hosting-deploy',
    category: 'Hosting & Deployment',
    percentage: 82,
    rank: 'A',
    technologies: [
      { name: 'Linux Server Administration', proficiency: 'Proficient', note: 'SSH configuration, file permissions, daemon checks' },
      { name: 'cPanel & Hostinger Ecosystem', proficiency: 'Advanced', note: 'Virtual host setup, cron jobs, php.ini configuration' },
      { name: 'Domain & DNS Management', proficiency: 'Advanced', note: 'A/CNAME/MX records, nameserver propagation' },
      { name: 'SSL & Security Configuration', proficiency: 'Advanced', note: "Let's Encrypt certificates, HTTPS enforcement" },
      { name: 'Production Deployment', proficiency: 'Proficient', note: 'Zero-downtime staging to production rollout' }
    ]
  },
  {
    id: 'cms-solutions',
    category: 'CMS Development',
    percentage: 82,
    rank: 'A',
    technologies: [
      { name: 'WordPress Architecture', proficiency: 'Advanced', note: 'Theme development, custom hooks, template hierarchy' },
      { name: 'CMS Database Structures', proficiency: 'Proficient', note: 'wp_posts, postmeta querying, custom fields' },
      { name: 'Plugin Customization', proficiency: 'Proficient', note: 'API integrations, tailored functionality adjustments' },
      { name: 'CMS Security Hardening', proficiency: 'Proficient', note: 'Login protection, file integrity, spam prevention' }
    ]
  },
  {
    id: 'dev-tools',
    category: 'Development Tools',
    percentage: 86,
    rank: 'A+',
    technologies: [
      { name: 'Git & Version Control', proficiency: 'Advanced', note: 'Branching, commit history, merge conflict resolution' },
      { name: 'GitHub Collaboration', proficiency: 'Advanced', note: 'Repository management, release tagging' },
      { name: 'VS Code Workflow', proficiency: 'Advanced', note: 'Debugging, linting, productivity extensions' },
      { name: 'Postman API Testing', proficiency: 'Proficient', note: 'Endpoint verification, payload assertions, status tests' }
    ]
  }
];

const ARCHITECTURE_NODES = [
  {
    id: 'ui',
    name: 'USER INTERFACE',
    subtitle: 'Layer 01 — Presentation',
    role: 'Captures user interactions, form submissions, and device viewport specifications with semantic accessibility.',
    technologies: ['HTML5', 'CSS3 Grid/Flexbox', 'Responsive Viewports', 'JavaScript Event Listeners'],
    projectApplication: 'The mobile-optimized registration interface for MEGA PROTON ATTACK and MN Sport gear views.'
  },
  {
    id: 'frontend-app',
    name: 'FRONTEND APPLICATION',
    subtitle: 'Layer 02 — Client Logic',
    role: 'Performs immediate client-side data validation, dynamic state transitions, and asynchronous API calls.',
    technologies: ['Vanilla JavaScript', 'Fetch API', 'DOM Sanitization', 'Async/Await Data Handlers'],
    projectApplication: 'Validates participant IC numbers, phone formats, and live package price calculation before dispatch.'
  },
  {
    id: 'backend-api',
    name: 'PHP BACKEND / REST API',
    subtitle: 'Layer 03 — Server Computation',
    role: 'Executes core business logic, session validation, request sanitization, and structured JSON/HTML rendering.',
    technologies: ['PHP OOP', 'RESTful Routing', 'Password Hashing', 'Input Filtering', 'File Upload Parsers'],
    projectApplication: 'The centralized controllers handling participant enrollment, payment receipt ingestion, and email alerts.'
  },
  {
    id: 'mysql-db',
    name: 'MYSQL DATABASE',
    subtitle: 'Layer 04 — Persistent Storage',
    role: 'Normalized relational database preserving relational integrity, transaction states, and indexed lookups.',
    technologies: ['MySQL 8.0', 'InnoDB Engine', 'Parameterized Prepared Statements', 'Foreign Key Constraints'],
    projectApplication: 'Structured tables for attendees, payment slips, verification statuses, and event convoy waves.'
  },
  {
    id: 'vps-server',
    name: 'SERVER / VPS',
    subtitle: 'Layer 05 — Host Infrastructure',
    role: 'Linux-powered web server providing secure execution environments, firewall filters, and process isolation.',
    technologies: ['Linux OS', 'cPanel Administration', 'Hostinger VPS', 'Apache / Nginx Web Servers', 'SSL / TLS'],
    projectApplication: 'Production host powering live domains with SSL certificates, automated daily dumps, and DNS management.'
  },
  {
    id: 'deployment',
    name: 'LIVE DEPLOYMENT',
    subtitle: 'Layer 06 — Production Delivery',
    role: 'Global public access layer delivering high availability, cached assets, and verified uptime.',
    technologies: ['Custom Domains', 'DNS Record Routing', 'HTTPS Strict Transport', 'Production Monitoring'],
    projectApplication: 'Live event access for car clubs across Malaysia during live convoy dispatch days.'
  }
];

const WORKFLOW_STAGES = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Requirements & Architecture Blueprint',
    description: 'Understand requirements, project objectives, and user needs to establish technical scope and milestones.',
    tasks: [
      'Comprehensive stakeholder discovery & functional requirements gathering',
      'Target audience profiling & device usage analysis',
      'Technical architecture scoping (database schemas, endpoints, server tier)',
      'Data modeling and third-party dependency assessment'
    ]
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'Interface & Database Structure',
    description: 'Plan the interface, user experience, and application structure before writing a single line of code.',
    tasks: [
      'Wireframing user journeys and responsive layout structures',
      'Database normalization (tables, keys, relational schema diagrams)',
      'API endpoint contract design (request & response schemas)',
      'Design system alignment (typography, color palettes, micro-interactions)'
    ]
  },
  {
    step: '03',
    title: 'DEVELOP',
    subtitle: 'Full-Stack Implementation',
    description: 'Build frontend components, backend functionality, and database integration with clean, maintainable code.',
    tasks: [
      'Frontend markup, responsive CSS, and dynamic JavaScript execution',
      'PHP business logic, parameter validation, and secure session management',
      'MySQL database creation, stored procedures, and index optimization',
      'API integration, payment workflow testing, and administrative dashboards'
    ]
  },
  {
    step: '04',
    title: 'DEPLOY',
    subtitle: 'Infrastructure, Hosting & Launch',
    description: 'Configure hosting, servers, domains, SSL, and production deployment for a seamless public launch.',
    tasks: [
      'VPS and web server environment configuration (PHP extensions, web server settings)',
      'DNS records mapping (A, CNAME, MX) and SSL encryption installation',
      'Production database migration and environment variable isolation',
      'Cross-browser smoke testing, mobile audits, and launch sign-off'
    ]
  },
  {
    step: '05',
    title: 'MAINTAIN',
    subtitle: 'Optimization & Longevity',
    description: 'Support, troubleshoot, optimize, and maintain the website to ensure persistent speed and security.',
    tasks: [
      'Scheduled database optimization and routine backup automation',
      'Server security patching and PHP version compatibility audits',
      'Performance profiling (asset minification, slow query analysis)',
      'Bug fixes, feature enhancements, and operational technical support'
    ]
  }
];

const SERVICES = [
  {
    id: 1,
    title: 'Custom Website Development',
    shortDesc: 'Tailor-made web applications built from scratch to match unique operational workflows.',
    deliverables: ['Custom PHP backend architecture', 'Semantic, responsive frontend', 'Normalized MySQL schema', 'Custom admin management view'],
    techUsed: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3'],
    category: 'Development'
  },
  {
    id: 2,
    title: 'Corporate Website Development',
    shortDesc: 'High-impact corporate web presences that convey credibility and brand authority.',
    deliverables: ['Executive company overview pages', 'Interactive service showcases', 'Inquiry & lead capture forms', 'SEO structural optimization'],
    techUsed: ['HTML5', 'CSS3', 'PHP', 'JavaScript'],
    category: 'Development'
  },
  {
    id: 3,
    title: 'E-Commerce Website Development',
    shortDesc: 'Complete online stores featuring catalog management, product sorting, and order pipelines.',
    deliverables: ['Product catalog with relational filtering', 'Cart & session checkout flows', 'Customer order history database', 'Admin inventory control'],
    techUsed: ['PHP', 'MySQL', 'JavaScript', 'CSS Grid'],
    category: 'Development'
  },
  {
    id: 4,
    title: 'Dashboard & Admin Panel Development',
    shortDesc: 'Intuitive administrative backends allowing teams to manage data, users, and transactions.',
    deliverables: ['Secure authentication & role checks', 'Tabular data visualization & search', 'CRUD record editors', 'Exportable reporting data'],
    techUsed: ['PHP OOP', 'MySQL', 'JavaScript', 'Bootstrap'],
    category: 'Development'
  },
  {
    id: 5,
    title: 'Hosting & Domain Setup',
    shortDesc: 'End-to-end domain connection, DNS configuration, and web server setup.',
    deliverables: ['Domain registration & DNS routing', 'cPanel / Hostinger VPS setup', 'SSL/TLS certificate installation', 'Email account configuration'],
    techUsed: ['Linux', 'cPanel', 'Hostinger', 'DNS/SSL'],
    category: 'Infrastructure'
  },
  {
    id: 6,
    title: 'Payment Gateway Integration',
    shortDesc: 'Secure payment pipelines connecting websites to payment gateways and receipt verification.',
    deliverables: ['Payment processing endpoints', 'Order status webhook handlers', 'Receipt upload & validation logic', 'Transaction logging in MySQL'],
    techUsed: ['PHP API', 'MySQL', 'JavaScript', 'SSL'],
    category: 'Development'
  },
  {
    id: 7,
    title: 'Website Maintenance & Support',
    shortDesc: 'Ongoing technical upkeep, periodic health checks, and routine site management.',
    deliverables: ['Automated database backups', 'Security audit checks', 'Core updates & dependency review', 'Emergency recovery assistance'],
    techUsed: ['Linux', 'MySQL', 'cPanel', 'PHP'],
    category: 'Maintenance'
  },
  {
    id: 8,
    title: 'Website Optimization',
    shortDesc: 'Speed acceleration, asset minification, and database query tuning for maximum responsiveness.',
    deliverables: ['Query profiling & index creation', 'Browser caching configuration', 'Asset compression & lazy loading', 'Time-To-First-Byte reduction'],
    techUsed: ['MySQL Profiling', 'Apache/Nginx', 'CSS/JS Minification'],
    category: 'Maintenance'
  },
  {
    id: 9,
    title: 'Database Design & Management',
    shortDesc: 'Robust relational database architecture designed for scalability, data integrity, and fast queries.',
    deliverables: ['Normalized schema diagram (ERD)', 'Primary & foreign key indexing', 'Data migration scripts', 'Backup & restoration protocols'],
    techUsed: ['MySQL', 'InnoDB', 'phpMyAdmin', 'SQL DDL/DML'],
    category: 'Infrastructure'
  },
  {
    id: 10,
    title: 'Bug Fixing & Troubleshooting',
    shortDesc: 'Rapid diagnostic and remediation of broken scripts, PHP errors, database anomalies, and styling bugs.',
    deliverables: ['Error log inspection & root cause identification', 'PHP syntax & logic resolution', 'Database connection fixing', 'Responsive CSS alignment repairs'],
    techUsed: ['PHP Debugging', 'MySQL Logs', 'Browser DevTools', 'Postman'],
    category: 'Maintenance'
  }
];

// ===== Mod 3D: "The Engine" (World 02) =====
const ENGINE_COMPONENTS = [
  {
    id: 'frontend',
    image: 'frontend.png',
    code: '01',
    title: 'FRONTEND',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    score: '89%',
    role: 'Translating design architectures into fluid, accessible, and high-performance interfaces without bloated frameworks.',
    relatedProject: 'MN Sport (Athletic e-commerce UI) & Mega Proton Attack (Dynamic registration portal)'
  },
  {
    id: 'backend',
    image: 'backend.png',
    code: '02',
    title: 'BACKEND & DATABASE',
    technologies: ['PHP', 'MySQL', 'REST API Development', 'Authentication', 'Authorization', 'Database Design', 'Query Optimization'],
    score: '83%',
    role: 'Engineering server-side business logic, transactional data integrity, session management, and optimized relational schemas.',
    relatedProject: 'Mega Proton Attack (Online registration & participant verification database engine)'
  },
  {
    id: 'hosting',
    image: 'hosting.png',
    code: '03',
    title: 'HOSTING & DEPLOYMENT',
    technologies: ['VPS Management', 'Linux Server', 'cPanel', 'Hostinger', 'SSL', 'Domain Configuration'],
    score: '82%',
    role: 'Administering Linux hosting stacks, provisioning production VPS instances, managing DNS records, and enforcing strict SSL encryption.',
    relatedProject: 'Live production deployment across Malaysian hosting providers and cloud VPS'
  },
  {
    id: 'cms',
    image: 'cms.png',
    code: '04',
    title: 'CMS',
    technologies: ['WordPress'],
    score: '82%',
    role: 'Architecting custom WordPress platforms, bespoke theme structures, and streamlined editorial pipelines for clients.',
    relatedProject: 'Tailored content publishing systems and business portals'
  },
  {
    id: 'tools',
    image: 'tools.png',
    code: '05',
    title: 'TOOLS',
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman'],
    score: '86%',
    role: 'Rigorous version control, collaborative Git branching, automated endpoint assertion in Postman, and disciplined workflows.',
    relatedProject: 'All full-stack production repositories and API validation suites'
  }
];

// ===== Mod 3D: "From Code to Production" (World 04) =====
const ARCHITECTURE_LAYERS = [
  {
    id: 'user',
    title: 'USER',
    subtitle: 'Client Interaction Layer',
    technologies: ['Browser Viewport', 'Touch & Mouse Inputs', 'HTTP Request Triggers'],
    description: 'The end-user interaction point where forms are submitted, views are navigated, and event sessions originate.',
    skillsConnected: 'UX Architecture, Cross-Device Accessibility',
    relatedProject: 'Mega Proton Attack mobile registration portal & MN Sport athlete catalog'
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    subtitle: 'Client Interface & Validation',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Executes client-side form validation, responsive DOM layouts, dynamic state rendering, and asynchronous fetch dispatches.',
    skillsConnected: 'HTML5, CSS3, ES6+ JavaScript, Bootstrap',
    relatedProject: 'MN Sport product filters & Convoy Together briefing schedule interface'
  },
  {
    id: 'backend',
    title: 'BACKEND',
    subtitle: 'Server Computing & Controller Logic',
    technologies: ['PHP', 'REST API'],
    description: 'Processes business rules, authenticates tokens, sanitizes untrusted input, hashes credentials, and constructs JSON/HTML responses.',
    skillsConnected: 'PHP OOP, MVC Design, REST API Development, Authentication',
    relatedProject: 'Mega Proton Attack registration transaction controller & payment verify pipeline'
  },
  {
    id: 'database',
    title: 'DATABASE',
    subtitle: 'Persistent Relational Storage',
    technologies: ['MySQL'],
    description: 'Maintains normalized relational tables, executes parameterized queries to prevent SQL injection, and indexes foreign keys.',
    skillsConnected: 'MySQL, Relational Schema Design, Query Optimization, ACID Compliance',
    relatedProject: 'Attendee databases, vehicle classifications, and payment record archives'
  },
  {
    id: 'server',
    title: 'SERVER',
    subtitle: 'Host Infrastructure & Daemon Control',
    technologies: ['Linux', 'VPS', 'cPanel'],
    description: 'Linux-powered execution container providing process isolation, web server routing (Apache/Nginx), and cron job automation.',
    skillsConnected: 'Linux Server Administration, VPS Management, cPanel Configuration',
    relatedProject: 'Hostinger cloud VPS instances and Malaysian dedicated web hosts'
  },
  {
    id: 'deployment',
    title: 'DEPLOYMENT',
    subtitle: 'Network Routing & Production Edge',
    technologies: ['SSL', 'Domain', 'Hosting'],
    description: 'Installs SSL/TLS certificates for encrypted HTTPS transit, binds DNS records (A/CNAME/MX), and pushes code to live domains.',
    skillsConnected: 'SSL Certificates, Domain Setup, Production Rollout',
    relatedProject: 'Zero-downtime production deployment for automotive car meet events'
  },
  {
    id: 'live-app',
    title: 'LIVE APPLICATION',
    subtitle: 'Production Service Delivery',
    technologies: ['High Availability Web Platform'],
    description: 'The fully realized web solution operating in production, serving public traffic with rapid load times and data integrity.',
    skillsConnected: 'End-to-End System Reliability, Performance Tuning',
    relatedProject: 'Live public portals for automotive clubs and sports platforms'
  }
];

// Log simulasi aliran data (mod 3D, World 04). Satu log untuk setiap layer dalam ARCHITECTURE_LAYERS.
const ARCHITECTURE_FLOW_LOGS = {
  start: '[00ms] User clicks Submit Registration in browser...',
  steps: [
    '[08ms] USER: Dispatching HTTP POST request packet from mobile viewport',
    '[22ms] FRONTEND: Form sanitized via JavaScript fetch API over encrypted channel',
    '[45ms] BACKEND: PHP router validates session token, parameters, and csrf nonce',
    '[64ms] DATABASE: MySQL executes parameterized prepared INSERT into attendees table',
    '[80ms] SERVER: Linux daemon handles response packet construction',
    '[94ms] DEPLOYMENT: HTTPS response delivered across registered domain edge',
    '[108ms] LIVE APPLICATION: Live event registry updated in real time!'
  ]
};

// Log simulasi aliran data (mod 2D, Infrastructure Lab). Satu log untuk setiap node dalam ARCHITECTURE_NODES.
const INFRASTRUCTURE_FLOW_LOGS = {
  start: '[00ms] User clicks Submit Registration on mobile viewport (Sepang Paddock form)',
  steps: [
    '[08ms] Layer 01: UI captures event, extracts DOM inputs (Name, Plate, Package)',
    '[24ms] Layer 02: Client JS performs schema validation, triggers async fetch POST /api/register',
    '[45ms] Layer 03: PHP MVC Router receives request, executes input sanitization and token check',
    '[62ms] Layer 04: MySQL executes parameterized INSERT INTO participants (status = "Verified")',
    '[78ms] Layer 05: Linux Host / Apache compiles HTTP 201 Created JSON response packet',
    '[94ms] Layer 06: Live Production Edge returns payload. Browser UI updates attendee registry!'
  ]
};

// ===== Mod 2D: "The Developer Behind The System" =====
const ABOUT_PILLARS = [
  { title: 'End-to-End Web Development', desc: 'Architecting digital systems from the user interface down to database indexing and server response loops.', icon: 'code', color: '#B7FF3C' },
  { title: 'Practical Application Development', desc: 'Translating real-world stakeholder requirements into efficient, testable, and maintainable software systems.', icon: 'circle-check', color: '#36D9FF' },
  { title: 'Database Management', desc: 'Designing normalized schemas, structured relationships, indexed keys, and optimized MySQL queries.', icon: 'database', color: '#B7FF3C' },
  { title: 'Server Deployment & Hosting', desc: 'Provisioning Linux VPS environments, configuring web servers, managing DNS records, and enforcing SSL.', icon: 'server', color: '#36D9FF' },
  { title: 'Building Solutions from Real Requirements', desc: 'Focused on solving genuine operational challenges without bloated abstractions or fragile dependencies.', icon: 'shield', color: '#B7FF3C' }
];
