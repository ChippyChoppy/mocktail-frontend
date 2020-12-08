

function getFavoriteMocktails() {
  return fetch(`${baseUrl}/favorites`)
    .then(response => response.json())
}

function createUser(userObj) {
  return fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then(response => response.json())
}

function createUserFavoriteMocktail(favoriteMocktailObject) {
  return fetch(`${baseUrl}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(favoriteMocktailObject),
  })
    .then(response => response.json())
}

function deleteMocktailFromFavoritesList (id) {
  return fetch(`${baseUrl}/favorites/${currentUser.id},${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
}