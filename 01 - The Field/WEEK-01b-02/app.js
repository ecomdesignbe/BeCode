/* Practice-04b

Given the existing code at the end, can you write some code so that their values are switched around?

var a = "3"; var b = "8";

The variable a shoudl hold the value "8".

And the variable b should hold the value "3".

When the code is run, it should output:

a is 8

b is 3

Copy the bellow code into your javascript file and tun it in the browser.

Do NOT change any of the existing code.

You are NOT allowed to type any numbers.

*/

var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code here :

var c = a;
var a = b;
var b = c;

/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);


/*------------------------------------------------------------------------------------------------------------------------


/* Practice-06b

Let's get some practice working with string methods.

Copy the below code to your javascript file.

Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed. 
You will need to use two string methods that we just covered.

Bonus: Make it in one line !

Copy this code :

*/

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:

let whisper = console.log(message.toLowerCase().trim());

/* Another one :

Write a code that log to the console the last character of a string. For example : Dumbledore. But Don't count the quantity of character. 
You should write a code that could take any word and return the last character.

*/
let any_word = "Dumbledore";
let last_character = console.log(any_word.slice(any_word.lastIndexOf()));

/*
Tip :

Play with index selection and length
I've provided you with a word variable, set to "skateboard". Your goal is to use string methods on word, so that you end up with the string beard.

Use a string method to extract the "board" part of "skateboard" (using the slice method)

Replace the "o" in board with an "e" (using the replace method)

Save the result in a variable called facialHair and then log it in the console.

*/

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:

let facialHair = console.log(word.slice(5).replace("o","e"));


/*------------------------------------------------------------------------------------------------------------------------


/* Practice-08 */

const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(temperature)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

/* Now, do this :

const name = prompt("What is your name?");

alert(`Welcome ${name}!`);

Ask your user what is his name.
Ask your user how old is he.
Ask your user where does he live.
Alert a message presenting the user, his age and where he lives. 

let name = prompt("Quel est ton nom ?");
let age = prompt("Quel âge as-tu ?");
let new_city = prompt("Où vis-tu ?");
alert(`Bonjour ${name}, vous avez ${age} ans et vous habitez à ${new_city}`);

VAT
Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%. 
(prompt the price without VAT and alert the result with VAT) 

let price_without_vat = prompt("Prix sans TVA");
let calc = price_without_vat * 0.21;
let result = parseInt(price_without_vat) + calc;
alert(`Voici le prix avec tva ${result}`);

SURFACE
Surface of a circle Write an algorithm which receives the radius of a circle and calculate its surface. (prompt and alert) (serach on Google the formula to do it)
Pi * R * R ex : 3.14 * 4 * 4 = 50.24cm²

let pi = 3.14;
let radius = prompt("Quel est le rayon de votre cercle en cm?");
let surface = pi * radius * radius;
alert(`Voici la surface de votre cercle ${surface} cm²`);


CALCULATOR
Make a Calculator! using prompt(), and variables, make a program that does the following:

Prompts the user for first number.
Stores that first number
Prompts the user for the second number.
stores that number and responds with the SUM by using an alert.
BONUS: Make a program that can subtract, multiply, and also divide!

let first_number = prompt("Quel est votre premier nombre");
let second_number = prompt("Quel est votre deuxième nombre");
let sum = parseInt(first_number)+parseInt(second_number);
alert(`${first_number} + ${second_number} = ${sum}`);


/*------------------------------------------------------------------------------------------------------------------------


/* Practice-10 */

/* question A
true && !false; > true

// question B
false && true; > true --> FALSE

// question C
!false && !false; > true

// question D
5 > 3 && !(2 > 1); > false

// question E
true && !(1 == "1"); > false

// question F
5 !== "5" || false; > true

// QUESTION 1
!0 && true; > true

// QUESTION 2
const a = null;
const b = undefined;
const c = 4; 

(!a && b) || c; > true

// QUESTION 3

a == b && c; > false --> TRUE

// QUESTION 4

!b && "Hello" && c; > true

/*------------------------------------------------------------------------------------------------------------------------


/* Practice-11b 

Ok... Let's practice !

You will write a little program that, when the user enters the browser, it prompts some questions about the user.
name
which do you prefer, cats or dogs ?

Then, the browser should greet the user and make a comment about cats if he prefers cats or dogs if he prefers dogs.


let name = prompt("Quel est votre nom ?");
let cats = 'chat';
let dogs = 'chien';
let preference = prompt("Quel est votre animal préféré : chat ou chien");

if(preference == cats) {
    alert(`Miaou Miaou ${name} vous aimez les ${cats}`);
}
else if(preference == dogs) {    
    alert(`Wouaf Wouaf ${name} vous aimez les ${dogs}`);
}
else {
    alert(`Aucun animal renseigné`);
}


Follow the instructions for this next exercise. You will have to check your console to have the result.

const mystery = "P777777"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
    console.log("YOU GOT IT!!!");
} else {
    console.log("TRY AGAIN");
}


Make a keyless car! This car will only let you drive if you are over 18. Make it do the following:
using prompt() and alert(), ask a user for their age.
IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off"
IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!"
IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let age = prompt('Quel est votre âge ?');

if(age < 18) {
    alert(`Sorry, you are too young to drive this car. Powering off`)
}
else if (age == 18) {
    alert(`Congratulations on your first year of driving. Enjoy the ride!`)
}
else (
    alert(`Powering On. Enjoy the ride!`)
)

What fruit?

Ask the user what is his favorite fruit.
If it's bananas, tell him you like bananas as well.
If it's strawberry, tell him you LOVE strawberries.
If it's grape, aks him if he prefers purple or green grapes.
    If it's purple, tell him you don't like purple grapes.
    If it's green, tell him green grapes are ok...
    If it's not purple or green, tell him you don't understand.
If it's another thing, tell him you don't understand the word he said (displaying the word he said).
Think like a programmer !

DRY !!!!! (Don't Repeat Yourself).
What if the person puts Bananas instead of bananas ?
Try to think the more efficient way to get to your goal.

let favorite_fruit = prompt('what is your favorite fruit ? bananas/strawberry/grape/another');

if(favorite_fruit == "bananas" || favorite_fruit == "Bananas") {
    alert(`i like bananas as well`);
}
else if(favorite_fruit == "strawberry") {
    alert(`i love strawberries`);
}
else if(favorite_fruit == "grape") {
    
    favorite_fruit = prompt('purple or green');
    
    if(favorite_fruit == "purple") {
        alert(`i don't like purple grapes`);
    }
    else if(favorite_fruit == "green") {        
        alert(`i like green grapes`);
    }
    else {        
        alert(`i don't understand`);
    }
}
else {
    alert(`i don't understand your fruit ${favorite_fruit}`);
}


/*------------------------------------------------------------------------------------------------------------------------


/* Practice-12b 

Array access practice

I've provided you with a leaderboard array, which consists of 4 strings. Without touching line 1, please make the following changes:

Unfortunately, I misspelled the 2nd name in the leaderboard array. I meant to write "Luna" instead of "Lua". Please update it to "Luna" (without changing line 1)

Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" 
(once again, please do this without changing line 1)

*/

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

leaderboard[1] = "Luna";
console.log(leaderboard);

leaderboard.splice(leaderboard.lastIndexOf(),1,"Draco");
console.log(leaderboard);

/* 
Selection of elements

Create an array that should look like suche : ["one","two","three"]

In order to do that, only do manipulations from this folowing array :

const initialArray = [
    null,  true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,"I am a big bad wolf",
    ["one"],
];

console.log(initialArray);

https://www.jstips.co/en/javascript/flattening-multidimensional-arrays-in-javascript/ 
let newArray = [].concat.apply([], initialArray); 
console.log(newArray);

var myNewArray = initialArray.flat();
console.log(myNewArray);

Push/Pop/Shift/Unshift Practice

I've provided you with an array called planets. Unfortunately, 
I'm an idiot who doesn't know much about our solar system and I made some mistakes. 
Please help me fix the planets array! Using the array methods we just learned...

Remove the first element, The Moon, from the planets array. The moon is not a planet!

Add in Saturn at the very end of the planets array

Add Mercury as the first element in the planets array.

At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

*/

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift(0);
planets.push('Saturn');
planets.unshift('Mercury');
console.log(planets);

/*------------------------------------------------------------------------------------------------------------------------


/* Practice-13 

Our First Object Exercise

It's time to practice creating your own object literal. Please define a new variable called product. It should be an object literal with the following properties:

name - set to the string "iPhone 15"

inStock - set to the boolean true

price - set to the number 1249.90

includedInPackage - set to an array of at least three strings like ["case", "earphones", "charger"]

Now, log to the console the second item included in the package that this iPhone product comes with.

*/

var product = {
    name : "iPhone 15",
    instock : true,
    price: 1249.90,
    includedInPackage : ["case", "earphones", "charger"]
};

console.log(product);

/* Object Access Exercise

Your task to is to create a variable named fullAddress that points to a string using the information from restaurant.

fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object. 
Make sure to add any necessary commas or spaces between the values as seen in the exact expected output format shown below.

To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.

For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
"64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output format of the fullAddress string (keep an eye on the commas and/or spaces between the values and match that too!)

Finally, log to the console the value of fullAdress
*/

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};

  //YOUR CODE GOES DOWN HERE:

let fullAddress = console.log(restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode);


/*------------------------------------------------------------------------------------------------------------------------


/* Practice-16 

Even numbers
Let's try another thing... Write a code that will log to the console only the even numbers untill 20.

The goal here is to see that the increment expression doesn't have to be necessarely i++

Attention : the 0 should no be counted.

The result in your console should be :

2 4 6 8 10 12 14 16 18 20 

Now, do the same thing for odd numbers untille 20.

The result in your console should be :

1 3 5 7 9 11 13 15 17 19 

*/

for(let i = 1 ; i <= 10 ; i++) {
    console.log(i*2);    
}

for(let i = 1 ; i <= 20 ; i++) {
    console.log(i++);    
}

/*
Decrement
Let's inverse a little bit the logic.

Let's print all the multiple of 10 from 100 to 1;

The result in your console should be :

100 90 80 70 60 50 40 30 20 10

And now do another one that should print :

25 20 15 10 5 0

Another one
Let's do something else... How could I have this result on my console :

10 100 1000
*/

for(let i = 100 ; i >= 1 ; i = i - 10) {    
    console.log(i);
}

for(let i = 25 ; i >= 0 ; i = i - 5) {
    console.log(i);
}

for (let i = 10 ; i <= 1000 ; i = i * 10) {
    console.log(i);
}

/*

Little exercise
Let's create a for loop that log to the console all the items from an array but backwards.

const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
So, the console shoud print :

"bird" "cat" "dog" "zebra" "pangolim" "lion"

*/

const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];

let reverse = animals.reverse();

for(let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);    
}

const users = [
    {
        firstName: "Vito",
        lastName: "Corleone",
        },
        {
        firstName: "William",
        lastName: "Wallace",
        },
        {
        firstName: "Harry",
        lastName: "Potter",
        },
        {
        firstName: "Amadeus",
        lastName: "Mozart",
        },
        {
        firstName: "Barack",
        lastName: "Obama",
        },
    ];

for(let i = 0 ; i < users.length ; i++) {
    console.log('My full name is ' + users[i].firstName + " " + users[i].lastName);    
}

const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
];


// I can use nested loops to do that :
/*
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing

    for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    }
}
*/
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing

    for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    
    }
}


// The machine should ask the user to enter a "max number".

// Get sure the max number is indeed a number. Otherwise it should ask again tha max number.
// The machine should then choose a random number between 1 and the max number.

// Then, the machine will ask the user to guess the number

// If we enter something that is not a number, the machine should alert it's not a valid answer and ask again for a number.

// If it's not correct, the machine should tell it's not correct and if the guess should be higher or lower.

// The loop ends only when the user finds the number and then the machine says "Congratulation!" and how many attemps the user made before it guessed right.

/*
let maxNumber = parseInt(prompt("Veuillez entrer un chiffre maximum"));

while(!maxNumber){
    if(maxNumber === 0){
        maxNumber = parseInt(prompt("Veuillez introduire un chiffre autre que 0"));
    } else {
        maxNumber = parseInt(prompt("Nombre invalide"));
    }
}

let correctNumber = Math.floor(Math.random() * maxNumber + 1);

let guess = parseInt(prompt("Entez votre premier chiffre"));
let numberOfGuess = 1;

while(guess !== correctNumber) {
    if(isNaN(guess)) {
        guess = parseInt(prompt("Nombre invalide recommencer"));
    } else {
        if(guess < correctNumber) {
            guess = parseInt(prompt("Trop petit recommencer"));
            numberOfGuess++;
        } else {
            guess = parseInt(prompt("Trop grand recommencer"));
            numberOfGuess++;
        }
    }
}

alert(`Bravo ${guess} était la bonne réponse, vous l'avez fait en ${numberOfGuess} coups`);



Let's make a todo list that works only in the terminal with what we've learned so far.

Instructions :

When the user enters the page, tha machine should ask him to write down a command :

new to add a todo
list to see all the todos
delete to remove a specific todo
quit to exit de program
Use the prompt() function to ask what they want to perform.

If the user choses new, prompt again to write what is the todo. When added, log to the console that the todo was added to the list.

If the user choses list, log to the console all the todos he has inserted. It should look like this :

********* TODO LIST *********
1. Walk out the dog
2. Drink some milk
3. Learn JavaScript
4. Make exercises
etc...
If the user choses delete, prompt what is the number of the todo and delete the todo

If the user choses quit, break the loop.

The user should be able to add as many todos he wants and , each time he choses list, be, able to see all of them.

TIPS :

Use an array to store the todos and to log them to the console when we ask to list
Keep in mind that the listing of the todos should begin with 1 (after all, we are not machines that start with 0)
The whole app should live inside a loop that only breaks when we choose "quit".
Use methods like splice()
Use the concept of falsy values


let input = prompt("Que voulez vous faire ? quit / new / list / delete");

let todos = [];

while (input !== "quit") {
    if(input === "new") {
        console.clear();
        let newTodo = prompt("Inserer un todo");
        todos.push(newTodo);
        input = prompt(`${newTodo} a été ajouté. Que voulez vous faire ?`);
    } else if (input === "list") {
        console.clear();
        console.log("*************** TODOS ***************");

        for(let i = 0;  i < todos.length; i++) {
            console.log(`${i + 1} - ${todos[i]}`);
        }
        input = prompt("Que voulez vous faire ?");
    } else if (input === "delete") {
        let deleteTodoindex = parseInt(prompt("Quel todos voulez vous supprimer ? le chiffre est accepté"));

        if (!deleteTodoindex) {
            deleteTodoindex = parseInt(prompt("Veuillez entrer un nombre valide"));
        } else {
            if(todos[deleteTodoindex - 1]) {
                console.log("ce todo n'existe pas");
            }
            else {
                `${todos[deleteTodoindex - 1]} est supprimé`;
            }
            todos.splice(deleteTodoindex - 1, 1);
        }

    } else {
        input = prompt("Commande pas valide");
    }
}



Ok, so let's write our fist function !

This is a two step process : we define the function then we run (call) the function.

Once it's been declared, we can call a functions a thousand times if we want.

Declare a function that logs to the console :
console.log("DO");
console.log("RE");
console.log("MI");
console.log("FA");
console.log("SOL");
console.log("LA");
console.log("SI");
Does something happens in your console ? No ! We have to call it !

After the declaration of the function, call it myFunctionName()

Now you should see in the console the result of your function.

Now, call the function many times.

Each time you call it, it will repeat the console.log

function myFunctionName() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
    console.log("FA");
    console.log("SOL");
    console.log("LA");
    console.log("SI");
}

myFunctionName();
myFunctionName();
myFunctionName();



Exercise on functions
Let's write function that throws as many dice we want with as many faces we want.

Write a function that takes two parameters faces and times

Inside of it, log to the console times times a die with faces faces.

Console log : die 1 : result, die 2 : result for each die.

Expected result for, for example, (6, 5) (the numbers should be random of course)

"Die 1: 4"
"Die 2: 1"
"Die 3: 1"
"Die 4: 6"
"Die 5: 3"

*/

function rollDice(faces, times) {
    console.log(`Die ${times} : ${faces}`);
}

