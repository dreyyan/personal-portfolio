import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between bg-[var(--color-surface)] px-8 py-4">
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
                <Link to="/projects">PORTFLIO</Link>
                <Link to="/resume">RESUME</Link>
            </div>
        </div>
    );
};

export default Header;