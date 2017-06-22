var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    username: {
        type: String
    },

    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spell"
    }]
});

module.exports = mongoose.model("User", userSchema);