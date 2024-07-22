const express = require('express')
const app = express()
const db = require('./models')
const { Users } = require('./models')

const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const {createTokens, validateToken} = require('./JWT')

app.use(express.json())
app.use(cookieParser())

app.post('/register', (req, res) => {
    // res.json("register")
    const { username, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        }). then(() => {
            res.json('User registered')
        }).catch((err)=>{
            if(err) {
                res.status(400).json({error : err})
            }
        })

    })
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await Users.findOne({where : { username : username }})

    if (!user) res.status(400).json({ error : `User doesn't exist`})

    const dbPassword = user.password
    bcrypt.compare(password, dbPassword).then((match) => {
        if(!match) {
            res
                .status(400)
                .json({error : `Wrong username and password combinations`})
        } else {

            const accessToken = createTokens(user)

            res.cookie('access-token', accessToken, {
                maxAge: 60*60*24*30*1000, // 30days
                httpOnly: true
            })

            res.json('Logged in')
        }
    })    

})

app.get('/profile', validateToken, (req, res) => {
    res.json('profile')
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    })
})
