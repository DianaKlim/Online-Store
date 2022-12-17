const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    optimization: {
        splitChunks: {
          chunks: "all",
        },
      }, //To get the most out of our architecture, we need to split built code into chunks. 
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 8000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png|svg|jpg|jpeg|gif$/i,
                type: 'asset/resource'
            },
            {   test: /\.ts$/i,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "OnlineStore",
            filename: 'main.html',
            template: 'src/index.html'
        }),
        new EslingPlugin({
            extensions: ['.ts', '.js']
        })
    ],
};