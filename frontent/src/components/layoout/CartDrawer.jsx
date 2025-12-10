import React, { useState } from 'react'
import {IoMdClose} from "react-icons/io"
import Cartcontent from '../cart/Cartcontent'
const CartDrawer = ({drawer,Setdrawer}) => {

    

    const ToggleDrawer=()=>{
        Setdrawer(!drawer)
    }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:1/4 h-full py-5 px-5 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawer?"translate-x-0":"translate-x-full"}`}>
      <div className='flex flex-col justify-end '>
        <button onClick={ToggleDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-800"/>

        </button></div>
<div className='flex-grow p-4 overflow-y-auto'>
<h2 className='text-xl font-semibold mb-4'>Your cart</h2>
<Cartcontent/>
</div>
<div>
  <button className='w-full transition bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800'>Checkout</button>
  <p className='text-sm tracking-tight text-gray-500 mt-5'>Shipping,taxes,and discounds codes calculated at checkout</p>
</div>

      
    </div>
  )
}

export default CartDrawer
