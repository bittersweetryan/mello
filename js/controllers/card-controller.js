App.CardController = Ember.ObjectController.extend({
	isEditing : false,

	lists : function(){
		return App.List.find();
	},

	editCard : function(){
		this.set( 'isEditing', true );
	},

	deleteCard : function(){
		var card = this.get( 'model' ),
			list = card.get( 'list' );

		card.deleteRecord();

		list.save();
		card.save();
	}
});