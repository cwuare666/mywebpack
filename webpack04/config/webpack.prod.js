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
				"ant-icon": {
					test: /[\\/]node_modules[\\/](@ant-design|_@ant-design)/,
					chunks: "initial",
					minChunks: 2,
					name: "ant-icon",
					priority: 100,
					enforce: true,
				},
				moment: {
					test: /[\\/]node_modules[\\/](moment|_moment)/,
					chunks: "initial",
					minChunks: 2,
					name: "moment",
					priority: 99,
					enforce: true,
				},
				antd: {
					test: /[\\/]node_modules[\\/](antd|_antd)/,
					chunks: "initial",
					minChunks: 2,
					name: "antd",
					priority: 98,
					enforce: true,
				},
				zerod: {
					test: /[\\/]node_modules[\\/]zerod/,
					chunks: "initial",
					minChunks: 2,
					name: "zerod",
					priority: 97,
					enforce: true,
				},
				echarts: {
					test: /[\\/]node_modules[\\/](echarts|_echarts)/,
					chunks: "initial",
					minChunks: 2,
					name: "echarts",
					priority: 96,
					enforce: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: "initial",
					minChunks: 2,
					name: "vendors",
					priority: 95,
					enforce: true,
				},
				// 处理异步chunk
				"async-vendors": {
					test: /[\\/]node_modules[\\/]/,
					minChunks: 2,
					chunks: "async",
					priority: 94,
					name: "async-vendors",
					enforce: true,
				},
				// 处理异步chunk
				"src": {
					test: /[\\/]src[\\/]/,
					minChunks: 2,
					chunks: "async",
					priority: 93,
					name: "src",
					enforce: true,
				},
				style: {
					chunks: "all",
					name: "style",
					minChunks: 1,
					priority: 90,
					reuseExistingChunk: true,
					enforce: true,
					test: /.(css|scss|less)$/,
				},
			},
		},
		minimizer: [
			//压缩js
			new UglifyJSPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				uglifyOptions: {
					warnings: false,
				},
			}),
			//压缩css
			new OptimizeCSSPlugin({
				cssProcessorOptions: { safe: true}	
			}),
		],
	},
	plugins: [
		new CleanWebapckPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		}),
        // new webpack.optimize.LimitChunkCountPlugin({
        // 	maxChunks: 5,
        // 	minChunkSize: 1000
        // }),
        //通过合并小于 minChunkSize 大小的 chunk，将 chunk 体积保持在指定大小限制以上。
        new webpack.optimize.MinChunkSizePlugin({
        	minChunkSize: 10000,
        }),
     //    new OptimizeCSSPlugin({
	    //     assetNameRegExp: /\.css$/g,       //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
	    //     cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
	    //     cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
	    //     canPrint: true                    //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
	    // })
	]
})