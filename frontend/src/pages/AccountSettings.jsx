import React, { useState } from "react";
import "../styles/AccountSettings.css";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+31 612345678",
        password: "",
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Weet je zeker dat je je account wilt verwijderen? Dit kan niet ongedaan worden gemaakt.")) {
            alert("Je account is succesvol verwijderd.");
            navigate("/"); // Redirect naar homepagina
        }
    };

    return (
        <div className="account-settings-container">
            <h1>Accountinstellingen</h1>
            <p>Beheer je persoonlijke gegevens en wijzig je instellingen.</p>

            <form className="account-form">
                <label htmlFor="name">Naam</label>
                <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />

                <label htmlFor="phone">Telefoonnummer</label>
                <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleChange} required />

                <label htmlFor="password">Nieuw wachtwoord</label>
                <input type="password" id="password" name="password" placeholder="Voer een nieuw wachtwoord in" onChange={handleChange} aria-describedby="passwordHelp" />
                <small id="passwordHelp">Laat dit veld leeg als je je wachtwoord niet wilt wijzigen.</small>

                <button type="submit" className="save-button">Wijzigingen opslaan</button>
            </form>

            <div className="delete-account">
                <h2>Account verwijderen</h2>
                <p>Let op: als je je account verwijdert, worden al je gegevens permanent verwijderd.</p>
                <button className="delete-button" onClick={handleDeleteAccount}>Account verwijderen</button>
            </div>
        </div>
    );
};

export default AccountSettings;
