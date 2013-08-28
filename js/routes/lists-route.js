App.ListsRoute = Ember.Route.extend({
	model: function() {
		return App.List.find();
	},


});