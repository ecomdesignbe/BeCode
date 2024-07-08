/*
For now, all our request have an unique response. (The one sent in the callback of the createServer() method)

But we want to have different responses depending on the url we entered.

Let's create a very basic website that has the home page (index.html), an about page (about.html) and also a 404 page 404.html.

Create them with its respective content.
In your server.js, create the logic that tests the url.
If the request was done to the root page (/) send the index.html, do the same for about.
If the request was done to another url, send the 404.html
Don't forget to send a status code as well. (200 for success and 404 for not found)
Last thing : if the request is sent to /about-us you should redirect to the /about url. (don't forget the status code for redirection)
*/

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.log(err)
                res.end()
            } else {
                res.write(data)
                res.statusCode = 200
                res.end()
            } 
        })
    } else if (req.url === "/about") {
        fs.readFile("./about.html", (err, data) => {
            if (err) {
                console.log(err)
                res.end()
            } else {
                res.write(data)
                res.statusCode = 200
                res.end()
                }
            })
    } else if (req.url === "/about-us") {
        res.setHeader("Location", "/about")
        res.statusCode = 301
        res.end()
    } else {
        fs.readFile("./404.html", (err, data) => {
            if (err) {
                console.log(err)
                res.end()
            } else {
                res.write(data)
                res.statusCode = 404
                res.end();
            }
        });
    }
});

server.listen("3000", "localhost", () => {
    console.log("Listening for request on port 3000")
});