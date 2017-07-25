var path = require('path');
    module.exports = {
        entry: './src/index.js',
        output: {
            path: __dirname,
            filename: './dist/app.js'
        },
        module: {
            loaders: [
                {
                  test: path.join(__dirname, 'src'),
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
        }
    };
