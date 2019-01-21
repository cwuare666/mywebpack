//webpack04  开始构建小项目测试


{
  "presets": [
    ["@babel/preset-env"],
    "react",
    "es2015",
    "stage-0"
  ],
  "plugins": ["react-hot-loader/babel", "@babel/transform-runtime", ["import", {
  		"libraryName": "antd-mobile",
  		"style": true
	}]]
}