App.ListController = Ember.ObjectController.extend({
	actions : {
		removeList : function(){
			var list = this.get( 'model' );

			list.deleteRecord();
			list.save();
		},
		createCard : function(){
			var list = this.get( 'model' ),
				cards,
				card ;

			card = this.store.createRecord( 'card', {
				description : this.get( 'cardDescription' ),
				list : list
			} );

			cards = list.get( 'cards' );

			cards.then( function(){

				card.save().then( function(){
					
					cards.pushObject( card );
					list.save();
				} );
			} );

			this.set( 'cardDescription', '' );
		}
	}
});