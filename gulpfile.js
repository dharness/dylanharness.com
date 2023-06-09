var { src, dest, parallel, series, watch } = require('gulp');
var pug = require('gulp-pug');
const nunjucksRender = require('gulp-nunjucks-render');
var postcss = require('gulp-postcss');
const del = require('del');
const data = require('gulp-data');
var path = require('path');

const fs = require('fs');
const pugPath = './src/**/*.pug';
const cssPath = './src/**/*.css';
const jsPath = './src/**/*.js';
const assetsPath = './src/assets/**/**';
const cnamePath = './src/CNAME';

const { largeStickerConfigs, smallStickerConfigs1, smallStickerConfigs2 } = require('./stickerConfig');


function html() {
    return src(pugPath)
        .pipe(pug({
            data: { largeStickerConfigs, smallStickerConfigs1, smallStickerConfigs2 }
        }))
        .pipe(dest('docs'));
};

function css() {
    return src(cssPath)
        .pipe(postcss())
        .pipe(dest('docs'));
};

function js() {
    return src(jsPath)
        .pipe(dest('docs'));
};

function assets() {
    return src(assetsPath)
        .pipe(dest('docs/assets'));
};

function cname() {
    return src(cnamePath)
        .pipe(dest('docs'));
};

function clean() {
    return del(['docs']);
};

const runTasks = series(clean, parallel(html, css, assets, js, cname));

exports.default = function(done) {
    runTasks();
    done();
}

exports.watch = function() {
    runTasks();

    watch(cssPath, css);
    watch(pugPath, html);
    watch(jsPath, js);
}