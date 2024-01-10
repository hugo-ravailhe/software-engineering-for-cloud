DROP DATABASE IF EXISTS heale;
CREATE DATABASE heale;
use heale;

CREATE TABLE IF NOT EXISTS register (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prenom VARCHAR(25) NOT NULL,
  nom VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  dateNaissance DATE NOT NULL,
  password VARCHAR(60) NOT NULL
);

INSERT INTO register (prenom, nom, email, dateNaissance, password)
VALUES ('John', 'Doe', 'johndoe@example.com', '1990-05-15', 'mypassword');

INSERT INTO register (prenom, nom, email, dateNaissance, password)
VALUES ('Jane', 'Smith', 'janesmith@example.com', '1988-12-03', 'securepassword');

    
select * from register;
describe register;