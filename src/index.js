/* DOM Elements */
const mocktailImage = document.querySelector("#mocktail-img")
const mocktailName = document.querySelector("#mocktail-name")
const servingGlass = document.querySelector("#glassware")
const mocktailComp = document.querySelector("#recipe-components")
const mixingDirections = document.querySelector("#mocktail-directions")
const thumbsUp = document.querySelector("#thumbs-up")
const thumbsDown = document.querySelector("#thumbs-down")

/* Render Functions */
const renderIngredient = recipeObject => {
    const li = document.createElement("li")
    li.textContent = `${recipeObject.measurement} ${recipeObject.ingredient_id.name}`
    mocktailComp.append(li)

}

const renderMocktailDetails = mocktailObject => {
    mocktailImage.src = mocktailObject.photo
    mocktailName.textContent = mocktailObject.name
    servingGlass.textContent = "Glassware: " + mocktailObject.glassware
    mixingDirections.textContent = mocktailObject.directions 
    thumbsUp.value = `👍  ${mocktailObject.thumbs_up} `
    thumbsDown.value = `👎  ${mocktailObject.thumbs_down} `
    mocktailObject.recipes.forEach(renderIngredient)

}

/* Fetch Functions */
const getOneMocktail = id => {
    fetch(`http://localhost:3000/api/v1/mocktails/${id}`)
        .then(r => r.json())
        .then(mocktailObject => {
            console.log(mocktailObject)
            renderMocktailDetails(mocktailObject)
        })
}

/* Initialize */
getOneMocktail(1)