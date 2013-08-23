App.Store = DS.Store.extend({
	adapter: 'App.LSAdapter',
	revision : 12
});

App.LSAdapter = DS.LSAdapter.extend({
	namespace: 'mello-emberjs'
});