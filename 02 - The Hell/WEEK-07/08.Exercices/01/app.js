/* 

Exercise 1
Given this markup :

<h1>Click the buttons</h1>

<button>Hello</button>
<button>Goodbye</button>
Write some JS in order to :

When Hello is clicked, alert : Oh my God ! You again !!!
When Goodbye is clicked, alert : Thank God ! I thought you'd' never leave !

*/

let buttonOne = document.querySelector('button').addEventListener('click', function() {
    alert("Oh my God ! You again !!!")
})

let buttonTwo = document.querySelector('button').nextElementSibling.addEventListener('click', function() {
    alert("Thank God ! I thought you'd' never leave !")
})