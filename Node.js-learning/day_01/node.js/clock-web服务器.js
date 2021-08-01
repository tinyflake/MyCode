// 1. 导入http, fs,path
const fs = require('fs')
const http = require('http')
const path = require('path')

// 2. 创建web服务器，绑定监听事件
var server = http.createServer()
server.on('request', (req, res) => {
    // 2.1 获取用户请求的url地址
    const url = req.url

    // 2.2 把请求的url地址映射为本地文件存放路径(拼接完整的url地址)
    // const fpath = path.join(__dirname, '../clock', url)

    // 优化路径
    let fpath = ''
    if (url == '/') {
        fpath = path.join(__dirname, '../clock/index.html')
    } else {
        fpath = path.join(__dirname, '../clock', url)
    }
    // 2.3 根据映射文件地址读取文件内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 Not found.')

        // 2.3 .1 读取成功则将文件内容返回给客户端
        res.end(dataStr)
    })
})

// 3. 启动服务器
//server.listen(80, () => {
    //console.log('this server web is running at http://127.0.0.1');
//})