// TODO 1. install nodemon (sebuah node yang otomatis ke refresh ketiks ada perubahan) as global packages
// TODO 2. install and use express (framework yang memungkinkan kita memakai web server)
// require adalah global method-->memungkinkan kita untuk memasukkan apapun yang sudah kita install kedalam code.
// express ini adalah sebuah fungsi. Menjadi kan variable menjadi fungsi menggunakan anonymous function.
// body praser : untuk membuka enkripsi biar nggak undefine karena data di postman itu di enkripsi
// ======Import========
const express = require('express')
const bodyParser = require('body-parser')
const getNotes = require('./routes/getNotes')
const addNotes = require('./routes/addNotes')
const editNotes = require('./routes/editNotes')
const deleteNotes = require('./routes/deleteNotes')
// ===BE apps====
const app = express()
app.use(bodyParser.json())
app.use(getNotes)
app.use(addNotes)
app.use(editNotes)
app.use(deleteNotes)

// (HTTP Method yang digunakan browser untuk user mendapatkan data) 
// ada 2 parameter : '/' route utama (path) , req dan res (isinya ditentukan express) adalah object anonymous function (callback).
app.get('/', function (req, res) {
  res.send('Hello World')
})

// to listen from port 3000 and log the localhost URL with the port
app.listen(3000, () => {
  console.log("server listens at http://localhost:3000");
})

// didalam js kebanyakan file jika ingin digunakan untuk file lain harus di export sebagai module. 
// jadi module adalah bentuk file yang ingin diimportkan file lain..




