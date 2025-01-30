import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Inloggen met:", email, password);
        // Hier kan de backend-koppeling worden toegevoegd
    };

    return (
        <>
            <div className="login-container">
                <h2>Inloggen</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Voer je e-mail in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Voer je wachtwoord in"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-button">Inloggen</button>
                </form>
                <p>Heb je nog geen account?</p>
                <button className="register-button" onClick={() => navigate("/register")}>
                    Registreren
                </button>
            </div>
        </>
    );
};

export default Login;
