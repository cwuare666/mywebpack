const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebapckPlugin = require('clean-webpack-plugin');

//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const srcPath = path.resolve(__dirname,'../src');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: './js/[name].[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	externals : {
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			_rootPath: `${srcPath}`,
			_pages: `${srcPath}/pages`,
			_image: `${srcPath}/image`,
		}
	},
	stats: 'errors-only',
	module: {
		rules: 	[{
					test: /\.(js|jsx)$/,
					// use: 'babel-loader',
					// exclude: /node_modules/,
					exclude: /(node_modules|bower_components)/,
				    use: {
					    loader: 'babel-loader',
					    options: {
					      	"babelrc": false, //设置false 不需要访问 babelrc文件
					        presets: ["@babel/preset-env", "@babel/react"],
					        plugins: ['@babel/transform-runtime', "dynamic-import-webpack"]
					    }
				    }
				},{
			        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
			        use: [
				        {
				            loader: 'file-loader',
				            options: {
				            	outputPath: './image'
				            }
				        }
			        ]
			    },{
				    test: /\.(woff|woff2|eot|ttf|otf)$/,
				    use: [
				        {
				        	loader: 'file-loader',
				        	options: {
				        		outputPath: './iconfont'
				        	}
				        }
				    ]
			    },{
					test: /\.(css|scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
			    }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './template/index.html',
			title: 'test04'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new MiniCssExtractPlugin({
			filename: "./css/[name].[chunkhash:8].css",
		})
	]
}