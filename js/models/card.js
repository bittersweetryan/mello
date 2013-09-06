App.Card  = DS.Model.extend({
	description : DS.attr(  ),
	list : DS.belongsTo( 'App.List' ),
	show : DS.attr({ type : 'boolean',  defaultValue : true } )
});