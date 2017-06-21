var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var spellSchema = new Schema({
    // The name of the spell
    name: {
        type: String,
        required: true
    },

    //  The user who created the spell
    user_id: {
        type: String, //mongoose.Schema.Types.ObjectId,
        //ref: "User",
        required: true
    },

    // The category that the spell belongs to
    category: {
        type: String,
        required: true
    },

    // How to cast the spell
    instructions: {
        type: String,
        required: true
    },

    // The ingredients required for the spell
    ingredients: [String],

    // A link to a website containing the original spell
    link: String,

    // The rating for the spell, out of 5
    rating: Number,

    // The difficulty of the spell, out of 5
    difficulty: Number
});

module.exports = mongoose.model("Spell", spellSchema);