import React from 'react';
import zomato from '../assets/Images/zomato.jpg';
import Button from './Elements/Button';

const Banner = () => {
  return (
    <div className='banner w-full  mx-auto relative flex item-center justify-between font-serif bg-red-500'>
   <div className='banner-description w-full md:w-1/2 p-2 '>
<h2 className=' text-2xl font-bold text-green-500 font-serif'>
Food Ordering Made Easy
</h2>
<p className='font-semibold text-lg text-white py-2'>
Get Started Today!
</p>
<div className='btn-container'>
<Button className='bg-yellow-400 py-1 text-green-800 mb-3'>Order Now</Button><br/>
<a href="/menu" className='text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3 underline'>
See Menu
</a>
</div>
   </div>
   <div className='banner-image w-full md:w-2/3 p-4 flex justify-end'>
   <img src={zomato} alt="banner" className='max-h-95' />
</div>
</div>
  )
}

export default Banner
