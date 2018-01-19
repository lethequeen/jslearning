'use strict'
//在gulpfile中先载入gulp包
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
	gulp.src(['src/style/*.less', '!src/style/_*.less'])
	    .pipe(less())
	    .pipe(cssnano())
	    .pipe(gulp.dest('dist/styles'))
	    .pipe(browserSync.reload({
	    	stream:true
	    }));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
	gulp.src('src/scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp, dest('dist/scripts'))
	.pipe(browserSync, reload({
		stream: true
	}))
});

gulp.task('image', function() {
	gulp.src('src/images/*.*')
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload({
		stream:true
	}));
})

var htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

var browserSync = require('browser-sync');

gulp.task('serve', function() {
	browserSync({
		serve:{
			baseDire:[dist]
		},
	},function() {
		console.log(bs.option.getIn(["urls","local"]));
	});

gulp.watch('src/style/*.less', ['style']);
gulp.watch('src/script/*.js', ['script']);
gulp.watch('src/*.html', ['html']);
})