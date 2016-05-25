'use strict';

let gulp = require('gulp');
let gulpConfig = require('./gulp.config.js');

gulp.task('watch', watchTask);

function watchTask() {
  let views = [];
  views = views.concat(gulpConfig.templates.src);
  views = views.concat(gulpConfig.views.src);

  gulp.watch(gulpConfig.views.src, [
    'views',
    gulpConfig.browserSync.reload
  ]);

  gulp.watch(gulpConfig.templates.src, [
    'templates',
    gulpConfig.browserSync.reload
  ]);

  gulp.watch('./client/styles/**/*.scss', ['styles']);

  gulp.watch(gulpConfig.scripts.src, [
    'scripts',
    gulpConfig.browserSync.reload
  ]);
  gulp.watch(gulpConfig.lint, ['lint']);

  gulp.watch('./bower.json', [
    'vendorCSS',
    'vendorJS',
    'styles'
  ]);
}
