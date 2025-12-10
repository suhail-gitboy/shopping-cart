import React from 'react'
import {HiShoppingBag, HiOutlineCreditCard, HiOutlineArrowCircleDown} from "react-icons/hi"
const ServiceSec = () => {
  return (
    <div className='py-16 px-4 bg-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
<div className="flex flex-col items-center">
    <div className='p-4 rounded-full mb-4'>
        <HiShoppingBag  className='text-xl'/>

    </div>
<h4 className='tracking-tight mb-2'>FREE INTERNATIONAL SHIPPING</h4>
<p className='text-gray-600 text-sm tracking-tight'>On all orders over $100.oo</p>
</div>
<div className="flex flex-col items-center">
    <div className='p-4 rounded-full mb-4'>
        <HiOutlineArrowCircleDown  className='text-xl'/>

    </div>
<h4 className='tracking-tight mb-2'>45 DAYS RETURN</h4>
<p className='text-gray-600 text-sm tracking-tight'>money back guarantee</p>
</div><div className="flex flex-col items-center">
    <div className='p-4 rounded-full mb-4'>
        <HiOutlineCreditCard  className='text-xl'/>

    </div>
<h4 className='tracking-tight mb-2'>SECURE CHECKOUT</h4>
<p className='text-gray-600 text-sm tracking-tight'>100% secure checkout</p>
</div>
        </div>
      
    </div>
  )
}

export default ServiceSec
