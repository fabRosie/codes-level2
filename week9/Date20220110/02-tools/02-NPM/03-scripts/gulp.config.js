const {src,dest,series}=require('gulp');

function scripts(){
    return src('./03-scripts/app.js',{sourcemaps:true})
    .pipe(dest('./03-scripts/bundle.js'))
}
var build = series(scripts)

exports.default=build