const path = require('path');
const webpack = require('webpack');
const CleanWebapckPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const rootPath = path.resolve(__dirname, '../static');

module.exports = {
	mode: 'production',
	entry: {
		vendor: ['react', 'react-dom']
	},
	output: {
		path: rootPath,
		filename: '[name]_[hash].js',
		library: '_dll_[name]_[hash]'
	},
	optimization: {
		// minimize:false,
		minimizer: [
			new UglifyJSPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				uglifyOptions: {
					warnings: process.env.NODE_ENV != "production",
				},
			}),
		],
	},
	stats: 'errors-only',
	plugins: [
		new CleanWebapckPlugin(['static'], {
			root: path.resolve(__dirname, '../')
		}),
		new webpack.DllPlugin({
			path: path.join(rootPath, '/', 'vendor.json'),
			name: '_dll_[name]_[hash]'
		})
	]
}