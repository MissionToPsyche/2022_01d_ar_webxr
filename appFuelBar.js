const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/Fuel_Bar'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))
app.use('/fonts/', express.static(path.join(__dirname, 'node_modules/three/examples/fonts')))

app.listen(8080, () => console.log('Click this link to run. \nhttp://127.0.0.1:8080'))
