const cote = require('cote')
// const dotenv = require('dotenv')
const socketioJwt = require('socketio-jwt')

const app = require('http').createServer(() => {})
const io = require('socket.io').listen(app)

// dotenv.config()

module.exports = {
  start: () => {
    io.use(socketioJwt.authorize({
      secret: process.env.JWT_SECRET,
      handshake: true
    }))

    io.on('connection', socket => {
      console.log('connection')
      console.log('hello! ', socket.decoded_token)

      socket.on('error', err => {
      console.log(err)
    })
  })

  app.listen(process.env.APP_PORT)

const sockend = new cote.Sockend(io, { name: 'authentication sockend', namespace: 'authentication' })
const responder = new cote.Responder({ name: 'authentication responder', namespace: 'authentication', respondsTo: ['test'] })

responder.on('test', ({ token }) => {
  console.log('test', token)

  return {}
})
}
}
