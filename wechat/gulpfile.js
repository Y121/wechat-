/**
 * Created by Administrator on 2016/10/17.
 */
var gulp = require("gulp");
var imgmin = require("gulp-imagemin");
var minicss = require("gulp-minify-css");

gulp.task("default",["copyindex","copyimages","copymusic","copysass","copyjs"]);


gulp.task("mincss",function () {
    return gulp.src("src/sass/**/*.css")
        .pipe(minicss())
        .pipe(gulp.dest("dist/css/"));
})
gulp.task("copyindex",function () {
    return gulp.src("src/shouye.html").pipe(gulp.dest("dist/"));
});
gulp.task("copyimages",function () {
   return gulp.src("src/images/**/*")
       .pipe(imgmin())
       .pipe(gulp.dest("dist/images"))
});
gulp.task("copymusic",function () {
    return gulp.src("src/music/**/*")
        .pipe(imgmin())
        .pipe(gulp.dest("dist/music"))
});
gulp.task("copysass",function () {
    return gulp.src("src/sass/**/*")
        .pipe(imgmin())
        .pipe(gulp.dest("dist/sass"))
});
gulp.task("copyjs",function () {
    return gulp.src("src/js/**/*")
        .pipe(imgmin())
        .pipe(gulp.dest("dist/js"))
});
gulp.task("watch",function () {
    gulp.watch("src/shouye.html",["copyindex"]);
    gulp.watch("src/images/**/*",["copyimages"]);
    gulp.watch("src/js/**/*",["copyjs"]);
    gulp.watch("src/music/**/*",["copymusic"]);
    gulp.watch("src/sass/**/*",["copysass"]);
})