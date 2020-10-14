const express = require('express')
// untuk menjadikan app sebagai module express router : 
const app = express.Router()
const db = require('../Controller/dbController')

// const body = req.body. kenapa kalau di get meskipun kita ngga request, body nya tetep bisa muncul kalau di post ngga bisa
// const result = db.get('notes')
// .second() karena maksudnya untuk mendapatkan variable kedua, sedangkan get untuk semuanya. Jad hapus aja.
//     .value()
app.get('/notes', function (req, res) {
    let result = db.getAll()
    res.send(result)
})

module.exports = app