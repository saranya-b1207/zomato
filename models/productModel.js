import mongoose from "mongoose";
const Schema=mongoose.Schema;

const CategorySchema =new Schema(
    {
        name:{type:String,required:true}
    }
)

const ProductSchema= new Schema(
    {
        name:{type:String,required:true},
        adjective:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:String,required:true},
        category:{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
        imageUrl: {type:String}
    }
)
// const Category=mongoose.model('Category',CategorySchema);
// const Product=mongoose.model('Product',ProductSchema);
// module.exports  (Product ,Category);

const Product=mongoose.model("Product",ProductSchema);

export default Product;