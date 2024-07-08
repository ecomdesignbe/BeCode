/*
Challenge :

Use the http built-in module of Node to :

create a server
listen on port 3000 for requests.
When you start listening, you should log to the console Listening for requests on port 3000
Now enter on your browser the url localhost:3000 (no response will be sent, so your browser will run infinitely)
Now, make that when you enter localhost:3000 you log to the console A request was made.
Remember that the console is the one of your computer. Not the console of the browser ! You're not sending any code to the browser yet !

Remember as well that you always have to kill the process of the server in your console and restart it to see the changes. We will see later a way to make it respond to any change in a live server way.
*/

const http = require('http')

const server = http.createServer((req, resp) => {
    console.log('Serveur crée')
})

server.listen(3000, 'localhost', () => {
    console.log('Prêt à écouter les requêtes au port 3000')
})