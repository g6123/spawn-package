const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const del = require('del');

gulp.task('build', ['clean'], () => (
  gulp.src([path.join(__dirname, 'src', '**', '*.js')])
    .pipe(babel({
      presets: [
        ['env', {
          targets: {
            node: '0.10',
          },
        }],
      ],
    }))
    .pipe(gulp.dest(path.join(__dirname, 'lib')))
));

gulp.task('test', ['build'], () => {
  const srcGlobs = [
    path.join(__dirname, 'test', '**', '*.js'),
    `!${path.join(__dirname, 'test', 'mock', '**')}`,
  ];

  return gulp.src(srcGlobs).pipe(mocha());
});

gulp.task('clean', () => (
  del([
    path.join(__dirname, 'lib', '*.*'),
    path.join(__dirname, 'lib', '*', '**'),
  ])
));
