/**** ALGO S4 - ADVANCED ****/

console.log("*EXO - 00 ***************************************************************")

/*
Create a functions that takes a num argument. You should then console.log all numbers from 1 to num.

But here’s the catch : multiple of 3 should print “Fizz” and multiples of 5 shoudl print “Buzz”. Lastly if the number is multiple of 3 and 5, it should print FizzBuzz

Notes
Your code should be modular. You must be able to pass any numbers as n and the code should still work.
Expected results
In the console, if the num is 20, for example :

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/

function fizzBuzz(num) {
  for(let i = 1 ; i < num+1 ; i++) {
    // si le reste de la division de a par b vaut 0, alors a est un multiple de b !
    let multipleOfThree = i % 3 
    let multipleOfFive = i % 5   

    if(multipleOfThree == 0 && multipleOfFive == 0) {
        console.log("FizzBuzz")
      }
      else if(multipleOfThree == 0) {      
        console.log("Fizz")
      } 
      else if(multipleOfFive == 0) {
          console.log("Buzz") 
      }
      else {
        console.log(i)
      }   
  }  
  return num
}

console.log(fizzBuzz(20))


console.log("*EXO - 01 ***************************************************************")

/*
Write a function called ransomNote which takes two parameters : noteText and magazineText.

The goal is : with all the words of magazineText, you should be able to create the noteText.

The function should return true if we are able to write the noteText with the words from magazineText or false if we can't.

Notes
Here are two examples :

noteText = "this is a secret note to you from a secret admirer"

magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

In the case above, it would be false. Why ? Because all the words are present, but secret appears only once in the magazineText, but there are two secret in the noteText

If the noteText was

"this is a note to you from a secret admirer"
That would work and would be true

Test your code with these text and others.
*/

/* function ransomNote(noteText, magazineText) {

}
*/
let noteText = "this is a secret note to you from a secret admirer"
let magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

console.log("*To Do ***************************************************************")

console.log("*EXO - 02 ***************************************************************")

/*

A palindrome is any word or phrase that spells the same way both backward and forward.

For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)

Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.

Notes
You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive
Expected results
isPalindrome("kayak") ---> true
isPalindrome("race car") ---> true
isPalindrome("hello world") ---> false
isPalindrome("Madam, I'm Adam") ---> true

*/

function isPalindrome (word) {
  let reversedWord = word.split('').reverse().join('')
  return word.toUpperCase().replace(/[^a-zA-Z]/g, "") === reversedWord.toUpperCase().replace(/[^a-zA-Z]/g, "")
}

console.log(isPalindrome('kayak')) // true
console.log(isPalindrome('SOS')) // true
console.log(isPalindrome('Kayak')) // true
console.log(isPalindrome('Bonjour')) // false
console.log(isPalindrome("race car")) // true
console.log(isPalindrome("hello world")) // false
console.log(isPalindrome("Madam, I'm Adam")) // true


console.log("*EXO - 03 ***************************************************************")

/*

Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.

We switch every letter with, for example, two letters before in the alphabet.

The Caesar cipher function will take two parameters str and num; 
str represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)

Notes
Make it case incensitive
You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c)
Expected results
caesarCipher("zoo keeper", 2) ----> "bqq mggrgt"

caesarCipher("bqq mggrgt", -2) ----> "zoo keeper"

caesarCipher("My name is Henrique", 3) ----> "pb qdph lv khqultxh "

*/

console.log("*To Do ***************************************************************")

console.log("*EXO - 04 ***************************************************************")

/*

Create a function that takes a string parameter and return another string with all the words inversed.

Notes
Attention !

The order of the words doesn't change, just the letters of each word
Expected results
"This is a string of words" ----> "siht si a gnirts fo sdrow"

*/

function reversedWord(phrase) {
  let reverseArrayPhrase = phrase.split(" ").map(word => word.split("").reverse().join(""))
  return reverseArrayPhrase.join(" ").toLowerCase()
}

console.log(reversedWord("This is a string of words"))


console.log("*EXO - 05 ***************************************************************")

/*

Create a function that takes an array and reverses it.

Notes
Don't use reverse()
Don't create a new array and push elements to it.

*/



console.log("*EXO - 06 ***************************************************************")

/*

Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

Your function should return every pair of numbers from numArray that adds up to the 'sum'

Notes
The result should be an array of arrays.
Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)
Expected results
// For "sum" = 7
[1, 6, 4, 5, 3, 3] ---> [[6,1], [3,4], [3,4]]


*/

console.log("*EXO - 07 ***************************************************************")

/*

Fibonacci sequence starts with 1 and 1 and the next numbers are always the sum of the last two numbers. So... Here is the sequence :

1 1 2 3 5 8 13 21 34 ...

Write a function that takes a num number and returns an array with the num first elements of the Fibonacci sequence.

Notes
Recursion would be the best way to solve it but there is another simple way.
Expected results
fibonacci(4) ----> [1, 1, 2, 3]
fibonacci(9) ----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(6) ----> [1, 1, 2, 3, 5, 8]


*/
