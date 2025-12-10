import React from 'react'
import Topbar from '../layoout/Topbar'
import Navbar from './Navbar'
import CartDrawer from '../layoout/CartDrawer'

const Header = () => {
  return (
    <header className='border-b border-gray-800/20'>
        <Topbar/>
        <Navbar/>
      
    </header>
  )
}

export default Header
