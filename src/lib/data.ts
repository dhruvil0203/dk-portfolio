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
  backend: ["Node.js", "Express.js", "REST API", "GraphQL"],
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
    desc: "Node.js, Express, REST, GraphQL",
  },
  {
    icon: "🗄️",
    title: "Database",
    desc: "MongoDB, MySQL, PostgreSQL,Oracle",
  },
  {
    icon: "🤖",
    title: "AI & APIs",
    desc: "Gemini, OpenAI, YouTube API,X API,TextBee API",
  },
];

export const projects = [
  {
    id: 1,
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
  {
    id: 2,
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
    id: 3,
    name: "Bank Transaction System",
    icon: "🏦",
    desc: "Production-grade banking backend with secure authentication, account management, and transaction handling built on the MERN stack.",
    features: [
      "JWT & Bcrypt-secured user authentication",
      "Full account management and transaction API",
      "Automated email notifications via Nodemailer",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Nodemailer"],
    github: "https://github.com/dhruvil0203/bank-transaction-system",
    live: null,
    stars: 0,
  },
  {
    id: 4,
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
    live: null,
    stars: 1,
  },
  {
    id: 5,
    name: "MindSpark AI Chatbot",
    icon: "🧠",
    desc: "AI-powered personal assistant designed for students — built with Gemini API for academic help, code assistance, and career counseling.",
    features: [
      "Gemini-powered intelligent chat with context memory",
      "React frontend with Framer Motion animations",
      "JWT-based secure auth with MongoDB backend",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Gemini API", "JWT", "Framer Motion"],
    github: "https://github.com/dhruvil0203/MindSpark_AI_Chatbot",
    live: null,
    stars: 2,
  },
  {
    id: 6,
    name: "Todo App",
    icon: "✅",
    desc: "Clean, responsive task management app built with React and Vite featuring dark mode support and high-performance rendering.",
    features: [
      "Add, edit, and delete tasks with instant feedback",
      "Dark mode and clean task filtering UI",
      "Built with Vite for blazing-fast performance",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/dhruvil0203/todo-app",
    live: null,
    stars: 1,
  },
];
