import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../styles/Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("particulier");
    const [showModal, setShowModal] = useState(false); // Pop-up state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        businessName: "",
        businessAddress: "",
        kvkNumber: "",
        address: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Wachtwoorden komen niet overeen.");
            return;
        }

        console.log("Registreren met:", formData);
        setError("");

        // Toon pop-up na succesvolle registratie
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/"); // Redirect naar home na sluiten
    };

    return (
        <>
            <div className="register-container">
                <h2>Registreren</h2>

                {/* Keuze tussen particulier of bedrijf */}
                <div className="account-type" role="radiogroup" aria-labelledby="accountTypeLabel">
                    <p id="accountTypeLabel">Kies je accounttype:</p>
                    <button
                        className={`account-button ${accountType === "particulier" ? "selected" : ""}`}
                        onClick={() => setAccountType("particulier")}
                        role="radio"
                        aria-checked={accountType === "particulier"}
                    >
                        Particulier
                    </button>
                    <button
                        className={`account-button ${accountType === "bedrijf" ? "selected" : ""}`}
                        onClick={() => setAccountType("bedrijf")}
                        role="radio"
                        aria-checked={accountType === "bedrijf"}
                    >
                        Bedrijf
                    </button>
                </div>

                <form onSubmit={handleRegister}>
                    {accountType === "particulier" && (
                        <>
                            <label>Voornaam</label>
                            <input type="text" name="firstName" placeholder="Voer je voornaam in" required onChange={handleChange} />

                            <label>Achternaam</label>
                            <input type="text" name="lastName" placeholder="Voer je achternaam in" required onChange={handleChange} />

                            <label>Adres</label>
                            <input type="text" name="address" placeholder="Voer je adres in" required onChange={handleChange} />
                        </>
                    )}

                    {accountType === "bedrijf" && (
                        <>
                            <label>Bedrijfsnaam</label>
                            <input type="text" name="businessName" placeholder="Voer je bedrijfsnaam in" required onChange={handleChange} />

                            <label>Bedrijfsadres</label>
                            <input type="text" name="businessAddress" placeholder="Voer het bedrijfsadres in" required onChange={handleChange} />

                            <label>KVK-nummer</label>
                            <input type="text" name="kvkNumber" placeholder="Voer je KVK-nummer in" required onChange={handleChange} />
                        </>
                    )}

                    <label>E-mail</label>
                    <input type="email" name="email" placeholder="Voer je e-mail in" required onChange={handleChange} />

                    <label>Telefoonnummer</label>
                    <PhoneInput country={"nl"} value={formData.phone} onChange={handlePhoneChange} inputProps={{ name: "phone", required: true, autoFocus: false }} />

                    <label>Wachtwoord</label>
                    <input type="password" name="password" placeholder="Voer een wachtwoord in" required onChange={handleChange} />

                    <label>Bevestig Wachtwoord</label>
                    <input type="password" name="confirmPassword" placeholder="Herhaal je wachtwoord" required onChange={handleChange} />

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="register-submit">Registreren</button>
                </form>
            </div>

            {/* Toegankelijke pop-up */}
            {showModal && (
                <div className="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDesc">
                    <div className="modal-content">
                        <h2 id="modalTitle">Registratie succesvol!</h2>
                        <p id="modalDesc">
                            {accountType === "particulier"
                                ? "Je account is aangemaakt! Je ontvangt een bevestigingsmail."
                                : "Je bedrijfsaccount is aangemaakt! De bevestiging wordt per e-mail verzonden."}
                        </p>
                        <button onClick={handleCloseModal} className="close-modal">Sluiten</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
