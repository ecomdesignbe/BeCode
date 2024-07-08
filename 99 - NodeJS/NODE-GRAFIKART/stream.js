/*
import {readFile, writeFile} from 'node:fs/promises'
const content = await readFile('video.MOV')
await writeFile('video-copy.MOV', content)
*/

import { createReadStream, createWriteStream } from 'node:fs'
import { stat } from 'node:fs/promises'

const stream = createReadStream('video.MOV')
/*
stream.on('data', (chunk) => {
    console.log(chunk.length)
})
stream.on('close', (chunk) => {
    console.log('close')
})

//
const {size} = await stat('video.MOV')
let read = 0
stream.on('data', (chunk) => {
    read += chunk.length
    console.log(Math.round(100 * read / size))
})
stream.on('close', (chunk) => {
    console.log('close')
})
*/

const writeStream = createWriteStream('video-copy.MOV')
stream.pipe(writeStream)
