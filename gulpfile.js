const gulp = require('gulp'),
  clean = require('gulp-clean')
  replace = require('gulp-replace-task'),
  fs = require('fs'),
  gulpsync = require('gulp-sync')(gulp);

const config = {};

gulp.task('default', ['build']);
gulp.task('build', gulpsync.sync(['load-config', 'clean', 'translate']));

gulp.task('load-config', done => {
  fs.readdir('./i18n', (err, files) => {
    config.i18n = files.map(file => file.split('.').shift());
    done();
  });
});

gulp.task('clean', () => {
  const folders = config.i18n;

  return gulp.src(folders, {read: false}).pipe(clean());
});

gulp.task('translate', () => {
  return config.i18n.map(translate);
});

const translate = lang => {
  return gulp.src(['base/**'])
    .pipe(replace({
      patterns: [
        {
          json: require(`./i18n/${lang}.js`)
        }
      ]
    }))
    .pipe(gulp.dest(`./${lang}`));
}
