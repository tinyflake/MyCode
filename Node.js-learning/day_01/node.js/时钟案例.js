// 1. 导入fs, path
const fs = require('fs')
const path = require('path')

// 2 创建正则匹配 style 和 script 
// 【\s(空白字符) \S(非空白字符) 】* (任意多次)表示所有字符且
const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

// 3. 读取要被处理的html文件

fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
    if (err)
        return console.log('error！' + err.message);
    // console.log('读取成功！');
    // 读取成功后调用三个方法拆解出css， js, html文件
    resolveCSS(dataStr)
    resolveScript(dataStr)
    resoleHtml(dataStr)
})

// 定义处理CSS样式的方法
function resolveCSS(htmlStr) {
    var r1 = regStyle.exec(htmlStr)
        // console.log(clsr1);

    // 将提取的字符串进行替换操作
    var newCSS = r1[0].replace('<style>', '').replace('</style>', '')
        // console.log(newr1);

    // 调用fs.writeFile()将提取到的CSS代码存放到regCSS
    fs.writeFile(path.join(__dirname, '../clock/index.css'), newCSS, function(err) {
        if (err)
            return console.log('CSS写入失败！' + err.message);
    })
}

// 定义处理script的方法
function resolveScript(htmlStr) {
    var r1 = regScript.exec(htmlStr)
        // console.log(clsr1);

    // 将提取的字符串进行替换操作
    var newScript = r1[0].replace('<script>', '').replace('</script>', '')
        // console.log(newr1);

    // 调用fs.writeFile()将提取到的CSS代码存放到regCSS
    fs.writeFile(path.join(__dirname, '../clock/index.js'), newScript, function(err) {
        if (err)
            return console.log('JS写入失败！' + err.message);
    })
}

// 定义处理HTml的方法
function resoleHtml(htmlStr) {
    // 将resCSS， regScript用replace替换成link
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js" ></script>')

    // 将替换后的新html写入index.html
    fs.writeFile(path.join(__dirname, '../clock/index.html'), newHtml, function(err) {
        if (err)
            return console.log('HTML写入失败！' + err.message);
        console.log('完成！');
    })
}