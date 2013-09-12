App = Ember.Application.create();

App.Router.map(function() {
	this.resource( 'lists', { path : '/' } );
	this.resource( 'search', { path: '/search/:query' } );
});
App.ListsRoute = Ember.Route.extend({
	model: function() {
		return this.get( 'store' ).findAll( 'list' );
	}
});
App.SearchRoute = Ember.Route.extend({

	model : function( params ){
		this.controllerFor( 'search' ).set( 'query', params.query );
	},

	renderTemplate : function( controller ){
		this.render( 'lists', { controller : controller } );
	}
});
App.Card  = DS.Model.extend({
	description : DS.attr(  ),
	list : DS.belongsTo( 'list' ),
	show : DS.attr( )
});
App.List = DS.Model.extend({
	listName : DS.attr( ),
	cards : DS.hasMany( 'card', { async : false } )
});
App.LSAdapter = DS.LSAdapter.extend({
	namespace: 'mello-emberjs'
});

App.ApplicationAdapter = DS.LSAdapter;
App.CardController = Ember.ObjectController.extend({
	isEditing : false,

	actions : {
		editCard : function(){
			this.set( 'isEditing', true );
		},

		deleteCard : function(){
			var card = this.get( 'model' ),
				list = card.get( 'list' );

			card.deleteRecord();

			list.save();
			card.save();
		}
	}
});
App.ListController = Ember.ObjectController.extend({
	actions : {
		removeList : function(){
			var list = this.get( 'model' );

			list.deleteRecord();
			list.save();
		},
		createCard : function(){
			var list = this.get( 'model' );
			
			var card = this.store.createRecord( 'card', {
				description : this.get( 'cardDescription' ),
				show : true
			} );

			list.get( 'cards' ).pushObject( card );

			card.save();
			list.save();

			this.set( 'cardDescription', '' );
		}
	}
});
App.ListsController = Ember.ArrayController.extend({
	actions : {
		createList : function(){
			var list = this.store.createRecord( 'list', {
				listName : this.get( 'listName' )
			});

			this.set( 'listName', '');

			list.save();
		}
	}
});
App.SearchController = Ember.ArrayController.extend({

	query : null,

	searchObserver : function(){
		var query = this.get( 'query'),
			re = new RegExp( query, 'i' ),
			lists = this.get( 'model' );

		lists.forEach( function( list ){
			var cards = list.get( 'cards' ).forEach( function( card ){

				card.set( 'show',
					( query.length ) ? re.test( card.get( 'description' ) ) : true
				);
			} );
		});
	}.observes( 'query' )
});
App.EditCardView = Ember.View.extend({

	templateName : 'editCardView',

	keys : {
		escape : 27,
		enter : 13
	},

	actions : {
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
	}
});
App.SearchCardsView = Ember.TextField.extend({
	actions : {
		keyUp : function(){
			this.get('controller').transitionToRoute( 'search', this.get( 'controller.query' ) );
		}
	}
});