import { src, dest, watch, series, parallel } from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'cssnano';
import concat from 'gulp-concat';
import terser from 'gulp-terser-js';
import rename from 'gulp-rename';
import del from 'del';

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
};

function clean() {
    return del(['build']);
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'));
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('build/js'));
}

function watchFiles() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

export { clean };
export { css };
export { javascript };
export { watchFiles as watch };
export default series(clean, parallel(css, javascript), watchFiles);
