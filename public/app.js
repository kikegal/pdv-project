const express = require("express")

const app = express()

const morgan = require("morgan")

const port = 3000

app.use(morgan("dev"))

app.get('/', (req, res)=>{
    res.send("PDV")
})

app.listen(port, ()=>{
    console.log(`Escuchando port ${port}`)
})