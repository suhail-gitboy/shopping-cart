import React from 'react'

const PRoductGrid = ({Allproduct}) => {
  return (
   <div>
       <div className=''>

            <div className="grid grid-cols-2 md:grid-cols-4  gap-5 w-full" >
          {
            Allproduct.map((data)=>(
                    <div className='rounded-lg transform transition-transform duration-100 hover:scale-105' >
                  <img src={data.images[0].url} alt="" className='rounded-lg w-full h-60' />
                  <h3 className='text-gray-400 text-sm  py-3'>${data.price}</h3>
      
              </div>
            ))
          }
               
      
            </div>
          </div>
    </div>
  )
}

export default PRoductGrid
