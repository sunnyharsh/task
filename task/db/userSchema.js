const connection = require("./connection");
const Schema = connection.Schema;
var userSchema = new Schema({email:String, pass:String});
var UserModel = connection.model("registers",userSchema);
module.exports = UserModel;