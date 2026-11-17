// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update copy.
//  Contact links are intentionally left as placeholders —
//  fill in `href` / `value` with your real details.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'SHIVAM',
  roles: [
    'Full-Stack Developer',
    'Creative Technologist',
    'Cybersecurity Enthusiast',
    'AI Product Developer',
    'Independent Product Builder',
  ],
  headline: ['BUILDING IDEAS', 'BEYOND LIMITS.'],
  sub: 'I turn complex ideas into intelligent digital experiences.',
};

export const NAV = [
  { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'security', label: 'Security' },
  { id: 'contact', label: 'Contact' },
];

export const JOURNEY = [
  {
    no: '01',
    kicker: 'Foundations',
    title: 'Learning the craft of software.',
    body:
      'A BCA gave me the formal grounding — data structures, systems, and how software is really put together. From there I kept building: interfaces in React, services in Node.js and Python, and the databases that hold it all together.',
    tags: ['BCA', 'React', 'Node.js', 'Python'],
  },
  {
    no: '02',
    kicker: 'Security',
    title: 'Learning how things break.',
    body:
      'Ethical hacking and web application security changed the way I see code. Bug hunting and security research taught me to read every input, every auth flow and every API as an attack surface — and to build with that in mind.',
    tags: ['Ethical Hacking', 'Web Security', 'Burp Suite', 'Bug Hunting'],
  },
  {
    no: '03',
    kicker: 'Intelligence',
    title: 'Teaching software to think.',
    body:
      'I experiment with large language models — cloud and local. Gemini API, Ollama and Qwen are part of my toolkit for turning models into real features: conversations, reasoning over user data and personalised output.',
    tags: ['Gemini API', 'Ollama', 'Qwen', 'LLM Integration'],
  },
  {
    no: '04',
    kicker: 'Building',
    title: 'Turning ideas into products.',
    body:
      'Today I work as an independent product builder — across hardware, AI, SaaS and community. A handheld cybersecurity device, an AI astrology app, an education platform and an industry hackathon initiative, each built from first principles.',
    tags: ['Hardware', 'AI Products', 'SaaS', 'Community'],
  },
];

export const PROJECTS = [
  {
    no: '01',
    name: 'HACKRONIX',
    type: 'Hardware · Cybersecurity · Learning',
    summary: 'A custom handheld cybersecurity and learning device.',
    body:
      'A pocket-sized device designed to make cybersecurity hands-on — built around an ESP32-C3 with an OLED interface, written in C/C++ and engineered from the board up.',
    features: ['Custom handheld form factor', 'OLED user interface', 'ESP32-C3 core', 'Built for learning by doing'],
    tech: ['ESP32-C3', 'C/C++', 'Arduino Framework', 'PlatformIO', 'OLED Display', 'Hardware Prototyping'],
    status: 'Currently in PCB design phase',
    accent: '#E10600',
  },
  {
    no: '02',
    name: 'PANDIT AI',
    type: 'AI · Mobile · Vedic Astrology',
    summary: 'An AI-powered Vedic astrology application.',
    body:
      'Combines astronomical precision from Swiss Ephemeris with conversational AI, so users can generate a Kundli and talk through it in natural language.',
    features: ['Kundli generation', 'AI-powered astrology conversations', 'Birth details processing', 'Personalised astrological insights'],
    tech: ['Flutter', 'Python', 'FastAPI', 'Gemini API', 'Swiss Ephemeris'],
    status: null,
    accent: '#E8590C',
  },
  {
    no: '03',
    name: 'EPC',
    fullName: 'Education Processing Center',
    type: 'SaaS · Education · Platform',
    summary: 'An education-focused SaaS platform.',
    body:
      'One platform that connects students, colleges and operations — from admission workflows and document verification to finance, commissions and role-based dashboards.',
    features: [
      'Student management',
      'College management',
      'Admission workflows',
      'Document verification',
      'Finance & commission management',
      'Role-based dashboards',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'Cloudflare'],
    status: null,
    accent: '#9E0016',
  },
  {
    no: '04',
    name: 'TECH BUILD 2026',
    type: 'Initiative · Hackathon · Community',
    summary: 'A multi-level industry hackathon initiative.',
    body:
      'A multi-level hackathon built around real industry domains — giving builders a structured path from idea to working solution.',
    features: ['AI', 'Cybersecurity', 'Smart Education', 'Digital Transformation', 'Smart Systems & Automation'],
    featuresLabel: 'Domains',
    tech: ['Multi-level format', 'Industry domains'],
    status: null,
    accent: '#FF4D4D',
  },
];

export const SKILLS = [
  {
    key: 'frontend',
    name: 'Frontend Development',
    short: 'Frontend',
    blurb: 'Interfaces that feel fast, precise and alive on every screen.',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    key: 'backend',
    name: 'Backend Development',
    short: 'Backend',
    blurb: 'APIs and services that are clean, typed by intent and secure by design.',
    items: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs'],
  },
  {
    key: 'ai',
    name: 'AI & Machine Learning',
    short: 'AI / ML',
    blurb: 'Turning language models into real product features — cloud and local.',
    items: ['Gemini API', 'Ollama', 'Qwen', 'LLM Integration', 'AI App Development'],
  },
  {
    key: 'security',
    name: 'Cybersecurity',
    short: 'Security',
    blurb: 'Thinking like an attacker to build things that hold up.',
    items: ['Ethical Hacking', 'Web App Security', 'Bug Hunting', 'Burp Suite', 'Security Research'],
  },
  {
    key: 'cloud',
    name: 'Cloud & Infrastructure',
    short: 'Cloud',
    blurb: 'Data and deployment that scale without drama.',
    items: ['PostgreSQL', 'Neon Database', 'Firebase', 'Cloudflare', 'Google Cloud Run'],
  },
  {
    key: 'mobile',
    name: 'Mobile Development',
    short: 'Mobile',
    blurb: 'Cross-platform apps with a native feel.',
    items: ['Flutter', 'Responsive UI', 'API Integration'],
  },
];

export const SECURITY_METHOD = [
  { k: 'RECON', t: 'Map the surface', d: 'Endpoints, inputs, auth flows, trust boundaries.' },
  { k: 'ANALYZE', t: 'Read like an attacker', d: 'Intercept and inspect traffic with Burp Suite.' },
  { k: 'VERIFY', t: 'Prove it safely', d: 'Test only in scope, in authorised environments.' },
  { k: 'HARDEN', t: 'Build it back stronger', d: 'Feed every finding into how I design software.' },
];

// ── Contact placeholders ──────────────────────────────────────
// Replace `value` and `href` with your real details. While `href`
// is empty the link renders as a clearly marked placeholder.
export const CONTACT = {
  email: { label: 'Email', value: 'your.email@domain.com', href: '' },
  links: [
    { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', href: '' },
    { label: 'GitHub', value: 'github.com/your-handle', href: '' },
    { label: 'X / Twitter', value: 'x.com/your-handle', href: '' },
    { label: 'Instagram', value: 'instagram.com/your-handle', href: '' },
  ],
};
