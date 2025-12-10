import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Myorderpage = () => {
const navigate=useNavigate()
const [dummyorder,Setdummyorder]=useState([])

useEffect(()=>{

    setTimeout(() => {
        const Orders=[
            {
                _id:1,
                createAt:new Date(),
                shippingaddress:{city:"ernakulam",country:"india"},
                orderItems:[
{name:"product1",
    image:""
}
                ],
                totalPrice:100,
                isPaid:true

            }
,  {
                _id:2,
                createAt:new Date(),
                shippingaddress:{city:"ernakulam",country:"india"},
                orderItems:[
{name:"productthree",
    image:""
}
                ],
                totalPrice:150,
                isPaid:true

            }


        ]
        Setdummyorder(Orders)
        
    }, 1000);
})


const HandleRowclick=(id)=>{
navigate(`/order-detail/${id}`)
}
  return (
    <div className='md:max-w-7xl mx-auto p-4 sm:p-7'>
        <h2 className='text-xl md:text-2xl font-bold mb-6 '>My orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
            <table className='w-3/4 md:w-full px-5 md:px-0 text-left text-gray-500'>
                <thead className='bg-gray-100 text-xs md:text-sm uppercase text-gray-700'>
                    <tr>
                        <th className='py-2 px-2 md:px-4  sm:py-3 '>Order ID</th>
                        <th className='py-2 px-2 md:px-4   sm:py-3 '>Created</th>
                        <th className='py-2 px-2 md:px-4   sm:py-3 '>
                            Shipping Address
                        </th>
                        <th className='py-2 px-2 md:px-4   sm:py-3 '>
                            Items
                        </th>
                        <th className='py-2 px-2 md:px-4   sm:py-3 '>
                            Price
                        </th><th className='py-2 px-2 md:px-4   sm:py-3 '>
                            Status
                        </th>
                    </tr>

                </thead>
                <tbody>
                    {
                        dummyorder.length>0?(
                            dummyorder.map((data)=>(
                                <tr key={data._id} className='border-b hover:border-gray-50' onClick={()=>HandleRowclick(data._id)}>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'><img src={data.orderItems[0].image} className='w-10 h-10 sm:w-12 object-cover rounded-lg' alt="" /></td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>#{data._id}

                                    </td>
                                     <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {new Date(data.createAt).toLocaleDateString()}{" "}{new Date(data.createAt).toLocaleTimeString()}

                                    </td>
                                       <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>{data.shippingaddress?`${data.shippingaddress.city},${data.shippingaddress.country}`:"N/A"}

                                    </td>
                                       <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>{
                                        data.orderItems.length}

                                    </td>
                                       <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>#{data.totalPrice}

                                    </td>
                                       <td className={`py-2 px-2 sm:py-4 sm:px-4 font-medium ${data.isPaid?"text-green-600":"text-red-600"}  whitespace-nowrap`}>
                                        {data.isPaid?"paid":"unpaid"}

                                    </td>
                                    
                                </tr>
                                
                            ))

                        ):<tr >
                            <td className='py-4 px-4 text-center text-gray-800'>you have no order</td>
                        </tr>
                    }

                </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default Myorderpage
