Mello.ListsController = Ember.ArrayController.extend({

	createList : function(){
		var list = Mello.List.createRecord({
			listName : this.get( 'listName' )
		});
		
		this.set( 'listName', '');
		
		list.save();
	}
});