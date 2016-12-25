import gulp from 'gulp'
import {getConfig} from '../config'

gulp.task('watch', () => {
    global.isWatching = true;
});
