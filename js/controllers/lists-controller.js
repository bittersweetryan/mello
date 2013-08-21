Mello.ListsController = Ember.ArrayController.extend({

	createList : function(){
		var name = this.get( 'listName' );
		
		var list = Mello.List.createRecord({
			listName : name
		})
		
		this.set( 'listName', '')
		list.save();
	}
});