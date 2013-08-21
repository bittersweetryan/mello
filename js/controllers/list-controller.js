Mello.ListController = Ember.ObjectController.extend({
	removeCard : function(){
		var list = this.get( 'model' );

		list.deleteRecord();
		list.save();
	}
});