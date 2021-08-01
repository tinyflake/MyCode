// 导入fs模块
const fs = require('fs')
    // 读取成绩txt
fs.readFile('F:\\MyCode\\node.js-learning\\成绩读写修改案例\\成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败...' + err.message)
    }
    console.log('读取成功！' + dataStr)

    // 处理读取的数据


    // 1.先按照空格分离每项数据
    const oldArr = dataStr.split(' ')

    // 2.循环分隔后的数组对每一项数组进行字符串替换操作
    const newArr = []
    oldArr.forEach(element => {
        newArr.push(element.replace('=', ':'))
    })

    // 3.把新数组的每一项进行合并得到新的字符串
    const newStr = newArr.join('\r\n')
    console.log(newStr)

    // 调用writeFile()方法，将处理完毕的数据放入新文件中
    fs.writeFile('./成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入失败...' + err.message);
        }
        console.log('数据处理完成!');
    })
})

// 路径拼接错误问题可以通过直接提供完整存放路径即可解决（如第4行）双斜线才行因为\转义字符
// 但是完整存放路径存 移植性差 不利于维护

//以下是解决完整 维护性 解决办法：注意(第40行)__dirname + '/成绩.txt',
// __dirname表示当前文件所处目录
fs.readFile(__dirname + '/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败...' + err.message)
    }
    console.log('读取成功！' + dataStr)

    // 处理读取的数据


    // 1.先按照空格分离每项数据
    const oldArr = dataStr.split(' ')

    // 2.循环分隔后的数组对每一项数组进行字符串替换操作
    const newArr = []
    oldArr.forEach(element => {
        newArr.push(element.replace('=', ':'))
    })

    // 3.把新数组的每一项进行合并得到新的字符串
    const newStr = newArr.join('\r\n')
    console.log(newStr)

    // 调用writeFile()方法，将处理完毕的数据放入新文件中
    fs.writeFile('./成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入失败...' + err.message);
        }
        console.log('数据处理完成!');
    })
})