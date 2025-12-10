import React from 'react'

const Adminordermanagement = () => {

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
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-6'>Order Management</h2>
        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='min-w-full text-left text-gray-500'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                  <tr >
                    <th className='py-3 px-4'>Order ID</th>
                    <th className='py-3 px-4'>Customer</th>
                    <th className='py-3 px-4'>Total price</th>
                    <th className='py-3 px-4'>Status</th>
                    <th className='py-3 px-4'>Actions</th>
                  </tr>

                </thead>
<tbody className='bg-gray-200 text-xs  text-gray-600'>
{
  orders.length>0?(
   orders.map((data)=>(
     <tr >
                    <td className='py-3 px-4'>{data._id}</td>
                    <td className='py-3 px-4'>{data.user.name}</td>
                    <td className='py-3 px-4'>{data.price}</td>
                    <td className='py-3 px-4'>
                      <select name="" id="" value={data.status} onChange={(e)=>handleStatuschange(data._id,e.target.value)} className='bg-gray-400 px-2 text-white p-4 rounded-md border border-black/20'>
                        <option value="processing">processing</option>
                        <option value="shipped">shipped</option>
                        <option value="delivered">delivered</option>
                        <option value="canceled">canceled</option>
                      </select>
                      </td>
                    <td className='py-3 px-4'>

                      <button onClick={()=>handleStatuschange(data._id,"delivered")} className='px-5 py-2 rounded bg-green-600 hover:bg-green-800 text-white text-sm'>Mark as Delivered</button>
                    </td>
                  </tr>
   ))
  ):(
<tr colSpan={4}>No orders yet</tr>
  )
}


</tbody>
            </table>

        </div>
      
    </div>
  )
}

export default Adminordermanagement
