const express = require("express")
const app = express()
const PORT = 3000
const drinks = require("./drinks")
app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App!")
})
app.get("/drinks", (req, res)=>{
    res.send(drinks)
})
app.listen(PORT, (req, res)=>{
    console.log(`The server is listening from port ${PORT}...`)
})