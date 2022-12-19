const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// Serve Js and CSS files
app.use( express.static(path.join(__dirname, 'src')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

// test new route / response
app.get('/test', (req,res) => {
    const dateNight = {date: "2022-12-18", msg:"Monika date night"}
    res.send(dateNight)
})


// console.log every date with name as json 
app.listen(port, () => {
    console.log(`The pink apple is at the ${port} tree`)
})

