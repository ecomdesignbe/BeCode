document.getElementById("button").addEventListener('click', () => {
    let inputValue = document.getElementById("inputName").value
    let details = document.getElementById("details")
    details.innerHTML = ""

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())

        .then(data => {
            const items = document.getElementById("items")
            
            items.innerHTML = ""
            
            if(data.meals === null){
                document.getElementById("msg").style.display = "block"
            } else {
                document.getElementById("msgSearch").innerHTML = `<h2>These are the results for all ${inputValue}</h2>`
                
                data.meals.forEach(meal => {
                    itemDiv = document.createElement("div")
                    itemDiv.className = "m-2 singleItem"
                    itemDiv.setAttribute('onclick' , `details('${meal.idMeal}')`)

                    

                    const itemInfo = `
                    <div class="card" style="width: 18rem;"  data-bs-toggle="modal" data-bs-target="#myModal">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}" title="${meal.strMeal}">
                        <div class="card-body">
                            <h3 class="card-text text-center">${meal.strMeal}</h3>
                        </div>                          
                    </div>
                    `
                    itemDiv.innerHTML = itemInfo
                    items.appendChild(itemDiv)
                });
            }
    })
})

function details(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(detail => {
            
            let meal = detail.meals[0] 

            let details = document.getElementById("details")
            details.innerHTML = ""
            let detailsDiv = document.createElement("div")
            let detailsInfo = `
                    <div class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}" title="${meal.strMeal}" >
                        <div class="card-body">
                            <h4 class="card-text text-center">${meal.strMeal}</h4>
                            <h5>Ingredients</h5>
                            <ul>
                            ${ingredients(meal)}
                            </ul>
                            <p>${meal.strInstructions}</p>
                        </div>
                    </div>
                    `
            detailsDiv.innerHTML = detailsInfo
            details.appendChild(detailsDiv) 
        })
}

function ingredients(meal) {
    let ingredientsList = ''
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]
        const measure = meal[`strMeasure${i}`]
        if (!ingredient) {
            break;
        };
        if (ingredient.trim() !== '') {
            ingredientsList += `<li>${ingredient} - ${measure}</li>`
        }
    }
    return ingredientsList
}