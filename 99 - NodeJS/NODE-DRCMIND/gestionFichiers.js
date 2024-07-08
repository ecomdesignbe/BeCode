const { error } = require('console')
const fs = require('fs')

// gestion/création dossier
/*
if(fs.existsSync('./mesFichiers')) {
    // console.log('le dossier exite déjà')
    fs.rmdir('./mesFichiers', (erreur) => {
        if(erreur) {
            console.log(erreur)
        } else {
            console.log('dossier supprimé avec succès')
        }
    })
} else {
    fs.mkdir('./mesFichiers', (erreur) => {
        if(erreur) {
            console.log(erreur)
        } else {
            console.log('dossier crée avec succès')
        }
    })
}
*/

// création de fichier
/* fs.writeFile('./mesFichiers/fichier1.txt', 'Bonjour je développe en NodeJS', () => {
    console.log('création du fichier avec succès')
})
*/

// lecture de fichier
/* fs.readFile('./mesFichiers/fichier1.txt', (erreur, donnee) => {
    if(erreur) {
        console.log(erreur)
    } else {
        console.log(donnee.toString())
    }
})
*/

// suppression de fichier
if(fs.existsSync('./mesFichiers/fichier1.txt')) {
    fs.unlink('./mesFichiers/fichier1.txt', (erreur) => {
        if(erreur) {
            console.log(erreur)
        } else {
            console.log('le fichier a été supprimé')
        }
    })
} else {
    console.log('Impossible de supprimer un fichier inexistant')
}
