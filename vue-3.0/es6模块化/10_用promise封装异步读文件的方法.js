import fs from 'fs'

function getFile(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf8', function (err, dataStr) { //读取文件的回调函数中判断
            // 如果出错则返回reject()否则执行resolve()
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}
getFile('./text/11.text').then((r1) => {
        console.log(r1);
    })
    .catch((err) => console.log(err.message))
