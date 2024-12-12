import { faker } from "@faker-js/faker";
const _ = require('lodash');
import mongoose from "mongoose";


async function main(){
    const uri="mongodb://localhost:27017";
    try{
await mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true });

const productsCollection=mongoose.connection.db.collection("products");
const categoriesCollection=mongoose.connection.db.collection("categories");

productsCollection.drop().catch((err) => console.log("Product collection not found, skipping drop"));;
let categories=['breakfast','lunch','dinner','drinks','tiffin'].map((category)=>{
    return{name:category}
});    
await categoriesCollection.insertMany(categories);

let imageUrls = [
    'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
    'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
    'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
];
let products=[];
for( let i=0;i<10;i+=1){
    let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls)
    };
    products.push(newProduct);
}
await productsCollection.insertMany(products);
}catch(err){
    console.error(err);
}finally{
    await client.close();
}
}
main();