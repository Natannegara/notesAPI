const express = require('express')
// untuk menjadikan app sebagai module express router : 
const app = express.Router()
const db = require('../Controller/dbController')

app.delete('/notes', function (req, res) {
    // request client
    const no = req.query.no
    // untuk merubah string menjadi number :
    // const parsedNo = parseInt(no)
    // membuat konstanta untuk mencari nomor yang diminta ada di db atau tidak
    const getDb = db.get(no)
    // .find({ no: parsedNo })
    // .value()
    // jika nomor yang di request ada
    if (getDb) {
        db.remove(no)
        // .remove({ no: parsedNo })
        // .write()
        res.send('The note has been deleted')
        // jika nomor yang direquest tidak ada
    } else (res.status(404).send('Sorry, the file does not exist.'))
})

module.exports = app