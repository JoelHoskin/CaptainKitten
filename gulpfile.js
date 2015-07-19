var gulp = require('gulp');
var concat = require('gulp-concat');
var open = require('gulp-open');


gulp.task('default', function() {
    return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./bin/'))
    .pipe(open({uri: 'http://127.0.0.1:8000/main.html'}));
});
