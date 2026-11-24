import { Icon, type IconName } from "./Icons";
import { site } from "../data/site";

const socials: [IconName, string, string][] = [
  ["github", "GitHub", site.github],
  ["linkedin", "LinkedIn", site.linkedin],
  ["email", "Email", `mailto:${site.email}`],
];

export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    {socials.map(([icon, label, href]) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        title={label}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
        className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-white/5 hover:text-accent"
      >
        <Icon name={icon} className="size-[1.15rem]" />
      </a>
    ))}
  </div>
);

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex flex-col gap-4 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.name} · {site.location}
      </p>
      <SocialLinks className="-ml-3 sm:ml-0 sm:-mr-3" />
    </div>
  </footer>
);

export default Footer;
