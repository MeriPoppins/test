var gulp = require('gulp');
var sass = require('gulp-stylus');
var browserSync = require('browser-sync');

gulp.task('stylus', function() {
  return gulp.src('app/stylus/**/*.styl')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
})

gulp.task('browserSync', function() {
  browserSync({
 server: {
 baseDir: 'app'
 },
  })
})

gulp.task('watch', ['browserSync', 'stylus'], function (){
gulp.watch('app/stylus/**/*.styl', ['stylus']);
gulp.watch('app/*.html', browserSync.reload);
gulp.watch('app/js/**/*.js', browserSync.reload);
});