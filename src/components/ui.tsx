import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { site } from "../data/site";
import { Magnetic, Spotlight } from "./fx";

export const SectionHeader = ({ eyebrow, title, children, action }: { eyebrow: string; title: string; children?: ReactNode; action?: ReactNode }) => (
  <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-relaxed text-muted">{children}</p>}
    </div>
    {action}
  </div>
);

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-line bg-white/3 px-2 py-0.5 font-mono text-[0.7rem] text-muted">{children}</span>
);

const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200";
const variants = {
  primary: `${base} bg-accent text-accent-ink hover:bg-accent/85`,
  ghost: `${base} border border-line text-ink hover:border-ink/40 hover:bg-white/4`,
};

type ButtonProps = { to: string; children: ReactNode; variant?: keyof typeof variants; download?: boolean };

/** Internal routes use <Link>; anything with a scheme or a file path uses <a>. */
export const Button = ({ to, children, variant = "primary", download }: ButtonProps) => {
  const external = /^(https?:|mailto:)/.test(to);
  if (external || download) {
    return (
      <a href={to} className={variants[variant]} download={download} {...(to.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link to={to} className={variants[variant]}>{children}</Link>;
};

export const TextLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-sm font-medium text-ink transition hover:text-accent">
    {children}
    <Icon name="arrow" className="size-3.5 text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
  </a>
);

export const ContactBand = () => (
  <section className="container-page pb-24">
    <Spotlight className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
      <div>
        <h2 className="text-2xl sm:text-3xl">Have a project in mind?</h2>
        <p className="mt-2 text-muted">I'm open to internships, collaborations and freelance work.</p>
      </div>
      <Magnetic>
        <Button to={`mailto:${site.email}`}>
          <Icon name="email" /> Get in touch
        </Button>
      </Magnetic>
    </Spotlight>
  </section>
);
