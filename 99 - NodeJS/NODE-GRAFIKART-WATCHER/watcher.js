// LANCEMENT PROCESSUS ENFANT

import { exec ,spawn } from 'node:child_process'
import { watch } from 'node:fs/promises'

const [node, _, file] = process.argv

// const processus = spawn('dir', [], {shell: true})
function spawnNode() {
    const processus = spawn(node, [file])
    processus.stdout.pipe(process.stdout)
    /* 
    processus.stdout.on('data', (data) => {
        console.log(data.toString('utf8'))
    })
    */

    processus.stderr.pipe(process.stderr)    
    /*
    processus.stderr.on('data', (data) => {
        console.log(data.toString('utf8'))
    })
    */  
    
    processus.on('close', (code) => {
        if(code !== null) {
            process.exit(code)
        }
        /*
        if(code > 0) {
            throw new Error('Process exited :' + code)
        }
        */
    })
    return processus
}

let childNodeProcess = spawnNode()

const watcher = watch('./', {recursive:true})
for await(const event of watcher) {
    if(event.filename.endsWith('.js')) {
        // childNodeProcess.kill()
        childNodeProcess.kill('SIGKILL')
        childNodeProcess = spawnNode()
    }
}

/* 
exec('dir', (error, out, err) => {
    console.log({
        error,
        out,
        err
    })
})
*/

/*
console.log(process.argv)
[
    'C:\\Program Files\\nodejs\\node.exe',
    'D:\\GitHub\\BeCode\\99 - NodeJS\\NODE-GRAFIKART-WATCHER\\watcher',
    'app'
]
*/