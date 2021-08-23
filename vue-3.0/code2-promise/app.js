import express from 'express'
import userRouter from './router/user_router.js'

const app = new express()

app.use('/api', userRouter)


app.listen(929, () => {
    console.log('this server running at http://127.0.0.1')
})
