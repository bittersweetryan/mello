App.ListController = Ember.ObjectController.extend({
	actions : {
		removeList : function(){
			var list = this.get( 'model' );

			list.deleteRecord();
			list.save();
		},
		createCard : function(){
			var list = this.get( 'model' );
			
			var card = this.store.createRecord( 'card', {
				description : this.get( 'cardDescription' ),
				list : list
			} );

			list.get( 'cards' ).pushObject( card );

			card.save().then( list.save );

			this.set( 'cardDescription', '' );
		}
	}
});