const express = require('express')
const router = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

router.get('/', (req, res) => {
    res.render('index', { title: 'Message Home Page' })
})

router.get('/new', (req, res) => {
    res.render('index', { title: 'Message New Page' })
})

module.exports = router;