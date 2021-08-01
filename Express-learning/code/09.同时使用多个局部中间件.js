//导入express模块
const express = require('express')

//创建服务器实例
const app = express()

// 定义第一个中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了1号局部中间件函数');
    next()
}

// 定义第一个中间件函数
const mw2 = (req, res, next) => {
    console.log('调用了2号局部中间件函数');
    next()
}

// 创建路由
app.get('/user', [mw1, mw2], (req, res) => {
    res.send('Home page');
})

//调用 app.listen()方法 启动服务器并 添加端口号
app.listen(81, () => {
    console.log('Express server is runing at http://127.0.0.1:81');
})