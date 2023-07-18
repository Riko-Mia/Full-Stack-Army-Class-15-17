
require('dotenv').config('../.env')

const express = require('express')
const middleware = require('./middleware')
const { notFoundHandler, errorHandler} = require('./error')

const app = express()



app.use(middleware)
app.use(require('./routers'))


app.use(notFoundHandler)
app.use(errorHandler)



module.exports = app;