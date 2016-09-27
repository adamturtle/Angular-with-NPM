var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.src('index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify']);
