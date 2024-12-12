import mongoose from "mongoose";;

mongoose.connect('mongodb://localhost:27017/Food-ordering-app')
.then(()=>console.log("Connected to MongoDb"))
.catch((error)=>{
    console.error('Connection error:',error.message)
})

const db=mongoose.connection;
db.on('error',(error)=>
    {
        console.error('Mongodb connection error:',error);
    });

export default db;
