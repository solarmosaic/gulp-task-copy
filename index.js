var merge = require("merge-stream");
var fs = require("vinyl-fs");

/**
 * Copy files. Supports glob pattern matching.
 *
 * @see https://github.com/wearefractal/vinyl-fs
 * @see https://github.com/isaacs/node-glob
 *
 * @param {Array|Object|String} src A glob string or array of glob strings to copy from, a configuration object
 * containing `src` and `dest` keys, or an array of configuration objects.
 * @param {String|Function} [dest] A folder path to copy to, or a function that takes in a file and returns a folder
 * path.
 *
 * If src is an object:
 * @param {Array|String} [src.src] A glob string or array of glob strings to copy from.
 * @param {Function|String} [src.dest] A folder path to copy to, or a function that takes in a file and returns a
 * folder path.
 * @param {Object} [src.options] Additional configuration options that will be passed through to vinyl-fs.
 * @param {Object} [src.options.src] See https://github.com/wearefractal/vinyl-fs#srcglobs-opt
 * @param {Object} [src.options.dest] See https://github.com/wearefractal/vinyl-fs#destfolder-opt
 */
module.exports = function(src, dest) {
  return function() {
    var streams = [];

    (Array.isArray(src) ? src : [src]).forEach(function(item) {
      // Support array of strings
      if (typeof item === "string") {
        item = {
          src: item
        };
      }

      // Support dest as second parameter
      if (typeof dest === "string" || typeof dest === "function") {
        item.dest = dest;
      }

      item.options = item.options || {};
      streams.push(fs.src(item.src, item.options.src).pipe(fs.dest(item.dest, item.options.dest)));
    });

    return merge(streams);
  }
};
