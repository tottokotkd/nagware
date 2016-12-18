import browserSync from 'browser-sync'
import gulp from 'gulp'

import {getConfig} from '../config'

gulp.task('browserSync', ['build'], () => {
    browserSync(getConfig().browserSync);
});
