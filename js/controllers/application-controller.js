App.ApplicationController = Ember.Controller.extend({
	query : '',

	actions : {
		searchLists : function(){
			var query = this.get( 'query' );
			this.transitionToRoute( 'lists.search', { query : query });
		}
	}
	
});