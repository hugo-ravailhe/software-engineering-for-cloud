const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  database: 'heale',
  user: 'root',
  password: '',
});

connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données :', error);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

module.exports = connection;