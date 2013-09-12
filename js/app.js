App = Ember.Application.create();

App.Router.map(function() {
	this.resource( 'lists', { path : '/' } );
	this.resource( 'search', { path: '/search/:query' } );
});

App.query = '';