// Créer une fonction simple

function NomDeLaFonction (prenom1, prenom2) {
    let name = prenom1
    let firstname = prenom2
}   return name +""+firstname;

NomDeLaFonction ("Henry", "Martin")

// Créer une fonction flechée

var MaFonction = (para1, para2) => {

}

// Mot clé THIS, this récupère l'objet Window

var func = (para1, para2) => {
    console.log("this");
}

// Fonction simple CALLBACK

function MaPremiereFonctionAsync(callback){
    console.log("Début de la fonction asynchrome");
    
    setTimeout(function(){ // Créer un temps avant de lancer un truc
      
      console.log("Fin de la fonction asynchrome");
      callback();
    } ,2000);
  }
  
  function callbackFonction(){
    console.log("La callback a été appelée !")
  }
  
  MaPremiereFonctionAsync(callbackFonction);

/*
------------------------------------------------------------------------------------

Mot clés HTTP :

------------------------------------------------------------------------------------

GET : récupérer des données / 127.0.0.1/cars/25AB487

POST : Soumettre des données 

PUT : Mettre à jour une ressource existante

DELETE : Suprimmer une ressource

HTML
XML (eXtensible Markup Language)
JSON (Java Object Notation, application/json)
Texte (PLain Text)
ormulaire (Application/x-www-form-urlencoded)
Multipart (Multipart/form-data) : envoi de fichier
Binaire (application/octet-stream)

------------------------------------------------------------------------------------

  Types de code HTTP :

------------------------------------------------------------------------------------

1xx : Informations
-100 : Le serveur est ready à recevoir la requête

2xx : SUCCES
-200 : OK
-201 : CREATED
-204 : NOCONTENT

3xx : REDIRECTION
-301 : Moved Permanently 
-304 : Not Modified

4xx : Erreur client
-400 : Bada Request
-401 : Unauthorized
-403 : Forbidden

5xx : Erreur
500 : Internal Server Error
502 : Bad Gateway
503 : Service Unavailable

1. Client envoie une requête HTTP
2. Event Loop : L'event loop qui est constament en attente d'event, lorsqu'elle recoit une requête déclenche un evènement
3. Middleware
4. Route Matching
5. Logique de votre application
6. Création de la réponse
7. Envoi un event à l'event loop
8. Transmission de la requête au client
*/
