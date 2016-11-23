var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');

gulp.task('fonts', function () {
    gulp.src('bower_components/**/*.{eot,svg,woff,woff2}')
        .pipe(flatten())
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('styles', function () {
    gulp.src(['assets/sass/**/_*.scss', 'assets/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('vendor-styles', function () {
    gulp.src([
        'bower_components/tether/dist/css/tether.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        //'bower_components/MDBootstrap/css/mdb.min.css',
        //'bower_components/sweetalert/dist/sweetalert.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
    ])
    .pipe(concat('app.vendor.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('vendor-js', function () {
    gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/tether/dist/js/tether.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/MDBootstrap/js/mdb.min.js',
        'bower_components/sweetalert/dist/sweetalert.min.js',
    ])
    .pipe(concat('app.vendor.js'))
    .pipe(gulp.dest('./public/js'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/**/*.scss', ['styles']);
});