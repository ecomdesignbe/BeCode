/*
Let's create an API !

There is only one missing piece : the database.

So we are going to adopt the same strategy as the last exercise : creating an empty array each time the server is started and then update it.

Otherwise, we'll try to do our best to get the closest possible of a real api. :)

The goal here is to retrieve, add, update and delete (CRUD) a list of users for our web application.

The user structure should be :

{
    id: "KUGF-57JNJ-JFNJDK-OUH3",
    username: "Glouglou43",
    firstName: "Henrique",
    lastName: "Vieira",
    age: 35,
    isAdmin: true,
}
Don't need to create views. The API will work solely based on JSON. The interactions will be handled by Postman (or any other http client).

The route of the API must be :

GET /api/users GET /api/users/:id POST /api/users PUT /api/users/:id DELETE /api/users/:id

Creating an API can be quite fun. The more tedious part is all the verification that goes with it (error handling). As programmers, we must think of all actions from the user (including all the errors that can happen) and know how to handle it.

If the user make a bad request, we must send an error message explaining why it can't work ("all required fields are not filled" in case of a bad POST request, for example). A 404 "This route doesn't exist"... "The user with id x doesn't exist"...

Specifications :

The GET requests are public.

POST, PUT and DELETE must have an api_key in the params. (So : http://localhost:3000/api/users?api_key=blabla)

To POST, pass the info in the body of the request and verify if all the entries are correctly entered (all fields are required. The ID should be unique : use the package UUID).
Any questions are welcome and can be added in this chapter afterwards.
*/

const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const app = express()
const PORT = 3000

app.use(bodyParser.json())

let users = []

// Middleware to check for API key in POST, PUT, DELETE requests
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.query.api_key
    if (!apiKey || apiKey !== 'ecomdesign') {
        return res.status(403).json({ error: 'Forbidden. Invalid or missing API key.' })
    }
    next()
}

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users)
})

// GET user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: `User with ID ${req.params.id} not found.` })
    }
    res.json(user)
})

// POST new user
app.post('/api/users', apiKeyMiddleware, (req, res) => {
    const { username, firstName, lastName, age, isAdmin } = req.body;
    if (!username || !firstName || !lastName || typeof age !== 'number' || typeof isAdmin !== 'boolean') {
        return res.status(400).json({ error: 'All fields are required and must be valid.' })
    }
    const id = uuidv4()
    const newUser = { id, username, firstName, lastName, age, isAdmin }
    users.push(newUser)
    res.status(201).json(newUser)
})

// PUT update user by ID
app.put('/api/users/:id', apiKeyMiddleware, (req, res) => {
    const { id } = req.params
    const { username, firstName, lastName, age, isAdmin } = req.body
    const userIndex = users.findIndex(u => u.id === id)
    if (userIndex === -1) {
        return res.status(404).json({ error: `User with ID ${id} not found.` })
    }
    if (!username || !firstName || !lastName || typeof age !== 'number' || typeof isAdmin !== 'boolean') {
        return res.status(400).json({ error: 'All fields are required and must be valid.' })
    }
    users[userIndex] = { id, username, firstName, lastName, age, isAdmin }
    res.json(users[userIndex])
});

// DELETE user by ID
app.delete('/api/users/:id', apiKeyMiddleware, (req, res) => {
    const { id } = req.params
    const userIndex = users.findIndex(u => u.id === id)
    if (userIndex === -1) {
        return res.status(404).json({ error: `User with ID ${id} not found.` })
    }
    const deletedUser = users.splice(userIndex, 1)
    res.json(deletedUser[0])
})

// Handle 404
app.use((req, res) => {
    res.status(404).json({ error: 'This route doesn\'t exist.' })
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running`)
})
