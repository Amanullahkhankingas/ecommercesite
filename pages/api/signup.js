import User from "../../models/User"
import connectDB from "../../middleware/mongoose"



const handler= async (req, res)=> {
    if(req.method == 'POST'){
        const u = new User(req.body);
        await u.save();
        // console.log(req.body)

        
        res.status(200).json({Success :"Success"})
    }
    else{

        res.status(400).json({error:"this reques is not allowed"})
    }
  }


  export default connectDB(handler);