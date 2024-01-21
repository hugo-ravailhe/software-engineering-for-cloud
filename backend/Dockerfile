# Utilisez l'image Node.js avec la version souhaitée
FROM node:18-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers du backend dans le conteneur
COPY . .

# Exposez le port sur lequel votre serveur Node.js écoute
EXPOSE 3001

# Commande pour lancer le backend (ajustez-la selon les besoins de votre application)
CMD ["npm", "start"]
