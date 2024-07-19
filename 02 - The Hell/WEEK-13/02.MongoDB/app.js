const express = require('express')
const { connectToDb, getDb } = require('./db')
const { ObjectId } = require('mongodb')

// init app & middleware
const app = express()
app.use(express.json())

// db connection
connectToDb((err) => {
  if(!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

// routes
app.get('/books', (req, res) => {
  // current page
  const page = req.query.p || 0
  const booksPerPage = 3


  let books = []

  db.collection('books')
    .find()
    .sort({author : 1})
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach(book => books.push(book))
    .then(()=> {
      res.status(200).json(books)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})

app.get('/books/:id', (req,res) => {

  if(ObjectId.isValid(req.params.id)) {
    db.collection('books')
    .findOne({_id: new ObjectId(req.params.id)})
    .then((doc)=> {
      res.status(200).json(doc)
    })
    .catch((err) => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
  } else {
    res.status(500).json({error: 'Not a valid document id'})
  }

})

app.post('/books', (req, res) => {
  const book = req.body

  db.collection('books')
    .insertOne(book)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({error: 'Could not create a document'})
    })

})

app.delete('/books/:id', (req,res) => {

  if(ObjectId.isValid(req.params.id)) {
    db.collection('books')
    .deleteOne({_id: new ObjectId(req.params.id)})
    .then((result)=> {
      res.status(200).json(result)
    })
    .catch((err) => {
      res.status(500).json({error: 'Could not delete the documents'})
    })
  } else {
    res.status(500).json({error: 'Not a valid document id'})
  }

})

app.patch('/books/:id', (req, res) => {
  const updates = req.body

  if(ObjectId.isValid(req.params.id)) {
    db.collection('books')
    .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
    .then((result)=> {
      res.status(200).json(result)
    })
    .catch((err) => {
      res.status(500).json({error: 'Could not update the documents'})
    })
  } else {
    res.status(500).json({error: 'Not a valid document id'})
  }

})
  


/*
First, install the necessary packages:

npm init -y
npm install express mongodb
Now, we create a simple server and connect to the database before starting to listen.
*/

/*
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const url = "mongodb://127.0.0.1:27017";
let db;

MongoClient.connect(url)
  .then((client) => {
    db = client.db("blog");
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => console.log(err));
  */

/*
See ? We start listening only when the connection to the database blog was succesfull.

Then, we can create our routes and perform some CRUD operations :
// GET ALL

app.get("/users", (req, res) => {
  const users = [];

  db.collection("users")
    .find()
    .forEach((user) => users.push(user))
    .then(() => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error fetching users" });
    });
});

// GET SINGLE BY ID

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  if (ObjectId.isValid(id)) {
    console.log("ID is valid");
    db.collection("users")
      .findOne({ _id: new ObjectId(id) })
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.json({ msg: "No user with this ID" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ msg: "error" });
      });
  } else {
    console.log("ID IS NOT VALID");
    res.json({ msg: "No user with this ID" });
  }
});

// POST USER

app.post("/users", (req, res) => {
  const newUser = req.body;

  db.collection("users")
    .insertOne(newUser)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json({ msg: "Could not post user" }));
});

// DELETE USER

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  if (ObjectId.isValid(id)) {
    db.collection("users")
      .deleteOne({ _id: new ObjectId(id) })
      .then(() => {
        res.json({ msg: "User deleted" });
      })
      .catch((err) => res.json({ msg: "Could not delete the user" }));
  } else {
    res.json({ msg: "Not a valid ID" });
  }
});

// UPDATE USER

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (ObjectId.isValid(id)) {
    db.collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: updates })
      .then((result) => res.json({ msg: "User updated", result }))
      .catch((err) => res.json({ msg: "Could not update user" }));
  } else {
    res.json({ msg: "Not a valid ID" });
  }
});
*/
