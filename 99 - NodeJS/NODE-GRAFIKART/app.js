///////// Lecture fichier

/* 
import fs from 'node:fs'
const content = fs.readFile('demo.txt', {encoding: 'utf8'}, function (err, content) {
    console.log(content)
})
console.log('hello')

//
import {readFile} from 'node:fs/promises'
const content = await readFile('demo.txt', {encoding: 'utf8'})
console.log(content)
console.log('hello')
//

import {readFile} from 'node:fs/promises'
const content = await Promise.all([
    readFile('demo.txt', {encoding: 'utf8'}),
    readFile('app.js', {encoding: 'utf8'})
])
console.log(content)
console.log('hello')


///////// Ecriture fichier > writeFile / copyFile / unlink / stat
/*
import {writeFile} from 'node:fs/promises'

await writeFile('demo.txt', 'bonjour les gens', {
    flag : 'a' // n'ecrase pas 
})


///////// Ouverture fichier
import {open} from 'node:fs/promises'
const file = await open('demo.txt', 'a')
file.write('hello')
file.close()


///////// Observe l'ouverture du fichier
import {watch} from 'node:fs/promises'
const watcher = watch('./')
for await (const event of watcher) {
    console.log(event)
}
*/

import { readdir, stat } from 'node:fs/promises'
/*
const files = await readdir('./', {withFileTypes: true})

for(const file of files) {
    const parts = [
        file.isDirectory() ? 'D' : 'F',
        file.name
    ]
    if(!file.isDirectory()) {
        const {size} = await stat(file.name)
        parts.push(`${size} o`)
    }    
    console.log(parts.join(' - '))
}
*/
const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))
console.time('code')
const files = await readdir('./', {withFileTypes: true})
await Promise.allSettled(
    files.map(async (file) => {
        const parts = [
            file.isDirectory() ? 'D' : 'F',
            file.name
        ]
        if(!file.isDirectory()) {
            const {size} = await stat(file.name)
            parts.push(`${size} o`)
        }    
        console.log(parts.join(' - '))
    })
)
console.timeEnd('code')

