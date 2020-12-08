## Objectives

Building this application will be challenging because it will integrate everything you've learned up to this point. Your goals with this project:

* Design and architect features across frontend and backend
* Communicate and collaborate in a technical environment
* Integrate JavaScript and Rails
* Debug issues in small- to medium-sized projects
* Build and iterate on a project MVP
 (Links to an external site.)
 
## Project Requirements

Must be a HTML/CSS/JS frontend with a Rails API backend. All interactions between the client and the server should be handled asynchronously (AJAX) and use JSON as the communication format.

Backend must render a resource with at least one has-many relationship. For example, if we were building Instagram, we might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Read AND Create for at least two of your models. Additionally, you'll need either Update or Delete for at least two models. The results of each action should be diplayed to the user without a page refresh.

Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

## Specific pieces of functionality

Done

* Display all Mocktails on page
* Upvote a mocktail
* Downvote a mocktail
* Sign up/in
** creating a user object in the db
* Favourite a Mocktail
** creating a favorite objec in the db

To do
* View only your favourites
** r
* Unfavourite mocktail
** Delete favourite mocktail from the db

* Sign out
* Filter mocktails by type


## Sign in 

* Enter name into text box
* Click "Sign in/up"
    * Do they have an account already?
        * Yes - Log the user in
        * No - Create new account, log the user in
    * Remember a logged in user
* Sign in box goes away, displays "welcome, {name}"
    * make sign in box disappear
        * replace with a welcome message 