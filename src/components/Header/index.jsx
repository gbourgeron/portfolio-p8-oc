import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import './index.scss';

function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        // Close menu if clicking outside of the menu or button
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <button
                ref={menuButtonRef}
                className="menu-toggle"
                onClick={toggleMenu}
            >
                &#9776;
            </button>
            <nav ref={navRef} className={`navbar ${isOpen ? "open" : ""}`}>
                <Link to="/" className={`navbar__link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>accueil</Link>
                <Link to="/skills" className={`navbar__link ${location.pathname === "/skills" ? "active" : ""}`} onClick={closeMenu}>compétences</Link>
                <Link to="/projects" className={`navbar__link ${location.pathname === "/projects" ? "active" : ""}`} onClick={closeMenu}>projets</Link>
                <Link to="/contact" className={`navbar__link ${location.pathname === "/contact" ? "active" : ""}`} onClick={closeMenu}>contact</Link>
            </nav>
        </header>
    );
}

export default Header;
