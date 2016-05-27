'use strict';

module.exports = {
	lint: [
		'./gulpfile.js',
		'./test/**/*.js',
		'./client/angular/**/*.js'
	],
	views: {
		src: './client/views/**/*.jade',
		dest: './'
	},
	templates: {
		src: './client/angular/**/*.jade',
		dest: './public/templates/'
	},
	styles: {
		src: './client/styles/*.scss',
		dest: './public/styles/'
	},
	scripts: {
		src: [
			'./client/angular/**/*.js',
			'!./client/angular/**/*.spec.js'
		],
		dest: './public/scripts/'
	},
	sprites: {
		src: './client/sprites/*.png',
		dest: './public/imgs/sprites/'
	},
	browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: './'
    },
    notify: false,
    middleware: [ require('connect-history-api-fallback')() ],
    reloadDelay: 100,
    open: require('yargs').argv.open
  }
};
