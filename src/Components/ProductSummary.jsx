import React from 'react';
import { useSelector } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';
import ProductSummaryCart from './ProductSummaryCart';


const ProductSummary = () => {
  const cart=useSelector(cartProducts);
   
  return (
    <div className='flex flex-col w-80'>
        {cart && cart?.map((product,index)=>{
            return(
                <ProductSummaryCart product={product} key={index}/>         
              
              )

        })}
      
    </div>
  )
}

export default ProductSummary
