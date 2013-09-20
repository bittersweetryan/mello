App.EditCardView = Ember.View.extend({

	templateName: 'editCardView',

	keys : {
		escape : 27
	},

	keyUp: function( e ){
		if( e.which === this.keys.escape ){
			this.toggleController( false );
		}
	},

	toggleController: function( isEditing ){
		this.set( 'controller.isEditing',  isEditing );
	}
});