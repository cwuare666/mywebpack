const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
//复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const srcPath = path.resolve(__dirname,'../src');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: './js/[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath:'/'
		// libraryTarget: "var",
		// library: "[name]_[hash]",
	},
	externals : {
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			_src: `${srcPath}`,
			_pages: `${srcPath}/pages`,
			_image: `${srcPath}/image`,
			_redux: `${srcPath}/redux`,
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
					        plugins: ['@babel/plugin-proposal-class-properties', '@babel/transform-runtime', "dynamic-import-webpack"]
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
						'postcss-loader',
						'sass-loader',
					]
			    }]
	},
	plugins: [
		new ProgressBarPlugin(),
		new HtmlWebpackPlugin({
			template: './template/index.html',
			title: 'test04',
		}),
		new MiniCssExtractPlugin({
			filename: "./css/[name].[chunkhash:8].css",
		}),
		new HtmlIncludeAssetsPlugin({
			assets: [{ path: "static", glob: "vendor_*.js", globPath: "static/" }], // 添加的资源相对html的路径
			append: false, // false 在其他资源的之前添加 true 在其他资源之后添加
		}),
		new webpack.DllReferencePlugin({
		  	// 描述 react 动态链接库的文件内容
		  	manifest: require('../static/vendor.json'),
		}),
		new CopyWebpackPlugin([
		      	{
		      		from: 'static',
		      		to: 'static'
		      	}
		    ]
		)
	]
}