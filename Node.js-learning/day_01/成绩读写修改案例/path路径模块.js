// 导入path模块
const path = require('path')

// 用path.join([...path])  ../会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
    // console.log(pathStr);
const fs = require('fs')
fs.readFile(path.join(__dirname, './成绩-ok.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('error!!!');
    }
    console.log(dataStr);
})

// 定义一个虚拟的文件存放路径
const fpath = '/a/b/c/index.html'
var fullName = path.basename(fpath)
console.log(fullName);

// 传递两个参数则不获取扩展名
var nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);
const fext = path.extname(fpath)
console.log(fext)