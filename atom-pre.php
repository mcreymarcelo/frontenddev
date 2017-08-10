<?php require('header.php'); ?>
    <div class="main-wrapper">
    	<div class="container">

    		<h1>Preformatted Text</h1>

    		<pre>
    			
		"use strict";

		const gulp     = require('gulp');
		const postcss  = require('gulp-postcss');
		const posturl  = require("postcss-url")
		const cssnext  = require('postcss-cssnext');
		const atImport = require('postcss-import');
		const cssnano  = require('cssnano');
		const browserSync = require('browser-sync');

		gulp.task('styles', function(){

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


		gulp.task('watch:styles', function(){
			gulp.watch('**/*.css', ['styles'])
		});


		gulp.task('browser-sync', function() {
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

		gulp.task('watch', function() {

			// Watch .css files
			gulp.watch('**/*.css', ['styles', browserSync.reload]);

			// Watch any files in dist/, reload on change
			gulp.watch("*.php", browserSync.reload);

		});

		gulp.task('default', ['styles', 'browser-sync', 'watch']);

    		</pre>

    	</div>
    </div> 
<?php require('footer.php'); ?>

