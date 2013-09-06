App.SearchController = Ember.ArrayController.extend({

	query : null,

	searchObserver : function(){
		var query = this.get( 'query'),
			re = new RegExp( query, 'i' ),
			lists = this.get( 'model' );

		lists.forEach( function( list ){
			var cards = list.get( 'cards' ).forEach( function( card ){

				card.set( 'show',
					( query.length ) ? re.test( card.get( 'description' ) ) : true
				);
			} );
		});
	}.observes( 'query' )
});