const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/list')

app.use(express.json())
app.set('view engine', ejs)
app.use(bodyparser.urlencoded({extended:true}))


require('./model/todo')

app.use(require('./routes/todos'))


app.listen('3000', (req, res) => {
    console.log('Server listening')
})
