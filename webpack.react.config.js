// 自动生成html文件
// npm install html-webpack-plugin --save-dev
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    //entry: './app/index.js',
    entry: {
        build: './react/index.js'
    },
    output: {
        path: './react_build/',
        //filename: 'bundle.js'
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loaders: ['style', 'css'],
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, 'react'),
                // 写成'babel?presets[]=es2015&presets[]=react'，就不用query了
                // cnpm install react-hot-loader --save-dev
                /**
                 * react的热加载，默认启动webpack-dev-server的时候改变入口文件的jsx的组件，
                 * 浏览器会全页刷新更新数据。有了热加载，分离出来的组件（非入口文件）更改时，
                 * 浏览器会更新数据但不会刷新页面。
                 */
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
            }
        ]
    },
    devServer: {
        // hot和inline在这里配置了之后，在命令行里还要写，这两个比较特殊
        hot: true,
        inline: true
    },
    // 自动查找、识别后缀补全
    resolve: {
        extensions: ['','.js','.css','.jsx']
    },
    plugins: [
        // 自动在build里面生成index.html
        // 名字默认是index.html
        new htmlWebpackPlugin({
            title: '欢迎',
            chunks: ['build']
        })
    ]
};

/**
 * webpack-dev-server
 * 轻量级服务器
 * 修改文件源码后，自动刷新页面就能把修改同步到页面上
 * 命令行执行：
 * webpack-dev-server --port 3000
 * 访问http://localhost:3000就看到index.html页面的展示了
 *
 * webpack-dev-server --port 3000 --hot --inline 页面自动刷新
 */



