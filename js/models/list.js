App.List = DS.Model.extend({
	listName : DS.attr( 'string' ),
	cards : DS.hasMany( 'App.Card' )
});