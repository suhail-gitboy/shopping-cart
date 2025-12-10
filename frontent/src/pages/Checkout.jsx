import React, { useState } from 'react'

const Checkout = () => {

const [checkout,Setchekout]=useState(null)
    const [shippingAdress,SetshippingAdress]=useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        pinCode:"",
        country:"",
        phone:""

    })
var cart
    const Handlecheckout=(e)=>{
        e.preventDefault()
        Setchekout(true)
    } 
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
      <div className="bg-white rounded-lg p-6 ">
        <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
        <form action="">
            <h3 className='text-lg mb-4'>Contact Details</h3>
            <div className='mb-4 '>
                <label htmlFor="" className='block text-gray-700'>Email</label>
                <input type="text" className='w-full p-2 border rounded ' disabled value="user@gmail.com"  />

            </div>
            <h3 className='text-lg mb-4'>Delivery</h3>
            <div className='mb-4 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="" className='block text-gray-700'>First Name</label>
                    <input type="text" className='w-full p-2 border rounded ' required  value={shippingAdress.firstName} onChange={(e)=>SetshippingAdress({...shippingAdress,firstName:e.target.value})}/>
                </div>

                   <div>
                    <label htmlFor="" className='block text-gray-700'>First Name</label>
                    <input type="text" className='w-full p-2 border rounded ' required  value={shippingAdress.lastName} onChange={(e)=>SetshippingAdress({...shippingAdress,lastName:e.target.value})}/>
                </div>
            </div>
            <div className='mb-4 '>
                <label htmlFor="" className='block text-gray-700'>Address</label>
                <input type="text" className='w-full p-2 border rounded' required value={shippingAdress.address} onChange={(e)=>SetshippingAdress({...shippingAdress,address:e.target.value})} />

            </div>
            <div className="grid grid-cols-2 mb-4 gap-4">
                   <div>
                    <label htmlFor="" className='block text-gray-700'>City</label>
                    <input type="text" className='w-full p-2 border rounded ' required  value={shippingAdress.city} onChange={(e)=>SetshippingAdress({...shippingAdress,city:e.target.value})}/>
                </div>

                   <div>
                    <label htmlFor="" className='block text-gray-700'>Pin code</label>
                    <input type="text" className='w-full p-2 border rounded ' required  value={shippingAdress.pinCode} onChange={(e)=>SetshippingAdress({...shippingAdress,pinCode:e.target.value})}/>
                </div>
            </div>
                    <div className='mb-4 '>
                <label htmlFor="" className='block text-gray-700'>Country</label>
                <input type="text" className='w-full p-2 border rounded' required value={shippingAdress.country} onChange={(e)=>SetshippingAdress({...shippingAdress,country:e.target.value})} />

            </div>
               <div className='mb-4 '>
                <label htmlFor="" className='block text-gray-700'>Phone</label>
                <input type="text" className='w-full p-2 border rounded' required value={shippingAdress.phone} onChange={(e)=>SetshippingAdress({...shippingAdress,phone:e.target.value})} />

            </div>
           
            <div className="mt-6">
{!checkout?(
    <button className='p-2 w-full bg-black hover:bg-black/50 transition-colors duration-100 ease-in rounded-md text-white' type='submit' onClick={Handlecheckout}>
        Continue to payment
    </button>
):(
    <div>
        <h3 className='text-lg mb-4 '>Pay with paypal</h3>
    </div>
)}
            </div>
        </form>

      </div>
      <div className="p-6 rounded-lg bg-gray-50">
<h3 className='text-lg mb-4 text-center'>Order Summary</h3>
<div className='border-t py-4 mb-4'>
    {
        cart?.product?.map((product,index)=>(
            <div key={index} className='flex items-start justify-between py-2 border-b'>

                <div className='flex items-start'>
                    <img src={product?.image} alt="" className='w-20 h-24 object-cover mr-4' />
                    <div>
                        <h3 className='text-md '>{product?.name}</h3>
                        <p className='text-gray-500 '>Size:{product.size}</p>
                        <p className='text-gray-500 '>Color:{product.color}</p>

                    </div>
                    <p className="text-xl">${product.price?.toLocaleString()}</p>
                </div>
                <div className='flex justify-between  items-center text-lg mb-4'>
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        ))
    }

</div>
    <div className='flex justify-between  items-center text-lg mb-4'>
                    <p>Subtotal</p>
                    <p>${cart?.totalPrice?.toLocaleString()}</p>
                </div>
                <div className='flex justify-between items-center text-lg'>

                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>total</p>
                    <p>${cart?.totalPrice?.toLocaleString()}</p>

                </div>
      </div>
    </div>
  )
}

export default Checkout
