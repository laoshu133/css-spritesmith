/*
 * css-spritesmith
 * https://github.com/laoshu133
 *
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: [ 'Gruntfile.js', 'lib/*.js' ]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	// 声明别名
	grunt.registerTask('default', ['jshint']);
};