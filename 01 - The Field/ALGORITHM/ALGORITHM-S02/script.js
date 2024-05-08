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
*/


function num_of_digits(digits) { 
    let text = digits.toString()
    let splitDigit = text.split('')
    splitDigit = parseInt(splitDigit.length)
    return splitDigit
}

console.log(num_of_digits(1000))
console.log(num_of_digits(12))
console.log(num_of_digits(1305981031))
console.log(num_of_digits(0))

console.log("*EXO - 03 ***************************************************************")

/*
Write a function that converts an object into an array, 
where each element represents a key-value pair in the form of an array.

Notes
Return an empty array if the object is empty.

Expected results
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
*/

function toArray(arrayTemp) {
    var result = Object.entries(arrayTemp)
    return result
}


console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))

console.log("*EXO - 04 ***************************************************************")

/*
Create a function that takes two numbers as arguments (num, length) and returns an array
of multiples of num until the array length reaches length.

Notes
Notice that num is also included in the returned array.

Expected results
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
*/

function arrayOfMultiples(num, arrayLength) {

    let arrayMulti = []
    
    for (let i = 1; i < arrayLength+1; i++) {
        arrayMulti.push(num*i);
    }
    
    return arrayMulti
}

console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(12, 10))
console.log(arrayOfMultiples(17, 6))


console.log("*EXO - 05 ***************************************************************")

/*Create a function that takes in a number as a string n and returns the number 
without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value 
(e.g. the last three zeros in 3.4000 and 3.04000).

Leading Zeros are the zeros before a whole number which don't affect the value 
(e.g. the first three zeros in 000234 and 000230).

Notes
Return a string.
If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
If the number is 0, 0.0, 000, 00.00, etc... return "0".

Expected results
removeLeadingTrailing("230.000") ➞ "230"
removeLeadingTrailing("00402") ➞ "402"
removeLeadingTrailing("03.1400") ➞ "3.14"
removeLeadingTrailing("30") ➞ "30"
*/

