#Ember Hands On

**Clear localstorage before starting**

[https://github.com/emberjs/data/issues/1228](https://github.com/emberjs/data/issues/1228)

###Introduction
 * Journey
 * Demo (in chrome)
 	* Todo
 * folder structure
   * foundation
 * walkthrough of Index.html
 * Download the ember debugger in chrome

####setup app
	1. Create the app object
		* just app.create
		* add it to index.html
	2. Create the application template	
	3. Create Application Controller
	4. Create action in controller
####models
	1. store.js
	2. list.js
	3. card.js
	4 add them to index.html
	
####view lists new lists
	1. create the lists route mapping
	2. Create the lists route & add to index.html 
		* Note how you get application route for free
	3. create the lists template
		* each controller ( leave out item controller part )
		* list name
		* new list view
			* explain how the values propigate up to the view -> router -> controller
	4. refresh page (nothing shows) -> add outlet to the app template
	5. create the lists controller & add to index.html
#### list controllers / add cards
	1. create the list controller (line 30) and add to index.html
	2. add the itemcontroller to the lists template
	3. add remove list action
	4. create new card section
	5. loop through the cards in the template (no item controller)
		* skip the editing 
	6. crate the card controller (and add to index)
	7. add the itemController to the cards foreach loop
	8. update the card template
	9. create the edit card view template
	10. create the ecit card view object
	
#### another route
	1. create about template
	2. create about link	

###Lists
	1. Todo
		* Build Ember application
	2. Doing
		* Attend Ember hands on
	3. Done
		* sign up for NCDevCon
		
		
###At the end
 * show link to the completed app
 * Add Todos
 	* Learn about computed properties
 	* Lean about handlebars helpers
 	* Precompile templates
 	* split up the lists template into partials
