/**
 * Created by tottokotkd on 2016/12/18.
 */

import gutil from 'gulp-util'
import prettyHrtime from 'pretty-hrtime'
import notify from 'gulp-notify'

export class BundleLogger {
    startTime = null;

    start(filepath) {
        this.startTime = process.hrtime();
        gutil.log('Bundling', gutil.colors.green(filepath) + '...');
    }

    end(filepath) {
        const taskTime = process.hrtime(this.startTime);
        const prettyTime = prettyHrtime(taskTime);
        gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
    }
}

export const errorHandler = notify.onError({
    title: 'Compile Error',
    message: "<%= error.message %>"
});
