import mongoose from "mongoose";

// Creating the schema of the database
const prodSchema = new mongoose.Schema({
    name: {type:String , required:true},
    description: {type:String , required:true},
    price: {type:Number , required:true},
    image: {type:Array , required:true},
    category: {type:String , required:true},
    subCategory: {type:String , required:true},
    sizes: {type:Array , required:true},
    bestseller: {type:Boolean},
    date: {type:Number , required:true},
})

const productModel = mongoose.models.product || mongoose.model("product",prodSchema) //Created a model for the schema 
// The or operator is used in check if the model is already used (the first one) or to create a new one tho
export default productModel