var gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('default', () => {
	return gulp.src('img/*.jpg')
		.pipe(responsive({
			'*.jpg': [{
				width: 280,
				height: 210,
				rename: {
					suffix: 'sm',
					extname: '.jpg'
				}
			}, {
				width: 384,
				height: 288,
				rename: {
					suffix: '-md',
					extname: '.jpg'
				}
			}]
		}))
		.pipe(gulp.dest('img'));
});