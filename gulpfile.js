var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    pump      = require('pump'),
    mocha     = require('gulp-mocha');

var jsFiles     = ['server.js','./app/**/*.js', './config/**/*.js'];
var testFiles   = ['test/**/*.js'];

gulp.task('minify-js', (cb) => {
  pump([
    gulp.src(jsFiles),
        concat('scripts.js'),
        uglify(),
        gulp.dest('./dist'),
  ],cb);
});

gulp.task('mocha', (cb) => {
  pump([
    gulp.src(testFiles),
        mocha()
  ],cb);
});


gulp.task('watch', () => {
    gulp.watch(jsFiles,['minify-js','mocha'])
    gulp.watch(testFiles,['mocha'])
});


gulp.task('default', ['minify-js','mocha', 'watch'])
