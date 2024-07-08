/* 

You may have realized that if you want to link a css file to an html you are sending as a response, it won't work.

That's because the server protects automatically all our files so the public can't access them, which is a good thing !

To allow the browser to access to something, we have to specify what files (or folder/s) should be allowed to be accessed. In other words : what files should be public.

In order to do that, we can use an express built-in middleware to do that. (ok... I'll tell you its name : static)

Go find the way to create a public folder that contains CSS files and an image so you can link them to an html you are serving.
Pay attention to the path you should enter when you link a css or an image. (The public folder is considered the root)

1 - npm init
2 - npm install express
3 - npm install --save-dev nodemon
*/

const express = require('express');
const app = express();

app.use(express.static("public"))

const verifyPassword = (req, res, next) => {
    const { password } = req.query
        if (password === "IAmTheBigBoss") {
            next()
        } else {
            res.send("Not authorized");
        }
}

const root =__dirname;

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root })
})

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root })
})

app.get("/secret", verifyPassword, (req, res) => {
    res.sendFile("./views/secret.html", { root })
})

app.use((req, res) => {
    res.sendFile("./views/404.html", { root })
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})


