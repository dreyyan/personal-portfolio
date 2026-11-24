import type { ReactNode } from "react";
import ExperienceCard from "./components/ExperienceCard";
import { Icon, type IconName } from "./components/Icons";
import { Button, Tag } from "./components/ui";
import { site } from "./data/site";

const contacts: [IconName, string, string][] = [
  ["email", site.email, `mailto:${site.email}`],
  ["github", "github.com/dreyyan", site.github],
  ["linkedin", "linkedin.com/in/dreyyan", site.linkedin],
];

const interests = ["Machine Learning & Artificial Intelligence", "Software & Systems Engineering", "Cloud & Distributed Systems"];

const courses = [
  "Data Structures & Algorithms",
  "Algorithms & Complexity",
  "Object-Oriented Programming",
  "Software Engineering",
  "Systems Analysis & Design",
  "Web Design & Development",
  "Information Management (Database Systems)",
  "Human-Computer Interaction",
];

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"] },
  { category: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "SQLAlchemy", "Prisma", "Pandas"] },
  { category: "Tools & Platforms", items: ["AWS", "PostgreSQL", "MongoDB", "Git", "GitHub", "Vitest", "Playwright"] },
];

const projects = [
  {
    title: "SymptoMatik-AI",
    category: "AI Diagnostic Assistant",
    repo: "symptomatik-ai",
    tags: ["React", "FastAPI", "Python", "Machine Learning", "Tailwind CSS"],
    points: [
      "Developed an AI-assisted application that processes user-reported symptoms and ranks potential medical conditions.",
      "Integrated machine learning models with structured medical information and a web-based interface for presenting predictions.",
    ],
  },
  {
    title: "ZenDB",
    category: "PostgreSQL ORM Console",
    repo: "zen-db",
    tags: ["Python", "SQLAlchemy", "Alembic", "PostgreSQL", "Pandas"],
    points: [
      "Developed an interactive database management console using SQLAlchemy for schema creation, querying, and data manipulation.",
      "Implemented guided database operations, data import/export, and support for custom SQL execution.",
    ],
  },
  {
    title: "PaviaOne",
    category: "School Management System",
    repo: "pavia-one",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    points: [
      "Developed a full-stack academic management platform integrating enrollment, grading, attendance, and student records.",
      "Designed integrated application workflows for managing and retrieving academic and administrative information.",
      "Centralized academic and administrative processes through an integrated platform.",
    ],
  },
  {
    title: "SmartPOS",
    category: "POS & Business Management System",
    repo: "smart-pos",
    tags: ["React", "Express.js", "PostgreSQL", "Prisma"],
    points: [
      "Built a full-stack point-of-sale and business management system for sales processing, inventory management, order tracking, and transaction recording.",
      "Implemented an integrated dashboard for staff administration and day-to-day business operations.",
    ],
  },
];

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="grid gap-4 border-t border-line py-12 lg:grid-cols-[14rem_1fr] lg:gap-12">
    <h2 className="eyebrow pt-1">{title}</h2>
    <div>{children}</div>
  </section>
);

const School = ({ name, place, degree, when, note }: { name: string; place: string; degree: string; when: string; note?: ReactNode }) => (
  <div>
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-lg">{name}</h3>
      <p className="font-mono text-xs text-faint">{when}</p>
    </div>
    <p className="mt-0.5 text-sm text-accent">{degree}</p>
    <p className="mt-1 text-sm text-muted">{place}</p>
    {note && <p className="mt-2 text-sm text-ink">{note}</p>}
  </div>
);

const Resume = () => (
  <div className="container-page pb-24 pt-14 sm:pt-20 lg:pt-24">
    <header className="flex flex-col justify-between gap-10 pb-14 lg:flex-row lg:items-end">
      <div>
        <p className="eyebrow">Resume</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{site.fullName}</h1>
        <p className="mt-2 text-lg text-accent">{site.role}</p>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">
          Computer Science student at Roosevelt University in Chicago, building full-stack and machine-learning applications from initial requirements to working software.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:items-end">
        <ul className="space-y-2.5 lg:text-right">
          {contacts.map(([icon, label, href]) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-2.5 text-sm text-muted transition hover:text-accent lg:flex-row-reverse"
              >
                <Icon name={icon} />
                {label}
              </a>
            </li>
          ))}
          <li className="text-sm text-faint">{site.location}</li>
        </ul>
        <Button to={site.resumePdf} download>
          <Icon name="download" /> Download PDF
        </Button>
      </div>
    </header>

    <Block title="Research interests">
      <ul className="flex flex-wrap gap-2">
        {interests.map(item => (
          <li key={item} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm text-accent">{item}</li>
        ))}
      </ul>
    </Block>

    <Block title="Education">
      <div className="space-y-8">
        <School name="Roosevelt University" place="Chicago, IL" degree="Bachelor of Science in Computer Science" when="Expected May 2028" />
        <School
          name="West Visayas State University"
          place="Iloilo, Philippines"
          degree="Bachelor of Science in Computer Science (Undergraduate Studies)"
          when="2024 – 2026"
          note={<>Reported U.S. GPA equivalent: <strong className="font-semibold text-accent">3.91 / 4.00</strong></>}
        />
      </div>
      <p className="mt-8 text-sm text-muted">Relevant coursework</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {courses.map(course => (
          <li key={course} className="rounded-full border border-line px-3 py-1 text-sm text-ink">{course}</li>
        ))}
      </ul>
    </Block>

    <Block title="Experience">
      <div className="-mt-8 [&>article:first-child]:border-t-0">
        <ExperienceCard
          title="Web Developer (Project-Based)"
          category="Happy Pill Bar & Resto"
          meta="Oct 2025 – Present"
          tags={["React", "Tailwind CSS"]}
          description={[
            "Developed and deployed a responsive promotional website for Happy Pill Bar & Resto using React and Tailwind CSS.",
            "Collaborated with the client to implement requested features and improvements.",
            "Currently maintaining the website through updates, enhancements, and bug fixes.",
          ]}
        />
      </div>
    </Block>

    <Block title="Selected projects">
      <div className="-mt-8 [&>article:first-child]:border-t-0">
        {projects.map(project => (
          <ExperienceCard
            key={project.title}
            title={project.title}
            category={project.category}
            tags={project.tags}
            description={project.points}
            meta={
              <a href={`${site.github}/${project.repo}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-accent">
                <Icon name="github" className="size-3.5" /> {project.repo}
              </a>
            }
          />
        ))}
      </div>
    </Block>

    <Block title="Technical skills">
      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map(group => (
          <div key={group.category}>
            <h3 className="text-base">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map(skill => <Tag key={skill}>{skill}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </Block>

    <Block title="Honors">
      <ul className="space-y-4">
        <li className="flex flex-wrap items-baseline justify-between gap-2">
          <span><strong className="font-semibold">Gold Medal</strong> <span className="text-muted">for Academic Excellence, West Visayas State University</span></span>
          <span className="font-mono text-xs text-faint">2024, 2025, 2026</span>
        </li>
        <li className="flex flex-wrap items-baseline justify-between gap-2">
          <span>Graduated <strong className="font-semibold">“With High Honors”</strong><span className="text-muted">, Senior High School</span></span>
          <span className="font-mono text-xs text-faint">2023</span>
        </li>
      </ul>
    </Block>
  </div>
);

export default Resume;
