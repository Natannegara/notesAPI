const express = require('express')
// untuk menjadikan app sebagai module express router : 
const app = express.Router()
const db = require('../Controller/dbController')

app.post("/notes", function (req, res) {
    const body = req.body
    const no = body.no
    const getDb = db.get(no)
    if (getDb) {
        res.status(409).send('Your notes is already used.')
    } else {
        db.add(body)
        res.send('The note has been save successfully.')
    }
})

module.exports = app