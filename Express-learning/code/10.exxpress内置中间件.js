//导入express模块
const express = require('express')

//创建服务器实例
const app = express()

// 除了错误中间件， 其他中间件必须在路由中间件之前
// 解析json数据
app.use(express.json())

//解析url-encoded数据
app.use(express.urlencoded())


app.post('/', (req, res) => {
    // 用req.body来接收客户端发来的请求数据
    //默认情况下不配置  解析表单数据（json中间件  则req.body 默认undefined
    //req.body 可以获取  JSON 格式和 url-encoded 格式数据 
    console.log(req.body);
    res.send('服务器接受成功！')
})


//调用 app.listen()方法 启动服务器并 添加端口号
app.listen(81, () => {
    'running'
})