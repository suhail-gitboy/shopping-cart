import React from 'react'
import { Link } from 'react-router'
const Adminhome = () => {

  const orders=[
    {
      _id:123321,
      user:{
        name:"john"
      },
      price:110,
      status:"Processing"

    }, {
      _id:123321,
      user:{
        name:"john"
      },
      price:110,
      status:"Processing"

    }, {
      _id:123321,
      user:{
        name:"john"
      },
      price:110,
      status:"Processing"

    }, {
      _id:123321,
      user:{
        name:"john"
      },
      price:110,
      status:"Processing"

    }
  ]
  return (
    <div className='w-full mx-auto p-6 '>
      <h1 className='text-3xl font-bold mb-6' >Admin dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className='p-6 shadow-md rounded-lg  '>
          <h2 className='text-xl font-semibold mb-2'>Revenue</h2>
          <p className='text-xl '>$12000</p>

        </div>
        <div className='p-6 shadow-md rounded-lg  '>
          <h2 className='text-xl font-semibold mb-2'>total orders</h2>
          <p className='text-xl '>120</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">manage orders</Link>

        </div><div className='p-6 shadow-md rounded-lg  '>
          <h2 className='text-xl font-semibold mb-2'>total products</h2>
          <p className='text-xl '>100</p>
 <Link to="/admin/orders" className="text-blue-500 hover:underline">manage products</Link>
        </div>

      </div>
      <div className='mt-6'>
        <h2 className='text-2xl font-bold mb-4'>Recent orders</h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-gray-500'>
            <thead className='bg-gray-100 text-xs uppercase text-gray-600'>
<tr>
  <th className='py-3 px-4'>Order ID</th>
  <th className='py-3 px-4'>User</th>
  <th className='py-3 px-4'>Total price</th>
  <th className='py-3 px-4'>Status</th>
</tr>
            </thead>
            <tbody>
              {
                orders.length>0?(
orders.map((data,ind)=>(
  <tr className='border-b cursor-pointer' key={ind}>
    <td className='p-4'>{data._id}</td>
    <td className='p-4'>{data.user.name}</td>
    <td className='p-4'>{data.price}</td>
    <td className='p-4'>{data.status}</td>

  </tr>
))
                ):(
<tr colSpan={4} className='p-4 text-center text-gray-500'>
No record found
</tr>
                )
              }
            </tbody>
          </table>

        </div>

      </div>
     
    </div>
  )
}

export default Adminhome
