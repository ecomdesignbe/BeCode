const express = require('express')
const app = express()
const port = 3001

const morgan = require('morgan')
// Ressources statiques
app.use(express.static('public'))
app.use(morgan('dev')) // tiny

/*
app.use((req, res, next) => {
    console.log(`Requête effectuée :` + Date().toString())
    next()
})
*/

app.get('/accueil', (req, res) => {
    // res.send('Hello World!')
    res.status(200).sendFile('IHM/accueil.html', {root : __dirname})
})

app.get('/profil', (req, res) => {
    // res.send('Hello World!')
    res.status(200).sendFile('IHM/profil.html', {root : __dirname})
})

app.get('/', (req, res) => {
    res.status(300).redirect('/accueil')
})

app.use((req, res) => {
    res.status(404).sendFile('IHM/erreur.html', {root : __dirname})    
})

app.listen(port, () => console.log(`Server listening ${port}!`))