App.Card  = DS.Model.extend({
	description : DS.attr( 'string' ),
	list : DS.belongsTo( 'App.List' )
});