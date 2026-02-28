const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/js/main.js',
        contacto: './src/js/contacto-db.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash:8].min.js',
        clean: true,
        assetModuleFilename: 'img/[name].[hash:8][ext]',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3001, // Changed port to avoid conflict
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/historia.html',
            filename: 'historia.html',
            chunks: ['main'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/caracteristicas.html',
            filename: 'caracteristicas.html',
            chunks: ['main'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/contacto.html',
            filename: 'contacto.html',
            chunks: ['main', 'contacto'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
    ],
    performance: {
        hints: false,
    },
};
