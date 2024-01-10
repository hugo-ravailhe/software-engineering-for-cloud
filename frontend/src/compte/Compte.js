import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../asset/heal-e2.png';
import './Compte.css';

const Compte = () => {
  return (
    <div className="container">
    <img src={logo1} className="homelogo" alt="Heale" />
    <h2>Mon compte</h2>
    <main>
    <div className="menu">
        <Link to="/ocr" className="menuItem">OCR</Link>
        <Link to="/map" className="menuItem">Pharmacies</Link>
        <Link to="/" className="menuItem">Aide</Link>
        <Link to="/" className="menuItem">Informations</Link>
    </div>
    </main>
    </div>
  );
};

export default Compte;
