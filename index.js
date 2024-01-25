const express = require('express')
const app = express()
const port = 5900
const text = 'fikaw'

app.get('/', (req, res) => {
    res.send("Welkam tu Js, Fikaaw!")
})
app.listen(port, () => { 
    console.log(`server sukses di ${port} oleh ${text}`)
})

// get = ambil data
// post = input data 
// patch = update data
// delete = hapus data