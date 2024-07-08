import { createServer } from 'http'

createServer((req, res) => {
    res.write('Bonjour')
    console.log('Bonjour')
    res.end()
}).listen('8888')