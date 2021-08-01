// 1. 导入http模块
const http = require('http')

// 2. 创建web服务实例
const server = http.createServer()

// 3. 为服务器绑定request事件， 监听请求
server.on('request', (req, res) => {
    // 4-1.客户请求的url
    const url = req.url

    // 4-2客户请求的method类型
    const method = req.method
    const str = `Your request url is ${url},and requset method is ${method}`
        // console.log(str);
        // console.log('someone visite ours webserver')

    // 5.为了防止中文乱码问题需设置Content-type:charset=utf-8
    res.setHeader('Content-type', 'text/html;charset=utf-8')
        // 调用res.end() 向客户端响应内容
        // res.end(str)

    // 定义一个字符串， 包含中文内容
    const str_1 = `您请求的url地址是 ${url},请求的method是${method}`

    // 6.响应客户端
    res.end(str_1)
})

// 7. 启动服务器
// server.listen(80, () => {
//     console.log('http server running at http://127.0.0.1');
// })