import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'

import gulp from 'gulp'
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify'
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps'

import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'

import {getConfig} from '../config'
import {BundleLogger, errorHandler} from '../util/loggers'

gulp.task('browserify', (callback) => {

    const isProduction = !!util.env.production;
    const config = getConfig(isProduction);
    const bundleLogger = new BundleLogger;
    let bundleQueue = config.browserify.bundleConfigs.length;

    function getBundler(bundleConfig) {
        return browserify({...config.browserify.common, entries: bundleConfig.entries})
            .transform(babelify.configure(config.babel));
            // .transform('browserify-shim', { global: true });
    }

    config.browserify.bundleConfigs
        .map(c => {return {...c, bundler: getBundler(c)}})
        .forEach(c => {
            const {outputName, dest, bundler} = c;
            const bundle = () => {
                bundleLogger.start(outputName);

                return bundler
                    .bundle()
                    .on('error', errorHandler)
                    .pipe(source(outputName))
                    .pipe(buffer())
                    .pipe(gulpIf(isProduction, sourcemaps.init({loadMaps: true})))
                    .pipe(gulpIf(isProduction, uglify()))
                    .pipe(gulpIf(isProduction, sourcemaps.write("./")))
                    .pipe(gulp.dest(dest))
                    .on('end', reportFinished);
            };

            if (global.isWatching) {
                watchify(bundler).on('update', bundle);
            }

            const reportFinished = () => {
                bundleLogger.end(outputName);
                --bundleQueue == 0 ? callback() : null;
            };

            return bundle();
        });

});
