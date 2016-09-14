import {Task, manager} from 'gulp-runtime';
import nodeunit from 'gulp-nodeunit';
import  run from 'run-sequence';
import  babel from 'gulp-babel';
import  plumber from 'gulp-plumber';
import  gulp from 'gulp';


export class Backend extends Task {

  constructor(config) {
    super("Backend", config);
    this.src = [`${config.src}/backend/*.js`, `${config.src}/backend/**/*.js`];
    this.tmp = `${config.tmp}/backend`;
    this.tests = `${config.tmp}/backend/**/*_test.js`;
    this.deploy_src = [`${config.tmp}/backend/**/*.js`, `!${this.tests}`];
    this.deploy = `${config.deploy}/backend`;
  }

  tasks() {
    gulp.task('backend-deploy', () => {
      return gulp.src(this.deploy_src)
        .pipe(gulp.dest(this.deploy));
    });

    gulp.task('backend-build', (done) => {
      return gulp.src(this.src)
        .pipe(plumber())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(gulp.dest(this.tmp));
    });

    gulp.task('backend-test', () => {
      return gulp.src(this.tests)
        .pipe(plumber())
        .pipe(nodeunit());
    });

    gulp.task('backend', (done) => {
      run('backend-build', 'backend-test', 'backend-deploy', done);
    });
  }

  watch() {
    gulp.watch(this.src, ['backend']);
  }
}

// Setup this task on import
manager.register(Backend);