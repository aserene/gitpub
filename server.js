const express = require("express")
const app = express()
const PORT = 3000
const drinks = require("./models/drinks")
const food = require("./models/food")
app.get("/", (req, res)=>{
    res.render("home.ejs")
})
app.get("/drinks", (req, res)=>{
    // res.send("Welocme to Drinks")
    res.render(
        "drinks-index.ejs",
        {
            allDrinks:drinks
        })
})
app.get("/food", (req, res)=>{
    res.render(
        "food-index.ejs",
        {
            allFood: food
        }
    )
})
app.get("/drinks/:id", (req, res)=>{
    res.render("drinks-show.ejs", {
        drinks: drinks[req.params.id],
        index: req.params.id
    })
})
app.get("/food/:id", (req, res)=>{
    res.render("food-show.ejs", {
        food: food[req.params.id],
        index: req.params.id
    })
})
app.listen(PORT, (req, res)=>{
    console.log(`The server is listening from port ${PORT}...`)
})