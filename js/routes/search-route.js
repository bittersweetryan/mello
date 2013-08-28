App.SearchRoute = Ember.Route.extend({
	query : null,


	model : function( params ){
		var lists = App.List.find( ),
			query = params.query,
			re = new RegExp( query, 'i' );

		this.set( 'query', query );

		lists.forEach( function( list ){
			var cards = list.get( 'cards' ).forEach( function( card ){

				card.set( 'show',
					( query.length ) ? re.test( card.get( 'description' ) ) : true
				);
			} );
		});

		return lists;
	},

	renderTemplate : function( controller ){
		this.render( 'lists', { controller : controller } );
	}
});