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
import imagemin from 'gulp-imagemin';
import notify from 'gulp-notify';
import cache from 'gulp-cache';
import del from 'del';
import webp from 'gulp-webp';
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*'
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

function images() {
    return src(paths.images)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('build/img'))
        .pipe(notify('Imagen Completada'));
}

function versionWebp() {
    return src(paths.images)
        .pipe(webp())
        .pipe(dest('build/img'))
        .pipe(notify('Imagen WebP Completada'));
}

function watchFiles() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
    watch(paths.images, images);
    watch(paths.images, versionWebp);
}

export { clean };
export { css };
export { javascript };
export { images };
export { versionWebp };
export { watchFiles as watch };
export default series(clean, parallel(css, javascript, images, versionWebp), watchFiles);
