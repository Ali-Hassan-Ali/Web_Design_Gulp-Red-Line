var gulp = require('gulp');
var browsersync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

async function style() {
	return gulp.src('src/scss/styles.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
	.pipe(autoprefixer())
	.pipe(sourcemaps.write())
	.pipe(rename('min.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browsersync.stream());
}//end Od function file styles

async function bootstrap_styles() {
	return gulp.src('src/Bootstrap/bootstrap.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
	.pipe(autoprefixer())
	.pipe(sourcemaps.write())
	.pipe(rename('bootstrap.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browsersync.stream());
}//End OF Function Bootstrap styles

async function vendor_style() {
	return gulp.src('src/plugins/**/*.css')
	.pipe(sourcemaps.init())
	.pipe(sourcemaps.write())
	.pipe(concat('vendor.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browsersync.stream());
}//end Od function file vendor_style

async function scripts() {
	gulp.src('src/js/**/*.js')
	.pipe(uglify())
	.pipe(rename('main.min.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(browsersync.stream());
}//end of function Script

async function vendor_scripts() {
	gulp.src('src/plugins/**/*.js')
	.pipe(uglify())
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(browsersync.stream());
}//end of function Script

async function compress_images() {
	return gulp.src('src/images/**/*.*')
	.pipe(imagemin( [
		imagemin.gifsicle({ interlaced:true }),
		imagemin.mozjpeg({	progressive:true }),
		imagemin.optipng({	potmizationlevel:5 }),
 		imagemin.svgo({
 			plugins: [
 				{ removeViewBox:true },
 				{ cleanupIDs:false }
 			]
 		})
	]))

	.pipe(gulp.dest('dist/images'))
	.pipe(browsersync.stream());
}//end of function Images

function watch() {
	browsersync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('src/scss/**/*.scss',style);
	gulp.watch('src/Bootstrap/**/*.scss',bootstrap_styles);
	gulp.watch('src/images/**/*.*',compress_images);
	gulp.watch('src/plugins/**/*.css',vendor_style);
	gulp.watch('src/plugins/**/*.js',vendor_scripts);
	gulp.watch('src/js/**/*.js',scripts);
	gulp.watch('./*.html').on('change', browsersync.reload);
}//function min watch

exports.default = gulp.series(
	gulp.parallel([style,bootstrap_styles]),
	gulp.parallel([vendor_style, vendor_scripts,scripts]),
	compress_images,
	watch
);


exports.style = style;
exports.bootstrap_styles = bootstrap_styles;