const mongoose = require("mongoose");
const player = mongoose.model("player");

exports.home = async (req, res) => {
    const players = await player.find({}).lean();
    res.render("home", {title: "Welcome Home", players})
}