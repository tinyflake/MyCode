// 1. 获取http模块
const http = require('http')

// 2. 创建服务器
const server = http.createServer()

// 3. 绑定服务器事件
server.on('request', (req, res) => {
        var url = req.url

        // 5. 默认显示404Not Found 
        let content = '<h1>404 NOT </h1>'

        // 5. 判断客户端请求url
        if (url == '/' | url == '/index.html') {
            content = '<h1>首页</h1>'
        } else if (url == '/about.html') {
            content = '<h1>about</h1>'
        }

        // 6.设置返回响应头解决中文乱码问题
        res.setHeader('Content-type', 'text/html;charset=utf-8')

        // 7. 响应客户端
        res.end(content)

    })
    // server.listen(80, () => {
    //     console.log('http server running at http://127.0.0.1');
    // })