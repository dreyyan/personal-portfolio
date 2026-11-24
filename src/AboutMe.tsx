import { ContactBand, SectionHeader } from "./components/ui";

const facts = [
  ["3.91", "U.S. GPA equivalent at West Visayas State University"],
  ["3×", "Gold Medal for Academic Excellence, 2024 – 2026"],
  ["2028", "Expected BS in Computer Science, Roosevelt University"],
];

const interests = ["Machine Learning & AI", "Software & Systems Engineering", "Cloud & Distributed Systems"];

const principles = [
  ["Build with intent", "I start by getting clear on the person and the problem a product is meant to serve."],
  ["Make complexity useful", "Good technology should make a difficult task feel understandable and approachable."],
  ["Keep learning in public", "Every project is a chance to sharpen my craft and share what I discover."],
];

const AboutMe = () => (
  <>
    <section className="container-page grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:pt-24">
      <img
        src="/profile-picture.webp"
        width={800}
        height={800}
        alt="Portrait of Adrian Tan"
        className="mx-auto aspect-4/5 w-full max-w-sm rounded-3xl border border-line object-cover object-[50%_20%] lg:max-w-none"
      />
      <div>
        <p className="eyebrow">About me</p>
        <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Curious by nature. Intentional by practice.</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          <p>
            I'm Adrian Dominic Tan, a Computer Science student at Roosevelt University in Chicago. I began my degree at West Visayas State University in Iloilo, Philippines, before moving to Chicago to continue it.
          </p>
          <p>
            Technology hooked me because it can turn a simple observation into something people depend on. I enjoy turning ambiguous ideas into digital products people can actually use.
          </p>
        </div>
      </div>
    </section>

    <section className="container-page pb-20">
      <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {facts.map(([value, label]) => (
          <div key={label} className="bg-bg p-6 sm:p-7">
            <dt className="sr-only">{label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-accent">{value}</dd>
            <dd className="mt-1 text-sm text-muted">{label}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
      <img
        src="/about-craft.webp"
        width={1400}
        height={1050}
        loading="lazy"
        alt="Desk with a notebook of wireframes next to a laptop showing a dashboard"
        className="aspect-4/3 w-full rounded-3xl border border-line object-cover"
      />
      <div>
        <p className="eyebrow">How I work</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">A practical, full‑stack point of view.</h2>
        <p className="mt-5 leading-relaxed text-muted">
          I work across React, TypeScript, Node.js, FastAPI and Python, with PostgreSQL and Prisma for data. I sketch the flow first, ship a working version early, then refine it with real feedback.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          The goal is always the same: clean, maintainable work that makes the next step easier for users and for whoever touches the code after me.
        </p>
        <p className="mt-8 text-sm text-faint">Research interests</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {interests.map(item => (
            <li key={item} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm text-accent">{item}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="container-page py-20">
      <SectionHeader eyebrow="Principles" title="What guides my work" />
      <div className="grid gap-6 md:grid-cols-3">
        {principles.map(([title, copy], i) => (
          <article key={title} className="rounded-2xl border border-line bg-surface p-7">
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <h3 className="mt-6 text-lg">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
          </article>
        ))}
      </div>
    </section>

    <ContactBand />
  </>
);

export default AboutMe;
