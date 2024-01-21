# Utilisez l'image officielle MySQL comme base
FROM mysql:latest

# Définissez les variables d'environnement pour le mot de passe root et le nom de la base de données
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=heal_e_database

# Exposez le port MySQL par défaut (3306)
EXPOSE 3306

# Optionnel : copiez un fichier SQL d'initialisation dans le conteneur
COPY ./heal_e_database_creation.sql /docker-entrypoint-initdb.d/
# Commande pour lancer le serveur MySQL
CMD ["mysqld"]
