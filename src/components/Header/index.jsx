import { Link, useLocation } from "react-router-dom";
import './index.scss';

function Header() {
    const location = useLocation();

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className={`navbar__link ${location.pathname === "/" ? "active" : ""}`}>accueil</Link>
                <Link to="/skills" className={`navbar__link ${location.pathname === "/skills" ? "active" : ""}`}>compétences</Link>
                <Link to="/projects" className={`navbar__link ${location.pathname === "/projects" ? "active" : ""}`}>projets</Link>
                <Link to="/contact" className={`navbar__link ${location.pathname === "/contact" ? "active" : ""}`}>contact</Link>
            </nav>
        </header>
    )
}

export default Header;