App.ListsController = Ember.ArrayController.extend({
	actions : {
		createList : function(){
			var list = App.List.createRecord({
				listName : this.get( 'listName' )
			});

			this.set( 'listName', '');

			list.save();
		}
	}
});