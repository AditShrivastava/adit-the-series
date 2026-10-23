/**
 * Central portfolio data for Adit Shrivastava.
 * Content is based on the supplied PGDM resume and Adit's project details.
 * No unverified links, certifications, or performance metrics have been invented.
 * The existing portfolio data model and visual design contract are preserved.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Adit Shrivastava',
  displayName: 'Adit Shrivastava',
  firstName: 'ADIT',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN ADIT ORIGINAL',
  role: 'PGDM Candidate — Product & Growth Marketing',
  tagline: ['Product Marketing', 'Growth Marketing & Strategy', 'Marketing × Technology'],
  intro:
    'A Computer Science & Engineering graduate pursuing a PGDM at JAGSoM, focused on Product & Growth Marketing, with Marketing as a major and Business Analytics as a minor. My background includes hands-on website delivery, two HEET 2023 Best Paper Awards for EV and green-credit research, a registered product-design contribution, and marketing storytelling through Ground Zero and Anatomy of Marketing.',
  location: 'Bangalore, India · Open to Relocation',
  email: 'Aditshrivastava2015@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/adit-shrivastava/',
    github: 'https://github.com/AditShrivastava',
  },
  // The current resume PDF is bundled at this path; replace it when the resume is updated.
  resumePdf: `${import.meta.env.BASE_URL}assets/Adit_Shrivastava_Resume.pdf`,
  // Responsive exports are generated from the supplied green-shirt portrait.
  portrait: {
    src: `${import.meta.env.BASE_URL}assets/portrait-672.webp`,
    srcSet: `${import.meta.env.BASE_URL}assets/portrait-420.webp 420w, ${import.meta.env.BASE_URL}assets/portrait-672.webp 672w`,
    alt: 'Portrait of Adit Shrivastava',
  },
  interests: ['Product Marketing', 'Growth Strategy', 'Consumer Psychology', 'Marketing Analytics', 'Entrepreneurship'],
};

export const education = [
  {
    school: 'Jagdish Sheth School of Management (JAGSoM)',
    place: 'Bangalore, India',
    degree: 'Post Graduate Diploma in Management (PGDM) — Growth & Product Marketing',
    period: 'July 2026 – 2028 (Expected)',
    score: 'Major: Marketing · Minor: Business Analytics',
  },
  {
    school: 'J.K. Lakshmipat University (JKLU)',
    place: 'Jaipur, India',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: 'August 2020 – November 2024',
    score: 'CGPA 7.19/10',
  },
];

export const experience = [
  {
    company: 'Sanjeevani Biotech Exim Pvt. Ltd.',
    role: 'Web Development Intern',
    place: 'Ahmedabad, India',
    period: 'January 2024 – June 2024',
    points: [
      'Independently designed and built 30+ doctor portfolio and profile websites on WordPress during a six-month on-site internship, translating practitioners’ requirements into live, client-ready sites.',
      'Proposed a patient portal concept to the Health Ministry as part of the internship scope.',
    ],
  },
  {
    company: 'Sanjeevani Tech Solutions',
    role: 'Web Development Intern',
    place: 'India',
    period: 'June 2022 – August 2022',
    points: [
      'Independently built and deployed two WordPress websites end-to-end for separate clients: a medical practitioner and Swat Labs.',
      'Managed design, development, and launch for both websites.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'anatomy-of-marketing',
    title: 'Anatomy of Marketing',
    year: '2026',
    genre: 'Marketing Education · Consumer Psychology · Brand Strategy',
    logline: 'An episode-based content series exploring why brands sell and how consumer psychology shapes perceived value and purchase decisions.',
    stack: ['Consumer Psychology', 'Brand Positioning', 'Content Strategy'],
    build: [
      'Developing plain-language marketing breakdowns around consumer behaviour, pricing, positioning, and brand perception.',
      'Using real-world brand examples to connect marketing-management concepts with everyday buying decisions.',
      'Structuring the series as accessible episodes rather than jargon-heavy explanations.',
    ],
    features: [
      'Episode-based marketing storytelling',
      'Brand and product case studies',
      'Consumer psychology explained in simple language',
      'Marketing-management concepts made accessible',
    ],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'ground-zero',
    title: 'Ground Zero',
    year: '2026',
    genre: 'News Media · Editorial Storytelling · Social Content',
    logline: 'A social-media news project focused on war-related developments and border tensions, using concise headline-led storytelling.',
    stack: ['News Research', 'Headline Writing', 'Social Media Content'],
    build: [
      'Developing content for a news-focused Instagram page covering war-related developments and border tensions.',
      'Using a short pre-headline followed by a concise main headline to structure updates.',
      'Planning both brief news copy and expanded context-led versions for different publishing needs.',
    ],
    features: [
      'War-related news and border-tension coverage',
      'Headline-first social content',
      'Short and expanded copy formats',
      'Editorial framing for fast-scrolling audiences',
    ],
    metrics: [],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'doctor-portfolio-websites',
    title: 'Doctor Portfolio Websites',
    year: '2024',
    genre: 'Web Development · WordPress',
    logline: '30+ doctor portfolio and profile websites designed and built independently for practitioners.',
    stack: ['WordPress'],
    build: [
      'Designed and built 30+ doctor portfolio and profile websites over a six-month on-site internship.',
      'Translated individual practitioners’ requirements into live, client-ready sites.',
      'Proposed a patient portal concept to the Health Ministry as part of the internship scope; the resume does not state that the portal was built.',
    ],
    features: [
      'Doctor portfolio and profile websites',
      'Requirements translated into client-ready sites',
      'WordPress-based website development',
      'Patient portal concept proposed to the Health Ministry',
    ],
    metrics: [
      { value: '30+', label: 'doctor websites built' },
      { value: '6 months', label: 'on-site internship' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'client-website-delivery',
    title: 'Client Website Delivery',
    year: '2022',
    genre: 'Web Development · Client Delivery',
    logline: 'Two WordPress websites built and deployed end-to-end for two separate clients.',
    stack: ['WordPress'],
    build: [
      'Independently built and deployed two WordPress websites for a medical practitioner and Swat Labs.',
      'Managed the full delivery sequence: design, development, and launch.',
    ],
    features: [
      'Two separate client websites',
      'Medical practitioner website',
      'Swat Labs company website',
      'End-to-end design, development, and launch',
    ],
    metrics: [
      { value: '2', label: 'websites deployed' },
      { value: '2', label: 'separate clients' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'ev-green-credit-research',
    title: 'EV Adoption & Green Credit Research',
    year: '2023',
    genre: 'Research · Game Theory · Sustainability',
    logline: 'Two research papers on electric-vehicle adoption and green-credit incentives, recognized at HEET 2023 in Osaka, Japan.',
    stack: ['Game-Theoretic Approach', 'EV Adoption', 'Green Credit Systems'],
    build: [
      'Co-authored “Electric Vehicle Adoption and Integration in Smart Cities: A Game-Theoretic Approach.”',
      'Co-authored “Green Credit Incentivization for EV Charging: A Game-Theoretic Approach.”',
      'Both papers received Best Paper Awards at the International Symposium on Hydrogen Energy & Energy Technologies (HEET 2023) in Osaka, Japan.',
    ],
    features: [
      'Electric-vehicle adoption and smart cities',
      'Green-credit incentives for EV charging',
      'Game-theoretic research framing',
      'Best Paper recognition at HEET 2023',
    ],
    metrics: [
      { value: '2', label: 'research papers' },
      { value: '2', label: 'Best Paper Awards' },
      { value: 'HEET 2023', label: 'Osaka, Japan' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'garbage-collector-design',
    title: 'Garbage Collector — Registered Design',
    year: 'Registered Design',
    genre: 'Product Design · Intellectual Property',
    logline: 'A faculty-supervised class project that contributed to a product design registered with the Government of India.',
    stack: ['Product Design'],
    build: [
      'Contributed to a garbage-collector product design as part of a faculty-supervised class project.',
      'The design is registered under the Designs Act, 2000, with Registration No. 397299-001.',
    ],
    features: [
      'Faculty-supervised class project',
      'Product-design contribution',
      'Registered design under the Designs Act, 2000',
    ],
    metrics: [
      { value: '397299-001', label: 'design registration number' },
      { value: 'Government of India', label: 'registration authority stated on resume' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'heet-best-paper',
    title: 'Two Best Paper Awards',
    org: 'HEET 2023 · Osaka, Japan',
    detail: 'Recognized for research papers on EV adoption in smart cities and green-credit incentivization for EV charging.',
    laurel: 'Research Recognition',
  },
  {
    id: 'registered-design',
    title: 'Registered Design',
    org: 'Government of India',
    detail: 'Garbage-collector product design from a faculty-supervised class project; Registration No. 397299-001.',
    laurel: 'Intellectual Property',
  },
];

export type Certification = { issuer: string; name: string; link: string };

// No certifications are listed in the supplied resume, so this array is intentionally empty.
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Listed in the resume',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'Assembly', mono: 'As' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Website development & productivity',
    skills: [
      { name: 'WordPress', mono: 'Wp' },
      { name: 'Microsoft Office', mono: 'Mo' },
    ],
  },
  {
    id: 'ai-workflows',
    title: 'AI-Assisted Workflows',
    subtitle: 'Prompting and working with AI tools',
    skills: [
      { name: 'ChatGPT Prompt Engineering', mono: 'Ai' },
    ],
  },
  {
    id: 'academic-focus',
    title: 'Marketing & Career Focus',
    subtitle: 'PGDM focus and current content work',
    skills: [
      { name: 'Product Marketing', mono: 'Pm', note: 'Career focus' },
      { name: 'Growth Strategy', mono: 'Gs', note: 'Career focus' },
      { name: 'Marketing Major', mono: 'Mk' },
      { name: 'Business Analytics Minor', mono: 'Ba' },
      { name: 'Consumer Psychology', mono: 'Cp', note: 'Content series' },
      { name: 'Content Strategy', mono: 'Cs', note: 'Portfolio work' },
    ],
  },
];

/** Resume-grounded cross-references displayed for each skill card. */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Programming Languages section of the resume'],
  Java: ['Programming Languages section of the resume'],
  Assembly: ['Programming Languages section of the resume'],
  WordPress: ['30+ doctor portfolio websites', 'Two client websites built and deployed'],
  'Microsoft Office': ['Tools section of the resume'],
  'ChatGPT Prompt Engineering': ['AI-Assisted Workflows section of the resume'],
  'Product Marketing': ['JAGSoM PGDM focus'],
  'Growth Strategy': ['JAGSoM PGDM focus'],
  'Marketing Major': ['JAGSoM PGDM specialization'],
  'Business Analytics Minor': ['JAGSoM PGDM specialization'],
  'Consumer Psychology': ['Anatomy of Marketing'],
  'Content Strategy': ['Anatomy of Marketing', 'Ground Zero'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Engineering Foundation',
    period: 'August 2020 – November 2024',
    synopsis: 'A Computer Science & Engineering degree at JKLU, complemented by research and product design.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Completed a Bachelor of Technology in Computer Science & Engineering at J.K. Lakshmipat University with a CGPA of 7.19/10.',
        tags: ['B.Tech', 'Computer Science & Engineering', 'CGPA 7.19/10'],
        runtime: 'Aug 2020 – Nov 2024',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Researcher',
        description: 'Co-authored research on EV adoption in smart cities and green-credit incentives for EV charging; both papers received Best Paper Awards at HEET 2023 in Osaka, Japan.',
        tags: ['Research', 'Game Theory', 'HEET 2023'],
        runtime: '2023 · Osaka, Japan',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Product Designer',
        description: 'Contributed to a faculty-supervised garbage-collector product design registered under the Designs Act, 2000.',
        tags: ['Product Design', 'Registered Design', '397299-001'],
        runtime: 'Faculty-supervised class project',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Building for Clients',
    period: 'June 2022 – June 2024',
    synopsis: 'Two web-development internships focused on independently delivering WordPress websites for real clients.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The First Clients',
        description: 'Built and deployed two WordPress websites end-to-end for a medical practitioner and Swat Labs at Sanjeevani Tech Solutions.',
        tags: ['WordPress', 'Two Websites', 'Client Delivery'],
        runtime: 'Jun 2022 – Aug 2022',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Healthcare Portfolio Project',
        description: 'Designed and built 30+ doctor portfolio and profile websites at Sanjeevani Biotech Exim, and proposed a patient portal concept to the Health Ministry.',
        tags: ['30+ Websites', 'Healthcare', 'WordPress'],
        runtime: 'Jan 2024 – Jun 2024',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Management Pivot',
    period: 'July 2026 – 2028 (Expected)',
    synopsis: 'Pursuing a PGDM in Growth & Product Marketing at JAGSoM, with Marketing as the major and Business Analytics as the minor.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Product-Marketing Chapter',
        description: 'Joined Jagdish Sheth School of Management (JAGSoM) for a Post Graduate Diploma in Management focused on Growth & Product Marketing.',
        tags: ['PGDM', 'Growth & Product Marketing'],
        runtime: 'Jul 2026 – 2028 (Expected)',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Marketing Meets Analytics',
        description: 'Marketing major with a Business Analytics minor, building on a Computer Science & Engineering foundation.',
        tags: ['Marketing Major', 'Business Analytics Minor', 'Technology Background'],
        runtime: 'JAGSoM · Bangalore',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Content Lab',
    period: '2026 – Present',
    synopsis: 'Building marketing and editorial storytelling projects around consumer psychology, brand decisions, and news headlines.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Anatomy of Marketing',
        description: 'An episode-based series translating brand strategy, pricing, and consumer psychology into clear real-world examples.',
        tags: ['Consumer Psychology', 'Brand Strategy', 'Marketing Content'],
        runtime: '2026 – Present',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Ground Zero',
        description: 'A news-focused Instagram project covering war-related developments and border tensions through headline-led social content.',
        tags: ['News Content', 'Headline Writing', 'Editorial Storytelling'],
        runtime: '2026 – Present',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current program', title: 'PGDM at JAGSoM', detail: 'Growth & Product Marketing · 2026–2028 expected', palette: violet },
  { label: 'Primary career focus', title: 'Product Marketing', detail: 'Combining technology context with customer and market understanding', palette: crimson },
  { label: 'Strategy focus', title: 'Growth Marketing & Strategy', detail: 'Marketing major · Business Analytics minor', palette: ocean },
  { label: 'Marketing series', title: 'Anatomy of Marketing', detail: 'Consumer psychology and brand decisions explained through episodes', palette: jade },
  { label: 'Editorial project', title: 'Ground Zero', detail: 'Headline-led news content for social media', palette: crimson },
  { label: 'Research recognition', title: 'Two Best Paper Awards', detail: 'HEET 2023 · Osaka, Japan', palette: amber },
  { label: 'Intellectual property', title: 'Registered Design', detail: 'Garbage Collector · Reg. No. 397299-001', palette: violet },
  { label: 'Client delivery', title: '30+ Doctor Websites', detail: 'Designed and built on WordPress', palette: jade },
  { label: 'Early web development', title: 'Two Client Websites', detail: 'Built and deployed independently end-to-end', palette: ocean },
  { label: 'Target companies & sectors', title: 'Tech + FMCG', detail: 'Amazon · Microsoft · Google · consumer brands', palette: amber },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'PGDM · Product & Growth Marketing',
    lines: ['Jagdish Sheth School of Management (JAGSoM), Bangalore', 'July 2026 – 2028 (Expected)'],
    chips: ['Marketing Major', 'Business Analytics Minor'],
  },
  {
    kicker: 'Foundation',
    title: 'Computer Science × Business',
    lines: ['B.Tech · Computer Science & Engineering · JKLU', 'CGPA 7.19/10 · August 2020 – November 2024'],
    chips: ['Python', 'Java', 'Assembly'],
  },
  {
    kicker: 'Client work',
    title: 'Websites Built for Real Users',
    lines: ['30+ doctor portfolio and profile websites on WordPress', 'Two additional client websites built and deployed end-to-end'],
    chips: ['WordPress', 'Web Development'],
  },
  {
    kicker: 'Research',
    title: 'Two Best Paper Awards',
    lines: ['EV adoption in smart cities', 'Green-credit incentives for EV charging', 'HEET 2023 · Osaka, Japan'],
  },
  {
    kicker: 'Content & strategy',
    title: 'Marketing Beyond the Classroom',
    lines: ['Anatomy of Marketing — consumer psychology and brand breakdowns', 'Ground Zero — headline-led news content'],
    chips: ['Consumer Psychology', 'Editorial Storytelling'],
  },
  {
    kicker: 'Design recognition',
    title: 'Registered Product Design',
    lines: ['Garbage Collector · Registration No. 397299-001', 'Faculty-supervised project registered under the Designs Act, 2000'],
  },
  {
    kicker: 'Current focus',
    title: 'Marketing Meets Analytics',
    lines: ['Product Marketing · Growth Strategy', 'Marketing major · Business Analytics minor', 'Long-term ambition: build a business after gaining professional experience'],
  },
];

export type ProfileId = 'adit' | 'recruiter' | 'marketer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'adit',
    name: 'Adit',
    blurb: 'The full story, in order',
    color: '#b98bff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'marketer',
    name: 'Marketer',
    blurb: 'Growth, product marketing & analytics first',
    color: '#46e3a8',
    order: ['about', 'picks', 'journey', 'originals', 'skills', 'moments', 'story'],
  },
  {
    id: 'creative',
    name: 'Storyteller',
    blurb: 'The journey and highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education & experience', palette: violet },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Chapters · ${seasons.reduce((n, season) => n + season.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: { nav: 'Projects', card: 'Featured Work', meta: `${projects.length} Featured Works`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: `${topPicks.length} Highlights from my journey`, palette: jade },
  skills: { nav: 'Skills', card: 'Skills & Focus', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Recognition', card: 'Awards & IP', meta: `${achievements.length} Highlights · HEET 2023 & registered design`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View & download', palette: violet },
};
