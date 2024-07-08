const express = require("express")
const app = express()

const PORT = 3000

app.get("/users", (req, res) => {
    res.send("Here are all the users")
})

app.get("/users/:id", (req, res) => {
    res.send(`Here is the user ${req.params.id}`)
})

app.post("/users", (req, res) => {
    res.send("User created")
})

app.put("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} updated`)
})

app.delete("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} deleted`)
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})