# Projet de gestion d'attribution de poste information

La conception et le développement de ce projet s'est effectué dans le cadre de la formation de Simplon. 

Ce projet utilise les technologies suivantes :

- backend : NodeJS (API)
- frontend : ReactJS

Pour l'initialisation, vous devez vérifier si vous avez bien sequelize-cli et nodemon d'installer. Si ce n'est pas le cas, vous pouvez exécuter les commandes suivantes :

- npm install -g nodemon
- npm install -g sequelize-cli

Identifiant du compte admin : 

- identifiant : admin@gmail.com
- mot de passe : 123456

## Initialisation du projet backend

Après avoir fait un git clone de ce projet, vous devez effectué les actions suivantes : 

- cd server
- npm install

Ensuite, vous devez créer et modifier le fichier .env pour les lignes suivantes : 

- DB_NAME=
- DB_USER=
- DB_PASS=
- JWT_SECRET=

Pour avoir des données dans la BDD, veuillez exécuter la commande suivante :

- npm run dataInit

## Initialisation du projet frontend

Après avoir fait un git clone de ce projet, vous devez effectué les actions suivantes : 

- cd client
- npm install

## Lancement du projet 

Vous devez démarrer le server et le client : 

- cd server && npm run dev
- cd client && npm run start
