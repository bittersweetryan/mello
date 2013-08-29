App.SearchCardsView = Ember.TextField.extend({
	keyUp : function(){
		this.get('controller').transitionToRoute( 'search', this.get( 'controller.query' ) );
	}
});