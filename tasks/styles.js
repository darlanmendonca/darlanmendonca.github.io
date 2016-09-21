'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let inject = require('gulp-inject');
let bower = require('bower-files')();
let path = require('path');
let dependencies = bower.relative(path.join(__dirname, '..')).ext('scss').files;
let browserSync = config.browserSync;
let plumber = require('gulp-plumber');

let injectTransform = {
  starttag: '/* inject:imports */',
  endtag: '/* endinject */',
  transform: function (filepath) {
    return `@import '../..${filepath}';`;
  },
};

let injectConfig = {
  read: false,
  relative: false,
};

let outputStyle = 'compressed';

gulp.task('styles', stylesTask);

function stylesTask() {
  gulp
    .src(config.styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(inject(gulp.src(dependencies, injectConfig), injectTransform))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({match: '**/*.css'}));
}

function errorHandler(err) {
  let gutil = require('gulp-util');
  let message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
