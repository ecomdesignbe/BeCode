/* 
Use JavaScript to generate exactly 100 buttons and append it to the container div.

Inside each button there has to be a text "I am button 1", 2, 3, 4 etc.

Also, change the h1 text to There are a lot of buttons here !

Lastly... make the buttons appear and the text changes only after 2 seconds (we saw setTimeOut() already)
*/

let div = document.querySelector("div")

setTimeout(function () {
    let i = 0
    while(i < 100) {
        let buttonDiv = document.createElement("button")
        
        div.appendChild(buttonDiv).innerHTML = 'i am button ' + i
        i++
    }
}, 2000);
let h1 = document.querySelector('h1')
let newH1 = h1.innerText = 'There are a lot of buttons here !'




