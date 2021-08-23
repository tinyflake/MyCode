import thenFs from 'then-fs'
// 异步读取
// thenFs.readFile('./text/1.text', 'utf8').then((r1) => {
//     console.log(r1)
// })

// thenFs.readFile('./text/2.text', 'utf8').then((r1) => {
//     console.log(r1)
// })

// thenFs.readFile('./text/3.text', 'utf8').then((r1) => {
//     console.log(r1)
// })

// 基于promise顺序读取
thenFs
    .readFile('./text/11.text', 'utf8')
    .then((r1) => {
        console.log(r1)
        return thenFs.readFile('./text/2.text', 'utf8')
    })
    .then((r2) => {
        console.log(r2)
        // ...可以继续嵌套
    })
    .catch((err) => {
        console.log(err.message) //捕获异常打印异常信息
    })
