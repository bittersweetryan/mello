App.SearchRoute = Ember.Route.extend({
	model : function( params ){
		var lists = App.List.find( );
		console.log( params.query );
		return lists.forEach( function( list ){
			var cards = list.get( 'cards' ).filter( function( card ){
				return new RegExp( params.query, 'gi' ).test( card.get( 'description' ) );
			} );
		});
	}
});