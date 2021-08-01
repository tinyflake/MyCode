const express = require('express')

const app = express()

const router = require('./router')

app.listen(81, () => {
    console.log('this express server is running at http://127.0.0.1:81');
})

app.use('/api', router)