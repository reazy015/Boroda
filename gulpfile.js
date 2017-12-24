'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();

gulp.task('style', function() {
  gulp.src('scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('css/'))
    .pipe(server.stream());
});

gulp.task('posthtml', function() {
  return gulp.src('*.html')
    .pipe(plumber())
    .pipe(gulp.dest('build'));
});

gulp.task('serve', function() {
  server.init({
    server: './',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('scss/**/*.scss', ['style']);
  gulp.watch('*.html', ['posthtml'])
})
