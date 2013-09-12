module.exports = function( grunt ){

	grunt.initConfig( {
		concat : {
			dev : {
				src : [
					'js/app.js',
					'js/routes/**/*.js',
					'js/models/**/*.js',
					'js/controllers/**/*.js',
					'js/views/**/*.js'
				],
				dest : 'js/mello.combined.js'
			}
		}
	} );

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	grunt.registerTask( 'default', [ 'concat' ] );

};