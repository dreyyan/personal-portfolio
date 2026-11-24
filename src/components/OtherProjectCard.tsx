import { Tag } from "./ui";

interface Props {
  title: string;
  date: string;
  description: string;
  skills?: string[];
}

/** A compact row in the project archive table. */
const OtherProjectCard = ({ title, date, description, skills = [] }: Props) => (
  <li className="grid gap-x-8 gap-y-2 border-t border-line py-5 md:grid-cols-[4rem_14rem_1fr_auto] md:items-baseline">
    <p className="font-mono text-xs text-faint">{date ? date.slice(-4) : "—"}</p>
    <h3 className="text-base">{title}</h3>
    <p className="text-sm text-muted">{description}</p>
    <div className="flex flex-wrap gap-1.5 md:justify-end">
      {skills.slice(0, 2).map(skill => <Tag key={skill}>{skill}</Tag>)}
    </div>
  </li>
);

export default OtherProjectCard;
