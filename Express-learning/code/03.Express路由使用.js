const express = require('express')

const app = express()


// 路由挂载
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('post secussed!')
})

app.listen(81, () => {
    console.log("this Express server is running at http://127.0.0.1:81")
})