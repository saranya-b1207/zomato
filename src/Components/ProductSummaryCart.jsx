import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementProductAmount,decrementProductAmount } from '../stores/cart/cartSlice';

const ProductSummaryCart = ({ product }) => {
    const dispatch=useDispatch();
    
    return (
        <div className='flex p-1 sm:p-2 border-b border-b-gray-200'>
            <div className='product-image  border border-grey-200 rounded-lg w-full sm:w-1/3'>
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className='product-info mx-4'>
                <h3 className='flex flex-col font-semibold'>{product.name}</h3>
                <p className='text-gray-400 text-sm flex flex-col font-semibold'>{product.description}</p>
            </div>
            <div className='product-price-qt flex flex-col items-center justify-center font-semibold'>
                <div className='price text-xl'>
                    {`${product.price}`*(product.amount)}
                </div>
                <div className='quantity flex'>
                    <button className='p-1' disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}> - </button>
                    <span className='p-1'>{product.amount}</span>
                    <button className='p-1' onClick={() => dispatch(incrementProductAmount(product))}> + </button>
                    </div>
                </div> 
            </div>
    )
}

export default ProductSummaryCart
