App.CardController = Ember.ObjectController.extend({
	isEditing : false,

	newList : null,
	
	needs: ['lists'],

	updateList : function(){
		
		var card = this.get( 'model' ),
			list = card.get( 'list' ),
			newList = this.get( 'newList' );

		list.get( 'cards' ).removeObject( card );

		newList.get( 'cards' ).pushObject( card );

		card.set( 'list', this.get( 'newList' ) );

		card.save().then( function(){
			list.save();
			newList.save();
		} );
	}.observes( 'newList' ),

	actions : {
		editCard : function(){
			this.set( 'isEditing', true );
		},

		deleteCard : function(){
			this.send( 'updateModel', 'deleteRecord' );
		},

		save : function(){
			this.set( 'isEditing', false );
			
			this.send( 'updateModel', 'save' );
		},

		updateModel : function( cardMethod ){
			var card = this.get( 'model' );

			if( cardMethod && cardMethod in card){
				card[ cardMethod ]();
			}
		}
	}
});