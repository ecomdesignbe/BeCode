/*
Create two js files. One called main and the other called part
In part declare an array with several strings.
The goal is that when you run main, it logs to the console the array that exists in part
*/
const part = require('./part')

console.log(part)

/* 
Little challenge :
Log to the console the operating system platform you are in.
Log to the console the home directory of your machine.
*/

const os = require('os')
console.log(os.platform(), os.homedir())

/*
The File System module
Be able to read, modify and delete files, as well as creating directories, etc. is crucial for a server. Without Node, JavaScript can't do that.

In your main.js, write some code to create a folder test and inside of it a file notes.txt. Its content should be I am a BeCode warrior
Run main.js and check if the folder and the file were created.
Then, write some code that log to the console the content of notes.txt
Run main.js again
Handle eventual errors you will get (no errors ? great !)
Now, always with node js commands, delete the file notes.txt
Delete the folder test
You might have noticed that the state of the folders/files will either work or throw an error. So write a little program that tests each time "if the folder exists, then... else..."
*/
const fs = require('fs')

if(fs.existsSync('./test')) {
    // console.log('le dossier exite déjà')
    fs.rmdir('./test', (erreur) => {
        if(erreur) {
            console.log(erreur)
        } else {
            console.log('dossier supprimé avec succès')
        }
    })
} else {
    fs.mkdir('./test', (erreur) => {
        if(erreur) {
            console.log(erreur)
        } else {
            console.log('dossier crée avec succès')
        }
    })
}

fs.writeFile('./test/notes.txt', 'I am a BeCode warrior', () => {
    console.log('création du fichier avec succès')
})

fs.readFile('./test/notes.txt', (erreur, donnee) => {
    if(erreur) {
        console.log(erreur)
    } else {
        console.log(donnee.toString())
    }
})

// suppression de fichier
if(fs.existsSync('./test/notes.txt')) {
    fs.unlink('./test/notes.txt', (erreur) => {
        if(erreur) {
            console.log(erreur)
        } else {
            console.log('le fichier a été supprimé')
        }
    })
} else {
    console.log('Impossible de supprimer un fichier inexistant')
}



const readstream = fs.createReadStream("./test/hugeText.html", {})

const writeStream = fs.createWriteStream("./test/newText.html")

readstream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----")
  console.log(chunk);

  writeStream.write("\n NEW CHUNK \n")
  writeStream.write(chunk)
});