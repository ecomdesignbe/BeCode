/*
With the object JSON (we will see what json are later on) you can use two methods :

JSON.stringify(); // Converts your javascript value to a string.

JSON.parse(); // Converts your string to a javascript value.
So :

const myArr = [1, true, "hello"];
const myStringFromArr = JSON.stringify(myArr);

console.log(myStringFromArr);

// Will log the string : "[1, true, 'hello']". This is a string !

myArrBackFromStr = JSON.parse(myStringFromArr);

console.log(myArrBackFromStr);

// Will log the array [1, true, 'hello']. This is an array ! 

TRY FOR YOURSELF !

Create an array in your javascript
Use the method JSON.stringify on this array.
Log to the console the type of the value (remember an array is an object)
You'll see it's a string.
Now, convert back this string to a javascript value using JSON.parse
Log to the console the type of the value
You'll see it's an object now ;)
We will have to use this strategy for our next challenge : a TODO list !
*/

let arr = ["hello", "world", 303, false]

let toStringnify = JSON.stringify(arr)

console.log(toStringnify) 

let backParse = JSON.parse(toStringnify)

console.log(backParse)

