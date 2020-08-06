const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const server = express()
const mongoose = require('mongoose')

// const allowCors = require('./cors')
module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/api', require('./routes'))


server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server