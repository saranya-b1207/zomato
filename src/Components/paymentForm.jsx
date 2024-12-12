
import React, { useState } from 'react';

const PaymentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();  
    setIsSubmitted(true);  
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2 className='font-semibold my-2'>Payment Form:</h2>
          <label className='mb-2'>
            Card Number:
            <input className='border-black p-1 rounded-sm' type="text" required placeholder='Enter Card number' />
          </label>
          <br />
          <label>
            Expiry Date:
            <input type="text" required placeholder='Enter expiry date' className='p-1'/>
          </label>
          <br />
          <label>
            CVV:
            <input type="text" required placeholder='CVV' className='text-center p-1'/>
          </label>
          <br />
          <button type="submit" className='m-16 bg-yellow-500 p-3 rounded-md font-semibold'>Submit</button>
        </form>
      ) : (
        <p>Payment Successful!</p>
      )}
    </div>
  );
};

export default PaymentForm;
