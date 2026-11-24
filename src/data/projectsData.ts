export interface FeaturedProject {
  /** Screenshot in /public. Projects without one get a generated cover. */
  image?: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  previewLink?: string;
  codeLink: string;
}

/** The selected technical projects from the resume, in the same order. */
export const featuredProjects: FeaturedProject[] = [
  {
    image: "card-symptomatik-ai.webp",
    title: "SymptoMatik-AI",
    category: "AI diagnostic assistant",
    description: "Processes user-reported symptoms and ranks potential medical conditions, pairing machine-learning models with structured medical information and an interactive web interface.",
    stack: ["React", "FastAPI", "Python", "Machine Learning"],
    previewLink: "https://symptomatik-ai.vercel.app",
    codeLink: "https://github.com/dreyyan/symptomatik-ai",
  },
  {
    image: "card-pavia-one.webp",
    title: "PaviaOne",
    category: "School management system",
    description: "A full-stack academic platform for Pavia National High School that brings enrollment, grading, attendance and student records into one integrated system.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    codeLink: "https://github.com/dreyyan/pavia-one",
  },
  {
    image: "card-smart-pos.webp",
    title: "SmartPOS",
    category: "POS & business management",
    description: "A point-of-sale and business management system for sales, inventory, order tracking and transactions, with a dashboard for staff administration.",
    stack: ["React", "Express.js", "PostgreSQL", "Prisma"],
    codeLink: "https://github.com/dreyyan/smart-pos",
  },
  {
    image: "card-zen-db.webp",
    title: "ZenDB",
    category: "PostgreSQL ORM console",
    description: "A guided database console built on SQLAlchemy for creating schemas, querying and editing data, importing and exporting CSV/JSON, and running custom SQL.",
    stack: ["Python", "SQLAlchemy", "Alembic", "PostgreSQL", "Pandas"],
    codeLink: "https://github.com/dreyyan/zen-db",
  },
];

/** Paid, client-facing work (Professional Experience on the resume). */
export const clientProject: FeaturedProject = {
  image: "card-happy-pill-bar-and-resto.webp",
  title: "Happy Pill Bar & Resto",
  category: "Client website",
  description: "A responsive promotional website for a bar and restaurant in Iloilo City, covering its menu, events and gallery. Built with the client and maintained since launch.",
  stack: ["React", "Tailwind CSS"],
  previewLink: "https://www.happypillbar.com/home",
  codeLink: "https://github.com/dreyyan/happy-pill",
};

/** Everything else on GitHub worth showing. Dates are MM/DD/YYYY. */
export const otherProjectsData = [
  // Web / Full-stack
  {
    category: "Web / Full-stack",
    title: "Scho",
    date: "10/24/2026",
    description: "Personal organization app for tasks, reminders, notes and saved links (in progress)",
    skills: ["Next.js", "Prisma", "PostgreSQL"]
  },
  {
    category: "Web / Full-stack",
    title: "Snippify",
    date: "10/18/2025",
    description: "Personal code snippet hub for creating, organizing and sharing code",
    skills: ["TypeScript", "React"]
  },
  {
    category: "Web / Full-stack",
    title: "Gigsta",
    date: "11/21/2025",
    description: "Lightning-fast marketplace for real freelance work",
    skills: ["PHP", "JavaScript"]
  },
  {
    category: "Web / Full-stack",
    title: "Linawa",
    date: "04/07/2025",
    description: "Online Voting & Democracy Transparency React Website",
    skills: ["React", "Hackathon Project"]
  },
  {
    category: "Web / Full-stack",
    title: "Yellow Basket",
    date: "08/31/2025",
    description: "E-commerce Website via React",
    skills: ["React", "E-commerce"]
  },
  {
    category: "Web / Full-stack",
    title: "My Historical Journey",
    date: "08/01/2025",
    description: "Website Showcasing Filipino History via React",
    skills: ["React", "Historical Website"]
  },
  {
    category: "Web / Full-stack",
    title: "SalaRate",
    date: "08/02/2025",
    description: "Employee Salary Calculator Website",
    skills: ["HTML5", "CSS3", "JavaScript"]
  },

  // Mobile
  {
    category: "Mobile / Flutter",
    title: "Soro",
    date: "04/01/2026",
    description: "Adaptive and gamified flashcard learning app",
    skills: ["Dart", "Flutter"]
  },

  // Python / Data / AI
  {
    category: "Python / AI / Backend",
    title: "HealthLink",
    date: "09/30/2025",
    description: "Gradient Boosting AI Model for Disease and Symptom Classification",
    skills: ["Python", "Machine Learning", "AI"]
  },
  {
    category: "Python / AI / Backend",
    title: "BingeMatch",
    date: "12/08/2025",
    description: "Movie Database & Recommender System via KNN Classification Model",
    skills: ["Python", "Machine Learning", "KNN Classification", "Movie Recommendation System"]
  },
  {
    category: "Python / AI / Backend",
    title: "Tasky",
    date: "08/02/2025",
    description: "NLP-based A.I. Task Assistant",
    skills: ["Python", "Natural Language Processing", "Task Management System"]
  },
  {
    category: "Python / AI / Backend",
    title: "WeLearn Student Management System",
    date: "08/10/2025",
    description: "Student Portal Management System via Python TUI",
    skills: ["Python", "Student Management System", "Text-based UI"]
  },
  {
    category: "Python / AI / Backend",
    title: "A.U.T.O.M.A.",
    date: "09/29/2025",
    description: "Advanced Utility Task-Optimized Machine Assistant",
    skills: ["Python", "Artificial Intelligence", "Voice Recognition"]
  },
  {
    category: "Python / AI / Backend",
    title: "AutoMail",
    date: "09/29/2025",
    description: "Email Automation System via Python TUI",
    skills: ["Python", "Email Automation"]
  },
  {
    category: "Python / AI / Backend",
    title: "CashGO+",
    date: "09/30/2025",
    description: "Bank Management System via Python TUI",
    skills: ["Python", "Bank Management System", "Text-based UI"]
  },
  {
    category: "Python / AI / Backend",
    title: "ViCalc",
    date: "08/02/2025",
    description: "Dynamic Text-based Virtual Calculator",
    skills: ["Python", "Virtual Calculator", "Text-based UI"]
  },
  {
    category: "Python / AI / Backend",
    title: "NumPix",
    date: "11/03/2025",
    description: "Interactive Image Manipulation Toolkit via NumPy",
    skills: ["Python", "NumPy", "Image Manipulation"]
  },
  {
    category: "Python / AI / Backend",
    title: "Tetris Clone",
    date: "11/03/2025",
    description: "Tetris Clone via NumPy",
    skills: ["Python", "NumPy", "Game Development"]
  },
  {
    category: "Python / AI / Backend",
    title: "Jack-n-Po!",
    date: "",
    description: "Rock, Paper, Scissors Game",
    skills: ["Python", "Game Development", "Text-based UI"]
  },

  // Haskell
  {
    category: "Haskell / Simulation",
    title: "Ashfall",
    date: "10/05/2026",
    description: "Post-apocalyptic robot colony simulator with resource, energy and storage systems (in progress)",
    skills: ["Haskell", "Hspec"]
  },

  // Java
  {
    category: "Java / Backend / TUI",
    title: "AcademIQ",
    date: "11/28/2025",
    description: "Comprehensive University Management System via Java OOP",
    skills: ["Java", "Object-Oriented Design", "Text-based UI", "University Management System"]
  },
  {
    category: "Java / Backend / TUI",
    title: "FizzUp!",
    date: "09/30/2025",
    description: "Offline Crypto Miner–Inspired Drink Machine Game via Java TUI",
    skills: ["Java", "Game Development", "Text-based UI"]
  },
  {
    category: "Java / Backend / TUI",
    title: "nCrypt",
    date: "08/01/2025",
    description: "Cryptic Cipher Game System via Java TUI",
    skills: ["Java", "Game Development", "Text-based UI", "Cipher Game"]
  },
  {
    category: "Java / Backend / TUI",
    title: "Systemate",
    date: "08/02/2025",
    description: "Java Library for Easy Console Development",
    skills: ["Java", "Library", "Maven"]
  },

  // C++
  {
    category: "C++ / Game / Simulation",
    title: "A.A.V.S.S.S.",
    date: "09/29/2025",
    description: "Advanced Automated Vehicular Storage & Simulation System",
    skills: ["C++", "Vehicle Management System"]
  },
  {
    category: "C++ / Game / Simulation",
    title: "I.L.G.Y.L.",
    date: "09/30/2025",
    description: "Gamified Lemonade Business Tycoon Simulation via C++ TUI",
    skills: ["C++", "Game Development", "Text-based UI", "Tycoon Game"]
  },
  {
    category: "C++ / Game / Simulation",
    title: "Exodia",
    date: "09/30/2025",
    description: "Text-based Fantasy RPG via C++ TUI",
    skills: ["C++", "RPG", "Game Development", "Text-based UI"]
  },
  {
    category: "C++ / Game / Simulation",
    title: "iLMS",
    date: "09/30/2025",
    description: "iSort Library Management System via C++ TUI",
    skills: ["C++", "Library Management System", "Text-based UI"]
  },

  // C#
  {
    category: "C# / Unity / Game Development",
    title: "Dawn's Sari-Sari Store",
    date: "08/30/2025",
    description: "Educational Math Game for Kids via Unity",
    skills: ["C#", "Game Development", "Unity"]
  }
];
