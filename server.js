const express = require('express')
const app = express()
const apiRouter = require('./routes/api')


app.listen(3000,()=>{
    console.log('server konek')
})
app.use('/',apiRouter)