// webpack配置
// 根目录下 新建webpack.config.js
// COMMONJS规范导出对象

// 入口和出口
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { type } = require('os')
// 解构赋值
const { join } = require('path')
// 暴露
module.exports = {
    mode: 'production',
    // 指定入口 相对路径 默认入口index.js   
    // 改变默认入口的名字 默认名字
    entry: './src/main.js',
    // 指定出口
    output: {
        // 输出的目录, 绝对路径  lib
        path: join(__dirname, 'lib'),
        // 输出的文件名 webpack-demo.js
        filename: 'webpack-demo.js',
        // 删除上次的文件夹再打包
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, './public/index.html'),
        })
    ],
    devServer: {
        // yarn sever 自动打开浏览器
        open: true,
        //  0-65535
        // 自定端口
        port: 55555
    },
    module: {
        rules: [
            // 文件后缀
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                // 从后往前解析
                use: ["style-loader", "css-loader", "less-loader"]
            },
            // type 指定asset的类型
            {
                test: /\.(png|gif|jpeg)$/i,
                // type: "asset/resource"
                // type: "asset/inline"
                // 8kb为界限 大于8kb打包成图片 小于打包成base64
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 单位 字节
                        maxSize: 21 * 1024
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                // [hash]  随意生成字符 :6 6个字符  [ext] 原文件的后缀名不变
                generator: {
                    filename: 'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                /*   loader: "babel-loader",
                  options: {
                      pressts: ['@babel/preset-env']
                  } */
                use: ["babel-loader"]
            }
        ]
    }
}