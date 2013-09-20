App.ListsSearchRoute = Ember.Route.extend({

	query : '',

	//always gets run
	setupController : function(){
		console.log( arguments );
	},

	//only gets run when entering through URL
	model : function( params ){
		var lists = this.controllerFor( 'lists' ).get( 'model' );
		
		this.set( 'query', params.query );

		return lists;
	},

	filterList : function(){
		var lists = this.get( 'store' ).findAll( 'list' ),
		query = params.query || '',
		re = new RegExp( query, 'i' ),
		filteredList,
		cards;

		lists.then( function(){
			cards = lists.get( 'cards' ).then( function(){

				filteredList = lists.filter( function( card ) {
					return re.test( card.get( 'description' ) );
				} );

				console.log( filteredList );
			});
		});
	}.observes( 'query' )
});