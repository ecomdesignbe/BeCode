/* 

Exercise 1
Given this markup :

<h1>Click the buttons</h1>

<button>Hello</button>
<button>Goodbye</button>
Write some JS in order to :

When Hello is clicked, alert : Oh my God ! You again !!!
When Goodbye is clicked, alert : Thank God ! I thought you'd' never leave !

let buttonHello = document.querySelector('.hello')
let buttonGoodbye = document.querySelector('.goodbye')

buttonHello.addEventListener('click', function() {
    alert("Oh my God ! You again !!!")
})

buttonGoodbye.addEventListener('click', function() {
    alert("Thank God ! I thought you'd' never leave !")
})

*/

let button = document.querySelectorAll('button')

button.forEach(button => {
   
    button.addEventListener('click', function() {
            alert("Oh my God ! You again !!!")
    })    
})