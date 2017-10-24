'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    build = require('gulp-build'),
    pug = require('gulp-pug'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    rigger = require("gulp-rigger"),
    browserSync = require('browser-sync').create();

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/images/',
    fonts: 'build/fonts/'
  },
  src: {
    pug: 'src/index.pug',
    mainJs: 'src/js/main.js',
    vendorsJs: 'src/js/vendors/*.js',
    style: 'src/sass/main.sass',
    img: 'src/images/*.*',
    fonts: 'src/fonts/*.*'
  },
  watch: {
    pug: 'src/pug/**/*.pug',
    mainJs: 'src/js/**/main.js',
    vendorsJs: 'src/js/vendors/*.js',
    style: 'src/sass/**/*.*',
    img: 'src/images/*.*',
    fonts: 'src/fonts/*.*'
  },
  clean: './build'
};

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('html:build', function () {
  gulp.src(path.src.pug)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
});

gulp.task('mainJs:build', function () {
  gulp.src(path.src.mainJs)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
});

gulp.task('vendorsJs:build', function () {
  gulp.src(path.src.vendorsJs)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(rigger())
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
});

gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    //.pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(prefixer())
    .pipe(rename("style.css"))
    .pipe(gulp.dest(path.build.css))
    .pipe(cssmin())
    //.pipe(sourcemaps.write())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
});

gulp.task('sassLint', function () {
  return gulp.src('src/sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// gulp.task('image:build', function () {
//   gulp.src(path.src.img)
//     .pipe(imagemin({
//       progressive: true,
//       interlaced: true
//     }))
//     .pipe(gulp.dest(path.build.img))
//     .pipe(browserSync.stream());
// });

gulp.task('fonts:build', function () {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
  'html:build',
  'mainJs:build',
  'vendorsJs:build',
  'style:build',
  // 'image:build',
  'fonts:build'
]);

gulp.task('watch', function () {
  watch([path.watch.pug], function (event, cb) {
      gulp.start('html:build');
  });
  watch([path.watch.style], function (event, cb) {
      gulp.start('style:build');
  });
  watch([path.watch.mainJs], function (event, cb) {
      gulp.start('mainJs:build');
  });
  watch([path.watch.vendorsJs], function (event, cb) {
      gulp.start('vendorsJs:build');
  });
  watch([path.watch.fonts], function (event, cb) {
      gulp.start('fonts:build');
  });
});

gulp.task('default', ['build', 'browser-sync', 'watch']);