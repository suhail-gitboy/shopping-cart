import React from 'react'

import Imageone from "../../assets/images/main2.webp"
import { Link } from 'react-router'
const Hero = () => {
  return (
    <div className=''>
      <img src={Imageone} className='w-full h-[400px]  md:h-[600px] brightness-70 lg:h-[750px] object-cover' alt="" />
      <div className='absolute inset-0 bg-opacity-10 mt-26  bg-opacity-05 flex items-center justify-center text-white mb-20 md:mb-0'>
<div className='text-center p-6 '>
    <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation <br />Ready</h1>
    <p className='text-sm tracking-tighter md:text-lg mb-6'>Explore our vacation-ready outfits with fast worldwide shipping</p>
<Link to="/shopping/all" className='px-4 py-2 text-sm bg-white text-black hover:bg-black hover:text-white transition-colors duration-75'>
Shop now
</Link>
</div>
      </div>
    </div>
  )
}

export default Hero
