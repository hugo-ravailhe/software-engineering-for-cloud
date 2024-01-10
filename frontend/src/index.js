import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

//import { BrowserRouter } from "react-router-dom";

//import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//import Header from "./Header";
//import Footer from "./Footer";
//import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

//import { AuthProvider } from './AuthProvider';

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//serviceWorker.unregister();

/*

    
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
         

          <Route path="/*"><App /></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);*/

reportWebVitals();

const routing = (
  <Router>
    <div>
      <hr />

      <Route exact path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

//  <Header />

// <Footer />
