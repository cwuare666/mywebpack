const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: "source-map",
	devServer: {
		contentBase: false, //path.join(__dirname,'../dist'),
		historyApiFallback: true,
		//quiet: true,
		compress: true,
		hot: true,
		stats: "errors-only",
		host: '0.0.0.0',
		port: '8001',
		watchOptions: {
			poll: 1000,
			aggregateTimeout: 1000,
			ignored: '',
		},
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
})
