import type { ReactNode } from "react";
import { Tag } from "./ui";

interface Props {
  title: string;
  category: string;
  /** Left column: dates, or anything short (e.g. a link). */
  meta: ReactNode;
  description: string[];
  tags?: string[];
}

/** One row of the resume timeline: meta on the left, title and highlights on the right. */
const ExperienceCard = ({ title, category, meta, description, tags }: Props) => (
  <article className="grid gap-3 border-t border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
    <div className="font-mono text-xs text-faint sm:pt-1.5">{meta}</div>
    <div>
      <h3 className="text-lg">{title}</h3>
      <p className="mt-0.5 text-sm text-accent">{category}</p>
      {tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
      )}
      <ul className="mt-4 space-y-2.5">
        {description.map(point => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2.5 h-px w-3 shrink-0 bg-faint" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ExperienceCard;
