import {createReadStream} from 'node:fs'
import {createServer} from 'node:http'
import {json, text} from 'node:stream/consumers'

const server = createServer(async (req,res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    let body = ''
    res.write(`Bonjour ${(await json(req)).name}`)
    
    /*
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('close', () => {
        console.log(body)
        res.end()
    })
    */

    // res.write(`Bonjour ${url.searchParams.get('name')}`)
    // console.log(url)
    // console.log(req.url)
    // console.log(req.headers)
    // console.log(req.headers.accept)
    // res.write('hello')
    // const file = createReadStream('index.html')
    
    /* res.writeHead(200, {
        'content-type' : 'text/html'
    })

    file.pipe(res, {end : false})
    file.on('end', () => {
        res.end()
    })*/
    res.end()
})

server.listen('8888', 'localhost')