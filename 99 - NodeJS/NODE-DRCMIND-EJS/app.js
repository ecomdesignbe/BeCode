const express = require('express')
const app = express()
const port = 3001

// définition du moteur d'affichage => TEMPLATE
app.set('view engine', 'ejs')
app.set('views', 'IHM')


//
app.get('/', (req, res) => {
    const heureConnectee = Date().toString()
    const notes = [
        {
            titre : 'Ceci est un titre',
            desc : 'Ceci est une description'
        },
        {
            titre : 'Education Physique',
            desc : 'Course à pied'
        }
    ]
    res.status(200).render('index', {heureConnectee, notes})
    // res.status(200).sendFile('./IHM/index.html', {root: __dirname})
})

app.get('/apropos', (req, res) => {
    res.status(200).render('apropos')
    // res.status(200).sendFile('./IHM/apropos.html', {root: __dirname})
})

app.use('/', (req, res) => {
    res.status(404).render('pageIntrouvable')
    // res.status(404).sendFile('./IHM/pageIntrouvable.html', {root: __dirname})
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))