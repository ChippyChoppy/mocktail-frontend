/* DOM Elements */
const mocktailName = document.querySelector(".mocktail-name")
const mocktailImage = document.querySelector(".mocktail-img")
const mocktailNotes = document.querySelector(".tasting-notes")
const servingGlass = document.querySelector(".glassware")
const mocktailIngredients = document.querySelector(".ingredient-list")
const mixingInstructions = document.querySelector(".mocktail-instructions")
const likesBtn = document.querySelector(".thumbs-up")
const dislikesBtn = document.querySelector(".thumbs-down")
const favoriteBtn = document.querySelector(".fav-btn")

/* Render Functions */
const renderIngredient = ingredientObject => {
    const li = document.createElement("li")
    li.textContent = `${ingredientObject.measurement} ${ingredientObject.name}`
    mocktailIngredients.append(li)

}

const renderMocktailDetails = mocktailObject => {
    mocktailName.textContent = mocktailObject.name
    mocktailImage.src = mocktailObject.imageUrl
    mocktailImage.alt = mocktailObject.name
    mocktailNotes.textContent = "Tasting Notes: " + mocktailObject.tasting_notes
    servingGlass.textContent = "Glassware: " + mocktailObject.glassware
    mixingInstructions.textContent = mocktailObject.instruction
    likesBtn.value = "👍 " + mocktailObject.like + " Likes" 
    dislikesBtn.value = `👎  ${mocktailObject.dislike} Dislikes`
    mocktailObject.ingredients.forEach(renderIngredient)


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