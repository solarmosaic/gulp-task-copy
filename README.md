# gulp-task-copy

Copies files using [vinyl-fs](https://github.com/wearefractal/vinyl-fs).
Supports [glob](https://github.com/isaacs/node-glob) pattern matching.

## Install

`npm install --save mosaic-gulp-task-copy`

## Usage

```javascript
var gulp = require("gulp");
var copy = require("mosaic-gulp-task-copy");

// Copy vendor files to the styles directory
gulp.task("copy", copy([
  
]));
```

## License

MIT
