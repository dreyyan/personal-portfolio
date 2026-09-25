import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import OtherProjectCard from "./components/OtherProjectCard";
import { otherProjectsData } from "./data/projectsData";

const projects = [
  { image: "card-symptomatik-ai.png", number: "01", title: "SymptoMatik-AI", category: "Health AI", description: "An AI-assisted workflow that helps healthcare professionals prioritize symptoms and explore possible diagnoses.", stack: ["React", "AI", "Healthcare"], previewLink: "https://symptomatik-ai.vercel.app/sign-in", codeLink: "https://github.com/dreyyan/symptomatik-ai" },
  { image: "card-happy-pill-bar-and-resto.png", number: "02", title: "Happy Pill", category: "Hospitality", description: "A lively digital home for a local restaurant, bringing its food, atmosphere, and events into one experience.", stack: ["React", "Responsive UI", "Brand web"], previewLink: "https://www.happypillbar.com/home", codeLink: "https://github.com/dreyyan/happy-pill" },
  { image: "card-snippify.png", number: "03", title: "Snippify", category: "Developer tools", description: "A focused snippet hub for creating, organizing, searching, and sharing reusable pieces of code.", stack: ["TypeScript", "Productivity", "Search"], codeLink: "https://github.com/dreyyan/snippify" },
  { image: "card-gigsta.png", number: "04", title: "Gigsta", category: "Marketplace", description: "A freelance marketplace concept designed to make hiring, discovery, and project matching feel direct and fast.", stack: ["React", "Marketplace", "UX"], codeLink: "https://github.com/dreyyan/gigsta" },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(otherProjectsData.map(project => project.category))];
  const filtered = category === "All" ? otherProjectsData : otherProjectsData.filter(project => project.category === category);

  return <main className="page-shell">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div><p className="eyebrow">Selected work</p><h1 className="mt-4 section-title">Projects with purpose.</h1><p className="mt-4 max-w-2xl text-[var(--text-secondary)]">A selection of products, experiments, and tools built around useful interaction and dependable implementation.</p></div>
      <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--text-secondary)]">4 featured projects</p>
    </div>

    <section className="mx-auto mt-14 grid max-w-[888px] gap-7 md:grid-cols-2">
      {projects.map(project => <ProjectCard key={project.title} {...project} />)}
    </section>

    <section className="mt-20 border-t border-white/10 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-5"><div><p className="eyebrow">More explorations</p><h2 className="mt-2 text-2xl font-bold">The project archive</h2></div><button className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]" onClick={() => setShowAll(!showAll)}>{showAll ? "Close archive" : "Browse archive"}</button></div>
      {showAll && <><div className="mt-7"><label className="mr-3 text-sm text-[var(--text-secondary)]" htmlFor="category">Filter by focus</label><select id="category" value={category} onChange={event => setCategory(event.target.value)} className="rounded-lg border border-white/15 bg-[var(--card)] px-3 py-2 text-sm">{categories.map(item => <option key={item}>{item}</option>)}</select></div><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(project => <OtherProjectCard key={project.title} {...project} />)}</div></>}
    </section>
  </main>;
};

export default Portfolio;
