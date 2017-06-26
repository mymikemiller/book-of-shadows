var express = require("express");
var userRoutes = express.Router();
var User = require("../models/user");

userRoutes.put("/:id", function (req, res) {
    console.log("before findOneAndUpdate:", req.body);
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, existingUser) {
        if (existingUser === null) return res.status(500).send("No user found");
        if (err) return res.status(500).send(err);
        console.log("in put:", existingUser);
        return res.send(existingUser);
    });
});


module.exports = userRoutes;