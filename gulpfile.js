var gulp = require("gulp"),
  browserify = require("gulp-browserify"),
  uglify  = require("gulp-uglify"),
  babel = require("gulp-babel")

var babelOptions = {
    presets: ["es2015"]
  },
  buildServerPath = {
    src: "./src/server/**/*.*",
    dest: "./build"
  };
gulp.task('build', function() {
    return gulp.src(buildServerPath.src)
        .pipe(babel(babelOptions))
        .pipe(gulp.dest(buildServerPath.dest));
});
