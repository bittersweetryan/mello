App.SearchRoute = Ember.Route.extend({

	model : function( params ){
		this.controllerFor( 'search' ).set( 'query', params.query );
	},

	renderTemplate : function( controller ){
		this.render( 'lists', { controller : controller } );
	}
});