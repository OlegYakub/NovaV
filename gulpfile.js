
/* ---------- START CONFIG ---------- */

/* files */
lessFiles = ['./src/less/*.less'];
sassFiles = ['./src/sass/*.scss', './node_modules/slick-carousel/slick/*.scss'];
cssFiles = ['./src/css/*.css', './node_modules/jquery-modal/jquery.modal.min.css'];
jsFiles = ['./node_modules/jquery/dist/jquery.min.js', './node_modules/slick-carousel/slick/slick.min.js', './node_modules/jquery-modal/jquery.modal.min.js', './src/js/*.js'];
pugFiles = ['./src/*.pug'];
htmlFiles = ['./src/*.html'];
imgFiles = ['./src/img/*'];
fontsFiles = ['./src/fonts/*'];
anotherFiles = ['./src/extra/**/*.*'];

/* minify css and js */
const MINIFY = false;

/* ---------- END CONFIG ---------- */

/* require plugins */
const gulp = require('gulp');
const gulpif = require('gulp-if');
const watch = require('gulp-watch');
const clean = require('gulp-clean');
const less = require('gulp-less');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

/* PostCSS processors */
var processors = [
  autoprefixer({ browsers: ['last 15 versions'] })
];
if (MINIFY) processors.push(cssnano());

/* clean build folder */
gulp.task('clean', () =>
  gulp.src('./build/', {read: false})
  .pipe(clean())
);

/* build less */
if (lessFiles.length) {
  gulp.task('less', () =>
    gulp.src(lessFiles)
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}))
  );
}

/* build sass */
if (sassFiles.length) {
  gulp.task('sass', () =>
    gulp.src(sassFiles)
    .pipe(sass({includePaths: './src/sass'}).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}))
  );
}

/* build css */
if (cssFiles.length) {
  gulp.task('css', () =>
    gulp.src(cssFiles)
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}))
  );
}

/* build js */
if (jsFiles.length) {
  gulp.task('js', () =>
    gulp.src(jsFiles)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulpif(MINIFY, uglify()))
    .pipe(gulp.dest('./build/js/'))
    .pipe(reload({stream: true}))
  );
}

/* build pug */
if (pugFiles.length) {
  gulp.task('pug', () =>
    gulp.src(pugFiles)
    .pipe(pug())
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream: true}))
  );
}

/* build html */
if (htmlFiles.length) {
  gulp.task('html', () =>
    gulp.src(htmlFiles)
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream: true}))
  );
}

/* build img */
if (imgFiles.length) {
  gulp.task('img', () =>
    gulp.src(imgFiles)
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'))
    .pipe(reload({stream: true}))
  );
}

/* build fonts */
if (fontsFiles.length) {
  gulp.task('fonts', () =>
    gulp.src(fontsFiles)
    .pipe(gulp.dest('./build/fonts/'))
  );
}

/* build files */
if (anotherFiles.length) {
  gulp.task('files', () =>
    gulp.src(anotherFiles)
    .pipe(gulp.dest('./build/files/'))
  );
}

/* create new build */
gulp.task('build', ['clean'], () => {
  if (lessFiles.length) gulp.start('less'); // less build
  if (sassFiles.length) gulp.start('sass'); // sass build
  if (cssFiles.length) gulp.start('css'); // css build
  if (jsFiles.length) gulp.start('js'); // js build
  if (pugFiles.length) gulp.start('pug'); // pug build
  if (htmlFiles.length) gulp.start('html'); // html build
  if (imgFiles.length) gulp.start('img'); // img build
  if (fontsFiles.length) gulp.start('fonts'); // fonts build
  if (anotherFiles.length) gulp.start('files'); // files build
});

/* start default task */
gulp.task('default', ['build'], () => {
  if (lessFiles.length) watch(lessFiles, () => gulp.start('less')); // less watcher
  if (sassFiles.length) watch(sassFiles, () => gulp.start('sass')); // sass watcher
  if (cssFiles.length) watch(cssFiles, () => gulp.start('css')); // css watcher
  if (jsFiles.length) watch(jsFiles, () => gulp.start('js')); // js watcher
  if (pugFiles.length) watch(pugFiles, () => gulp.start('pug')); // sass watcher
  if (htmlFiles.length) watch(htmlFiles, () => gulp.start('html')); // html watcher
  if (imgFiles.length) watch(imgFiles, () => gulp.start('img')); // img watcher
  if (fontsFiles.length) watch(fontsFiles, () => gulp.start('fonts')); // fonts watcher
  if (anotherFiles.length) watch(anotherFiles, () => gulp.start('files')); // files watcher

  browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['./build'],
      }
  });

  gulp.watch(['build/**/*']).on('change', reload);
});