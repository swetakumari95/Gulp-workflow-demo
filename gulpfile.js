var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	imageResize = require('gulp-image-resize');

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('minCSS'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
});

gulp.task('imagemin', function(){
	gulp.src('images/lbtc.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('imageResize', function(){
	gulp.src('images/lbtc.jpg')
		.pipe(imageResize({
			width: 100,
			height: 100,
			crop : true,
			upscale : false
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts', 'styles', 'imagemin', 'imageResize', 'watch']);
