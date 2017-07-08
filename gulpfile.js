var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');

gulp.task('sass', function () {  
    gulp.src('app/scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["app/css/*.css", "app/js/*.js"], {
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("app/scss/*.scss", ['sass']);
});