import React from 'react'
import { FaBoxOpen, FaClipboardCheck, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa';
import {HiXMark } from "react-icons/hi2";
import { NavLink, useNavigate } from 'react-router';
const Sidebar = ({Setsidebar}) => {
const navigate=useNavigate()
  const hANDLElogout=()=>{
navigate("/")
  }
  return (
    <div className=' p-5 top-0 z-70   h-screen  bg-gray-900' >
        <div className='flex justify-end items-end mb-4 md:hidden'>
            <HiXMark className='text-xl text-white' onClick={()=>Setsidebar(false)}/>

        </div>
        <h3 className='text-center font-bold text-md md:text-xl text-white mb-4'>Mr-boutque</h3>
        <h3 className='text-center font-semibold text-md md:text-xl text-gray-500 mb-4'>Admin Dashboard

        </h3>

        <nav className='flex flex-col space-y-2'>
          <NavLink to="/admin/user" className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-3 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}><FaUser/><span>user</span></NavLink>
          <NavLink to="/admin/product" className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-3 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}><FaBoxOpen/><span>products</span></NavLink>
          <NavLink to="/admin/order" className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-3 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}><FaClipboardList/><span>orders</span></NavLink>
          <NavLink to="/admin/home" className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-3 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}><FaStore/><span>shop</span></NavLink>

        </nav>
      <div className='mt-6' >
        <button onClick={hANDLElogout} className='w-full bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center  ' ><FaSignOutAlt/><span>logout</span></button>
      </div>
    </div>
  )
}

export default Sidebar
