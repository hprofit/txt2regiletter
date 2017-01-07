var path = require('path');
    module.exports = {
        entry: './es6/txt2regiletter.es6.js',
        output: {
            path: __dirname,
            filename: './dist/txt2regiletter.js'
        },
        module: {
            loaders: [
                {
                  test: path.join(__dirname, 'es6'),
                  loader: 'babel-loader',
                  query: {
                    presets: ['es2015']
                  }
                }
            ]
        },
        stats: {
            // Nice colored output
            colors: true
        },
    };
