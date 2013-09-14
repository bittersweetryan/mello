App = Ember.Application.create();

App.Router.map(function() {
	this.resource( 'lists', { path : '/' }, function(){
		this.route( 'search', { path: '/lists/search/:query' } );
	});

});

App.query = '';