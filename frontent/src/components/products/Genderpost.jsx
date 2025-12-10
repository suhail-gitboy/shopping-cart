import React from 'react'
import Men from "../../assets/images/beckam.webp"
import lady from "../../assets/images/woman.webp"
import { Link } from 'react-router'

const Genderpost = () => {
  return (
    <div className='grid  sm:grid-cols-2  sm:space-x-10 mt-10 space-y-10 space-x-0'>
        <div className='relative'>
            <img src={Men} alt="" className='w-full h-110' />
            <div className='p-4 absolute bottom-5 z-10 left-5 bg-white/70 text-black'>
               <Link >
                <p className='text-md font-bold mb-3'>Men's Collection</p>
                <p className='text-sm'>Shop now</p></Link>
            </div>
        </div>
        <div className='relative'>
            <img src={lady} alt="" className='w-full h-110' />
              <div className='p-4 absolute bottom-5 sm:bottom-15 z-10 left-5 bg-white/70 text-black'>
               <Link>
                <p className='text-md font-bold mb-3'>Woman's Collection</p>
                <p className='text-sm'>Shop now</p>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Genderpost
