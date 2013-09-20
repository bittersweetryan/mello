App = Ember.Application.create();

App.Router.map(function() {
	this.resource( 'lists', { path : '/' } );
	this.resource( 'about' );
});