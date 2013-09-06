App.List = DS.Model.extend({
	listName : DS.attr( ),
	cards : DS.hasMany( 'App.Card' )
});