//定义目录
var app={
    srcPath:"src/",
    buildPath:"build/",
    distPath:"dist/"
}

//引入gulp与gulp插件
var gulp=require("gulp");
var less=require("gulp-less");
var cssmin=require("gulp-cssmin");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var connect=require("gulp-connect");
var imagemin=require("gulp-imagemin");
var open=require("gulp-open");

//引入第三方框架
gulp.task("lib",function(){
    gulp.src(app.srcPath+"lib/**")
        .pipe(gulp.dest(app.buildPath+"lib"))
        .pipe(gulp.dest(app.distPath+"lib"))
        .pipe(connect.reload());
});

//定义html任务
gulp.task("html",function(){
    gulp.src(app.srcPath+"**/*.html")
        .pipe(gulp.dest(app.buildPath))
        .pipe(gulp.dest(app.distPath))
        .pipe(connect.reload());
});

//定义less任务
gulp.task("less",function(){
    gulp.src(app.srcPath+"style/**/*.less")
        .pipe(concat("index.less"))
        .pipe(less())
        .pipe(gulp.dest(app.buildPath+"css/"))
        .pipe(cssmin())
        .pipe(gulp.dest(app.distPath+"css/"))
        .pipe(connect.reload());
});

//定义js任务
gulp.task("js",function(){
    gulp.src(app.srcPath+"js/**/*.js")
        .pipe(concat("index.js"))
        .pipe(gulp.dest(app.buildPath+"js/"))
        .pipe(uglify())
        .pipe(gulp.dest(app.distPath+"js/"))
        .pipe(connect.reload());
});

//定义image任务
gulp.task("image",function(){
    gulp.src(app.srcPath+"images/**/*")
    .pipe(gulp.dest(app.buildPath+"images/"))
    .pipe(imagemin())
    .pipe(gulp.dest(app.distPath+"images/"))
    .pipe(connect.reload());
});

//同时执行多个任务
gulp.task("build",["lib","html","less","js","image"]);

//定义server服务
gulp.task("server",["build"],function(){
    connect.server({
        root:[app.buildPath],
        livereload:true,
        port:8888,
    });
    gulp.watch(app.srcPath+"lib/**/*",["lib"]);
    gulp.watch(app.srcPath+"**/*.html",["html"]);
    gulp.watch(app.srcPath+"style/**/*.less",["less"]);
    gulp.watch(app.srcPath+"js/**/*.js",["js"]);
    gulp.watch(app.srcPath+"images/**/*",["image"]);

    open("http://localhost:8888");
});

//定义默认任务
gulp.task("default",["server"]);