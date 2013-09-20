App = Ember.Application.create();

App.Router.map(function() {
	this.resource( 'lists', { path : '/' } ); //can nest
	this.route( 'about' );//cannot nest
});