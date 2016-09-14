import * as ut from 'gulp-runtime/lib/utils';
import {manager} from 'gulp-runtime';
import gulp from 'gulp';
import run from 'run-sequence';

// ----------------------------------------------------------------------------

/// Config
var config = {};

// Base paths
ut.root = __dirname;
config.src = ut.path('src');
config.tmp = ut.path('tmp');
config.deploy = ut.path('ui');

// ----------------------------------------------------------------------------

/// Load default arguments
ut.default_args(config);

/// Load various child tasks
import './gulp/frontend';
import './gulp/backend';
import './gulp/shared';
import './gulp/clojure';

/// Register child tasks
manager.debug = false;
manager.tasks(config);

// ----------------------------------------------------------------------------

/// Main task
gulp.task('default', function (callback) {
  run(
    'shared',
    'backend',
    'frontend',
    'clojure',
    function () {
      ut.build_success();
      callback();
    }
  );
});

/// Watch task
gulp.task('watch', ['default'], function () {
  manager.watch();
});
