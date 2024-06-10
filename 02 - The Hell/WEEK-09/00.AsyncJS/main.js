
console.log("Program Start")

let a = 1
let b = 2

console.log(`Variable a (${a}) and b (${b}) are declared`)

const sum = (num1, num2) => {
    console.log(`I'm inside a function`);
    return num1 + num2
}

console.log("function not declared but not called yet")

console.log(sum(a, b))

setTimeout(() => {
    console.log("I ran after 2 sec")
}, 2000)

console.log("function was called")

for(let i = 0; i < 3 ; i++) {
    console.log(`I am inside the loop. I am turn ${i}`)
}

console.log("end of program")

/*************************************************** */

let str = "Start"

setTimeout(() => {
    str = "finish"
}, 2000)

console.log(str)