/*
Write some code that logs to the console the url you entered and the method you used.
Enter the URL localhost:3000/about in your browser and check the console.
Now, create a response with a Header that sets the content-type to text/plain. (That means we are sending plain text to the browser. Not html, or json, or something else. Just text)
The text of the response should be Hello from the server
Enter localhost:3000 in your browser to see the result.
In your browser inspector, inside of Network, check the Headers of the request and make sure the Content-Type is indeed text/plain


const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Server created')
    res.setHeader('content-type', 'text/plain')
    res.write('Hello from the server')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Listen on port 3000')
})
*/

/* 
Set the Header to accept html as the content type.
Send some html : an h1 saying This is my awesome title from the server and an anchor tag saying I am an anchor tag that goes to /services
Check in your browser. You'll see that you can click on the anchor tag and you'll get the same page (it's the only response we give to any request on your server)

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write("<h1>This is my awesome title from the server</h1>")
    res.write("<a href='/about'>This is an anchor tag</a>")
    res.end()
});

server.listen("3000", "localhost", () => {
    console.log("Listening for request on port 3000")
});
*/

/*
Of course, this is not the way we will send HTML to our client.

We will be using external html files.

So...

Create an index.html in a folder called views
In this html, create a basic boilerplate and put some content in it.
Make that your server responds the html fil
*/

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")

    fs.readFile("./views/index.html", (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    });
});

server.listen("3000", "localhost", () => {
    console.log("Listening for request on port 3000")
})