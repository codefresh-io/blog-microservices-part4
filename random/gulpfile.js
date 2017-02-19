const gulp = require('gulp');

gulp.task('copy-package-json', function() {
    gulp.src('../package.json')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./package.json'));
});
