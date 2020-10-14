const express = require('express')
// untuk menjadikan app sebagai module express router : 
const app = express.Router()
const db = require('../Controller/dbController')

app.patch('/notes', function (req, res) {
    const body = req.body
    const no = req.query.no
    // const parsedNo = parseInt(no)
    const getDb = db.get(no)
    if (getDb) {
        db.edit(body, no)
        res.send('Your note has been edited')
    } else (res.status(404).send('Sorry, the file does not exist.'))
})

module.exports = app