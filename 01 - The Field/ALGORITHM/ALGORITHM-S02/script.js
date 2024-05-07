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
