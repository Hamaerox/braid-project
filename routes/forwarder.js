const express = require('express')
const forwarderRouter = express.Router()
const axios = require('axios')

forwarderRouter.get('/', (req, res, next) => {
    axios.get(`${req.query.url}&api_key=${req.query.api_key}&format=${req.query.format}`).then(response => {
        res.status(200)
        return res.send(response.data)
    }).catch(err => next(err))
})

module.exports = forwarderRouter