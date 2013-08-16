Mello = Ember.Application.create();

Mello.Store = DS.Store.extend({
	adapter: 'Todos.LSAdapter',
	revision : 12
});

Mello.LSAdapter = DS.LSAdapter.extend({
	namespace: 'mello-emberjs'
});

Mello.Router.map(function() {
    this.resource( 'lists', { path : '/' } );   
});