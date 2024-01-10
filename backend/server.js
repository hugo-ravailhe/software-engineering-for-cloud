const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('./config/env');

const app = express();
const port = process.env.BACKEND_PORT;

const front_server = require('./config/front_server');
console.log(`Frontend server:${front_server}`);

// Configuration du body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: `${front_server}`,
}));

// Importation des routes
const authRouter = require('./routes/auth');

// Configuration des en-têtes HTTP
app.use('/api/auth', authRouter);
app.use('/', (req, res) => {
  res.send('Backend fonctionne !');
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

// // Connexion à la base de données
// const connection = mysql.createConnection({
//   host: '0.0.0.0', 
//   user: 'root',
//   password: 'root',
//   database: 'heal_e_database'
// });

// // Fermeture de la connexion à la base de données lorsque l'application se termine
// process.on('SIGINT', () => {
//   connection.end((err) => {
//     if (err) {
//       console.error('Erreur lors de la fermeture de la connexion à la base de données :', err);
//     } else {
//       console.log('Connexion à la base de données fermée avec succès.');
//     }
//     process.exit();
//   });
// });
//=======
//const app = express();
//const mysql = require('mysql');
//const connection = require('./database');
//const bcrypt = require('bcrypt');


//app.use(express.json());

//test
//app.get('/', (req, res) => {
//  res.send('Backend fonctionne !');
//});

//page d'accueil
//app.get('/', (req, res) => {
//  res.send('Page d\'accueil');
//});

//page de connexion
//app.post('/Connexion', (req, res) => {
//  const { email, password } = req.body;

//  connection.query('SELECT * FROM register WHERE email = ?', email, (error, results) => {
//    if (error) {
//      console.error('Erreur lors de la connexion :', error);
//      res.status(500).json({ error: 'Erreur lors de la connexion' });
//    } else {
//      if (results.length > 0) {
//        const user = results[0];
//        bcrypt.compare(password, user.password, (err, result) => {
//          if (err) {
//            console.error('Erreur lors de la comparaison des mots de passe :', err);
//            res.status(500).json({ error: 'Erreur lors de la connexion' });
//          } else {
//            if (result) {
//              console.log('Connexion réussie !');
//              res.status(200).json({ message: 'Connexion réussie' });
//            } else {
//              console.log('Mot de passe incorrect !');
//              res.status(401).json({ error: 'Mot de passe incorrect' });
//            }
//          }
//        });
//      } else {
//        console.log('Utilisateur non trouvé !');
//        res.status(404).json({ error: 'Utilisateur non trouvé' });
//      }
//    }
//  });
//});

//inscription
//app.post('/inscription', (req, res) => {
//  const { prenom, nom, email, dateNaissance, password } = req.body;

  //hachage du mdp
//  bcrypt.hash(password, 10, (err, hash) => {
//    if (err) {
//      console.error("Erreur lors du hachage du mot de passe :", err);
//      res.status(500).json({ error: "Erreur lors de l'inscription" });
//    } else {
      //remplir dans la base de données avec le mot de passe haché
//      connection.query(
//        'INSERT INTO register (prenom, nom, email, dateNaissance, password) VALUES (?, ?, ?, ?, ?)',
//        [prenom, nom, email, dateNaissance, hash],
//        (error, results) => {
//          if (error) {
//            console.error("Erreur lors de l'inscription :", error);
//            res.status(500).json({ error: "Erreur lors de l'inscription" });
//          } else {
//            console.log('Inscription réussie !');
//            res.status(200).json({ message: 'Inscription réussie' });
//          }
//        }
//      );
//    }
//  });
//});

//démarrer le serveur
//const port = 3000;
//app.listen(port, () => {
//  console.log(`Serveur démarré sur le port ${port}`);
//});
