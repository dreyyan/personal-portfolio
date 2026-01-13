import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/about-me">About Me</Link>
            <Link to="/projects">Portfolio</Link>
            <Link to="/resume">Resume</Link>
        </div>
    );
};

export default Header;