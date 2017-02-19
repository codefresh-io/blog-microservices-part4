const gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('../package.json')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('.'));
});
