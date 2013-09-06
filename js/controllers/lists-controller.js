App.ListsController = Ember.ArrayController.extend({
	actions : {
		createList : function(){
			var list = this.store.createRecord( 'list', {
				listName : this.get( 'listName' )
			});

			this.set( 'listName', '');

			list.save();
		}
	}
});