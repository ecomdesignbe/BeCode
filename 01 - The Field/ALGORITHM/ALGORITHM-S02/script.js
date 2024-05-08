/**** ALGO S2 ****/

console.log("*EXO - 00 ***************************************************************")

/*
Create a function which returns the number of true values there are in an array.

Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
Expected results
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

*/

let arr = []

function countTrue(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++
        }     
    }
    return count
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))


console.log("*EXO - 01 ***************************************************************")
console.log("*RETURN FALSE ***********************************************************")

/*
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. 
If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? 

Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.
Expected results
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false

*/
let min = 1
let max = 6
let rollDice = Math.random() * (max - min) + min;
let result = Math.round(rollDice)
console.log(result)


function possibleBonus(a, b) {
    let tilesForwardA = a + result
    let tilesForwardB = b + result
    
    if(tilesForwardA == tilesForwardB) {
        console.log(tilesForwardA)
        console.log(tilesForwardB)
        return true

    } else {
        return false
    }
        
}

console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3))


console.log("*EXO - 02 ***************************************************************")

/*
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Expected results
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1

********************************************
let digits = 1305981031

console.log(digits)
console.log(typeof(digits))

let text = digits.toString()
console.log(typeof(text))

let splitDigit = text.split('');
console.log(splitDigit.length)
splitDigit = parseInt(splitDigit.length)
console.log(typeof(splitDigit))
********************************************

*/


function num_of_digits(digits) {
    let digits = ''
    let digitsToString = digits.toString()
    
}














