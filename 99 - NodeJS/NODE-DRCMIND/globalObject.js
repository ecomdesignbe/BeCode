// console.log(global)

setTimeout(() => {
    console.log('Salut les gens')
    clearInterval(temps)
}, 2000)

let temps = setInterval(() => {
    console.log('Execution...')
}, 500)

// __dirname / __filename 
console.log('Nom du répertoire : ' + __dirname)
console.log('Nom du fichier : ' + __filename)