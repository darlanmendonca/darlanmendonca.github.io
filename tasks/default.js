'use strict';

let gulp = require('gulp');

let tasks = [
  'views',
  'templates',
  'browser-sync',
  'sprites',
  'styles',
  'scripts',
  'lint',
  'imgs',
  'watch'
];

gulp.task('default', tasks);
