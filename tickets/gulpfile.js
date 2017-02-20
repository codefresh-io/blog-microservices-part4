// gulpfile.js

const gulp = require('gulp');
const vfs = require('vinyl-fs');
var deps = ["../registry/index.js"]

gulp.task('copy_deps', function(){
  return gulp
      .src(deps)
      .pipe(gulp.dest("registry.js"));
});

gulp.task('symlink', function(){
  return gulp
      .src(deps)
      .pipe(vfs.symlink("./registry"));
});
