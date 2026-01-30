import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between bg-[var(--color-surface)] h-[clamp(60px,8vw,96px)] px-6 py-4 relative">
      <div className="hidden sm:block">
        {/* [L]eft: Banner */}
        <div className="flex items-center space-x-3">
          <img src="code-icon.svg" alt="Code Icon" className="size-6" />
          <p className="font-heading font-400 tracking-widest text-[var(--text-primary)]">DREYYAN</p>
        </div>

        <div className="
          flex justify-end items-center gap-8
          [&>a]:text-[var(--text-primary)]
          [&>a]:font-body
          [&>a]:font-semibold
          [&>a]:tracking-wider
          [&>a]:text-xs
          [&>a]:transition
          [&>a]:duration-300
          [&>a]:ease-in-out
          [&>a]:hover:translate-y-[-1px]
        ">
          <Link to="/about-me">ABOUT ME</Link>
          <Link to="/projects">PORTFOLIO</Link>
          <Link to="/resume">RESUME</Link>
        </div>
      </div>

      {/* Burger Menu Icon */}
      <div className="ml-auto sm:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="burger-menu-icon.svg" className="size-8 sm:hidden" />
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[var(--color-surface)]/90 z-50 flex flex-col items-center justify-center gap-8 sm:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/about-me" onClick={() => setIsMenuOpen(false)}>ABOUT ME</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Link>
          <Link to="/resume" onClick={() => setIsMenuOpen(false)}>RESUME</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
