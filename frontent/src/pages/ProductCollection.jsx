import React, { useEffect, useRef, useState } from 'react'
import { FaFilter ,FaTimes} from 'react-icons/fa'
import Filterbar from '../components/common/Filterbar'
import Sortproduct from '../components/products/Sortproduct'
import PRoductGrid from '../components/products/PRoductGrid'
import { Productarray } from '../components/common/Commondata'

const ProductCollection = () => {

    const [products,Setproducts]=useState([])



    useEffect(()=>{

        setTimeout(() => {
            Setproducts(Productarray)
        }, 1000);

    },[])
const sidebarref=useRef(null)

const [issidebaropen,Setisidebar]=useState(false)
     
const outsideClick=(e)=>{

    if( issidebaropen  && e.target!==sidebarref.current){
        Setisidebar(false)
    }

}



const Toggle=()=>{

    Setisidebar(!issidebaropen)
}
  return (
    <div onClick={outsideClick}  className='flex flex-col lg:flex-row'>
        <button className='lg:hidden border p-2 flex justify-center items-center' onClick={Toggle}><FaFilter  className='mr-2'/>Filter</button>

      <div  ref={sidebarref}   className={`${issidebaropen?"translate-x-0":"-translate-x-full"} fixed inset-y-0 z-30 left-0 w-64 bg-gray-100 overflow-y-auto transition-transform duration-150 lg:static lg:translate-x-0`}>
        <div className='flex justify-end items-end p-5 lg:hidden' onClick={()=>Setisidebar(false)}>
             <FaTimes className="text-2xl text-black " />
        </div>
       
        <Sortproduct/>
      </div>

      <div className='p-4 flex-grow px-5 md:px-7 ' >

        <div className='flex justify-between'>
        <h3 className='text-2xl uppercase mb-4'>all collections</h3>
        <Filterbar/>
        </div>
        
        <PRoductGrid Allproduct={Productarray}  />


      </div>
    </div>
  )
}

export default ProductCollection
