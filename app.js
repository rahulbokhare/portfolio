const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")));


app.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs")
})


app.listen(PORT,() =>{
    console.log("server is listening");
})