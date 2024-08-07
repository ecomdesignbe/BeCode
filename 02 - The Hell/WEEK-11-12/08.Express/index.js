/* 
Create a server with express
Same as we did with native Node, create a server that listens to port 3000.
When we launch the server, you should log to the console Listening to port 3000
Create a small html file that has an h1 with Home page and another page with h1 About page
When we go to port 3000 (/ and /about) in our browser, we should see the corresponding html file
Now, when we make a POST request to port 3000, you should get, in JSON, the object :
{
    school: "BeCode",
    year: "2023"
}
(use Postman in order to do a POST request)

Same as the last exercise, make that when we enter the /about-us route, we are redirected to the route /about
Check the status code of this request. (express infers the correct status code for almost every route with its method)
Now, create a 404 page in html and display it if the route doesn't exist.
In order to do that, you will have to to use the use() method. This will be seen more in depth when we'll talk about middlewares. For now, you just have to understand that the express server reads all the code untill it finds a match and then it stops.
Watch out that the status code is not infered with the use() method

1 - npm init
2 - npm install express
3 - npm install --save-dev nodemon
*/

const express = require("express")

// The "express" function returns an object that contains many methods such as 'listen', 'get', 'post', 'use', etc.
const app = express()

// 'listen' establishes a port to be listened and a callback function that fires as soon as the server is launched.
app.listen(3000, () => {
    console.log("Listening to port 3000")
})

// Just so we don't have to write down {root: __dirname} at every request
const root = __dirname

app.get("/", (req, res) => {
    res.sendFile(".index.html", { root })
})

app.get("/about", (req, res) => {
    res.sendFile(".about.html", { root })
})

app.get("/about-us", (req, res) => {
    res.redirect("/about");
})

const obj = {
    school: "BeCode",
    year: 2023,
}

app.post("/", (req, res) => {
    // Sends json back
    res.json(obj);
})
// Later, we will eventually be sending data from a database

// Remember that the code will run untill it finds a match. "use" is a match for any request. So in this case, we want to put it at the end as a "catch all"
app.use((req, res) => {
    res.status(404).sendFile("./404.html", { root });
});