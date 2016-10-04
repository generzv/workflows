var gulp = require("gulp"),
	gutil = require("gulp-util"),
	coffee = require("gulp-coffee"),
	concat = require("gulp-concat");

gulp.task('log', function() {
	gutil.log("workflot-ing");
});

var coffeeSources = ['components/coffee/tagline.coffee'];
gulp.task('coffee', function () {
	gulp.src(coffeeSources) //'components/coffee/*.coffee'
		.pipe(coffee({ bare: true }) //compile js out of safety wrapper
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

var jsSources = [
	'components/scripts/pixgrid.js',
	'components/scripts/rclick.js',
	'components/scripts/tagline.js'
];

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
});