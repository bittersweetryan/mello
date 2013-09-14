App.ListsRoute = Ember.Route.extend( {
	model: function() {
		console.log( 'list model in lists route' );
		return this.get( 'store' ).findAll( 'list' );
	}
} );