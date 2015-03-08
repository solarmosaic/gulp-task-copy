var merge = require("merge-stream");
var fs = require("vinyl-fs");

/**
 * Copy files. Supports glob pattern matching.
 *
 * @see https://github.com/wearefractal/vinyl-fs
 * @see https://github.com/isaacs/node-glob
 *
 * @param {Array|Object} copy An object or array of objects defining files to copy.
 * @param {Array|String} copy.src Glob string or array of glob strings to copy from.
 * @param {Function|String} copy.dest Folder path to copy to, or a function that takes in a file and returns a path.
 * @param {Object} [copy.options] Additional configuration options.
 * @param {Object} [copy.options.src] See https://github.com/wearefractal/vinyl-fs#srcglobs-opt
 * @param {Object} [copy.options.dest] See https://github.com/wearefractal/vinyl-fs#destfolder-opt
 */
module.exports = function(copy) {
  var streams = [];

  (Array.isArray(copy) ? copy : [copy]).forEach(function(item) {
    item.options = item.options || {};
    streams.push(fs.src(item.src, item.options.src).pipe(fs.dest(item.dest, item.options.dest)));
  });

  return function() {
    return merge(streams);
  }
};
