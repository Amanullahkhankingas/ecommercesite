import Product from "../../models/Product"
import connectDB from "../../middleware/mongoose"



const handler= async (req, res)=> {
   const products = await Product.find({category : "tshirts"});
   // const products = await Product.find();
       let tshirts ={ }

      for(let item of products){
        if(item.title in tshirts && item.availableyQty > 0){
           if(!tshirts[item.title].color.includes(item.color) && item.availableyQty > 0 ){
            tshirts[item.title].color.push(item.color)
           }
           if(!tshirts[item.title].size.includes(item.size) && item.availableyQty > 0 ){
            tshirts[item.title].size.push(item.size)
           }
        }
        else {
           tshirts[item.title] = (JSON.parse(JSON.stringify(item)))
           if(item.availableyQty>0){
            tshirts[item.title].color = [item.color]
            tshirts[item.title].size = [item.size]
           }
        }
      }


  //  console.log(products)
    res.status(200).json({tshirts})
   //  res.status(200).json({products})
  }
   


  export default connectDB(handler);