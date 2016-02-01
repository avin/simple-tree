var gulp = require('gulp');

gulp.task('copy', function () {

    gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/font-awesome/css/font-awesome.css',
    ]).pipe(gulp.dest('assets/css'));

    gulp.src([
        './bower_components/jquery/dist/jquery.js'
    ]).pipe(gulp.dest('assets/js'));

    gulp.src([
        './bower_components/font-awesome/fonts/**/*.*'
    ]).pipe(gulp.dest('assets/fonts'));

});


gulp.task('default', ['copy']);