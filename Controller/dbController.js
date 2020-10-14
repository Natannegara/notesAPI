
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

// ===== database nodejs initialization
const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults (require if ur json file is empty) :
db.defaults({ notes: [] })
    .write()

function getAll() {
    return db
        .get('notes')
        .value()
}

function get(no) {
    const parsedNo = parseInt(no)
    return db
        .get('notes')
        .find({ no: parsedNo })
        .value()
}

function add(body) {
    return db
        .get('notes')
        .push(body)
        .write()
}

function edit(body, no) {
    const parsedNo = parseInt(no)
    return db
        .get('notes')
        .find({ no: parsedNo })
        .assign(body)
        .write()
}

function remove(no) {
    const parsedNo = parseInt(no)
    return db
        .get('notes')
        .remove({ no: parsedNo })
        .write()
}
module.exports = { getAll, get, add, edit, remove }