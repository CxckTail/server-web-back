const express = require("express");
const fs = require('fs');
const path = require("path");
const app = express();
const port = 3000;

function chargerFichier(nomFichier, callback){
    fs.readFile(nomFichier,'utf8', (erreur, contenu) => {
        if(erreur){
            callback(erreur, null);
            return;
        }
        callback(null, contenu);
    });
}

var bdd = ""

chargerFichier("bdd.json", (erreur, resultat) => {
    if(erreur){
        console.error(`Erreur lors du chargement du fichier ${erreur}`);
        return;
    }
    bdd = JSON.parse(resultat);
    console.log(`Contun du fichier:`, bdd.utilisateurs[0].nom);
});

app.use(express.json());
app.use((req,res,next) => {
    console.log(`Requête reçue ${req.method} ${req.url}`);
    next();
});

const middlewareAuthentification = (req,res,next) => {
    const utilisateurAuthentifie = false;
    if(utilisateurAuthentifie){
        next();
    } else{
        res.status(401).send('Utilisateur non authentifié');
    }
};

app.get('/', (request, response) => {
    response.send('Bienvenue')
});

app.get('/utilisateur/:id', middlewareAuthentification, (req, res) => {
    const userID = req.params.id;
    var bdd = "";

chargerFichier("bdd.json", (erreur, result) => {
    if (erreur){
        console.error(`Erreur lors du chargement du fichier ${erreur}`);
        return;
    }
    bdd = JSON.parse(result);
    console.log(`Contenu du fichier :`, bdd.utilisateurs[1].nom);
});
    res.send(`L'utilisateur demandé est ${userName} et son ID est ${userID}`);
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port : ${port}`);
});