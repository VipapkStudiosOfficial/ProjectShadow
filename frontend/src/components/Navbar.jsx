import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Donkere overlay die alleen de achtergrond dimt */}
            <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

            <nav className="navbar">
                <div className="nav-logo">Rent-IT!</div>

                {/* Hamburger Menu Button */}
                <button
                    className="menu-toggle"
                    aria-label="Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/huren" onClick={() => setMenuOpen(false)}>Huren</Link></li>
                    <li><Link to="/abonnementen" onClick={() => setMenuOpen(false)}>Abonnementen</Link></li>
                    <li><Link to="/beheren" onClick={() => setMenuOpen(false)}>Beheren</Link></li>
                </ul>

                <div className="nav-login">
                    <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
