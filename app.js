const express = require('express')

const app = express()
const port = process.env.PORT 
const path = require('path')

// Serve Js and CSS files
app.use( express.static(path.join(__dirname, 'src')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})


app.listen(port, () => {
    console.log(`The pink apple is at the ${port} tree`)
})

