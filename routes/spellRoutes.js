var express = require("express");
var spellRoutes = express.Router();

var Spell = require("../models/spell");

spellRoutes.route("/")
    .get(function (req, res) {
        console.log("in GET all request");
        Spell.find(function (err, spells) {
            console.log("found spells " + spells);
            if (err) return res.status(500).send(err);
            return res.send(spells);
        });
    })
    .post(function (req, res) {
        var spell = new Spell(req.body);
        spell.save(function (err, newSpell) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(spell);
        })
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