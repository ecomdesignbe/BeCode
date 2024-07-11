/*
Create a server listening to port 3000
Install EJS as a package
Register the view engine in your Node application.
Create index.ejs in your views folder and create a basic html boilerplate inside of it with an h1 "Welcome!"
Configure a request to / and respond rendering the file you created.
See ? Exactly the same result as if you were sending an HTML file.
Now, in your ejs file, create an h2 saying "It's 12h44" (but with the right time)
That means : injecting JS to get the current time and displaying it.
*/

const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen("3000", () => {
    console.log("Server running on port 3000")
})

