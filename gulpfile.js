var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('run_html', function() {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./dest/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('run_css', function() {
	return gulp.src('./src/*.css')
		.pipe(gulp.dest('./dest/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('run_js', function() {
	return gulp.src('./src/*.js')
		.pipe(gulp.dest('./dest/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browser_sync', function() {
	browserSync.init({
		server: {
			baseDir: './dest',
			index: 'form.html'
		}
	})
})

gulp.task('default', ['browser_sync', 'run_html', 'run_css', 'run_js'], function() {
	gulp.watch('./src/*.html', ['run_html']);
	gulp.watch('./src/*.css', ['run_css']);
	gulp.watch('./src/*.js', ['run_js']);
});
