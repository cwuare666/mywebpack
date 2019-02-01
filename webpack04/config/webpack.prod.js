const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CleanWebapckPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new CleanWebapckPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		}),
		new UglifyJSPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
        	maxChunks: 5,
        	minChunkSize: 1000
        }),
        new webpack.optimize.MinChunkSizePlugin({
        	minChunkSize: 10000,
        }),
        new OptimizeCSSPlugin({
	        assetNameRegExp: /\.css$/g,       //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
	        cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
	        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
	        canPrint: true                    //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
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
})