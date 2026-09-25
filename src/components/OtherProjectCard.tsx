interface Props { title: string; category: string; skills?: string[]; description: string; }

const tagColor = (skill: string) => {
  const value = skill.toLowerCase();
  if (value.includes("react")) return "border-[#61DAFB]/35 bg-[#61DAFB]/10 text-[#61DAFB]";
  if (value.includes("typescript")) return "border-[#3178C6]/45 bg-[#3178C6]/15 text-[#70B7F0]";
  if (value.includes("javascript")) return "border-[#F7DF1E]/35 bg-[#F7DF1E]/10 text-[#F7DF1E]";
  if (value.includes("python") || value.includes("machine learning")) return "border-[#FFD43B]/35 bg-[#3776AB]/15 text-[#FFD43B]";
  if (value.includes("java") && !value.includes("javascript")) return "border-orange-400/40 bg-orange-400/10 text-orange-300";
  if (value.includes("c++") || value === "c#") return "border-indigo-400/40 bg-indigo-400/10 text-indigo-300";
  if (value.includes("sql") || value.includes("database")) return "border-blue-400/40 bg-blue-400/10 text-blue-300";
  if (value.includes("ai") || value.includes("artificial") || value.includes("nlp")) return "border-violet-400/40 bg-violet-400/10 text-violet-300";
  if (value.includes("unity") || value.includes("game")) return "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300";
  if (value.includes("html") || value.includes("css") || value.includes("web")) return "border-rose-400/40 bg-rose-400/10 text-rose-300";
  return "border-emerald-400/35 bg-emerald-400/10 text-emerald-300";
};

const OtherProjectCard = ({ title, category, skills = [], description }: Props) => <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[var(--card)] p-5"><p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{category}</p><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p><div className="mt-auto flex flex-wrap gap-2 pt-5">{skills.slice(0, 3).map(skill => <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${tagColor(skill)}`} key={skill}>{skill}</span>)}</div></article>;
export default OtherProjectCard;
