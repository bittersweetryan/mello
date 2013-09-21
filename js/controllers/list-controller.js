App.ListController = Ember.ObjectController.extend({
	actions : {
		removeList : function(){
			var list = this.get( 'model' );

			list.deleteRecord();
			list.save();
		},
		createCard : function(){
			var list = this.get( 'model' ),
				card ;

			card = this.store.createRecord( 'card', {
				description : this.get( 'cardDescription' ),
				list : list
			} );
		
			card.save().then( function(){
				var cards = list.get( 'cards' );

				cards.then( function(){
					cards.pushObject( card );
					list.save();
				} );
			} );

			this.set( 'cardDescription', '' );
		}
	}
});