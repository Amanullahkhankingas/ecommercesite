const mongoose = require('mongoose')

const connectDB = handler=> async (req, res)=>{

    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }

   await  mongoose.connect(process.env.MONGO_DB)
//    await  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB)
//    await  mongoose.connect("mongodb://codeswear")
//    await  mongoose.connect(process.env.MONGO_DB)

    return handler(req,res)
}

export default connectDB;