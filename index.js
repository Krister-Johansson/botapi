const express = require('express')
const moment = require('moment')
const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000
const FORMAT = process.env.FORMAT || 'YYYYMMDD'
const OPENTIME = process.env.OPENTIME || 9
const LOCKED_BLOCK = process.env.LOCKED_BLOCK || 'LOCKED_BLOCK'

app.get('/', (req, res) => {
    if (parseInt(moment().format('hh')) >= OPENTIME) {
        result = {
            redirect_to_blocks: [moment().format(FORMAT)]
        }
    } else {
        result = {
            redirect_to_blocks: [LOCKED_BLOCK]
        }
    }
    res.json(result)
})

app.listen(PORT, () => console.log(`Server start on port: ${PORT} with format: ${FORMAT}`))