var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    picture: String,
    email: String,
    color: String,
    hashed_password: String
});
mongoose.model("User", UserSchema);
