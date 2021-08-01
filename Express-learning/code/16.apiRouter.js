// 导入express模块
const express = require('express')

// 创建express.router
const router = express.Router()

// 挂载路由
router.get('/get', (req, res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query

    // 调用res.send 方法,向客户端响应处理的结果
    res.send({
        status: 0, //表示处理成功,1表示处理失败
        msg: '成功',
        data: query //返回给客户端的数据
    })
})

router.post('/post', (req, res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const body = req.body

    // 调用res.send 方法,向客户端响应处理的结果
    res.send({
        status: 0, //表示处理成功,1表示处理失败
        msg: '成功',
        data: body //返回给客户端的数据
    })
})

module.exports = router