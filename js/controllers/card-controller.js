App.CardController = Ember.ObjectController.extend({
	isEditing : false,

	listId : null,
	
	needs: ['lists'],

	updateList : function(){
		console.log( this.get( 'model.list' ) );
	}.observes( 'listId' ),

	actions : {
		editCard : function(){
			this.set( 'isEditing', true );
		},

		deleteCard : function(){
			updateModel( 'deleteRecord' );
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