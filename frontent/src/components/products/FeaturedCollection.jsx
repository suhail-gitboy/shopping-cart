import React from 'react'
import gang from "./../../assets/images/gang.jpg"
const FeaturedCollection = () => {
  return (
   <div>
     <div className='mt-10 rounded-lg flex flex-col-reverse md:flex-row   bg-gray-300  '>
        <div className=' flex flex-col justify-around md:w-1/2 py-10 px-8' >
            <p className='text-md py-2'>Comfort and Style</p>
            <h3 className='font-bold text-4xl py-3'>Apparel made for <br />your everydaylife </h3>
            <p className='py-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus in quae fuga tempora consequuntur suscipit, voluptates iure nam est dignissimos laboriosam odit reiciendis placea</p>
<button className='bg-black text-sm text-white py-2 px-4 w-2/4 rounded-sm'>Shop now</button>
        </div>
       
<img src={gang} className='md:w-1/2  rounded-lg' alt="" />
    
      
    </div>
   </div>
  )
}

export default FeaturedCollection
