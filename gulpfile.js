var gulp = require("gulp");
var clean = require("mosaic-gulp-task-clean");
var copy = require("./index");

gulp.task("clean", clean("public"));

gulp.task("copy:single", ["clean"], copy(
  "bower_components/bootstrap-sass/assets/javascripts/**/*.js",
  "public/vendor/scripts"
));

gulp.task("copy:multiple", ["clean"], copy([
  {
    src: "bower_components/bootstrap-sass/assets/stylesheets/bootstrap{,/**/*.scss}",
    dest: "public/vendor/styles"
  },
  {
    src: "bower_components/bootstrap-sass/assets/javascripts/**/*.js",
    dest: "public/vendor/scripts"
  }
]));
