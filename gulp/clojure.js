import {Task, manager} from 'gulp-runtime';
import run from 'run-sequence';
import gulp from 'gulp';

export class Clojure extends Task {

  constructor(config) {
    super("Clojure", config);
    this.src = [`${config.src}/clojure/resources/public/*.js`];
    this.deploy = `${config.deploy}/clojure`;
  }

  tasks() {
    gulp.task('clojure-deploy', () => {
      return gulp.src(this.src)
        .pipe(gulp.dest(this.deploy));
    });

    gulp.task('clojure', (done) => {
      run('clojure-deploy', done);
    });
  }

  watch() {
    gulp.watch(this.src, ['clojure']);
  }
}

// Setup this task on import
manager.register(Clojure);
