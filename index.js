const express = require('express')
const moment = require('moment')
const dotenv = require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 3000
const FORMAT = process.env.FORMAT || 'YYYYMMDD'

app.get('/', (req, res) => {
    res.json({
        redirect_to_blocks: [moment().format(FORMAT)]
    })
})

app.listen(PORT, () => console.log(`Server start on port: ${PORT} with format: ${FORMAT}`))