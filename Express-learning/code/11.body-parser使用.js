//导入express模块
const express = require('express')

//创建服务器实例
const app = express()

// 导入第三方中间件
const parser = require('body-parser')

app.use(parser.urlencoded({
    extended: false
}))


app.post('/', (req, res) => {
    // 如果没有配置任何解析表单数据的中间件， 则默认req.body等于undefined
    console.log(req.body);
    res.send('ok')
})

//调用 app.listen()方法 启动服务器并 添加端口号
app.listen(81, () => {})