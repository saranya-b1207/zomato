import express from 'express';
import User from '../models/userModel.js'; 

const router = express.Router();

router.post('/create-user',(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        _id:req.body._id,
    })
    user.save((err,user)=>{
        if(err){
            res.status(400).send({error:err})
        }else{
            res.status(200).send({data:user})
        }
    })
})


export { router as userRouter };