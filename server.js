const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 1234
const path = require("path")
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/forwarder', require('./routes/forwarder'))
app.use((err, req, next) => {
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log("Sails up captain!")
})