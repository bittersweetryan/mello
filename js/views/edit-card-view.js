App.EditCardView = Ember.View.extend({

	templateName : 'editCardView',

	keys : {
		escape : 27,
		enter : 13
	},

	keyUp: function( e ){
		if( e.which === this.keys.escape || e.which === this.keys.enter ){
			this.toggleController( false );

			if( e.which === this.keys.enter){
				this.get( 'controller.model' ).save();
			}
		}
	},

	toggleController: function( isEditing ){
		this.set( 'controller.isEditing',  isEditing );
	}
});