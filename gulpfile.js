const {src, dest, watch} = require('gulp'); 
const browserSync = require('browser-sync').create();
const  cssmin = require('gulp-cssmin');
const  rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass );
    watch("./scss/**/*.scss", serveSass );
    watch("./js/*.js").on('change', browserSync.reload);
};

// // minify css using gulp.
// gulp.task('mincss', function (done) {
//     gulp.src('./*.css')
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('css'));
//         done();
// });

function serveSass() {
    return src("./sass/**/*.sass","./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};


exports.serve = bs;