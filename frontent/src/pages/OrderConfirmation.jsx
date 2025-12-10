import React from 'react'

const OrderDetails = () => {
  return (
    <div >
      <h3 className='text-center text-4xl py-3 font-bold text-green-700'>Thank you For your Order!</h3>

      <div className='mx-auto mt-5 rounded-md shadow max-w-3/4  md:max-w-2/4 p-4 border border-black/20'>
<div className='flex flex-col  md:flex-row md:justify-between items-center md:items-start'>
  <div className=''>
    <p className='text-black font-bold text-md mb-1'>Order ID:12323</p>
    <p className='text-gray-600 font-sm'>Order date :13/12/2024</p>

  </div>
  <div>
    <p className='font-xs font-extralight md:font-bold text-green-800'>Estimated Delivery:23/12/2024</p>
  </div>
</div>
{/*order items map here*/}
<div className='mt-10'>
  <div className='flex justify-between items-center'>
  <div className='flex space-x-2 items-center'>
    <img src='https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop' className='w-17 h-19 rounded-md mb-1'/>
<div>
    <p className='text-gray-600 font-md font-bold'>Jacket</p>
    <p className='text-gray-600'>Black | M</p>
</div>

  </div>
  <div>
        <p className='text-gray-600 font-md font-bold'>$100</p>
    <p className='text-gray-600'>Qty:1</p>
 
  </div>
</div>
</div>

<div className='mt-10'>
    <div className='flex justify-between items-start'>
  
    
<div>
    <p className='font-bold text-xl mb-2'>Payment</p>
    <p className='text-gray-600'>paypal</p>
</div>


  <div>
        <p className='mb-2 text-xl  font-bold'>Address</p>
    <p className='text-gray-600'>123 Fashion Street</p>
    <p>new york ,Usa</p>
 
  </div>
</div>
</div>

      </div>


    </div>
  )
}

export default OrderDetails
