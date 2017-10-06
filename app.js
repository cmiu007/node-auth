// #app.js

// 1
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/users')

// 2

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/api-auth')

const app = express()

// 3
app.use(morgan('dev'))
app.use(bodyParser.json())

// 4
app.use('/users', routes)

// 5
const port = process.env.PORT || 3000
app.listen(port)
console.log('Serve listening at ${port}')