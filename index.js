const express = require('express')
const moment = require('moment')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({
        redirect_to_blocks: [moment().format('YYYYMMDD')]
    })
})

app.listen(PORT, () => console.log(`Server start on port ${PORT}!`))