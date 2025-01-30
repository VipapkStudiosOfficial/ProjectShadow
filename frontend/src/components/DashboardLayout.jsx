import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/DashboardLayout.css";

const DashboardLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="dashboard">
            <header className="header">
                <div className="header-content">
                    <button className="dashboard-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        ☰
                    </button>
                    <span className="dashboard-title">Rent-IT! Dashboard</span>
                </div>
            </header>

            <div className="content">
                <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
                    <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✖</button>
                    <ul>
                        <li><strong>Account</strong></li>
                        <li><Link to="/beheren/accountinstellingen">Accountinstellingen</Link></li>
                        <li><Link to="#">Zakelijke Accountinstellingen</Link></li>

                        <li><strong>Abonnementen</strong></li>
                        <li><Link to="#">Abonnement Beheer</Link></li>
                        <li><Link to="#">Goedkeuren/Afwijzen Abonnementen</Link></li>
                    </ul>
                </nav>

                {/* Outlet zorgt ervoor dat subpagina's hier verschijnen */}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
