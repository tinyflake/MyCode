const express = require('express')

const app = express()

// 第一个全局中间件
app.use((req, res, next) => {
    console.log('启动了第一个全局中间件')
    next()
})

// 第二个全局中间件
app.use((req, res, next) => {
    console.log('启动了第二个全局中间件')
    next()
})

app.get('/user', (req, res) => {
    res.send('get page')
})

app.listen(81, () => {

})