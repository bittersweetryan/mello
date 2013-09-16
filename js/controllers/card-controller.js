App.CardController = Ember.ObjectController.extend({
	isEditing : false,
	
	needs: ['lists'],

	actions : {
		editCard : function(){
			this.set( 'isEditing', true );
		},

		deleteCard : function(){
			updateModel( 'deleteRecord' );
		},

		save : function(){
			this.set( 'isEditing', false );
			updateModel();
		},

		updateModel : function( cardMethod ){
			var card = this.get( 'model' ),
				list = card.get( 'list' );

			if( cardMethod && cardMethod in card){
				card[ 'cardMethod' ]();
			}

			card.save();
			list.save();
		}
	}
});