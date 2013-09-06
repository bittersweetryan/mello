App.SearchCardsView = Ember.TextField.extend({
	actions : {
		keyUp : function(){
			this.get('controller').transitionToRoute( 'search', this.get( 'controller.query' ) );
		}
	}
});