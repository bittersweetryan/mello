Mello.Store = DS.Store.extend({
	adapter: 'Mello.LSAdapter',
	revision : 12
});

Mello.LSAdapter = DS.LSAdapter.extend({
	namespace: 'mello-emberjs'
});