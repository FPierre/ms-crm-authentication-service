const cote = require('cote')
const socketioJwt = require('socketio-jwt')

const app = require('http').createServer(() => {})
const io = require('socket.io').listen(app)

const jwtSecret = 'toto'

io.use(socketioJwt.authorize({
  secret: jwtSecret,
  handshake: true
}))

io.on('connection', socket => {
  console.log('connection')
  console.log('hello! ', socket.decoded_token)

  socket.on('error', err => {
    console.log(err)
  })
})

app.listen(5554)

const sockend = new cote.Sockend(io, { name: 'authentication sockend', namespace: 'authentication' })
const responder = new cote.Responder({ name: 'authentication responder', namespace: 'authentication', respondsTo: ['test'] })

responder.on('test', ({ token }) => {
  console.log('test', token)

  return {}
})
