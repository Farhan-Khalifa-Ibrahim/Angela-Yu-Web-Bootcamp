const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post("/", (req, res) => {
    var Height = Number(req.body.Height);
    var Weight = Number(req.body.Weight);

    var BMI = Weight / Math.pow(Height, 2);
    res.send("Your BMI is " + BMI);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})