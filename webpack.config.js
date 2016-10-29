module.exports = {
    entry: './app.js',
    output: {
        filename: './public/bundle.js'       
    },
    module: {
        preLoaders: [
             {
                test: /\.js$/, 
                loader: 'eslint-loader', 
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: [   
                    'babel-loader'
                ],
                query: {
                  presets: ['es2015', 'react']
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
    eslint: {
        configFile: './.eslintrc'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss', '.jsx'] 
    }
};



