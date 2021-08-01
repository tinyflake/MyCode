//导入express模块
const express = require('express')

//创建服务器实例
const app = express()

// 导入路由模块
const router = require('./16.apiRouter')

// 注册路由模块
app.use('/api', router)


//调用 app.listen()方法 启动服务器并 添加端口号
app.listen(81, () => {
    console.log('this express server is runing at http//127.0.0.1:81');
})