import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Abonnementen.css";

const Abonnementen = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [compare, setCompare] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const userAccountType = localStorage.getItem("accountType");
            if (userAccountType === "bedrijf") {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }, 500);
    }, []);

    const handleSubscription = () => {
        if (!isLoggedIn) {
            navigate("/login");
        } else if (selectedPlan) {
            alert(`Je hebt het ${selectedPlan} abonnement gekozen!`);
        } else {
            alert("Selecteer een abonnementstype om verder te gaan.");
        }
    };

    return (
        <>
            <div className="subscription-container">
                <h1>Bedrijfsabonnementen</h1>
                <p className="intro-text">
                    Kies het abonnement dat bij jouw bedrijf past. Bekijk hieronder de opties en de voordelen.
                </p>

                <div className="subscription-options">
                    <div
                        className={`plan-card ${selectedPlan === "pay-as-you-go" ? "selected" : ""}`}
                        onClick={() => setSelectedPlan("pay-as-you-go")}
                        tabIndex={0}
                        role="button"
                        aria-pressed={selectedPlan === "pay-as-you-go"}
                    >
                        <h2>Pay-as-you-go</h2>
                        <p>Betaal maandelijks een vast bedrag en ontvang procentuele korting op huurbedragen.</p>
                        <span className="price">€50 / maand</span>
                        <button className="details-button" onClick={() => setShowDetails("pay-as-you-go")}>Meer details</button>
                    </div>

                    <div
                        className={`plan-card ${selectedPlan === "prepaid" ? "selected" : ""}`}
                        onClick={() => setSelectedPlan("prepaid")}
                        tabIndex={0}
                        role="button"
                        aria-pressed={selectedPlan === "prepaid"}
                    >
                        <h2>Prepaid</h2>
                        <p>Betaal vooraf voor een bepaald aantal huurdagen. Geen maandelijkse kosten.</p>
                        <span className="price">€500 / 20 dagen</span>
                        <button className="details-button" onClick={() => setShowDetails("prepaid")}>Meer details</button>
                    </div>
                </div>

                {showDetails && (
                    <div className="details-container">
                        <h2>Details van {showDetails === "pay-as-you-go" ? "Pay-as-you-go" : "Prepaid"}</h2>
                        {showDetails === "pay-as-you-go" ? (
                            <ul>
                                <li>Vaste maandelijkse kosten van €50</li>
                                <li>10% korting op alle huurprijzen</li>
                                <li>Flexibel: huur zo vaak als nodig</li>
                            </ul>
                        ) : (
                            <ul>
                                <li>€500 vooraf betalen</li>
                                <li>Inclusief 20 huurdagen</li>
                                <li>Geen verdere maandelijkse kosten</li>
                            </ul>
                        )}
                        <button className="close-details" onClick={() => setShowDetails(false)}>Sluiten</button>
                    </div>
                )}

                <button className="compare-button" onClick={() => setCompare(!compare)}>
                    {compare ? "Sluit vergelijking" : "Vergelijk abonnementen"}
                </button>

                {compare && (
                    <div className="comparison-container">
                        <h2>Vergelijking tussen abonnementen</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kenmerk</th>
                                    <th>Pay-as-you-go</th>
                                    <th>Prepaid</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Maandelijkse kosten</td>
                                    <td>€50</td>
                                    <td>Geen</td>
                                </tr>
                                <tr>
                                    <td>Korting</td>
                                    <td>10% op huurprijzen</td>
                                    <td>Geen</td>
                                </tr>
                                <tr>
                                    <td>Inclusief huurdagen</td>
                                    <td>Geen inbegrepen</td>
                                    <td>20 dagen inbegrepen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <button className="subscribe-button" onClick={handleSubscription}>
                    Abonnement afsluiten
                </button>

                {!isLoggedIn && (
                    <p className="login-warning">
                        Je moet ingelogd zijn als bedrijf om een abonnement af te sluiten.
                    </p>
                )}
            </div>
        </>
    );
};

export default Abonnementen;
