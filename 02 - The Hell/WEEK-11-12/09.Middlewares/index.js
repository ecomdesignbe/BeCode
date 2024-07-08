/* 
Another exercise :

Create a server
Listen for a POST request on the root route
Make it that you must receive in the Headers an Authorization of 123
If the Headers contains the correct authorization, respond with "Hello World".
Otherwise, respond with "Not authorized"
WARNING : This is NOT the way of properly authenticate a user ! This is just for practice.

1 - npm init
2 - npm install express
3 - npm install --save-dev nodemon

const app = require("express")()

app.use((req, res, next) => {
    console.log("Inside the middleware")

    if (req.get("Authorization") === "123") {
        next();
    } else {
        res.send("Not authorized");
    }
})

app.post("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})
*/

/*
Create a server that serves an html for /, /about and /secret respectively.
For each one, send back an html page.
Caveat : the /secret page must only be showned if in the query password in the url is IAmTheBigBoss
*/

const app = require("express")()

const verifyPassword = (req, res, next) => {
const { password } = req.query

if (password === "IAmTheBigBoss") {
    next()
} else {
    res.send("Not authorized")
}
}

const root = __dirname

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root })
});

app.get("/about", (req, res) => {
    res.sendFile("./about.html", { root })
})

app.get("/secret", verifyPassword, (req, res) => {
    res.sendFile("./secret.html", { root })
})

app.use((req, res) => {
    res.sendFile("./404.html", { root })
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})