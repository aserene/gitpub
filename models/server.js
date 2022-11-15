const express = require("express")
const app = express()
const PORT = 3000
app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App!")
})
app.listen(PORT, (req, res)=>{
    console.log(`The server is listening from port ${PORT}...`)
})