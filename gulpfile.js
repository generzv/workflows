var gulp = require("gulp"),
	gutil = require("gulp-util"),
	coffee = require("gulp-coffee");

gulp.task('log', function() {
	gutil.log("workflot-ing");
});

var coffeeSources = ['components/coffee/tagline.coffee']
gulp.task('coffee', function () {
	gulp.src(coffeeSources) //'components/coffee/*.coffee'
		.pipe(coffee({ bare: true }) //compile js out of safety wrapper
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});