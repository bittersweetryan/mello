App.Card  = DS.Model.extend({
	description : DS.attr(  ),
	list : DS.belongsTo( 'list' ),
	show : DS.attr({ type : 'boolean',  defaultValue : true } )
});