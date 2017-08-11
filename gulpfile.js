"use strict";

const gulp        = require('gulp');
const postcss     = require('gulp-postcss');
const posturl     = require("postcss-url")
const cssnext     = require('postcss-cssnext');
const atImport    = require('postcss-import');
const cssnano     = require('cssnano');
const browserSync = require('browser-sync');
const imagemin    = require('gulp-imagemin');
const concat      = require('gulp-concat');

gulp.task('styles', () => {

	let processors = [
				atImport,
		    posturl(),
		    cssnext(),
		    require("postcss-browser-reporter")(),
		    require("postcss-reporter")(),
		    //cssnano()
			];

	return gulp.src('assets/css/main.css')
             .pipe(postcss(processors))
             .pipe(gulp.dest('dist/css'));

});

gulp.task('js', () => {

	return gulp.src('assets/js/*.js')
						 .pipe(concat('all.js'))
						 .pipe(gulp.dest('dist/js/'));

});


gulp.task('images', () => {

	let minifactor = [
										 imagemin.gifsicle({interlaced: true}),
										 imagemin.jpegtran({progressive: true}),
										 imagemin.optipng({optimizationLevel: 5}),
										 imagemin.svgo({plugins: [{removeViewBox: true}]})
									 ];

	return gulp.src('assets/images/*.*')
						 .pipe(imagemin(minifactor))
						 .pipe(gulp.dest('dist/images'));

});


gulp.task('watch:styles', () =>{

	gulp.watch('**/*.css', ['styles']);

});


gulp.task('watch:scripts', () =>{

	gulp.watch('**/*.js', ['js']);

});


gulp.task('browser-sync', () => {
	 /*browserSync({
		  server: {
				baseDir: "./",
				//index: "/index.php",
				startPath: "/index.php"
		  }
	 });*/

	 browserSync.init({
    files: ['**/*.php', '*.php'],
    proxy: 'frontenddev.dev',
  });

});


gulp.task('watchAll', () => {

	// Watch .css files
	gulp.watch('**/*.css', ['styles', browserSync.reload]);
	gulp.watch('**/*.js',  ['js', browserSync.reload]);

	// Watch any files in dist/, reload on change
	gulp.watch("*.php", browserSync.reload);

});


gulp.task('default', ['styles', 'js', 'images']);
gulp.task('watch',['watchAll', 'browser-sync']);