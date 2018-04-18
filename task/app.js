const express = require('express');
const router=express.Router();
const app = express();
// var userCrud=require("./db/crud");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./build"));


router.post("/login" ,(request , response)=>{
    console.log("cccccccc",request.body.email);
    email=request.body.email;
    pass=request.body.pass;
     console.log("user id is " , email ," password is" , pass);
     let User=require("./model/user");
     let userObj=new User(email, pass);
     let operation=require("./db/crud");
     operation.addUser(userObj,response);
});
app.use("/",router);



app.listen(1234 , ()=>{
    console.log("server start....");
})