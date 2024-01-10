
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inscription from "./inscription/Inscription";
import Connexion from "./connexion/Connexion";
import Accueil from "./accueil/Accueil";
import OCR from './ocr/ocr';
import Map from './map/map';
import Compte from './compte/Compte';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/connexion" component={Connexion} />
            <Route path="/ocr" component={OCR} />
            <Route path="/map" component={Map} />
            <Route path="/Compte" component={Compte} />
          </Switch>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
