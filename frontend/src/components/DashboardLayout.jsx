import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/DashboardLayout.css";

const DashboardLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                {/* Sidebar (verandert alleen op mobiel) */}
                <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
                    <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✖</button>
                    <ul>
                        <li><strong>Account</strong></li>
                        <li><Link to="/beheren/accountinstellingen">Accountinstellingen</Link></li>
                        <li><a href="#">Zakelijke Accountinstellingen</a></li>
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
