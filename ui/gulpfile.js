'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('watch', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch(['./backend/*.js', './backend/**/*.js'], electron.restart);

  // Reload renderer process
  gulp.watch(['./clojure/main.js', './frontend/main.js', './frontend/main.css'], electron.reload);
});
