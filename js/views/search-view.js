App.SearchView = Ember.TextField.extend({
	keyUp : function(){
		var query = this.get( 'controller.query' );
		console.log( query );
		this.get('controller').transitionToRoute( 'search', query );
	}
});