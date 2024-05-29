/* 

Exercise 4
Let's use an API (a veeeery simple one) You can get images of Pokemon through this url :

https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

See the 1.png at the end ? This is the image of pokemon 1. You can go through 2, 3, 4, etc. untill 151.

Giver this markup inside the body :

<h1>Pokemon</h1>
<div class="container"></div>
Use JavaScript to :

Create an image tag for each Pokemon and append it to the container

*/

let pokemonDiv = document.querySelector('div')

let i = 1

while(i <= 151) {
    let pokemonImg = document.createElement('img')

    pokemonDiv.appendChild(pokemonImg)

    pokemonImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i++ + ".png"
}


















