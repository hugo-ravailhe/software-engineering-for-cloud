-- Insertion des données dans la table Account
INSERT INTO Account (id, email, firstname, lastname, password_hash)
VALUES (1, 'john@example.com', 'John', 'Doe', 'hashed_password_1');

INSERT INTO Account (id, email, firstname, lastname, password_hash)
VALUES (2, 'jane@example.com', 'Jane', 'Smith', 'hashed_password_2');

-- Insertion des données dans la table Admin
INSERT INTO Admin (id, id_account)
VALUES (1, 1);

-- Insertion des données dans la table Patient
INSERT INTO Patient (id, id_account)
VALUES (1, 2);

-- Insertion des données dans la table Tutor
INSERT INTO Tutor (id, id_account)
VALUES (1, 1);

-- Insertion des données dans la table Prescription
INSERT INTO Prescription (id, message, id_tutor)
VALUES (1, 'Prendre ce médicament une fois par jour.', 1);

-- Insertion des données dans la table Schedule_take
INSERT INTO Schedule_take (id, take_day, take_hour, quantity, id_prescription)
VALUES (1, '2023-06-12', '09:00:00', 1, 1);

-- Insertion des données dans la table Account
INSERT INTO Account (id, email, firstname, lastname, password_hash)
VALUES (3, 'emma@example.com', 'Emma', 'Johnson', 'hashed_password_3');

-- Insertion des données dans la table Admin
INSERT INTO Admin (id, id_account)
VALUES (2, 3);

-- Insertion des données dans la table Patient
INSERT INTO Patient (id, id_account)
VALUES (2, 1);

-- Insertion des données dans la table Tutor
INSERT INTO Tutor (id, id_account)
VALUES (2, 2);

-- Insertion des données dans la table Prescription
INSERT INTO Prescription (id, message, id_tutor)
VALUES (2, 'Take this medication twice a day.', 2);

-- Insertion des données dans la table Schedule_take
INSERT INTO Schedule_take (id, take_day, take_hour, quantity, id_prescription)
VALUES (2, '2023-06-13', '14:00:00', 2, 2);
