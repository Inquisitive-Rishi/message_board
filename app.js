const express = require('express')
const path = require('path')
const app = express()
const PORT = 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Express' })
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})