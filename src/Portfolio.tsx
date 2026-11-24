import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import OtherProjectCard from "./components/OtherProjectCard";
import { ContactBand, SectionHeader } from "./components/ui";
import { clientProject, featuredProjects, otherProjectsData } from "./data/projectsData";

/** "Python / AI / Backend" -> "Python" */
const shortLabel = (category: string) => category.split(" / ")[0];

/** "MM/DD/YYYY" -> sortable "YYYYMMDD"; undated projects sort last. */
const sortKey = (date: string) => (date ? date.slice(6) + date.slice(0, 2) + date.slice(3, 5) : "");

const archive = [...otherProjectsData].sort((a, b) => sortKey(b.date).localeCompare(sortKey(a.date)));
const filters = ["All", ...new Set(otherProjectsData.map(p => shortLabel(p.category)))];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? archive : archive.filter(p => shortLabel(p.category) === filter);

  return (
    <>
      <section className="container-page pb-16 pt-14 sm:pt-20 lg:pt-24">
        <p className="eyebrow">Work</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">Projects with purpose.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Products, experiments and tools built around useful interaction and dependable implementation.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featuredProjects.map(project => <ProjectCard key={project.title} {...project} />)}
        </div>
      </section>

      <section className="container-page pb-24">
        <SectionHeader eyebrow="Client work" title="Built for a real business" />
        <div className="grid items-start gap-x-8 gap-y-10 md:grid-cols-2">
          <ProjectCard {...clientProject} />
          <div className="rounded-2xl border border-line bg-surface p-7 md:mt-0">
            <p className="font-mono text-xs text-faint">Oct 2025 – Present · Project-based</p>
            <h3 className="mt-2 text-lg">Web Developer</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
              <li>Developed and deployed the restaurant's responsive promotional site with React and Tailwind CSS.</li>
              <li>Worked directly with the client to implement requested features and improvements.</li>
              <li>Maintaining the site through ongoing updates, enhancements and bug fixes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <SectionHeader eyebrow="Archive" title="Everything else">
          Smaller builds, coursework and experiments across web, mobile, Python, Haskell, Java, C++ and C#.
        </SectionHeader>

        <div role="group" aria-label="Filter by language" className="mb-6 flex flex-wrap gap-2">
          {filters.map(item => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                filter === item ? "border-accent/60 bg-accent/10 text-accent" : "border-line text-muted hover:border-ink/30 hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <ul className="border-b border-line">
          {shown.map(project => <OtherProjectCard key={project.title} {...project} />)}
        </ul>
      </section>

      <ContactBand />
    </>
  );
};

export default Portfolio;
