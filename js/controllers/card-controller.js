App.CardController = Ember.ObjectController.extend({
	isEditing : false,
	
	editCard : function(){
		this.set( 'isEditing', true );
	},

	deleteCard : function(){
		var card = this.get( 'model' ),
			list = card.get( 'list' );

		card.deleteRecord();
		
		card.save();
		list.save();

		list.get( 'store' ).commit();
	},

	save : function(){
		this.get( 'model' ).save();
	}
});