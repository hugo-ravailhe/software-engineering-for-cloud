import React, { useState } from "react";
import logo from "../asset/heal-e2.png";
import "./Inscription.css";
import Connexion from "../connexion/Connexion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backend_server } from "../config/backend_server";

function Inscription() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const handleBackToAccueil = () => {
    history.push("/");
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateNaissanceChange = (event) => {
    setDateNaissance(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = () => {
    console.log("Inscription en cours...");
    console.log("Prénom:", prenom);
    console.log("Nom:", nom);
    console.log("E-mail:", email);
    console.log("Date de naissance:", dateNaissance);
    console.log("Mot de passe:", password);
    console.log("Confirmation du mot de passe:", confirmPassword);

    const userData = {
      prenom: prenom,
      nom: nom,
      email: email,
      dateNaissance: dateNaissance,
      password: password,
    };

    console.log("userData:", userData);
    console.log("backend_server:", backend_server);

    axios
      .post(`${backend_server}/api/auth/register`, userData)
      .then((response) => {
        console.log("Inscription réussie !");
        toast.success("Inscription réussie !");
        history.push("/Connexion");
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
        toast.error("Erreur lors de la connexion");
      });
  };

  return (
    <div className="Inscription">
      <img src={logo} className="Inscription-logo" alt="logo" />
      <h2>Page d'inscription</h2>
      <div>
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={handlePrenomChange}
        />
      </div>
      <div>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" value={nom} onChange={handleNomChange} />
      </div>
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
        <label htmlFor="dateNaissance">Date de naissance:</label>
        <input
          type="date"
          id="dateNaissance"
          value={dateNaissance}
          onChange={handleDateNaissanceChange}
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
      <div>
        <label htmlFor="confirmPassword">Confirmation du mot de passe:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="button-container">
        <button className="Inscription-button" onClick={handleRegister}>
          S'inscrire
        </button>
        <button className="Inscription-button" onClick={handleBackToAccueil}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}

export default Inscription;
