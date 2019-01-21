const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebapckPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist')
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				// use: 'babel-loader',
				// exclude: /node_modules/,
				exclude: /(node_modules|bower_components)/,
			    use: {
			      loader: 'babel-loader',
			      options: {
			        presets: ['@babel/preset-env'],
			        plugins: ['@babel/transform-runtime']
			      }
			    }
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './template/index.html',
			title: 'test03'
		}),
		new CleanWebapckPlugin(['dist'], {
			root: path.resolve(__dirname, 'dist')
		}),
		new webpack.HashedModuleIdsPlugin(),
		new UglifyJSPlugin({
             sourceMap: true
        }),
		new webpack.optimize.SplitChunksPlugin({
			chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                }
            }
		})
	]
}