'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist'
};
/*
gulp.env = 'local';

require('require-dir')('./gulp');

gulp.task('build', ['clean'], function () {
    gulp.env = 'production';
    gulp.start('buildapp');
});
*/
gulp.task('build', function() {
	gulp.start('buildapp');
});