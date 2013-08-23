App.CardController = Ember.ObjectController.extend({
	isEditing : false,

	editCard : function(){
		this.set( 'isEditing', true );
	}
});