const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jonathan812000:fO4EVFzXwQbNJRYo@products-providers.gvorj98.mongodb.net/");

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;