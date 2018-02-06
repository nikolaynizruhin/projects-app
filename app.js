const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

const projects = require('./routes/projects')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/projects', projects)

app.use(errorHandler())

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app