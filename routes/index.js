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

module.exports = router;