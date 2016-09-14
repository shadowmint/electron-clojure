import {Task, manager} from 'gulp-runtime';
import nodeunit from 'gulp-nodeunit';
import  run from 'run-sequence';
import  babel from 'gulp-babel';
import  plumber from 'gulp-plumber';
import  gulp from 'gulp';


export class Shared extends Task {

  constructor(config) {
    super("Shared", config);
    this.src = [`${config.src}/shared/*.js`, `${config.src}/shared/**/*.js`];
    this.tmp = `${config.tmp}/shared`;
    this.tests = `${config.tmp}/shared/**/*_test.js`;
  }

  tasks() {
    gulp.task('shared-build', (done) => {
      return gulp.src(this.src)
        .pipe(plumber())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(gulp.dest(this.tmp));
    });

    gulp.task('shared-test', () => {
      return gulp.src(this.tests)
        .pipe(plumber())
        .pipe(nodeunit());
    });

    gulp.task('shared', (done) => {
      run('shared-build', 'shared-test', done);
    });
  }

  watch() {
    gulp.watch(this.src, ['shared']);
  }
}

// Setup this task on import
manager.register(Shared);
