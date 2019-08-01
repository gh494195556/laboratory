const gulp = require('./node_modules/gulp');

gulp.task('default', function() {
  console.log('running default task.');
  return Promise.resolve();
});
