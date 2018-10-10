const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "app.js")
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'affinix.bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'jshint-loader' }
                    
                ],
                test: /\.js$/, 
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, 
            }
        ]
    },
    
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // any jshint option http://www.jshint.com/docs/options/
            // i. e.

            // custom reporter function
            reporter: function(errors) { }
        })
    ],
    resolve:{
        alias:{
            
        }
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
     }
}
