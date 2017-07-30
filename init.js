const dotenv = require('dotenv')

const authenticationService = require('./src/authentication-service')
const authenticationServer = require('./src/server')

dotenv.config()

authenticationService.start()
authenticationServer.start()
