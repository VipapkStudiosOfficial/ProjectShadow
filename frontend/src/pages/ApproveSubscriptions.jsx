import { useState } from "react";
import "../styles/ApproveSubscriptions.css";

const ApproveSubscriptions = () => {
    // Mock bedrijfsabonnementen
    const [subscriptions, setSubscriptions] = useState([
        { id: 1, company: "Tech Solutions BV", kvk: "12345678", status: "pending" },
        { id: 2, company: "AutoRent Nederland", kvk: "87654321", status: "pending" }
    ]);
    const [rejectionReason, setRejectionReason] = useState("");

    // Functie om goed te keuren
    const approveSubscription = (id) => {
        setSubscriptions(subscriptions.map(sub => sub.id === id ? { ...sub, status: "approved" } : sub));
        alert(`Bedrijfsabonnement voor ${subscriptions.find(sub => sub.id === id).company} is goedgekeurd.`);
    };

    // Functie om af te wijzen
    const rejectSubscription = (id) => {
        if (!rejectionReason.trim()) {
            alert("Vul een reden in voor de afwijzing.");
            return;
        }
        setSubscriptions(subscriptions.map(sub => sub.id === id ? { ...sub, status: "rejected" } : sub));
        alert(`Bedrijfsabonnement voor ${subscriptions.find(sub => sub.id === id).company} is afgewezen. Reden: ${rejectionReason}`);
        setRejectionReason(""); // Reset input
    };

    return (
        <div className="approve-subscriptions-container">
            <h1>Abonnementskeuring</h1>
            <p>Bekijk de gegevens en keur het abonnement goed of wijs het af.</p>

            {subscriptions.map((sub) => (
                <div key={sub.id} className="subscription-card">
                    <h2>{sub.company}</h2>
                    <p><strong>KVK-nummer:</strong> {sub.kvk}</p>
                    {sub.status === "pending" ? (
                        <div className="action-buttons">
                            <button className="approve-button" onClick={() => approveSubscription(sub.id)}>Goedkeuren</button>
                            <input
                                type="text"
                                placeholder="Reden voor afwijzing"
                                value={rejectionReason}
                                onChange={(e) => setRejectionReason(e.target.value)}
                            />
                            <button className="reject-button" onClick={() => rejectSubscription(sub.id)}>Afwijzen</button>
                        </div>
                    ) : (
                        <p>Status: <strong>{sub.status === "approved" ? "✅ Goedgekeurd" : "❌ Afgewezen"}</strong></p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ApproveSubscriptions;
