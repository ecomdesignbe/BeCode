/*
We will now do an exercise to practice API calls and DOM manipulation.

The mission

Using this api, create a little program as follow :

There is a text input where you should be able to type something related to food, a meal, etc.

When you press ENTER, you should fetch all meals related to the search field.

You should then display in a grid the image of each meal and its title.

A little text should also say : these are the results for "chicken", for example

When you click on a meal, you should open a modal with the following meal information :

Image cover
Title
List of ingredients and how much of them you will need
A description on how to cook it.
You should be able to close the modal and search for another meal as many times you want.

Make it pretty ! Think of containers, menu, harmonic colors, etc.

Good luck, my friends ! ;)
*/
/*

const mealForm = document.getElementById('mealForm')
const submitBtn = document.getElementById('submitBtn')
const searchResult = document.getElementById('searchResult')

mealForm.addEventListener('submit', searchMeal)

async function searchMeal(e) {
    e.preventDefault()
    const meal = mealForm.elements[0].value
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    
    const jsonData = await data.json()
    console.log(jsonData)
    searchResult.innerHTML = `${JSON.stringify(jsonData, null, 4)}`
}
*/
document.getElementById('getMeal').addEventListener('click', getMeal)

function getMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let output = '<h2>Meals</h2>'
            
            data.forEach(function(meals) {
                output += `
                    <div>
                        <h3>${meals.idMeal}</h3>
                        <p>${meals.strCategory}</p>
                    </div>
                `
            });
            
            document.getElementById('output').innerHTML = output
        })
}