import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/DashboardLayout.css";

const DashboardLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Sluit de sidebar wanneer een link wordt aangeklikt
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <button className="dashboard-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        ☰
                    </button>
                    <span className="dashboard-title">Rent-IT! Dashboard</span>
                </div>
            </header>

            <div className="content">
                {/* Sidebar */}
                <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
                    <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✖</button>
                    <ul>
                        <li><strong>Account</strong></li>
                        <li><Link to="/beheren/accountinstellingen" onClick={handleLinkClick}>Accountinstellingen</Link></li>

                        <li><strong>Backoffice</strong></li>
                        <li><Link to="/beheren/abonnementen-goedkeuren" onClick={handleLinkClick}>Abonnementskeuring</Link></li>
                    </ul>
                </nav>

                {/* Hoofdinhoud */}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
