App.Card  = DS.Model.extend({
	description : DS.attr( 'string' ),
	list : DS.belongsTo( 'App.List' ),
	show : DS.attr( 'boolean', { defaultValue : true } )
});