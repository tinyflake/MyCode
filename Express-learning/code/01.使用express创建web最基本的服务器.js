// 导入express
const express = require('express')

// 调用express 创建服务器
const app = express()

// 监听客户端请求
app.get('/user', (req, res) => {

    // 向客户端发送 JSON 对象
    res.send({ name: 'zs', age: 18, gender: '男' })
})

app.post('/user', (req, res) => {

    req.query()
        // 向客户端发送文本内容
    res.send('请求成功')
})

//启动服务器
app.listen(81, () => {
    console.log('express server is running at http://127.0.0.1:81')
})


//获取默认req.query
app.get('/', (req, res) => {
    // req.query可以获取客户端查询参数
    // req.query默认是空对象
    console.log(req.query);
    res.send(req.query)
})

// 获取url动态参数
app.get('/user/:id', (req, res) => {
    // req.params默认是个一个空对象
    // 里面存放通过 : 动态匹配的参数值
    // console.log(req.params);
    //获取动态参数
    res.send(req.params)
})