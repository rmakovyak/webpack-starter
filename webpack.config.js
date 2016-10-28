// Modules
var webpack = require('webpack');

/**
* definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
*/
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __RELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_RELEASE || 'false')),
});

module.exports = {
    entry: './app.js',
    output: {
        filename: './public/bundle.js'       
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015']
                }
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            { 
                test: /\.(png|jpg)$/, 
                /**
                 * inline base64 URLs for <=8k images, direct URLs for the rest
                 */
                loader: 'url-loader?limit=8192' 
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss'] 
    },
    plugins: [definePlugin]     
};