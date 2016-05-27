'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');

gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch(config.views.src, [
    'views',
    'reload'
  ]);

  gulp.watch(config.templates.src, [
    'templates',
    'reload'
  ]);

  gulp.watch(config.styles.watch, ['styles']);

  gulp.watch(config.scripts.src, [
    'scripts',
    'reload'
  ]);

  gulp.watch(config.lint, ['lint']);

  gulp.watch('./bower.json', [
    'vendorCSS',
    'vendorJS',
    'styles'
  ]);
}
