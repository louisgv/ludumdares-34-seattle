// # Gulp Tasks

// ## Requires
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var bust = require('gulp-buster');
var filter = require('gulp-filter');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer')
var reactify = require('reactify');
var reload = require('browser-sync').reload;
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

// ### Sources / Destinations
var src = {
  js: ['src/**/*.js', 'src/**/*.jsx'],
  js_index: './src/index.jsx',
  css: 'src/**/*.styl',
  css_index: 'src/index.styl'
};
var dest = {
  js: 'build/js',
  css: 'build/css'
};

// ## Environment
var env = {
  dev: function() {
    return process.env.NODE_ENV === 'dev';
  },
  prod: function() {
    return process.env.NODE_ENV === 'prod';
  }
};
gulp.task('env:dev', function(cb) {
  process.env.NODE_ENV = 'dev';
  cb();
});
gulp.task('env:prod', function(cb) {
  process.env.NODE_ENV = 'prod';
  cb();
});

// ## Subtasks
gulp.task('js', function() {
  function errorHandler(err) {
    console.log(err);
  }

  var bundler = browserify({
    entries: [src.js_index],
    cache: {},
    debug: true,
    fullPaths: true,
    insertGlobals: true,
    noParse: [
      'jquery',
      'moment'
    ],
    packageCache: {}
  });

  var rebundle = function(ids, done) {
    if (ids) {
      console.log('File changed: ' + ids[0]);
    }

    return bundler.bundle()
      .on('error', errorHandler)
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(gulpif(env.dev(), sourcemaps.init({loadMaps: true})))
      .pipe(gulpif(env.prod(), uglify()))
      .pipe(gulpif(env.dev(), sourcemaps.write('./')))
      .pipe(gulp.dest('./build/js/'))
      .pipe(gulpif(env.prod(), bust()))
      .pipe(gulpif(env.prod(), gulp.dest('.')))
      .pipe(browserSync.reload({stream: true}));
  }

  if (env.dev()) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  return rebundle();
});

gulp.task('css', function() {
  gulp.src(src.css_index)
    .pipe(gulpif(env.dev(), plumber()))
    .pipe(gulpif(env.dev(), sourcemaps.init()))
    .pipe(stylus())
    .pipe(prefix())
    .pipe(gulpif(env.dev(), sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: 'src/css'
    })))
    .pipe(gulpif(env.prod(), minify()))
    .pipe(gulp.dest(dest.css))
    .pipe(filter('**/*.css'))
    .pipe(reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync({
    ghostMode: false,
    server: {
      baseDir: './',
      open: true
    },
    port: process.env.PORT || 1314
  });
});

// ## Main tasks

// Watch task
gulp.task('watch', function() {
  gulp.watch(src.js, ['js']);
  gulp.watch(src.css, ['css']);
});

// Build tasks
gulp.task('build', ['js', 'css']);
gulp.task('build:dev', function(cb) {
  runSequence('env:dev', 'build', cb);
});
gulp.task('build:prod', function(cb) {
  runSequence('env:prod', 'build', cb);
});

// Default task
gulp.task('default', function(cb) {
  runSequence('env:dev', 'build', 'serve', 'watch', cb);
});
