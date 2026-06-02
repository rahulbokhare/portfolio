const express = require("express");
const app = express();
const path = require("path")


app.set("views", path.join(__dirname, "views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")));


app.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs")
})


app.listen("8080",() =>{
    console.log("server is listening");
})