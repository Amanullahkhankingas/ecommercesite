import User from "../../models/User"
import connectDB from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");



const handler= async (req, res)=> {
    if(req.method == 'POST'){
        const {name, email} = req.body;
        const u = new User({name, email, password:CryptoJS.AES.encrypt(req.body.password, 'secretkey123').toString()});
        await u.save();
        console.log(u)

        
        res.status(200).json({Success :"Success"})
    }
    else{

        res.status(400).json({error:"this reques is not allowed"})
    }
  }


  export default connectDB(handler);