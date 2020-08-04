var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
    return gulp.src('./src/css/style.css')
        // .pipe(postcss(autoprefixer))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('img', function () {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./build/img'));
});

gulp.task('build', gulp.series(['css', "html", "img"]));