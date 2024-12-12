import React from 'react'
import Tabs from '../../Components/Tabs'
import Button from '../../Components/Elements/Button'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../stores/menu/productsSlice'
import useTabSwitch from '../../hooks/useTabsSwitch'
import AddressForm from '../../Components/AddressForm'
import ProductSummary from '../../Components/ProductSummary'
import PaymentForm from '../../Components/paymentForm'

const Cart = () => {
  const cart=useSelector(selectAllProducts);
  const tabs=['Summary','Delivery','Payment'];
  const[currentTab,handleTabSwitch]=useTabSwitch(tabs,'Summary');

  if(!cart||!cart.products|| cart.products.length===0){
    return(
    <div className='bg-white h-full text-black flex justify-center p-4 font-serif'>
      <h1>Your cart is empty</h1>

    </div>
    );
  }
  return (
    <div className='bg-white h-screen text-black mx-auto mt-2 border border-gray-600 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8 font-serif '>
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
      <div className={` tabs ${currentTab !== 'Summary'?'hidden':''}`}>
         <ProductSummary/>
         <div className='flex justify-end p-2'>
                <Button  className="flex items-center bg-yellow-500" onClick={()=>handleTabSwitch('Delivery')}> <span className='mr-1 text-black'>Next</span>→</Button>
      </div>
      </div>
      <div className={` tabs ${currentTab !== 'Delivery'?'hidden':''}`}>
      <AddressForm onTabSwitch={handleTabSwitch}/>
      <div className='flex justify-end p-2'>
                <Button  className="flex items-center bg-yellow-500" onClick={()=>handleTabSwitch('Payment')}> <span className='mr-1 text-black'>Next</span>→</Button>
      </div>
      </div>
      <div className={` tabs ${currentTab !== 'Payment'?'hidden':''}`}>
      <PaymentForm/>
     
      </div>

      </div>
  )
}

export default Cart;
