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
				show : true
			} );

			list.get( 'cards' ).pushObject( card );

			card.save();
			list.save();

			this.set( 'cardDescription', '' );
		}
	}
});