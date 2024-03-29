const express = require('express')
const router = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date().toGMTString()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toGMTString()
    },
];

router.get('/', (req, res) => {
    res.render('index', { messageObj: messages })
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req, res) => {
  const data = { text: req.body.message, user: req.body.authorName, added: new Date().toGMTString() }
  messages.push(data)
  res.redirect('/')
})

router.post('/', (req, res) => {
  res.redirect('/new')
})

module.exports = router;