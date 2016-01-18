var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

// sass, postcss, autoprefixer task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

// watch task
gulp.task('watch',function() {
    browserSync.init({
      server: "./"
    });
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// default task
gulp.task('default', ['styles', 'watch']);
