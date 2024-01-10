const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend fonctionne !');
});

app.get('/', (req, res) => {
  res.send('Page d\'accueil');
});

app.get('/Connexion', (req, res) => {
  res.send('Page de connexion');
});

app.get('/Inscription', (req, res) => {
  res.send('Page d\'inscription');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
