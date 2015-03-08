# gulp-task-copy

Copies files using [vinyl-fs](https://github.com/wearefractal/vinyl-fs).
Supports [glob](https://github.com/isaacs/node-glob) pattern matching.

## Install

`npm install --save mosaic-gulp-task-copy`

## Usage

```javascript
var gulp = require("gulp");
var copy = require("mosaic-gulp-task-copy");

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
```

## License

MIT
