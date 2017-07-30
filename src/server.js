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

app.post('/signIn', (req, res, next) => {
  console.log('signIn', req.body.email)

  const token = jwt.sign(
    { email: req.body.email },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 5 }
  )

  res.send({ token })
})

module.exports = {
  start: () => {
    app.listen(process.env.SIGN_IN_APP_PORT, () => {
      console.log(`listen ${process.env.SIGN_IN_APP_PORT}`)
    })
  }
}
