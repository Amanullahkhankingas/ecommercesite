import Product from "../../models/Product"
import connectDB from "../../middleware/mongoose"



const handler= async (req, res)=> {
   const products = await Product.find();
   console.log(products)
    res.status(200).json({products})
  }
   


  export default connectDB(handler);