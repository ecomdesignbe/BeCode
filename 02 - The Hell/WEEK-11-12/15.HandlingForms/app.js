/*
Exercise to handle POST forms ;)

The goal is to have a form in a specific page to encode members.

When you encode a new member, you are redirected to the main page, where you display the members encoded.

Create a server that receives GET requests for / and /add and renders its respective pages.
In your /add page, create a form that asks for your first name, last name and age.
The form should have a method of POST and it should be submitted to the page /add itself (but with POST method)
(Don't forget the requirements for a proper form action, method, name for each field...)
In your server file, create a middleware to parse urlencoded data (it can be with body-parser or the native express middleware)
In your server file, declare an empty array data
Configure a POST request for /add that will receive the data provided by the form and add it to the data array. Redirect then to /
In the main page (/), display a list of each person you added with the form. (At the end, put a link to the /add page to add more members)
Some considerations :

Very soon, we will be saving these information to a database so it persists. For now, each time you restart your server, the data will be lost (because you're declaring an empty array of data at the beggining)

In a real world scenario, we would have to perform several validations that we are not doing here.
*/

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const data = [];

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  data.push(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});