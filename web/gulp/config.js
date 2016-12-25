const dest = './build', src = './src';

export function getConfig(isProduction) {
    return {
        browserSync: {
            server: {
                baseDir: [dest, src]
            },
            files: [
                dest + '/**'
            ]
        },
        markup: {
            src: src + "/www/**",
            dest: dest
        },
        browserify: {
            common: {
                cache: {}, packageCache: {}, fullPaths: false,
                extensions: ['.js', '.jsx'],
                debug: !isProduction,
            },
            debug: !isProduction,
            bundleConfigs: [{
                entries: src + '/app/entry.js',
                dest: dest,
                outputName: 'entry.js'
            }],
            extensions: ['.js', '.jsx'],
        },
        babel: {
            presets: ["es2015", "react", "stage-0"]
        }
    };
}
