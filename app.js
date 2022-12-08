const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')

/*
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})
*/

var serve = serveStatic('public/ftp', { index: 'src/index.html'})

var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req,res))
})
server.listen(port)

/*
app.listen(port, () => {
    console.log(`The pink apple is at the ${port} tree`)
})
*/
