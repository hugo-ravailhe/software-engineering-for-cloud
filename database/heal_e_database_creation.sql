CREATE DATABASE IF NOT EXISTS heal_e_database;

USE heal_e_database;

CREATE TABLE IF NOT EXISTS Account(
   id INT AUTO_INCREMENT PRIMARY KEY,
   email VARCHAR(255) NOT NULL,
   password_hash VARCHAR(255) NOT NULL,
   firstname VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   birthdate DATE NOT NULL,
   UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS Admin(
   id INT AUTO_INCREMENT PRIMARY KEY,
   id_account INT NOT NULL,
   FOREIGN KEY(id_account) REFERENCES Account(id)
);

CREATE TABLE IF NOT EXISTS Patient(
   id INT AUTO_INCREMENT PRIMARY KEY,
   id_account INT NOT NULL,
   FOREIGN KEY(id_account) REFERENCES Account(id)
);

CREATE TABLE IF NOT EXISTS Tutor(
   id INT AUTO_INCREMENT PRIMARY KEY,
   id_account INT NOT NULL,
   FOREIGN KEY(id_account) REFERENCES Account(id)
);

CREATE TABLE IF NOT EXISTS Prescription(
   id INT AUTO_INCREMENT PRIMARY KEY,
   message TEXT,
   id_tutor INT NOT NULL,
   FOREIGN KEY(id_tutor) REFERENCES Tutor(id)
);

CREATE TABLE IF NOT EXISTS Schedule_take(
   id INT AUTO_INCREMENT PRIMARY KEY,
   take_day DATE NOT NULL,
   take_hour TIME,
   quantity INT,
   id_prescription INT NOT NULL,
   FOREIGN KEY(id_prescription) REFERENCES Prescription(id)
);
