module.exports = {
    entry: './app/index.js',
    output: {
        path: './build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loaders: ['style', 'css'],
                exclude: '/node_modules/'
            }
        ]
    },
    // 自动查找、识别后缀补全
    resolve: {
        extensions: ['','.js','.css','.jsx']
    }
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



