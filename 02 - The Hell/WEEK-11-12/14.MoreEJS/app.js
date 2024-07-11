/*
Take the following array of objects. Put it inside your server.js and pass it into the view. In the view, create a div for each element with an h3 for the title, a p for the description and a small for the author. Put an hr at the end to separate them.

const posts = [
  {
    title: "Post one",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "King Philippe",
  },
  {
    title: "Post two",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Barack Obama",
  },
  {
    title: "Post three",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Nelson Mandela",
  },
];

Verify first if the array is empty or not. If it is, display "no posts found" (in order to test it, delete the content of the array)

*/

const express = require("express")

const app = express()

app.set("view engine", "ejs", "partials")


app.get("/", (req, res) => {
    res.render("index", { posts, title: 'Home' })
})

app.get('/about', (req, res) => {
    res.status(200).render('about', { title: 'About' })
})

app.get('/contact', (req, res) => {
    res.status(200).render('contact', { title: 'Contact' })
})

app.use('/', (req, res) => {
    res.status(404).render('404', { title: '404 ERROR WwWtF' })
})

const posts = [
    {
        title: "Post one",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "King Philippe",
    },
    {
        title: "Post two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Barack Obama",
    },
    {
        title: "Post three",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Nelson Mandela",
    },
]

app.listen("3000", () => {
    console.log("Server running on port 3000")
})
