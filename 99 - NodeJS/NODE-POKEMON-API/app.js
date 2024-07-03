// https://www.youtube.com/watch?v=NRxzvpdduvQ&ab_channel=SimonDieny-CodeSenior
// on recupere le module express
const express = require('express') 
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const { success, getUniqueId } = require('./helper.js') // destructuration
let pokemons = require('./mock-pokemon')

// on cree une instance express = serveur web
const app = express()

// port
const port = 3000 

// création middleware Express
/* app.use((req, res, next) => {
    console.log(`URL : ${req.url}`)
    next()
}) */

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

// point de termination = endPoint
app.get('/', (req, res) => res.send(`Hello again, Express !`))

// 1 paramètre
app.get('/api/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id) 
    const message = 'Un pokemon a bien été trouvé'
    res.json(success(message, pokemon))
})

/* +eurs paramètres
app.get('/api/pokemon/:id/:name', (req, res) => {
    const id = req.params.id
    const name = req.params.name
    res.send(`Vous avez demandé le pokemon n°${id} est ${name}`)
})
*/

app.get('/api/pokemons', (req, res) => {
    // EX: nombre total de pokemon qu'il y a dans l'api rest
        // const number = pokemons.length
        // console.log(number)
        // res.send(`Il y a ${number} pokemons dans le pokedex pour le moment`)
    // res.send(`Il y a ${pokemons.length} pokemons dans le pokedex pour le moment.`)
    
    // EX: retourner une liste de donnée au format JSON
    const message = "La liste des pokemons a bien été trouvée"
    res.json(success(message, pokemons))
})

// création d'un nouveau pokemon
app.post('/api/pokemons', (req, res) => {
    const id = getUniqueId(pokemons)
    const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
    pokemons.push(pokemonCreated)
    const message = `Le pokemon ${pokemonCreated.name} a bien été crée`
    res.json(success(message, pokemonCreated))
})

// modification d'un pokemon
app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemonUpdated = { ...req.body, id: id }
    pokemons = pokemons.map(pokemon => {
        return pokemon.id === id ? pokemonUpdated : pokemon
    })
    const message = `Le pokemon ${pokemonUpdated.name} a bien été modifié`
    res.json(success(message, pokemonUpdated))
})

// suppression d'un pokemon
app.delete('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemonDeleted = pokemons.find (pokemon => pokemon.id === id)
    pokemons.filter(pokemon => pokemon.id !== id)
    const message = `Le pokemon ${pokemonDeleted.name} a bien été supprimé`
    res.json(success(message, pokemonDeleted))
})

//on démarre le serveur
app.listen(port, () => console.log(`Notre application Node est démarée sur http://localhost:${port}`))