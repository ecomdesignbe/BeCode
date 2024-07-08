const http = require('http')

const fs = require('fs')

const serveur = http.createServer((requete, reponse) => {
    console.log('Serveur crée')
    console.log(requete.method)
    console.log(requete.url)

    // définition de l'entete
    reponse.setHeader('content-type', 'text/html')

    // définition de la reponse selon la demande du client

    let fichier = ""

    reponse.write("<head><meta charset='UTF8'></head>")
    if(requete.url === "/accueil") {
        fichier = "./IHM/accueil.html"
        // reponse.write(`<h1>Accueil</h1><p>Bienvenue sur l'accueil</p>`) 
        // console.log(`Bienvenue sur l'accueil`) */
    } else if (requete.url === "/profil") {
        fichier = "./IHM/profil.html"
        // reponse.write(`<h1>Profil</h1><p>Vous êtes un dev backend</p>`) 
        // console.log(`Vous êtes un dev backend`) 
    }
    else {
        fichier = "./IHM/erreur.html"
        // reponse.write('<h1>404</h1><p>URL non valide</p>') 
        // console.log('URL non valide') */
    }
    // finalisation de la réponse
    // reponse.end()

    // lecture du fichier html et envois de la réponse
    fs.readFile(fichier, (erreur, donnee) => {
        if(erreur) {
            console.log(erreur)
            reponse.end()
        } else {
            reponse.end(donnee)
        }
    })     
})

serveur.listen(3001, 'localhost', () => {
    console.log('Prêt à écouter les requêtes au port 3001')
})
