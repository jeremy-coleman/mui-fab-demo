var gulp = require('gulp')

gulp.task('copytests', () => gulp.src('src/**/*.spec.ts').pipe(gulp.dest('tests')))