import thenFs from 'then-fs'

const promiseArr = [
    thenFs.readFile('./text/1.text', 'utf8'),
    thenFs.readFile('./text/2.text', 'utf8'),
    thenFs.readFile('./text/3.text', 'utf8')
]

// Promise.all(promiseArr).then(result => {//顺序读取所有的
//     console.log(result)
// })

Promise.race(promiseArr).then(result => { //读取最先到达的
    console.log(result);
})
