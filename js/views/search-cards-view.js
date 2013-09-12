App.SearchCardsView = Ember.View.extend({
	
	templateName : 'searchCardsView',

	keyUp : function( e ){
		this.get( 'controller' ).transitionToRoute( 'search', this.get('controller.query') );
	}
});