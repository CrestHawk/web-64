const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('runTests', function() {
  return gulp.src(['dist/test/**/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }));
});
