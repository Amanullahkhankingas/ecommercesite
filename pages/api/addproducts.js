import Product from "../../models/Product"
import connectDB from "../../middleware/mongoose"



const handler= async (req, res)=> {
    if(req.method == 'POST'){
        for(let i = 0;i< req.body.length ;i++){

           let p = new Product({ 
            title: req.body[i].title,
            slug: req.body[i].slug,
            desc: req.body[i].desc,
            image: req.body[i].image,
            price: req.body[i].price,
            color: req.body[i].color,
            size: req.body[i].size,
            category: req.body[i].category,
            availableyQty: req.body[i].availableyQty,
             })
           await  p.save()
        }
        res.status(200).json({Success :"Success"})
    }
    else{

        res.status(400).json({error:"this reques is not allowed"})
    }
  }


  export default connectDB(handler);