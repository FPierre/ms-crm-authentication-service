const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

const jwtSecret = 'toto'

app.post('/signIn', (req, res, next) => {
  console.log('signIn', req.body.email)

  const token = jwt.sign({ email: req.body.email }, jwtSecret, { expiresIn: 60 * 5 })

  res.send({ token })
})

app.listen(4001, () => {
  console.log('listen 4001')
})
