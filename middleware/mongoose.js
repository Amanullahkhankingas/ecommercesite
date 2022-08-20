const mongoose = require('mongoose')

const connectDB = handler=> async (req, res)=>{

    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }

   await  mongoose.connect("mongodb://localhost:27017/codeswear?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")
//    await  mongoose.connect("mongodb://codeswear")
//    await  mongoose.connect(process.env.MONGO_DB)

    return handler(req,res)
}

export default connectDB;