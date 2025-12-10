import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';


const Searbar = () => {

    const [saerchterm,Setsearchterm]=useState("");
    const [isOpem,Setisopen]=useState(false)
    const handleToggleSearch=()=>{
        Setisopen(!isOpem)
    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpem?" top-0 absolute left-0 w-full bg-white h-24 z-50":"w-auto"}`}>

        {isOpem?(<form className='relative flex items-center justify-center w-full'>
            <div className="relative w-1/2">
               <input type="text" placeholder='search' value={saerchterm} onChange={(e)=>Setsearchterm(e.target.value)} className='bg-gray-100 px-4 py-2 pl-2 pr-12  rounded-lg focus:outline-none
            w-full placeholder:text-gray-700
            '/>
            <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMagnifyingGlass className='h-6 w-6 '/>
            </button>
            </div>

            <button className='absolute right-10 ' >
                <HiMiniXMark className=' h-6 w-6 '/>

            </button>
         

        </form>):(<button onClick={handleToggleSearch}>
            <HiMagnifyingGlass className='h-6 w-6 '/>
            </button>)}
      
    </div>
  )
}

export default Searbar
