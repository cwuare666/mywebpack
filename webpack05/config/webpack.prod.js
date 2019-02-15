const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CleanWebapckPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		runtimeChunk: {
			name: "manifest",
		},
		splitChunks: {
			cacheGroups: {
				default: false,
				style: {
					chunks: "all",
					name: "style",
					minChunks: 1,
					priority: 90,
					reuseExistingChunk: true,
					enforce: true,
					test: /.(css|scss|less)$/,
				},
			}
		},
	},
	plugins: [
		new CleanWebapckPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		}),
		//new UglifyJSPlugin(),
		//此插件可以通过合并的方式，后处理你的 chunk，以减少请求数。
        new webpack.optimize.LimitChunkCountPlugin({
        	maxChunks: 15,
        	minChunkSize: 1000
        }),
        // //通过合并小于 minChunkSize 大小的 chunk，将 chunk 体积保持在指定大小限制以上。
        // new webpack.optimize.MinChunkSizePlugin({
        // 	minChunkSize: 10000,
        // }),
        new OptimizeCSSPlugin({
	        assetNameRegExp: /\.css$/g,       //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
	        cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
	        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
	        canPrint: true                    //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
	    })
	]
})