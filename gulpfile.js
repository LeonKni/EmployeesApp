var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});
gulp.task('html', function () {
    gulp.src('app/html/*.html')
        .pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch(['app/html/*.html'], ['html']);
    gulp.watch(['app/js/*.js'], ['js']);
});

//default gulp tasks
gulp.task('default', ['webserver']);



