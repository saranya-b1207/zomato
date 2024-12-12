import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from './db/index.js';
import  { productRouter }   from './routes/productRouter.js';
import { userRouter } from './routes/userRouter.js';
const app= express();

var corsOptions={
    origin:"http://localhost:5173"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//db.on('error',(error)=>{console.error.bind(console,'Mongodb connection error:')});

app.get('/',(req,res)=>{
    res.json({message:"Welcome to food ordering"});
});

app.post('/api/create-user', async (req, res) => {
    try {
        const { name, email, _id } = req.body;

        // You can validate the fields here if necessary.
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const user = new User({
            name,
            email,
            password,  
        });

        await user.save();

        res.status(200).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  // Connect to MongoDB and handle any connection errors
  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
const PORT =process.env.PORT || 5500;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

app.use('/api',productRouter);
app.use('/api',userRouter);
