/*
    Exercices conditions
    
    Système de recommandation
    20:56 - Créer un système de recommandation qui conseille le bon film en fonction de l'âge de l'utilisateur

    Si l'utilisateur a moins de 13 ans (13 ans inclu) on lui affichera "Lilo & Stitch"
    Si l'utilisateur a plus de 13 ans et moins de 18 ans (strictement) on lui affichera "Matrix" (je sais c'est un peu jeune)
    Si l'utilisateur a plus de 18 ans on lui affichera "Evil Dead"

    const userAge = prompt('Quel est ton age')

    if (userAge <= 13) {
        console.log('Lilo & Stich')
    } else if(userAge > 13 && userAge <= 18) {
        console.log('Matrix')
    }   else {
        console.log('Evil Dead')
    }

    const currentYear = 2024
    const birthyear = prompt('Quel est votre année de naissance ?')
    Ecrire votre code ici, afficher le film à l'aide de console.log('votre réponse')
    const age = currentYear - birthyear; 

    if(age <= 13) {
        console.log('Lilo & Stich') 
    } else if (age < 18) {
        console.log('Matrix')
    } else {
        console.log('Evil Dead');
    }

***********************************************************************************************************************************************

    Multiplication
    25:40 - On souhaite créer une calculatrice simplifiée qui est capable de multiplier 2 nombres et 
    de nous donner le signe du résultat. L'objectif est d'afficher nombre1 x nombre2 = resultat est positif

    On commencera avec la base suivante

    const a = prompt('Entrez un premier nombre')
    const b = prompt('Entrez un second nombre')

    const calculatrice = a * b;

    if(calculatrice > 0) {
        console.log(a + ' x ' + b + '= resultat postif = ' + calculatrice)
        console.log(`${a} x ${b} = resultat positif ${calculatrice}`)
    } else {
        console.log(a + ' x ' + b + '= resultat negatif = ' + calculatrice);
        console.log(`${a} x ${b} = resultat negatif ${calculatrice}`)
    }

***********************************************************************************************************************************************

    Décompte
    08:18 - Pour cet exercice on demandera à l'utilisateur (à l'aide de prompt) un nombre à l'utilisateur entre 0 et 10, 
    on affichera ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0). 
    Si l'utilisateur rentre un chiffre erroné on affichera un message d'erreur.

    let number = prompt('Entrez un nombre')

    if (number > 10 || number < 0) {

        console.log("Le nombre n'est pas entre 0 et 10")

    } else {

        for (let i = number; i >= 0; i--) {

            console.log(i)

        }

    }

***********************************************************************************************************************************************

    Deviner le chiffre
    12:53 - On créera une variable guess qui contiendra un nombre entre 0 et 10, 
    l'objectif sera ensuite de faire deviner ce chiffre à l'utilisateur. 
    Si l'utilisateur se trompe on lui donnera une indication "plus" ou "moins" pour l'orienter vers la bonne réponse.


    let guess = 8;
    let searchNumber = prompt('Entrez un chiffre à deviner');

    while(searchNumber != guess) {
        searchNumber = prompt('Devinez le bon chiffre')

        if(guess < searchNumber) {
            prompt('le chiffre a trouvé est plus petit')
        } 
        
        else if (guess > searchNumber) { 
            prompt('le chiffre a trouvé est plus grand') 
        }
        
        else {
            console.log('Bravo') 
        }
    }

    const guess = 8
    while(true) {
        const chiffre = prompt('Votre chiffre') * 1
        if (chiffre < guess) {
            console.log('Plus')
        } else if (chiffre > guess) {
            console.log('Moins')
        } else {
            break
        }
    }
    console.log('Bravo ! vous avez deviné')

***********************************************************************************************************************************************

    Exercices Fonctions
    Deviner le nombre
    24:20 - On crée un nombre aléatoire entre 0 et 10, ensuite on demandera à l'utilisateur de deviner ce nombre avec 3 essais. 
    
    Pour créer la logique on utilisera des fonctions spécifiques

    Une fonction isRight(n) qui renverra un booléen si l'utilisateur à la bonne réponse ou non
    
    Une fonction guess() qui permet de faire un essai, cette fonction renverra true ou false en fonction de la réponse donnée

    Voici le début du code
    const solution = Math.floor(Math.random() * 11)


    const solution = Math.floor(Math.random() * 11) // cree le nombre aléatoire en 0 et 10
    
*/

/* 
Décompte
08:18 - Pour cet exercice on demandera à l'utilisateur (à l'aide de prompt) un nombre à l'utilisateur entre 0 et 10, 
on affichera ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0). 
Si l'utilisateur rentre un chiffre erroné on affichera un message d'erreur.!!

let userNumber = prompt("Entrer un nombre compris entre 0 et 10");

console.log(userNumber);

if(userNumber > 10) {
    alert("Chiffre erroné");
} else {
    while(userNumber >= 0) {
        console.log(userNumber--);
    }
}


Deviner le chiffre
12:53 - On créera une variable guess qui contiendra un nombre entre 0 et 10, l'objectif sera ensuite de faire deviner ce chiffre à l'utilisateur. 
Si l'utilisateur se trompe on lui donnera une indication "plus" ou "moins" pour l'orienter vers la bonne réponse.


let guess = Math.round(Math.random()*10);

let userNumber = prompt("Entrer un chiffre entre 0 et 10");

while(userNumber != guess) {
    
    if(userNumber < guess) {
        console.log("Plus");
        userNumber = prompt("Entrer un chiffre entre 0 et 10");
    } else if(userNumber > guess) {
        console.log("Moins");
        userNumber = prompt("Entrer un chiffre entre 0 et 10");
    } 
} console.log("Bravo");



function canDrive(age, pays) {
    if((age >= 18 && pays === 'FR') || (age >= 16 && pays === 'US')){
        return true;
    } else { 
        return false;
    }
}

console.log(canDrive(16, 'FR'));

exercices :

Deviner le nombre
24:20 - On crée un nombre aléatoire entre 0 et 10, ensuite on demandera à l'utilisateur de deviner ce nombre avec 3 essais. 

Pour créer la logique on utilisera des fonctions spécifiques

Une fonction isRight(n) qui renverra un booléen si l'utilisateur à la bonne réponse ou non
Une fonction guess() qui permet de faire un essai, cette fonction renverra true ou false en fonction de la réponse donnée


const solution = Math.floor(Math.random() * 11);
let nombre = prompt("Veuillez choisir un nombre");

function isRight(nombre) {
    if(nombre == solution) {
        console.log("Bien joué");
    } else {
        console.log("Pas bon");
        guess();    
    }   
}

function guess() {
    for(let count = 1 ; count <= 3 ; count++) {
        let nombre = prompt("Veuillez choisir un nombre");        
    }
}

isRight(nombre);
console.log(`${solution} // ${nombre}`);

// Corrigé 

const solution = Math.floor(Math.random() * 11)
function isRight (n) {
    return solution === n
}
function guess () {
    const number = prompt('Entrez un nombre') * 1
    return isRight(number)
}
for (i = 0; i < 3; i++) {
    if (guess()) {
        console.log('Bravo !')
        break
    } else if (i === 2) {
        console.log('Vous avez perdu :(')
    }
}

31:17 - Créer une fonction isPremier() qui permet d'indiquer si un nombre est premier

let n = prompt("entrer un nombre");
function isPremier(n) { 
    if (n <= 1) { 
        console.log("ce nombre n'est pas premier");
    }

    if (n === 2) {         
        console.log("ce nombre est premier");
    }

    for (let i = 2; i < n; i++) { 
        if (n%i === 0) {
            console.log("ce nombre n'est pas premier"); 
        }
    }     
    console.log("ce nombre est premier"); 
}

// corrigé

function isPremier(n) {
    if (n < 2) {
        return false
    }
    // On parcours tous les nombres de n jusqu'à 2 dans la variable i
    for (let i = n - 1; i > 1; i--) {
        // On regarde si le nombre est divisible par i
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log('0', isPremier(0)) // false
console.log('1', isPremier(1)) // false
console.log('2', isPremier(2)) // true
console.log('3', isPremier(3)) // true
console.log('11', isPremier(11)) // true
console.log('12', isPremier(12)) // false


***********************************************************************************************************************************************

Pratiquons les fonctions

Palindrome
00:30 - L'objectif de cet exercice est de créer une fonction isPalindrome() 
qui renverra vrai si un mot est un palindrome et false sinon. 
La fonction ne sera pas sensible à la casse.

console.log(isPalindrom('kayak')) // true
console.log(isPalindrom('SOS')) // true
console.log(isPalindrom('Kayak')) // true
console.log(isPalindrom('Bonjour')) // false
Pour cet exercice vous aurez besoin d'utiliser des fonctions que l'on n'a pas encore vues 
mais c'est l'occasion d'essayer de voir comment lire la documentation :

split / reverse / join / toUpperCase

let word = "hello";
    
function isPalindrom() {
    let wordSplit = word.split('');
    let wordReversed = wordSplit.reverse();
    let wordJoin = wordReversed.join('');
    
    if(word === wordJoin) {
        return true;
    }
    else {
        return false;
    }
}

console.log(word)
console.log(isPalindrom(''))
// Corrigé

function isPalindrome (word) {
    const reversedWord = word
        .split('')
        .reverse()
        .join('')
    return word.toUpperCase() === reversedWord.toUpperCase()
}

console.log(isPalindrom('kayak')) // true
console.log(isPalindrom('SOS')) // true
console.log(isPalindrom('Kayak')) // true
console.log(isPalindrom('Bonjour')) // false

Moyenne
08:03 - Dans cet exercice on souhaite modifier l'objet 
suivant pour ajouter une propriété moyenne qui contiendra la moyenne de chaque élève.

Une fois cet objet modifié on créera un top 3 des élèves.

Pour cet exercice vous aurez besoin de la fonction sort.

*/
const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

console.log()


