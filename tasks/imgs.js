'use strict';

let gulp = require('gulp');
let {imgs} = require('./gulp.config.js');

gulp.task('imgs', imgsTask);

function imgsTask() {
  return gulp
    .src(imgs.src)
    .pipe(gulp.dest(imgs.dest));
}
