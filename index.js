const express = require('express')
const moment = require('moment')
const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000
const FORMAT = process.env.FORMAT || 'YYYYMMDD'
const OPENTIME = process.env.OPENTIME || 9
const LOCKED_BLOCK = process.env.LOCKED_BLOCK || 'YYYYMMDD'

app.get('/', (req, res) => {
    if (parseInt(moment().format('hh')) >= OPENTIME) {
        res.json({
            redirect_to_blocks: [moment().format(FORMAT)]
        })
    } else {
        res.json({
            redirect_to_blocks: [LOCKED_BLOCK]
        })
    }
})

app.listen(PORT, () => console.log(`Server start on port: ${PORT} with format: ${FORMAT}`))