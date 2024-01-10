import React, { useState } from "react";
import logo from "../asset/heal-e2.png";
import "./Connexion.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backend_server } from "../config/backend_server";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleBackToAccueil = () => {
    history.push("/");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Connexion en cours...");
    console.log("Email:", email);
    console.log("Mot de passe:", password);

    const userData = {
      email: email,
      password: password,
    };

    axios
      .post(`${backend_server}/api/auth/login`, userData)
      .then((response) => {
        console.log("Connexion réussie !");
        toast.success("Connexion réussie !");
        // Effectuez les actions souhaitées après la connexion réussie
        history.push("/Compte"); // Rediriger vers une autre page après la connexion réussie
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion :", error);
        toast.error("Erreur lors de la connexion");
        // Effectuez les actions souhaitées en cas d'erreur
      });
  };

  console.log("email:", email);

  return (
    <div className="Connexion">
      <img src={logo} className="Connexion-logo" alt="logo" />
      <h2>Page de connexion</h2>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="button-container">
        <button className="Connexion-button" onClick={handleLogin}>
          Se connecter
        </button>
        <button className="Connexion-button" onClick={handleBackToAccueil}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}

export default Connexion;
