import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Topbar = () => {
  return (
    <div className='bg-blue-800 text-white '>
<div className="container mx-auto flex justify-between items-center py-3">

        <div className='  space-x-2 hidden md:flex'>
            <a href="#" className='hover:text-gray-300'>
                <FaInstagram className='h-4 w-4 '/>
            </a>
              <a href="#" className='hover:text-gray-300'>
                <FaTwitter className='h-4 w-4 '/>
            </a>  <a href="#" className='hover:text-gray-300'>
                <FaFacebook className='h-4 w-4 '/>
            </a>
        </div>

        <div className='text-sm text-center flex-grow'>
            <span>We ship world-wide - Fast and reliable shipping!</span>
        </div>
        <div className='text-sm hidden md:flex'>
            <a href="tel:+917736777919" className='hover:text-gray-300'>+91-7736777919</a>
        </div>

</div>
    
    </div>
  )
}

export default Topbar
