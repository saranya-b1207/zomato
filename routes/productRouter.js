import express from 'express';
import  Product  from '../models/productModel.js';

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({ data: products });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.get('/product-by-categories', async (req, res) => {
    try {
        const products = await Product.aggregate([
            { $match: {} },
            {
                $group: {
                    _id: '$category',
                    products: { 
                        $push: `$$ROOT` 
                    }
                }
            },
            {
                $lookup: {
                    from: 'categories', 
                    localField: '_id',    
                    foreignField: '_id',  
                    as: 'categoryDetails' 
                }
            },
            {
                $unwind: {
                    path: '$categoryDetails', 
                    preserveNullAndEmptyArrays: true  
                }
            },
            {
                $project: { 
                    name: '$categoryDetails.name', 
                    products: 1, 
                    _id: 0 
                }
            }
        ]);
        res.status(200).send({ data: products });

    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});
export {router as productRouter};

