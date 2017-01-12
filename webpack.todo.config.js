/**
 * Created by lqcdsns on 2017/1/5.
 */
// 自动生成html文件
// npm install html-webpack-plugin --save-dev
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    //entry: './app/index.js',
    entry: {
        build: './todo/index.jsx'
    },
    output: {
        path: './todo_build/',
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
                test: /\.jsx|.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
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



