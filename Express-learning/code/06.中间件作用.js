const express = require('express')

const app = express()

app.use(function(req, res, next) {
    // 请求到达服务器的时间
    const time = Date.now()

    // 为req对象挂载自定义属性，从而把时间共享给所有路由
    req.startTime = time;
    next()
})

app.get('/', (req, res) => {
    res.send('get 成功，访问时间：' + req.startTime)
})

app.post('/user', (req, res) => {
    res.send('post 成功，访问时间：' + req.startTime)
})

app.listen(81, () => {})