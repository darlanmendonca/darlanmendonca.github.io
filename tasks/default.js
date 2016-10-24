import gulp from 'gulp';

gulp.task('default', [
  'views',
  'browser-sync',
  'styles',
  'scripts',
  'lint',
  'imgs',
  'watch'
]);
