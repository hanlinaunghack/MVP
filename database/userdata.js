const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/useraccounts",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We are connected");
});
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  categories: Array,
  friends: Array,
  images: Array
});

var User = mongoose.model("User", UserSchema, "User");

module.exports = User;
