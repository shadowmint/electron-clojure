import {Task, manager} from 'gulp-runtime';
import run from 'run-sequence';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import gulp from 'gulp';
import browserify from 'gulp-browserify';
import sass from 'gulp-sass';


export class Frontend extends Task {

  constructor(config) {
    super("Frontend", config);
    this.tmp = `${config.tmp}/frontend`;
    this.deploy_src = [`${config.tmp}/frontend/app.js`];
    this.deploy = `${config.deploy}/frontend`;
    this.styles = `${config.src}/frontend/app.scss`;
    this.allStyles = [`${config.src}/frontend/*.scss`, `${config.src}/frontend/**/*.scss`];
    this.src = [
      `${config.src}/frontend/*.jsx`,
      `${config.src}/frontend/**/*.jsx`,
      `${config.src}/frontend/*/*.js`,
      `${config.src}/frontend/**/*.js`
    ];

    this.deploy_name = 'main.js';
    this.deploy_styles = 'main.css';
  }

  tasks() {
    gulp.task('frontend-deploy', () => {
      return gulp.src(this.deploy_src)
        .pipe(browserify())
        .pipe(rename(this.deploy_name))
        .pipe(gulp.dest(this.deploy));
    });

    gulp.task('frontend-build', (done) => {
      return gulp.src(this.src)
        .pipe(plumber())
        .pipe(babel({
          presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest(this.tmp));
    });

    gulp.task('frontend-styles', (done) => {
      return gulp.src(this.styles)
        .pipe(sass())
        .pipe(rename(this.deploy_styles))
        .pipe(gulp.dest(this.deploy));
    });

    gulp.task('frontend', (done) => {
      run('frontend-build', 'frontend-styles', 'frontend-deploy', done);
    });
  }

  watch() {
    gulp.watch(this.src, ['frontend']);
    gulp.watch(this.allStyles, ['frontend-styles']);
  }
}

// Setup this task on import
manager.register(Frontend);
