// 路由模块

// 导入express
const express = require('express')

// 创建路由对象
var router = express.Router()

// 挂载路由
router.get('/user/list', (req, res) => {
    res.send('get 挂载成功')
})

router.post('/user/add', (req, res) => {
    res.send('post 挂载成功')
})

// 导入路由 
module.exports = router