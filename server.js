var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var app = express();
var port = process.env.PORT || 9999;
// var config = require("./config");
// var expressJWT = require("express-jwt");
var path = require("path");
// mongoose.connect(config.database, function (err) {
//     if (err) throw err;
//     console.log("Connected to the database");
// });
mongoose.connect("mongodb://localhost/spells", function (err, spells) {
    if (err) throw err;
    console.log("Connected to database");
});


// app.use("/api", expressJWT({secret: config.secret}));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/spells", require("./routes/spellRoutes"));

app.listen(port, function () {
    console.log("Server is running on port " + port);
});