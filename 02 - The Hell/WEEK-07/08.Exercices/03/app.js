/*
Exercise 3
Given this markup :

<h1>Placeholder</h1>
<button>Generate color</button>
Write some JS code in order to :

When we click the button, the body should change its background color to a random color.
The text within the h1 should indicate the rgb numbers of this random color.
Little reminder :

rgb color is given by three numbers between 0 and 255. For example : rgb(26, 254, 56)
*/

let buttonBg = document.querySelector('button')
let red = parseInt(Math.random() * 255)
let green = parseInt(Math.random() * 255)
let blue = parseInt(Math.random() * 255)

let rgbHone = document.querySelector('h1')

buttonBg.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
    rgbHone.innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')'
}) 


