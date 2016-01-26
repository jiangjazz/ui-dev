var gulp = require('gulp');

var minifycss = require('gulp-minify-css'),         // css压缩
    concat = require('gulp-concat'),                //文件合并
    sass      = require('gulp-ruby-sass'),          // sass编译
//  plumber = require('gulp-plumber'),              //错误处理
    rename    = require('gulp-rename'),             // 重命名
    notify    = require('gulp-notify');             // 提示 && 处理错误


//基础地址   便于以后更改
var path = {
    css: {
        dest: 'public/dist/css',
        sass: 'public/src/scss/*.scss',
        sassWatch: 'public/src/scss/**/*.scss',
        sassDest: 'public/src/css'
    }
};
//scss处理


//css处理

/**  sass编译4种风格 1.nested  2.expanded  3.compact 4.compressed 【嵌套，正常，紧凑，压缩】 **/

gulp.task('css', function(){
    return sass(path.css.sass, { style: 'expanded',noCache: true, sourcemap: false})
    .pipe(gulp.dest(path.css.sassDest))
    .pipe(rename({ suffix: '.min' }))
    //.pipe(minifycss())
    .pipe(gulp.dest(path.css.dest))
    .pipe(notify({ message: 'Styles task complete' }));
});

//监听
gulp.task('watch', function(){
    //css
    gulp.watch(path.css.sassWatch, ['css']);
});
