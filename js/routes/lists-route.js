Mello.ListsRoute = Ember.Route.extend({
	model: function() {
		
		return Mello.List.find();
	}
});