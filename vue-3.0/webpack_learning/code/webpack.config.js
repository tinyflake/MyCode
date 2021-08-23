const path = require('path')
// 导入 html-wbepack-plugin
const HtmlPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

// 创建实例对象
// const htmlPlugin = new HtmlPlugin({
//     template: './src/index.html', //目标文件位置
//     filename: './index.html', //复制文件地址
// })

module.exports = {
    mode: 'development',
    //仅开发模式使用解决报错时代码行数偏差问题
    // devtool: 'eval-source-map',
    // 不向外暴露源码又能知道报错位置
    devtool: 'nosources-source-map',
    // 指定打包入口
    entry: path.join(__dirname, './src/index.js'),
    // 指定打包出口
    output: {
        // 出口路径
        path: path.join(__dirname, './dist'),
        // 输出文件名称
        filename: 'js/bundle.js'
    },
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.jpg|png|gif|jpeg$/,
                loader: 'url-loader',
                options: { //参数项
                    limit: 10240000, //limit 指定图片大小单位是字节，当<=limit才会转base64格式图片
                    outputPath: './ image',
                },

            },
            // {
            //     test: /\.jpg|png|gif|jpeg$/,
            //     use: 'url-loader?limit=1145980' //参数项 ？
            // }
        ]
    },
    // 挂载html-plugin对象 
    plugins: [
        new HtmlPlugin({
            template: './src/index.html', //目标文件位置
            filename: './index.html', //复制文件地址
        }),
        new CleanWebpackPlugin()
    ]
}
