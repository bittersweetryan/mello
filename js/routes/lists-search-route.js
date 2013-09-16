App.ListsSearchRoute = Ember.Route.extend({

	//always gets run
	setupController : function(){
		
	},

	//only gets run when entering through URL
	model : function( params ){
		var lists = this.controllerFor( 'lists' ).get( 'model' );
		
		return lists;
	},

	filterList : function(){
		var lists = this.get( 'store' ).findAll( 'list' ),
		query = params.query || '',
		re = new RegExp( query, 'i' );

		lists.then( function(){
			lists.get( 'cards' ).filter( function( card ) {

				return re.test( card.get( 'description' ) );
			} );
		});

		return lists;
	}
});