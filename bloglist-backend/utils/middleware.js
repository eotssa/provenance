const logger = require('./logger')
const jwt = require('jsonwebtoken')
const User = require('../models/user')



const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name ===  'JsonWebTokenError') {
    return response.status(401).json({ error: error.message })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' })
  }
  next(error)
}


// ==== AUTHENTICATION MIDDLEWARE ====

// Designed to extract the JWT from the Authorization header of the request
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7) // Return the token without the 'bearer ' prefix
  }
  return null
}

/* Token extractor middleware 
 * Takes token from auth header and places it into `token` field of the request header */
const tokenExtractor = (request, response, next) => {
  request.token = getTokenFrom(request)
  next()
}

/* User extractor middleware */
const userExtractor = async (request, response, next) => {
  const token = getTokenFrom(request)

  if (token) {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' })
    }
  
    request.user = await User.findById(decodedToken.id)
  }

  next()
}



module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor
}