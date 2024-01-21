const cookieParser = require('cookie-parser')
const messageRouter = require('./routes/index')
const express = require('express')
const path = require('path')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', messageRouter)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})