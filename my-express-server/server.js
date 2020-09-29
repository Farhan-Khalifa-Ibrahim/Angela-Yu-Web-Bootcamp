const express = require("express");
const { response } = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("Contact me at FarhanKhalifa@gmail.com");
})

app.get("/about", (req, res) => {
    res.send("I am Farhan owning this website")
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});