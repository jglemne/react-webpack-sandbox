const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackGitHash = require('webpack-git-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
var child_process = require('child_process');

const hLength = 7
var gitHash = child_process.execSync('git rev-parse --short=' + hLength + ' HEAD', { encoding: 'utf8' }).replace(/(\r\n|\n|\r)/gm,"");

const config = {
    entry:  __dirname + '/assets/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[githash].js',
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', "postcss-loader"],
                })
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'assets/index.html'}),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: 'styles.' + gitHash + '.css'
        }),
        new WebpackGitHash({
            callback: function(versionHash) {
                var indexHtml = fs.readFileSync('./dist/index.html', 'utf8');
                indexHtml = indexHtml.replace(/src="bundle\.\w+\.js/, 'src="bundle.' + versionHash + '.js').replace(/href="styles\.\w+\.css/, 'href="styles.' + versionHash + '.css');
                fs.writeFileSync('./dist/index.html', indexHtml);
            }
        })
    ]
};

module.exports = config;
