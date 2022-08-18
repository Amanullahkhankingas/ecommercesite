const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    title:{type:String, required:true},
    slug:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    color:{type:String},
    size:{type:String},
    category:{type:String, required:true},
    availableyQty:{type:Number, required:true}
},{timestampts:true})
mongoose.models = {}

export default mongoose.model('Product',productSchema)