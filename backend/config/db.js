// Fichier config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'database-heale', 
  port: '3306',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Test de la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
  } else {
    console.log('Connexion à la base de données réussie !');
  }
});

module.exports = connection;
