const express = require('express')

const app = express()

// 定义一个全局中间件函数 
// 注册全局中间件（收到客户端请求后都会调用的中间件）
app.use(function(req, res, next) {
    next()
    console.log('this is a simple middleware!');
})

app.listen(81, () => {
    console.log('this express server is running at 127.0.0.1:81');
})

app.get('/', (req, res) => {
    res.send('get 成功')
    console.log('/后调用');
})
app.post('/user', (req, res) => {
    res.send('post 成功')
    console.log('/user后调用');
})