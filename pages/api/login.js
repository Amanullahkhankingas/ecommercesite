import User from "../../models/User"
import connectDB from "../../middleware/mongoose"

var CryptoJS = require("crypto-js");


var jwt = require('jsonwebtoken');



const handler= async (req, res)=> {
    
    
    if(req.method == 'POST'){
        // console.log(req.body)
        let user = await User.findOne({"email":req.body.email})
        // console.log(user.name)

        var bytes  = CryptoJS.AES.decrypt(user.password, 'secretkey123');
        var decriptedPass = bytes.toString(CryptoJS.enc.Utf8);

        if(user){
              if(req.body.email == user.email && req.body.password == decriptedPass){
                
                var token = jwt.sign({ name:user.name ,email:user.email}, 'jsonwebtoken');
                            //  console.log(token)
                  res.status(200).json({Success :true, message:"Your account is LogedIn Successfully!",token:token})
                  
                }
                else{
                    
                    res.status(200).json({Success :false, error:"Invalid cridentials"})
              }
        }
        else{

            res.status(200).json({Success :false, error: "User Not Found"})
        }

        

    }
    else{

        res.status(400).json({error:"this reques is not allowed"})
    }
  }


  export default connectDB(handler);