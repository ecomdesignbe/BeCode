/**** ALGO S3 ****/

console.log("*EXO - 00 ***************************************************************")

/*
Create a function that determines whether a number is Oddish or Evenish. 
A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. 
If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Expected results
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

*/


console.log("*EXO - 01 ***************************************************************")

/*
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Expected results
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

*/



console.log("*EXO - 02 ***************************************************************")

/*
Given a string, reverse all the words which have odd length. The even length words are not changed.

Notes
There is exactly one space between each word and no punctuation is used.

Expected results
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"

*/


console.log("*EXO - 03 ***************************************************************")

/*
Carlos is a huge fan of something he calls smooth sentences.

A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins 
with an "s" and swam ends with an "m" and masterfully begins with an "m".

Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

Notes
The last and first letters are case insensitive.
There will be no punctuation in each sentence.
Expected results
isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

isSmooth("Someone is outside the doorway") ➞ false

isSmooth("She eats super righteously") ➞ true

*/



console.log("*EXO - 04 ***************************************************************")

/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Expected results
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

*/


console.log("*EXO - 05 ***************************************************************")

/*
Create a function that converts Celsius to Fahrenheit and vice versa.

Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
Look on Google how to convert F to C and vice-versa
Expected results
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"

*/



console.log("*EXO - 06 ***************************************************************")

/*
Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

Notes
Broken keys should be ordered by when they first appear in the sentence.
Only one broken key per letter should be listed.
Letters will all be in lower case.
Expected results
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

*/