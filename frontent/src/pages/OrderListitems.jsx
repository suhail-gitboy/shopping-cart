import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import one from "../assets/images/men3.jpg"
import two from "../assets/images/men4.jpg"
import three from "../assets/images/men5.jpg"
import { Link } from 'react-router'
const OrderListitems = () => {

    const {id}=useParams()
    const [orderDetails,Setorderdetails]=useState(null)


    useEffect(()=>{
        const MockOrderdetail={
            _id:id,
            CreateAt:new Date(),
            isPaid:true,
            isDelivered:false,
            paymentMethod:"PAypal",
            shippingMethod:"Standard",
            shippingAdress:{city:"Ernakulam",country:"KERALA"},
            orderItems:[
                {
                    productID:1,
                    name:"Nike",
                    price:120,
                    quantity:1,
                    image:one
                },{
                    productID:1,
                    name:"Nike",
                    price:120,
                    quantity:1,
                    image:two
                },{
                    productID:1,
                    name:"Nike",
                    price:120,
                    quantity:1,
                    image:three
                },{
                    productID:1,
                    name:"Nike",
                    price:120,
                    quantity:1,
                    image:one
                }
            ]



        }
        Setorderdetails(MockOrderdetail)
    },[id])
  return (
    
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6'>Order Details</h2>
        {
            !orderDetails? <p>No order details found</p>:
            (
                <div className='p-4 sm:p-6 rounded-lg border'>
                    <div className='flex flex-col sm:flex-row justify-between mb-8'>
                        <div>
                            <h3 className='text-lg md:text-xl font-semibold '>
                                order ID:#{orderDetails._id}
                            </h3>
                            <p className='text-gray-600'>{new Date(orderDetails.CreateAt).toLocaleDateString()}</p>
                        </div>
<div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
    <span className={`${orderDetails.isPaid?"bg-green-100 text-green-700":"bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}  >{orderDetails.isPaid?"approved":"pending"}</span>
    <span className={`${orderDetails.isDelivered?"bg-green-100 text-green-700":"bg-yellow-100 text-yello-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}  >{orderDetails.isDelivered?"Delivered":"pending delivery"}</span>

</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>Payment Info</h4>
                            <p>Payment Method:{orderDetails.paymentMethod}</p>
                            <p>Status:{orderDetails.isPaid?"Paid":"Unpaid"}</p>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>Shipping Info</h4>
                            <p>Shipping Method:{orderDetails.shippingMethod}</p>
                            <p>Status:{orderDetails.shippingMethod}</p>
                        </div><div>
                            <h4 className='text-lg font-semibold mb-2'>Payment Info</h4>
                            <p>shipping Method:{orderDetails.paymentMethod}</p>
                            <p>Adress:{" "}{orderDetails.shippingAdress.city},{orderDetails.shippingAdress.country}</p>
                        </div>

                    </div>
                    <div className="overflow-x-auto">
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <table className='w-full text-gray-600 mb-4'>
                            <thead className='bg-gray-100'>
      <tr>
                                  <th className='py-2 px-4'>Name</th>
                                <th className='py-2 px-4'>Unit Price</th>

                                <th className='py-2 px-4'>Quantity</th>
                                <th className='py-2 px-4'>Total</th>
      </tr>

                            </thead>
                            <tbody>
                                {
                                    orderDetails.orderItems.map((data,ind)=>(
                                        <tr key={ind}  className='border-b'>
                                            <td className='py-2 px-4 flex items-center'>
                                                <img src={data.image} alt="" className='w-12 h-12 object-cover rounded-lg mr-4'/>
                                                <Link to={`/product/${data.productID}`} className="text-blue-500 hover:underline">{data.name}</Link>
                                            </td>
                                            <td>{data.price}</td>
                                            <td>{data.quantity}</td>
                                            <td>{data.price*data.quantity}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>

                    </div>
                    {
                        <Link className='text-blue-500 hover:underline' to="/my-order">
                            Back to my orders
                        </Link>
                    }
                </div>
            )
        }
      
    </div>
  )
}

export default OrderListitems
