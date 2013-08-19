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
		];
	},
	events : {
	   openModal : function( content ){
	       this.controllerFor( 'reveal' ).set( 'content', content );
	       
	       $('#myModal').foundation('reveal', 'open');
	   }
	}
});