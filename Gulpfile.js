var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync').create();

// sass, postcss, autoprefixer task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.stream());
});

// sprite task
gulp.task('sprite', function () {
  var spriteData = gulp.src('temp/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: 'public/images/sprite.png',
    cssVarMap: function (sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  }));

  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('public/images/'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('sass/'));

  return merge(imgStream, cssStream);
});

// watch task
gulp.task('watch',function() {
    browserSync.init({
      server: "./public/"
    });
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('public/*.html').on('change', browserSync.reload);
});

// default task
gulp.task('default', ['styles', 'watch']);
