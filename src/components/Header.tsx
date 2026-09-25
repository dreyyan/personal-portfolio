import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [["About", "/about-me"], ["Work", "/portfolio"], ["Resume", "/resume"]] as const;

const Header = () => {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) => `text-sm font-medium transition ${isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-white"}`;

  return <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0b1020]/80 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-10">
      <Link to="/" className="flex items-center gap-3 font-bold tracking-[.16em]"><span className="flex size-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm leading-none text-[#0b1020]">A</span>ADRIAN TAN</Link>
      <nav className="hidden items-center gap-8 sm:flex">{links.map(([label, to]) => <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>)}<a className="rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[#0b1020]" href="mailto:adriandominic.tan@wvsu.edu.ph">Let's talk</a></nav>
      <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} className="sm:hidden text-2xl leading-none">{open ? "x" : "="}</button>
    </div>
    {open && <nav className="border-t border-white/8 bg-[#11182b] px-6 py-5 sm:hidden">{links.map(([label, to]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="block py-3 text-lg text-[var(--text-secondary)]">{label}</NavLink>)}</nav>}
  </header>;
};

export default Header;
