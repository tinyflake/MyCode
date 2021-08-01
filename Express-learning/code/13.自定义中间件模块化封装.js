//导入express模块
const express = require('express')

//创建服务器实例
const app = express()

// 导入自封装中间件
const costomBodyParser = require('./14.custom-body-parser')

app.use(costomBodyParser)

app.post('/', (req, res) => {
    res.send(req.body)
})

//调用 app.listen()方法 启动服务器并 添加端口号
app.listen(81, () => {})