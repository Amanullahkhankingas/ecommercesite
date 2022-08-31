import User from "../../models/User"
import connectDB from "../../middleware/mongoose"

var CryptoJS = require("crypto-js");



const handler= async (req, res)=> {
    
    
    if(req.method == 'POST'){
        // console.log(req.body)
        let user = await User.findOne({"email":req.body.email})
        // console.log(user.name)

        var bytes  = CryptoJS.AES.decrypt(user.password, 'secretkey123');
        var decriptText = bytes.toString(CryptoJS.enc.Utf8);

        if(user){
              if(req.body.email == user.email && req.body.password == decriptText){

                  res.status(200).json({Success :true, message:"Your account is LogedIn Successfully!", name:user.name ,email:user.email})
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