const path = require('path')
// const cors = require('cors')
const express = require('express')
const sleepRoutes = require('./routes/sleep')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/sleep', sleepRoutes)

module.exports = server