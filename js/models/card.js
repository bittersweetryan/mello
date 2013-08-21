Mello.Card  = DS.Model.extend({
	description : DS.attr( 'string' ),
	list : DS.belongsTo( 'Mello.List' )
});