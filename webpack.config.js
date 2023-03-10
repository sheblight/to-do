const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index:'./src/index.js',
        view: './src/view.js',
        model: './src/model.js',
        domManager: './src/domManager.js',
        localDataHandler: './src/localDataHandler.js',
        sessionDataHandler: './src/sessionDataHandler.js',
    },
    //devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}