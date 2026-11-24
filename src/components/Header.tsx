import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "./Icons";
import { site } from "../data/site";

const links = [
  ["About", "/about-me"],
  ["Work", "/portfolio"],
  ["Resume", "/resume"],
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm transition ${isActive ? "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-accent" : "text-muted hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-accent font-mono text-[0.7rem] font-medium text-accent-ink">AT</span>
          Adrian Tan
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={desktopLink}>{label}</NavLink>
          ))}
          <a href={`mailto:${site.email}`} className="rounded-full border border-accent/50 px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-accent-ink">
            Let's talk
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 grid size-10 place-items-center rounded-lg text-muted hover:text-ink sm:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-5 pb-6 pt-2 sm:hidden">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block border-b border-line py-4 text-base ${isActive ? "text-accent" : "text-ink"}`}
            >
              {label}
            </NavLink>
          ))}
          <a href={`mailto:${site.email}`} className="mt-5 block rounded-full bg-accent py-3 text-center text-sm font-medium text-accent-ink">
            Let's talk
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
