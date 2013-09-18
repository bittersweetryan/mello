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
				description : this.get( 'cardDescription' )
			} );



			card.save().then( function(){
				var cards = list.get( 'cards' );
				cards.then( cards.pushObject( card ) );

				list.save();
			});

			this.set( 'cardDescription', '' );
		}
	}
});