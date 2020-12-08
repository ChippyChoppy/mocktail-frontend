/* STATE */
const baseUrl = "http://localhost:3000/api/v1"
let currentMocktail
let currentUser
let currentUserId
let allMocktails

// DOM ELEMENTS
const mocktailContainer = document.querySelector(".mocktail-container")
const signInForm = document.querySelector("#sign-in-form")
const welcomeMessage = document.querySelector("#welcome")
const div2 = document.querySelector(".div2")
const favoriteMocktailLink = document.querySelector(".my-favorite-mocktails")

/* Render Functions */
const renderIngredient = (ingredient, parentElement) => {
    const li = document.createElement("li")
    // li.dataset.id = mocktailObject.mocktail_id
    li.textContent = `${ingredient.measurement} ${ingredient.name}`
    parentElement.append(li)
}

const renderMocktail = (mocktail) => {
    const mocktailTile = document.createElement("div")
    mocktailTile.className = "mocktail-tile"
    mocktailTile.innerHTML = ""

    const mocktailName = document.createElement("h2")
    mocktailName.className = "mocktail-name"
    mocktailName.textContent = mocktail.name

    const mocktailImage = document.createElement("img")
    mocktailImage.className = "mocktail-img"
    mocktailImage.src = mocktail.imageUrl
    mocktailImage.alt = mocktail.name
    // mocktailImage.dataset.id = mocktail.id

    const mocktailNotes = document.createElement("h4")
    mocktailNotes.className = "mocktail-notes"
    mocktailNotes.textContent = "Tasting Notes: " + mocktail.tasting_notes

    const servingGlass = document.createElement("h4")
    servingGlass.className = "glassware"
    servingGlass.textContent = "Glassware: " + mocktail.glassware

    const ingHeader = document.createElement("h4")
    ingHeader.textContent = "Ingredients: "

    const mocktailIngredients = document.createElement("ul")
    mocktailIngredients.className = "ingredient-list"
    mocktailIngredients.innerHTML = ""
    mocktail.ingredients.forEach(ingredient => {
        renderIngredient(ingredient, mocktailIngredients)
    })

    const mixingInstructions = document.createElement("p")
    mixingInstructions.textContent = mocktail.instruction

    const likesBtn = document.createElement("button")
    likesBtn.dataset.id = mocktail.id
    likesBtn.className = "thumbs-up"
    likesBtn.textContent = `👍 ${mocktail.like} Yum!`

    const dislikesBtn = document.createElement("button")
    dislikesBtn.dataset.id = mocktail.id
    dislikesBtn.className = "thumbs-down"
    dislikesBtn.textContent = `👎 ${mocktail.dislike} No thanks`

    const favBtn = document.createElement("button")
    favBtn.dataset.id = mocktail.id
    favBtn.className = "fav-btn"
    favBtn.textContent = "✰ I love this drink! ✰"

    mocktailTile.append(mocktailName, mocktailImage, mocktailNotes, servingGlass, ingHeader, mocktailIngredients, mixingInstructions, likesBtn, dislikesBtn, favBtn)

    mocktailContainer.append(mocktailTile)

}

function renderMocktailArray(mocktailArray) {
    allMocktails = mocktailArray
    mocktailArray.forEach(renderMocktail)
}

function renderOnlyMyFavoriteMocktails() {

    let allTheFavMocktailsOfTheCurrentUser = []
    let favoriteMockailIds = []
    let allMocktailIds = []
    let mocktailsToBeRendered = []
    allMocktailIds = allMocktails.map(mocktail => mocktail.id)


    getFavoriteMocktails()
        .then(favoriteMocktailArray => {

            favoriteMocktailArray.forEach(favMocktail => {

                if (favMocktail.user_id === currentUser.id) {

                    allTheFavMocktailsOfTheCurrentUser.push(favMocktail.mocktail_id)
                    debugger
                    let includedMocktails = allMocktailIds.filter(mocktail => allTheFavMocktailsOfTheCurrentUser.includes(mocktail))
                    console.log(includedMocktails)

                    for (i = 1; i < includedMocktails.length; i++) {
                        mocktailsToBeRendered.push(allMocktails.find(mocktail => mocktail.id === includedMocktails[i]))

                    }
                    console.log(mocktailsToBeRendered)
                    mocktailContainer.innerHTML = ""
                    mocktailsToBeRendered.forEach(renderMyFavoriteMocktail)
                }
            })
        })
}

function getMocktailObjects() {

}


const renderMyFavoriteMocktail = (mocktail) => {

    const mocktailTile = document.createElement("div")
    mocktailTile.className = "mocktail-tile"
    mocktailTile.innerHTML = ""

    const mocktailName = document.createElement("h2")
    mocktailName.className = "mocktail-name"
    mocktailName.textContent = mocktail.name

    const mocktailImage = document.createElement("img")
    mocktailImage.className = "mocktail-img"
    mocktailImage.src = mocktail.imageUrl
    mocktailImage.alt = mocktail.name
    // mocktailImage.dataset.id = mocktail.id

    const mocktailNotes = document.createElement("h4")
    mocktailNotes.className = "mocktail-notes"
    mocktailNotes.textContent = "Tasting Notes: " + mocktail.tasting_notes

    const servingGlass = document.createElement("h4")
    servingGlass.className = "glassware"
    servingGlass.textContent = "Glassware: " + mocktail.glassware

    const ingHeader = document.createElement("h4")
    ingHeader.textContent = "Ingredients: "

    const mocktailIngredients = document.createElement("ul")
    mocktailIngredients.className = "ingredient-list"
    mocktailIngredients.innerHTML = ""
    mocktail.ingredients.forEach(ingredient => {
        renderIngredient(ingredient, mocktailIngredients)
    })

    const mixingInstructions = document.createElement("p")
    mixingInstructions.textContent = mocktail.instruction

    const likesBtn = document.createElement("button")
    likesBtn.dataset.id = mocktail.id
    likesBtn.className = "thumbs-up"
    likesBtn.textContent = `👍 ${mocktail.like} Yum!`

    const dislikesBtn = document.createElement("button")
    dislikesBtn.dataset.id = mocktail.id
    dislikesBtn.className = "thumbs-down"
    dislikesBtn.textContent = `👎 ${mocktail.dislike} No thanks`

    const deleteBtn = document.createElement("button")
    deleteBtn.dataset.id = mocktail.id
    deleteBtn.className = "delete-btn"
    deleteBtn.textContent = "☠️ This was not good ☠️"

    mocktailTile.append(mocktailName, mocktailImage, mocktailNotes, servingGlass, ingHeader, mocktailIngredients, mixingInstructions, likesBtn, dislikesBtn, deleteBtn)

    
    mocktailContainer.append(mocktailTile)

}


/************ event handlers  *********************/
div2.addEventListener("click", function (event) {
    if (event.target.className === "thumbs-up") {
        // console.log("clicked")
        let id = event.target.dataset.id
        let numLikes = parseInt(event.target.textContent.split(" ")[1]) + 1
        event.target.textContent = `👍 ${numLikes} Yum!`
        // debugger

        fetch(`${baseUrl}/mocktails/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "like": numLikes
            })
        })
            .then(response => response.json())

    } else if (event.target.className === "thumbs-down") {
        console.log("clicked")
        let id = event.target.dataset.id
        let numDislikes = parseInt(event.target.textContent.split(" ")[1]) + 1
        event.target.textContent = `👎 ${numDislikes} No thanks`

        fetch(`${baseUrl}/mocktails/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "dislike": numDislikes
            })
        })
            .then(response => response.json())
    } else if (event.target.className === "fav-btn") {
        console.log("fav click")
        addMocktailToUserFavorites(event)
    }
})

signInForm.addEventListener("submit", createOrSignInUserItsAllTheSameHere)
favoriteMocktailLink.addEventListener("click", renderOnlyMyFavoriteMocktails)

function createOrSignInUserItsAllTheSameHere(event) {
    event.preventDefault()

    const userObj = {
        name: event.target.name.value
    }
    createUser(userObj)
        .then(newUserObject => {
            currentUser = newUserObject
            currentUserId = newUserObject.id
            welcomeUser(currentUser)
        })
}

function welcomeUser(currentUser) {
    welcomeMessage.textContent = `Welcome ${currentUser.name}! Pick your poison...`
}

function addMocktailToUserFavorites(event) {
    const favoriteMocktailObject = {
        mocktail_id: event.target.dataset.id,
        user_id: currentUserId
    }
    createUserFavoriteMocktail(favoriteMocktailObject)
        .then(newFavoriteMocktailObject => {
            console.log(newFavoriteMocktailObject)
        })
}

/************Fetch requests */
const showAllMocktails = () => {
    fetch(`${baseUrl}/mocktails`)
        .then(response => response.json())
        .then(renderMocktailArray)
}

/* Initialize */
showAllMocktails()