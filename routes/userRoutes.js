var express = require("express");
var userRoutes = express.Router();
var User = require("../models/user");

userRoutes.put("/:id", function (req, res) {
    console.log(req.params.id);
    User.findOneAndUpdate({_id: req.params.id}, req.body, function (err, existingUser) {
        if (existingUser === null) return res.status(500).send("No user found");
        if (err) return res.status(500).send(err);
        return res.send(existingUser);
    });
});


module.exports = userRoutes;