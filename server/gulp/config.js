const dest = './build', src = './src' ;


function handler(name) {

    return {
        entries: `${src}/handler/${name}.js`,
        dest: dest,
        outputName: `${name}.js`
    };
}

export function getConfig(isProduction) {
    return {
        browserify: {
            common: {

                node: true,
                standalone: 'code',
                cache: {}, packageCache: {}, fullPaths: false,
                extensions: ['.js', '.ts'],
                debug: !isProduction,
            },
            debug: !isProduction,
            bundleConfigs: [
                handler('helloHandler')
            ],
            extensions: ['.js', '.ts'],
        },
        babel: {
            presets: ["es2015", "stage-0"]
        }
    };
}
