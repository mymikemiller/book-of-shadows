var express = require("express");
var spellRoutes = express.Router();

var Spell = require("../models/spell");
var User = require("../models/user");

spellRoutes.route("/")

    .get(function (req, res) {
        Spell.find(function (err, spells) {
            if (err) return res.status(500).send(err);
            return res.send(spells);
        });
    })
    .post(function (req, res) {
        var spell = new Spell(req.body);
        spell.user_id = req.user._id;
        spell.save(function (err, newSpell) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(spell);
        })
    });

spellRoutes.get("/mine", function (req, res) {
    Spell.find({
        user_id: req.user._id
    }, function (err, spells) {
        console.log("in mine get error", spells)
        if (err) return res.status(500).send(err);
        return res.send(spells);
    });
});

spellRoutes.get("/favorites", function (req, res) {
    User.findOne({
        _id: req.user._id
    })
        .populate("favorites")
        .exec(function (err, user) {
            res.send(user.favorites);
        });
});

spellRoutes.route("/:id")
    .get(function (req, res) {
        Spell.findOne({
            _id: req.params.id
        }, function (err, spell) {
            if (spell === null) res.status(500).send("No spell found");
            if (err) return res.status(500).send(err);
            return res.send(spell);
        })
    })
    .put(function (req, res) {
        Spell.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {new: true}, function (err, spell) {
            if (spell === null) res.status(500).send("No spell found");
            if (err) return res.status(500).send(err);
            return res.send(spell);
        })
    })
    .delete(function (req, res) {
        Spell.findOneAndRemove({
            _id: req.params.id
        }, function (err, spell) {
            if (spell === null) res.status(500).send("No spell found");
            if (err) return res.status(500).send(err);
            return res.send(spell);
        })
    });

module.exports = spellRoutes;