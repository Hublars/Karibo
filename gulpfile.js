var gulp       = require('gulp'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    reactify   = require('reactify'),
    source     = require('vinyl-source-stream'),
    glob       = require('glob'),
    concat     = require('gulp-concat'),
    less       = require('gulp-less'),
    watch      = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    nodemon    = require('gulp-nodemon'),
    notify     = require('gulp-notify');

// npm run dev
gulp.task('dev', function() {
  doBrowserify(false);
  compileLess();
  livereload.listen();
  nodemon({
    script: 'web.js',
    ext: 'js less hbs',
    ignore: ['public', 'gulpfile.js'],
    env: { 'NODE_ENV': 'development' }
  }).on('restart', function() {
    doBrowserify(false);
    compileLess();
    restart();
  });
});

function restart() {
  gulp.src('web.js')
    .pipe(livereload())
    .pipe(notify('Reloading page, please wait...'));
}

function compileLess() {
  glob('./flux/modules/**/*.less', function(err, files) {
      buildCSS(files);
  });
}

// npm run bNodeModules
gulp.task('browserifyNodeModules', function() {
  var b = browserify();
  b.require('react');
  b.require('events');
  b.bundle()
  .pipe(source('nodeModules.js'))
  .pipe(gulp.dest('./public/build'));
});

// npm run bNoWatch
gulp.task('browserifyNoWatch', function() {
  doBrowserify(false);
});
// npm run bWatch
gulp.task('browserifyWatch', function() {
  doBrowserify(true);
});

function doBrowserify(watch) {
  var b = browserify({
    transform: [reactify],
    debug: true
  });

  if (watch) {
    b = watchify(b);
    b.on('update', function() {
      build(b);
    });
  }

  b.add('./clientmain');
  b.exclude('react');
  b.exclude('events');
  build(b);
}

function build(b) {
  b.bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/build'));
}

// npm run cLessNoWatch
gulp.task('compileLessNoWatch', function() {
  glob('./flux/modules/**/*.less', function(err, files) {
      buildCSS(files);
  });
});
// npm run cLessWatch
gulp.task('compileLessWatch', function() {
  livereload.listen();
  glob('./flux/modules/**/*.less', function(err, files) {
    gulp.src(files)
      .pipe(watch(files))
      .on('add', function() {
        console.log('add');
      })
      .on('change', function() {
        if (watch) {
          buildCSS(files);
          livereload();
        }
      })
      .on('unlink', function() {
        console.log('unlink');
      });

      buildCSS(files);
  });
});

function buildCSS(files) {
  return gulp.src(files)
  .pipe(less({ paths: [] }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/build'));
}
