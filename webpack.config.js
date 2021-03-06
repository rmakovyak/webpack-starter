module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: './public/bundle.js'
    },
    devtool: 'source-map',
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
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
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
