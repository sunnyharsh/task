const userSchema=require("./userSchema");

const userOperations = {
    addUser(userObject,response){
        console.log("crud in " , userObject);
        userSchema.create(userObject,function(error ,docs){
            if(error){
                response.send("something went wrong here....")
            }else
            if(docs.length>0){
                response.send("U Register SuccessFully....");    
            }
        }
    )},


    // findUser(userObject,response){
    //     console.log("crud in " , userObject);
    //     userSchema.find({id:userObject.id},function(error ,docs){
    //         if(error){
    //             response.send("something went wrong here....")
    //         }else
    //         if(docs.length>0){
    //             response.send("U Register SuccessFully....");    
    //         }
    //     }
    // )}




}  
module.exports=userOperations;