import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../asset/heal-e2.png";
import "./Accueil.css";

function Accueil() {
  const history = useHistory();

  const handleInscriptionClick = () => {
    history.push("/inscription");
  };

  const handleConnexionClick = () => {
    history.push("/connexion");
  };

  return (
    <div className="Accueil">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-buttons">
        <button
          className="Inscription-button-0"
          onClick={handleInscriptionClick}
        >
          S'inscrire
        </button>
        <button className="Connexion-button-0" onClick={handleConnexionClick}>
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Accueil;
