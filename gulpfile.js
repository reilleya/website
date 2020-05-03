var gulp = require('gulp');  
var pug = require('gulp-pug');
var less = require('gulp-less');
var del = require('del');

clean = function () {
    return del([
        './build/**/*',
      ]);
}

buildPug = function () {
    return gulp.src('templates/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('build'));
  };

buildLess = function () {
    return gulp.src('./templates/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/styles'));
}

gulp.task('clean', clean);

gulp.task('pug', buildPug);

gulp.task('less', buildLess);

gulp.task('build', gulp.series(clean, buildPug, buildLess));
