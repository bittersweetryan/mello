Mello.ListsRoute = Ember.Route.extend({
  model: function() {
   	return [
   		{
   			id : 1,
   			name : 'ToDo'
   		},
   		{
   			id : 2,
   			name : 'Doing'
   		}		
   	]
  }
});