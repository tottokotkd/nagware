import gulp from 'gulp'
import {getConfig} from '../config'

gulp.task('markup', () => {
    const config = getConfig().markup;
    return gulp
        .src(config.src)
        .pipe(gulp.dest(config.dest));
});
