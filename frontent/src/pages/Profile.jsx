import React from 'react'
import Myorderpage from '../components/products/Myorderpage'



const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className="flex-grow container mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:space-x6 space-y-6 md:space-y-6">
                <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
                <h1 className='text-2xl md:text-3xl font-bold mb-3'>Jhon Doe</h1>
                <p className='text-lg text-gray-600 mb-4 '>name@gmail.com</p>
                <button className='w-full bg-red-600 text-white py-2 rounded-md px-4 hover:bg-red-500 '>Logout</button>

                </div>
                <div className='w-full md:2/3 lg:w-3/4'>
                <Myorderpage/>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Profile
