const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));


function copyFiles() {
    return src("src/js/*.js")
        .pipe(dest("dist"))
}

function buildStyles() {
    return src("src/sass/style.scss") // relative path to source
        .pipe(sass())
        .pipe(dest("dist")) // relative path to destination folder
}

function watchFiles() {
    watch(["src/sass/**/*.scss"], buildStyles);
    watch("src/js/*.js", copyFiles);
}

exports.default = series(copyFiles, buildStyles, watchFiles)