// 导入querystring模块
const qs = require('querystring')

// 定义解析表单中间件
const bodyParser = (req, res, next) => {
    // 请求中间件的具体逻辑

    // 监听req.data事件
    // 定义str字符串，用于接受客户端发来的数据
    let str = ''
    req.on('data', (chunk) => {
        // 拼接处完整客户端发送的数据
        str += chunk
    })

    // 数据接收完自动触发req.end事件
    // 监听req.end事件
    req.on('end', () => {
        console.log(str)

        // 将字符串数据解析 === > 对象数据
        const body = qs.parse(str)
        req.body = body
        next()
    })
}
module.exports = bodyParser