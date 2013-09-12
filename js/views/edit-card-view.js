App.EditCardView = Ember.View.extend({

	valueBinding : 'card.description',

	keys : {
		escape : 27,
		enter : 13
	},

	change : function( e ){
		this.get( 'controller' ).save( );
		this.toggleController( false );
	},

	keyUp: function( e ){
		if( e.which === this.keys.escape ){
			this.toggleController( false );
		}

		console.log( this.get('controller' ) );
	},

	toggleController: function( isEditing ){
		this.set( 'controller.isEditing',  isEditing );
	}
});