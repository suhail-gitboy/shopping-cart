import React,{useState} from 'react'
import {HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi'
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link } from 'react-router'
import Searbar from './Searbar';
import CartDrawer from '../layoout/CartDrawer';


const Navbar = () => {


const [drawer,Setdrawer]=useState(false)
const [sideBar,SetsideBar]=useState(false)

  return (
 
<div className='px-4 md:px-14 '>
<nav className='container mx-auto flex items-center justify-between py-4 '>
    <div>
        <Link to="/" className='text-2xl font-medium'>
        Clothing.
        </Link>

    </div>
    <div className='hidden md:flex space-x-4 font-medium'>
      <Link to="/shopping/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>men</Link>
      <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>woman</Link>
      <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top wear</Link>
      <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>bottom wear</Link>

        
    </div>

    <div className="flex items-center space-x-4">
      <Link className='bg-black px-2 rounded text-sm text-white' to="/admin/home">Admin</Link>
      <Link to="/profile" className='hover:text-black
      '><HiOutlineUser className='h-6 w-6 text-gray-700'/></Link>
      <button className='relative hover:text-black' onClick={()=>Setdrawer(true)}>
        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
<span className='absolute -top-1 bg-red-700 text-white text-xs rounded-full px-2 py-0.5'>1</span>
      </button>
      <Searbar/>
      <button className=' hover:text-black md:hidden'>
    <HiBars3BottomRight className='h-6 w-6 text-gray-700' onClick={()=>SetsideBar(!sideBar)}/>

      </button>
      
    </div>
  

</nav>
<CartDrawer drawer={drawer} Setdrawer={Setdrawer} />


<div className={`h-full  w-2/3 md:w-1/3 bg-gray-100 text-black px-4 py-4 absolute top-0 left-0  transform transition-transform duration-300 z-50 ${sideBar?"translate-0":"-translate-x-full"} `}>

<div className='flex justify-end'>
<button onClick={()=>SetsideBar(!sideBar)}>
  <HiXMark className='h-6 w-6 text-gray-900 font-bold'/>
</button>


</div>
<div className='space-y-3 mt-6'>

  <h3 className='font-bold text-xl'>Menu</h3>
<Link to="#" className='block text-gray-600 hover:text-black'>

Men
</Link>
<Link to="#" className='block text-gray-600 hover:text-black'>

Women
</Link><Link to="#" className='block text-gray-600 hover:text-black'>

Top Wear
</Link><Link to="#" className='block text-gray-600 hover:text-black'>

Bottom Wear
</Link>

</div>



</div>

</div>
  )
}

export default Navbar
