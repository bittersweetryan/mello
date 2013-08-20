Mello = Ember.Application.create();

Mello.Router.map(function() {
    this.resource( 'lists', { path : '/' } );   
});