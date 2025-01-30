import { useState } from "react";
import "../styles/DashboardLayout.css";

const DashboardLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        ☰
                    </button>
                    <span className="dashboard-title">CarAndAll Dashboard</span>
                </div>
            </header>

            <div className="content">
                {/* Sidebar (verandert alleen op mobiel) */}
                <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
                    <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✖</button>
                    <ul>
                        <li><strong>Account</strong></li>
                        <li><a href="#">Accountinstellingen</a></li>
                        <li><a href="#">Zakelijke Accountinstellingen</a></li>

                        <li><strong>Abonnementen</strong></li>
                        <li><a href="#">Abonnement Beheer</a></li>
                        <li><a href="#">Goedkeuren/Afwijzen Abonnementen</a></li>

                        <li><strong>Wagenparkbeheerder</strong></li>
                        <li><a href="#">Voertuig Overzicht</a></li>
                        <li><a href="#">Wagenpark Manager</a></li>

                        <li><strong>Frontofficemedewerker</strong></li>
                        <li><a href="#">Voertuig Uitgifte</a></li>

                        <li><strong>Backofficemedewerker</strong></li>
                        <li><a href="#">Huur Aanvragen</a></li>
                    </ul>
                </nav>

                {/* Hoofdinhoud */}
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
