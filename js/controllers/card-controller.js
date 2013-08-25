App.CardController = Ember.ObjectController.extend({
	isEditing : false,

	editCard : function(){
		this.set( 'isEditing', true );
	},

	deleteCard : function(){
		var card = this.get( 'model' );

		card.deleteRecord();

		card.save();
	}
});