

const {  series, src, dest, watch} = require('gulp');

//bowser refesh
var browserSync = require('browser-sync').create();



function html(cb){
    src("src/index.html")
    .pipe(dest("dist"))
    cb();
  }

  function fonts(cb){
    src("src/fonts/*")
    .pipe(dest("dist/fonts"))
    cb();
  }


function js(cb){
    src("src/js/*.js")
    .pipe(dest("dist/js"))
    cb();
  }

  function css(cb){
    src("src/css/*.css")
    .pipe(dest("dist/css"))
    cb();
  }



  function watcher(cb){
    watch("src/*.html").on('change', series(html, browserSync.reload));
    watch("src/js/*.js").on('change', series(js, browserSync.reload));
    watch("src/css/*.css").on('change', series(css, browserSync.reload));
    watch("src/fonts/*").on('change', series(fonts, browserSync.reload));

    cb();
  }

  function server(cb){
    browserSync.init({
     server:{
      baseDir: "dist"
     } 
    })
    cb();
  }
  



  
  exports.default = series(css,html, watcher,server, fonts);