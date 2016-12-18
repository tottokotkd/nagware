import gulp from 'gulp'
import {getConfig} from '../config'

gulp.task('watch', ['setWatch', 'browserSync'], () => {
    gulp.watch(getConfig().markup.src, ['markup']);
});
