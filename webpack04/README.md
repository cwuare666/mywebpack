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



打包显示进度条插件

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

new ProgressBarPlugin(),


打印日志

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

new DashboardPlugin(dashboard.setData),


//学习链接

http://taobaofed.org/blog/2016/09/09/webpack-flow/

react-ant
https://ant.design/components/modal-cn/

react-ant-mobile
https://antd-mobile.gitee.io/components/date-picker-cn/

react-weui:

https://weui.github.io/react-weui/docs/#/react-weui/docs


http://www.17sucai.com/pins/tag/5522.html


https://creativecommons.org/licenses/by-nd/4.0/deed.zh   //署名-禁止演绎


three.js

https://threejs.org/examples/