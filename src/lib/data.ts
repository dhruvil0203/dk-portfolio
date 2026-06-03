export const profile = {
  name: "Dhruvil Mistry",
  role: "Full Stack Developer",
  tagline: "MERN Stack & AI Integration",
  location: "Nadiad, Gujarat",
  email: "dkmistry0203@gmail.com",
  phone: "+91 8511017102",
  github: "https://github.com/dhruvil0203",
  linkedin: "https://www.linkedin.com/in/dhruvil-mistry-aba47b259/",
  bio: "I'm a passionate Full Stack Developer skilled in React, Node.js, MongoDB, and modern web technologies. I specialize in building responsive, functional applications — from published NPM packages to AI-powered chatbots. Currently pursuing my MCA while actively building real-world solutions.",
  bio2: "I believe great software bridges the gap between elegant design and robust functionality. Whether it's a RESTful API, an AI integration, or a crisp React UI, my goal is to build things that actually work for people.",
};

export const stats = [
  { value: "5+", label: "Projects" },
  { value: "1+", label: "Yr Exp" },
  { value: "2", label: "NPM Stars" },
];

export const education = [
  {
    degree: "Master of Computer Application",
    school: "Sardar Vallabhbhai Patel Institute of Technology",
    period: "2024 – Present",
    cgpa: "8.41",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Dharamsingh Desai University",
    period: "2021 – 2024",
    cgpa: "7.1",
    icon: "📚",
  },
];

export const experience = [
  {
    role: "MERN Stack Developer Intern",
    company: "Excelsior Technology",
    location: "Ahmedabad",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Building full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Developing and integrating RESTful APIs for client-facing products",
      "Collaborating with the team on production-grade features and code reviews",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Skynet Global Systems",
    location: "Remote",
    period: "Dec 2023 – Mar 2024",
    current: false,
    bullets: [
      "Developed responsive React UI components for OTA platform used by real users",
      "Built booking flows and authentication screens improving usability",
      "Integrated REST APIs to enable real-time travel data display",
    ],
  },
];

export const skills = {
  frontend: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js", "Tanstack Query", "GSAP", "Redux", "Zustand",],
  backend: ["Node.js", "Express.js", "Python", "REST API", "GraphQL"],
  database: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
  languages: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render", "Prisma", "Drizzle ORM", "Neon"],
};

export const skillCards = [
  {
    icon: "⚛️",
    title: "Frontend",
    desc: "React, Next.js, Tailwind, GSAP",
  },
  {
    icon: "⚙️",
    title: "Backend",
    desc: "Node.js, Express, Python, REST, GraphQL",
  },
  {
    icon: "🗄️",
    title: "Database",
    desc: "MongoDB, MySQL, PostgreSQL, Oracle, Vector DB",
  },
  {
    icon: "🤖",
    title: "AI & APIs",
    desc: "Gemini, OpenAI, YouTube API,X API,TextBee API",
  },
];

// Featured projects shown on the home page (first 2 in "Featured Projects" section)
export const featuredProjects = [
  {
    id: 1,
    name: "Filogram",
    icon: "📁",
    desc: "Use Telegram as your personal cloud — upload, store, and retrieve files via a blazing-fast REST API. Zero cost, zero hassle.",
    features: [
      "Upload & retrieve files via clean REST API endpoints",
      "Telegram Bot API integration for zero-cost cloud storage",
      "MongoDB-backed file metadata with Mongoose ODM",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Telegram Bot API", "Multer", "NPM"],
    github: "https://github.com/dhruvil0203/filogram",
    live: "https://www.npmjs.com/package/filogram",
    stars: 0,
  },
  {
    id: 2,
    name: "SMS-Dispatch NPM Package",
    icon: "📦",
    desc: "Developer-friendly SMS gateway NPM package for Node.js that turns Android devices into zero-cost SMS gateways with 50+ pre-built templates.",
    features: [
      "50+ customizable templates for OTPs, notifications & marketing",
      "Simple API for individual and bulk SMS delivery",
      "Published on NPM with comprehensive documentation",
    ],
    tech: ["Node.js", "JavaScript", "NPM", "TextBee API"],
    github: "https://github.com/dhruvil0203/sms-gateway",
    live: "https://www.npmjs.com/package/sms-dispatch",
    stars: 2,
  },
];

// Project shown in the "More Projects" section on the home page
export const moreProjects = [
  {
    id: 3,
    name: "Nudge",
    icon: "🔔",
    desc: "A React Native mobile app that lets you save links from any app and get nudged to read or watch them later with smart reminders.",
    features: [
      "Save links via native Share Sheet with auto Open Graph metadata",
      "Smart reminders with local push notifications & snooze",
      "Fully offline with SQLite — no cloud, complete privacy",
    ],
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Push Notifications"],
    github: "https://github.com/dhruvil0203/nudge-app",
    live: null,
    stars: 0,
  },
];

// All projects shown on the /work page
export const projects = [
  ...featuredProjects,
  ...moreProjects,
  {
    id: 9,
    name: "SVIT RAG Demo",
    icon: "🔍",
    desc: "A Retrieval-Augmented Generation (RAG) demo — answers questions from custom documents using vector search and LLM generation.",
    features: [
      "Document ingestion with vector embeddings for semantic search",
      "LLM-powered answer generation grounded in retrieved context",
      "End-to-end RAG pipeline with a custom knowledge base",
    ],
    tech: ["Python", "LangChain", "Vector DB", "LLM", "RAG"],
    github: "https://github.com/dhruvil0203/RAG_Demo",
    live: null,
    stars: 0,
  },
  {
    id: 4,
    name: "YouTube AI Notifier",
    icon: "📺",
    desc: "Automated YouTube channel monitor that detects new uploads every 5 minutes and sends AI-powered email summaries using Google Gemini.",
    features: [
      "Cron-based channel polling with duplicate prevention",
      "Gemini AI-generated video summaries in emails",
      "Scalable multi-channel monitoring, 24/7 operation",
    ],
    tech: ["Node.js", "Gemini API", "YouTube Data API", "Nodemailer", "Cron"],
    github: "https://github.com/dhruvil0203/youtube-ai-notifier",
    live: null,
    stars: 0,
  },
  {
    id: 5,
    name: "NoteFlow",
    icon: "📝",
    desc: "A full-stack notes app built with Next.js and MongoDB, featuring a REST API for creating, reading, updating, and deleting notes.",
    features: [
      "Full CRUD operations via a custom REST API",
      "MongoDB-backed persistent storage",
      "Clean Next.js frontend with seamless API integration",
    ],
    tech: ["Next.js", "MongoDB", "REST API", "JavaScript"],
    github: "https://github.com/dhruvil0203/next-notes-app",
    live: "https://noteflow.dhruvilmistry.in",
    stars: 1,
  },
];
