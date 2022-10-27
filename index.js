const express = require("express");
const app = express();
const db = require("./db/db")
const router = require('./router')


const PORT = 3000

//middleware
app.use(express.json())
app.use(router)
 

app.listen(PORT, () => {
    console.log(`Servidor arrancado en el puerto ${PORT}` )
    db.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})