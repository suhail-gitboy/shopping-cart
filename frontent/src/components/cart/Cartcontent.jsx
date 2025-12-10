import React from 'react'
import {FaDownload,FaTrash} from "react-icons/fa"

const products=[
    {
        productId:1,
        name:"T-shirt"
        ,size:"M",
        quantity:1,
        color:"Red",
        price:"350",
        image:"https://picsum.photos/200?random=1"

    },{
        productId:2,
        name:"Jeans"
        ,size:"L",
        quantity:1,
        color:"Red",
        price:"350",
        image:"https://picsum.photos/200?random=2"

    }

]

const Cartcontent = () => {
  return (
    <div>
        {
            products.map((data,ind)=>(
                <div key={ind} className='flex items-start justify-between py-4 border-b'>
<div className='flex items-start'>
    <img src={data.image} alt=""  className='w-20 h-24 object-cover mr-4 rounded'/>

<div>
    <h3>{data.name}</h3>
    <p className='text-sm text-gray-500'>size:{data.size} | color:{data.color}</p>
    <div className='flex items-center mt-2'>
<button className='border rounded px-1 py-1 text-xl font-medium'>-</button>
<span className='mx-4'>{data.quantity.toFixed()}</span>
<button className='border rounded px-1 py-1 text-xl font-medium'>+</button>
    </div>
    
</div></div>
<div>
    <p>${data.price}</p>
    <button>
        <FaTrash className="h-4 w-4 mt-2 text-red-600"/>
    </button>
</div>

                </div>
               
            ))
        }
      
    </div>
  )
}

export default Cartcontent
