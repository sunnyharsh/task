const dburl=require("./config");
const mongoose=require("mongoose");
mongoose.connect(dburl.dbURL);
module.exports=mongoose;