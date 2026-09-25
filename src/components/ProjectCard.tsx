interface ProjectCardProps {
  image: string; number: string; title: string; category: string;
  description: string; stack: readonly string[]; previewLink?: string; codeLink: string;
}

const tagColors: Record<string, string> = {
  React: "border-[#61DAFB]/35 bg-[#61DAFB]/10 text-[#61DAFB]",
  TypeScript: "border-[#3178C6]/45 bg-[#3178C6]/15 text-[#70B7F0]",
  AI: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  Healthcare: "border-rose-400/40 bg-rose-400/10 text-rose-300",
  "Responsive UI": "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  "Brand web": "border-amber-400/40 bg-amber-400/10 text-amber-300",
  Productivity: "border-orange-400/40 bg-orange-400/10 text-orange-300",
  Search: "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
  Marketplace: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300",
  UX: "border-pink-400/40 bg-pink-400/10 text-pink-300",
};

const ProjectCard = ({ image, number, title, category, description, stack, previewLink, codeLink }: ProjectCardProps) => (
  <article className="group mx-auto flex h-full w-full max-w-[430px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/45 hover:shadow-2xl hover:shadow-cyan-950/25">
    <div className="relative aspect-[4/3] overflow-hidden bg-[#0e1527]">
      <img src={`/${image}`} width="400" height="300" alt={`${title} project preview`} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/90 via-transparent to-[#0b1020]/10" />
      <div className="absolute left-5 top-5 flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-full border border-white/20 bg-[#0b1020]/75 text-xs font-bold backdrop-blur">{number}</span>
        <span className="rounded-full border border-white/15 bg-[#0b1020]/75 px-3 py-1.5 text-xs font-semibold text-[var(--accent)] backdrop-blur">{category}</span>
      </div>
      <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold tracking-tight text-white">{title}</h3>
    </div>
    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <p className="min-h-[4.5rem] text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
      <div className="mt-6 mb-7 flex min-h-8 flex-wrap content-start gap-2">
        {stack.map(item => <span key={item} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${tagColors[item] ?? "border-white/15 bg-white/5 text-[var(--text-secondary)]"}`}><span className="size-1.5 rounded-full bg-current" />{item}</span>)}
      </div>
      <div className="mt-auto grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
        {previewLink ? <a className="rounded-lg bg-[var(--accent)] px-3 py-3 text-center text-sm font-bold text-[#0b1020] transition hover:-translate-y-0.5 hover:brightness-110" href={previewLink} target="_blank" rel="noreferrer">Visit project</a> : <span className="rounded-lg border border-white/10 px-3 py-3 text-center text-sm text-[var(--text-secondary)]">No live demo</span>}
        <a className="rounded-lg border border-white/15 px-3 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]" href={codeLink} target="_blank" rel="noreferrer">View code</a>
      </div>
    </div>
  </article>
);

export default ProjectCard;
