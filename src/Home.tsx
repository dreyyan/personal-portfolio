import { Link } from "react-router-dom";
import ProjectCard from "./components/ProjectCard";
import { SocialLinks } from "./components/Footer";
import { Button, ContactBand, SectionHeader } from "./components/ui";
import { DotField, FloatChip, Magnetic, Reveal, RotatingPhrase, SplitWords, Spotlight, Tilt } from "./components/fx";
import { featuredProjects } from "./data/projectsData";

const strengths = [
  ["Full-stack delivery", "React and TypeScript interfaces backed by Node, Express and FastAPI services, with PostgreSQL and Prisma underneath."],
  ["Machine learning in practice", "Training models and wiring them into usable products, like SymptoMatik-AI's symptom-ranking assistant."],
  ["Systems thinking", "Designing data models and workflows that hold up, from school records in PaviaOne to inventory in SmartPOS."],
];

const stack = ["Python", "TypeScript", "JavaScript", "C++", "SQL", "React", "Next.js", "Node.js", "Express.js", "FastAPI", "SQLAlchemy", "Prisma", "Pandas", "AWS", "PostgreSQL", "MongoDB", "Git", "Vitest", "Playwright"];

const Hero = () => (
  <section className="relative isolate">
    <DotField className="absolute inset-0 -z-10 h-full w-full mask-[radial-gradient(ellipse_75%_70%_at_60%_45%,black_30%,transparent_80%)]" />

    <div className="container-page grid items-center gap-14 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pb-24 lg:pt-24">
      <div>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to internships and collaborations
          </p>
        </Reveal>

        <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          <span className="sr-only">I build thoughtful digital products that solve real problems.</span>
          <span aria-hidden="true">
            <SplitWords text="I build thoughtful digital products that" start={150} />
            <RotatingPhrase
              className="text-accent"
              delay={150 + 6 * 70}
              phrases={["solve real problems.", "feel effortless.", "people enjoy using."]}
            />
          </span>
        </h1>

        <Reveal delay={750}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm Adrian Tan, a Computer Science student at Roosevelt University in Chicago and a full-stack developer. I take ideas from the first sketch to a polished, working release.
          </p>
        </Reveal>

        <Reveal delay={900}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic><Button to="/portfolio">See my work</Button></Magnetic>
            <Magnetic><Button to="/resume" variant="ghost">View resume</Button></Magnetic>
            <SocialLinks className="ml-1" />
          </div>
          <p className="mt-10 hidden font-mono text-xs text-faint lg:block">↳ psst, click anywhere on the dots</p>
        </Reveal>
      </div>

      <Reveal delay={200} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
        <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-accent/12 blur-3xl" />
        <Tilt max={12} className="relative rounded-3xl">
          <div className="unveil ring-border rounded-3xl p-[1.5px]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-surface">
              <img
                src="/profile-picture.webp"
                width={800}
                height={800}
                alt="Portrait of Adrian Tan"
                className="aspect-4/5 w-full object-cover object-[50%_20%]"
              />
              <div className="tilt-glare" />
            </div>
          </div>

          <FloatChip className="-left-3 top-8 sm:-left-8" delay={0} enter={1300}>
            <span className="text-[#61DAFB]">⚛</span> React
          </FloatChip>
          <FloatChip className="-right-3 top-1/3 sm:-right-8" delay={1500} enter={1450}>
            <span className="text-[#70B7F0]">TS</span> TypeScript
          </FloatChip>
          <FloatChip className="-left-3 bottom-24 sm:-left-10" delay={3000} enter={1600}>
            <span className="text-[#FFD43B]">py</span> Python
          </FloatChip>
          <FloatChip className="-right-2 bottom-6 sm:-right-6" delay={800} enter={1750}>
            <span className="text-accent">$</span> npm run build <span className="text-accent">✓</span>
          </FloatChip>
        </Tilt>
      </Reveal>
    </div>
  </section>
);

const StackMarquee = () => (
  <Reveal delay={1100}>
    <div aria-label="Technologies I work with" className="marquee overflow-hidden border-y border-line py-5 mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track flex w-max">
        {[...stack, ...stack].map((item, i) => (
          <span key={i} aria-hidden={i >= stack.length} className="flex items-center font-mono text-sm text-muted">
            <span className="px-6">{item}</span>
            <span className="text-accent/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

const Home = () => (
  <>
    <Hero />
    <StackMarquee />

    <section className="container-page py-16 lg:py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Selected work"
          title="Recent projects"
          action={<Link to="/portfolio" className="text-sm font-medium text-muted transition hover:text-accent">All projects →</Link>}
        />
      </Reveal>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 150}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-page py-16 lg:py-20">
      <Reveal>
        <SectionHeader eyebrow="What I bring" title="How I help a project" />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {strengths.map(([title, copy], i) => (
          <Reveal key={title} delay={i * 120}>
            <Spotlight className="group h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
              <p className="font-mono text-5xl font-medium text-ink/6 transition duration-500 group-hover:text-accent/25">0{i + 1}</p>
              <h3 className="mt-6 text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>

    <Reveal>
      <ContactBand />
    </Reveal>
  </>
);

export default Home;
