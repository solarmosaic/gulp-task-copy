var gulp = require("gulp");
var copy = require("./index");

// Copy vendor files from bower components to the public folder
gulp.task("copy", copy([
  {
    src: "bower_components/bootstrap-sass/assets/stylesheets/bootstrap{,/**/*.scss}",
    dest: "public/vendor/styles"
  },
  {
    src: "bower_components/bootstrap-sass/assets/javascripts/**/*.js",
    dest: "public/vendor/scripts"
  }
]));
