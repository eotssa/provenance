const config = require('./utils/config') /* Handles server connections */
const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')

const blogRouter = require('./controllers/blogs') /* Handles server side routing */
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const newsRouter = require('./controllers/news')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.use(middleware.requestLogger)

app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use('/api/blogs', blogRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/news', newsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
