var gulp = require('gulp')

gulp.task('default', ['Robot', 'Hello']);

gulp.task('Robot', function () {
	console.log("I'm a robot");
});

gulp.task('Hello', function(){
	console.log("Hello world");
});