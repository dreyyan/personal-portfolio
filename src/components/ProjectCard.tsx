import type { FeaturedProject } from "../data/projectsData";
import { Tag, TextLink } from "./ui";
import { Tilt } from "./fx";

/** Stable 0-1 value per title, so each generated cover places its glow differently. */
const seed = (text: string) => ([...text].reduce((sum, ch) => (sum * 31 + ch.charCodeAt(0)) % 100003, 7) % 1000) / 1000;

/** Typographic cover for projects that have no screenshot yet. */
const ProjectCover = ({ title, stack, codeLink }: Pick<FeaturedProject, "title" | "stack" | "codeLink">) => {
  const s = seed(title);
  const repo = codeLink.replace("https://github.com/", "");
  return (
    <div aria-hidden="true" className="relative flex aspect-16/10 w-full flex-col justify-between overflow-hidden p-6 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(rgb(148_163_184/0.18)_1px,transparent_1px)] bg-size-[18px_18px] mask-[linear-gradient(180deg,black,transparent_85%)]" />
      <div
        className="absolute size-72 rounded-full bg-accent/20 blur-3xl transition duration-700 group-hover:scale-125 group-hover:bg-accent/30"
        style={{ left: `${10 + s * 55}%`, top: `${20 + ((s * 7) % 1) * 40}%` }}
      />
      <div className="relative flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate font-mono text-xs text-faint">github.com/{repo}</span>
      </div>
      <div className="relative">
        <p className="text-3xl font-semibold tracking-tight text-ink transition duration-500 group-hover:translate-x-1 sm:text-4xl">{title}</p>
        <p className="mt-2 font-mono text-xs text-accent/80">
          <span className="text-faint">$</span> {stack.slice(0, 3).join(" · ")}
        </p>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, category, description, stack, previewLink, codeLink }: FeaturedProject) => (
  <article className="group flex flex-col">
    <Tilt max={7} className="rounded-2xl">
      <a
        href={previewLink ?? codeLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${title}`}
        className="relative block overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/10"
      >
        {image ? (
          <img
            src={`/${image}`}
            width={400}
            height={300}
            loading="lazy"
            alt={`Screenshot of ${title}`}
            className="aspect-16/10 w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectCover title={title} stack={stack} codeLink={codeLink} />
        )}
        <div className="tilt-glare" />
      </a>
    </Tilt>

    <div className="mt-5 flex flex-1 flex-col">
      <p className="font-mono text-xs text-faint">{category}</p>
      <h3 className="mt-1.5 text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {stack.map(item => <Tag key={item}>{item}</Tag>)}
      </div>
      <div className="mt-5 flex gap-5">
        {previewLink && <TextLink href={previewLink}>Live site</TextLink>}
        <TextLink href={codeLink}>Source code</TextLink>
      </div>
    </div>
  </article>
);

export default ProjectCard;
