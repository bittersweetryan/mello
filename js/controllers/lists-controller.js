Mello.ListsController = Ember.ArrayController.extend({

	createList : function(){
		var name = this.get( 'newName' );
		
		console.log( name );
		
		var list = Mello.List.createRecord({
			listName : name
		})
		
		list.save();
		//console.log( list.get( 'name' ) );
	}
});