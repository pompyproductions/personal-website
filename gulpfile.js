const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return src("src/sass/style.scss") // relative path to source
        .pipe(sass())
        .pipe(dest("dist")) // relative path to destination folder
}

function watchFiles() {
    watch(["src/sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchFiles);
