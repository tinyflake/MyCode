const express = require('express')

// const app = express()
// app.use(express.static('./clock'))

const app = express()
    // 挂载路径
app.use('/clock', express.static('./clock'))


app.listen(81, () => {
    console.log('express server is running at http://127.0.0.1:81')
})