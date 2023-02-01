const express = require('express')
const app = express()
app.use(express.json()) // Indicate we're using JSON
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//mongodb lines
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// Working on getting this to do what it's supposed to do, gonna check mongosh maybe
mongoose.connect("mongodb://localhost:27017/test");
//mongoose.connect("mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1/test");
//try connecting to a db online, maybe that way it'll store the data, else look for a tutorial online

const dateSchema = new mongoose.Schema({
    date: String,
    msg: String
})

const dateNight = mongoose.model("dateNight", dateSchema);


// Serve Js and CSS files
app.use( express.static(path.join(__dirname, 'src')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

// test new route / response
app.post('/addDate', (req,res) => {
    var myDate = new dateNight(req.body)
    myDate.save()
        .then(item => {
            res.send("item saved to database")
        })
        .catch(err => {
            res.status(400).send("unable to save to database")
        })

    // const dateNight = {date: "2022-12-18", msg:"Monika date night"}
    res.send(req.params)
})

// http://localhost:3000/test?inputDates=2022-12-03&msg=sksk

// console.log every date with name as json 
app.listen(port, () => {
    console.log(`The pink apple is at the ${port} tree`)
})

