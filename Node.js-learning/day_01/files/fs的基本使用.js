// 导入fs模块
const fs = require('fs');


// 调用readfile()读取文件
// 三个参数（url,读取格式（默认utf-8），回调函数）
fs.readFile('./1.txt', 'utf8', function(err, dataStr) {
    // console.log('打印失败的结果');
    // console.log(err);
    // console.log('-------------');
    // console.log('打印成功的结果');
    // console.log(dataStr);
    if (err) {
        return console.log('文件读取失败' + err.massage);
    }
    return console.log('文件读取成功' + dataStr);
})

// 调用writefile()写文件
// 四个参数（URL，写入数据，读取格式（默认utf-8），回调函数）
fs.writeFile('./2.txt', 'acd002', 'utf8', function(err) {
    if (err) {
        return console.log('写入失败');
    }
    console.log('写入成功');
})