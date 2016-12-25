import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'

import gulp from 'gulp'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'

import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'

import {getConfig} from '../config'
import {BundleLogger, errorHandler} from '../util/loggers'

gulp.task('browserify', (callback) => {

    const config = getConfig();
    const bundleLogger = new BundleLogger;
    let bundleQueue = config.browserify.bundleConfigs.length;

    function getBundler(bundleConfig) {
        return browserify({...config.browserify.common, entries: bundleConfig.entries})
            .transform(babelify.configure(config.babel))
            .transform('browserify-shim', { global: true });
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
                    .pipe(sourcemaps.init({loadMaps: true}))
                    .pipe(uglify())
                    .pipe(sourcemaps.write("./"))

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
