// ─── Portfolio Data ─────────────────────────────────────────────────────────
// Update links, resume URL, and any details here.

export const personal = {
  name: 'Muskan Kumari',
  role: 'Full-Stack Developer | MERN Stack',
  tagline: 'Building secure, production-grade web apps',
  summary:
    'Computer Science undergraduate with hands-on experience building full-stack MERN applications, RESTful APIs, and secure authentication systems. Proficient in JavaScript, Java, Python, and SQL, with a track record of delivering production-grade features across frontend and backend during real-world internships.',
  email: 'muskankumari7371039@gmail.com',
  phone: '+91-7371039505',
  location: 'Greater Noida, India',
  resumeUrl: '/Muskan_Kumari_Resume.pdf', // Place your PDF in client/public/
  linkedin: 'https://www.linkedin.com/in/muskan-kumari773/',
  github: 'https://github.com/muskan-773',
  leetcode: 'https://leetcode.com/u/Muskan_Kumari01/',
};

export const education = [
  {
    id: 1,
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Galgotias University',
    location: 'Greater Noida, India',
    duration: '2023 – 2027',
    cgpa: '8.59',
    description: 'Focused on data structures, algorithms, web development, and software engineering principles.',
  },
  {
    id: 2,
    degree: 'Class X & XII — CBSE',
    institution: 'Arya VidyaPith',
    location: 'Motihari, Bihar',
    duration: '2021 – 2023',
    cgpa: null,
    description: 'Class X: 73% · Class XII: 69%',
  },
];

export const skills = [
  {
    category: 'Languages',
    icon: '💻',
    items: ['JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & Database',
    icon: '🛠️',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: '⚙️',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'],
  },
];

export const experience = [
  {
    id: 1,
    company: 'Ideactra Technologies Pvt. Ltd.',
    role: 'Software Engineering Intern',
    type: 'Remote',
    duration: 'July 2026 – August 2026',
    points: [
      'Developed and integrated Company Page functionality using React and FastAPI; implemented Analytics features including profile analytics and profile-view functionality.',
      'Integrated REST APIs across frontend–backend architecture, created technical documentation, and collaborated via Git/GitHub with pull requests, debugging, and code reviews.',
    ],
  },
  {
    id: 2,
    company: 'EduSkills Foundation',
    role: 'Java Full Stack Virtual Intern',
    type: 'Remote',
    duration: 'July 2025 – September 2025',
    points: [
      'Engineered RESTful APIs using Java and Spring Boot, enabling efficient communication between frontend and backend directly applicable to Node.js/Express.js API development.',
      'Implemented MySQL database schemas for data persistence, translating seamlessly to MongoDB schema design, and tested API endpoints using Postman.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'FoodReels',
    year: '2025',
    description:
      'A production-grade full-stack MERN application enabling food partners to upload and manage short-form video content with a responsive user interface. Features JWT-based authentication, secure data handling, and optimized backend APIs for faster data retrieval.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
    github: 'https://github.com/muskan-773/FoodReels',
    live: '',
    featured: true,
  },
  {
    id: 2,
    title: 'EquityEdge',
    year: '2026',
    description:
      'A web-based finance dashboard with real-time data visualization using third-party API integrations to fetch and display financial metrics. Fully responsive UI built in JavaScript, HTML, and CSS ensuring cross-device compatibility.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    github: 'https://github.com/muskan-773/EquityEdge',
    live: '',
    featured: true,
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    icon: '☁️',
  },
  {
    id: 2,
    title: 'Getting Started with AWS IoT',
    issuer: 'AWS Training & Certification',
    date: 'May 2026',
    icon: '🌐',
  },
  {
    id: 3,
    title: 'JPMorgan Chase Software Engineering',
    issuer: 'Forage',
    date: '',
    icon: '🏦',
  },
  {
    id: 4,
    title: 'Tata GenAI Powered Data Analytics',
    issuer: 'Forage',
    date: '',
    icon: '📊',
  },
  {
    id: 5,
    title: 'Deloitte Australia Technology Job Simulation',
    issuer: 'Forage',
    date: '',
    icon: '💼',
  },
  {
    id: 6,
    title: 'Nestlé E-learning 2026 — Resilience',
    issuer: 'Nesternship',
    date: '2026',
    icon: '🌱',
  },
];

export const extracurriculars = [
  {
    id: 1,
    title: 'CodeAstraa Hackathon',
    event: 'ICCSAI 2025',
    role: 'Participant',
    description: 'Participated in CodeAstraa Hackathon at ICCSAI 2025, collaborating on a technical problem statement under time constraints.',
    icon: '🚀',
  },
];

export const navLinks = [
  { label: 'About',          href: 'about'          },
  { label: 'Skills',         href: 'skills'         },
  { label: 'Experience',     href: 'experience'     },
  { label: 'Projects',       href: 'projects'       },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact',        href: 'contact'        },
];
