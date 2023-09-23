const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');

let firstRun = true;

function styles() {
    return gulp
        .src('src/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulpIf(!firstRun, cleanCSS())) // Minify and optimize only after the first run
        .pipe(gulp.dest('src/compiled'))
        .on('end', () => {
            firstRun = false;
        });
}

function watch() {
    gulp.watch('src/**/*.css', styles);
}

exports.styles = styles;
exports.watch = watch;
