App.List = DS.Model.extend({
	listName : DS.attr( ),
	cards : DS.hasMany( 'card', { async : true } )
});