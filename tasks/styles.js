'use strict';

let gulp = require('gulp');
let gutil = require('gulp-util');
let bower = require('bower-files')();
let dependencies = bower.ext('scss').files;
let inject = require('gulp-inject');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let config = require('./gulp.config.js');

let injectTransform = {
	starttag: '/* inject:imports */',
	endtag: '/* endinject */',
	transform: filepath => `@import '../..${filepath}';`,
};

let injectConfig = {
	read: false,
	relative: false,
};

let configPreprocessor = {
	outputStyle: 'compressed'
};


gulp.task('styles', stylesTask);

function stylesTask() {
  return gulp
    .src(config.styles.src)
    .pipe(inject(gulp.src(dependencies, injectConfig), injectTransform))
    .pipe(sourcemaps.init())
    .pipe(sass(configPreprocessor).on('error', onError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write({sourceRoot: '/client/styles'}))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(config.browserSync.stream({match: '**/*.css'}));
}

function onError(err) {
	var message;
	switch (err.plugin) {
		case 'gulp-sass':
			let messageFormatted = err.messageFormatted;
			message = new gutil.PluginError('gulp-sass', messageFormatted).toString();
			process.stderr.write(message + '\n');
			break;
		default:
			message = new gutil.PluginError(err.plugin, err.message).toString();
			process.stderr.write(message + '\n');
	}
	gutil.beep();
}
