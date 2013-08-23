App.ListController = Ember.ObjectController.extend({
	removeList : function(){
		var list = this.get( 'model' );

		list.deleteRecord();
		list.save();
	},
	createCard : function(){
		var list = this.get( 'model' );

		var card = App.Card.createRecord( {
			description : this.get( 'cardDescription' )
		} );

		list.get( 'cards' ).pushObject( card );

		card.save();
		list.save();

		this.set( 'cardDescription', '' );
	}
});