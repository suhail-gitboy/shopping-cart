import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router'
import { toast } from 'sonner';
import { Productarray } from '../common/Commondata';




const Mainproductdetail = () => {
    const {id}=useParams()






    

const [findeddata,Setfinddata]=useState()
  const [imagechange,Setimagechange]=useState("");
  const [selectdsize,Setselectedsize]=useState("");
  const [color,Setcolor]=useState("");
  const [buttondisable,Setbuttondisabled]=useState(false)

      useEffect(()=>{
          if (!id || !Productarray || Productarray.length === 0) return; 
    const filtered=Productarray.find((data,ind)=>data.id===parseInt(id))
    console.log(imagechange);
    Setfinddata(filtered)
    
  },[id,Productarray])

 
  

   useEffect(()=>{

       
    
     if(findeddata?.images?.length>0){
       Setimagechange(findeddata.images[0]?.url)
     }
  },[findeddata])




const handleAddtocart=()=>{
  if(!selectdsize || !color ){
    
    toast.error("Please select a size and color befor add to cart",{
      duration:1000,
    })
   
  }

  Setbuttondisabled(true)
  setTimeout(() => {
    toast.success('product added to cart',{
      duration:1000

    })
    Setbuttondisabled(false)
    
  }, 2000);
}


  return (
    <div className='p-6'>
      <div className='max-w-6xl mx-auto bg-gray-100 p-8 rounded-lg'>
<div className='flex flex-col md:flex-row'>
  <div className='hidden md:flex flex-col space-y-4 mr-6'>
{
  findeddata?.images?.map((image,ind)=>(
    <img key={ind} src={image.url} className={`w-20 h-20 ${imagechange===image.url?"border border-gray-400":""} object-cover rounded-lg cursor-pointer border`} onClick={()=>Setimagechange(image.url)} />
  ))
}
  </div>
  <div className='md:w-1/2'>
  <div className='mb-4'>
    <img src={imagechange} alt="" className='w-full h-70  md:h-160 object-cover rounded-lg' />

  </div>

  </div>
  {/*for mobile*/}
<div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
{
  findeddata?.images?.map((image,ind)=>(
    <img key={ind} src={image.url} className={`w-20 h-20 object-cover rounded-lg ${imagechange===image.url?"border-3 border-white":""} cursor-pointer border`} onClick={()=>Setimagechange(image.url)} />
  ))
}
</div>
<div className='md:w-1/3 md:ml-10'>
<h1 className='text-2xl md:text-3xl font-semibold mb-2'>
  {findeddata?.name}
</h1>
<p className="text-lg text-gray-600 mb-1 line-through">
  {findeddata?.OriginalPRice&& `${findeddata?.OriginalPRice}`}
</p>
<p className='text-xl text-gray-500 mb-2'>${findeddata?.price}</p>
<p className='text-gray-600 mb-4'>
  {findeddata?.description}

</p>
<div className='mb-4'>
  <p className='text-gray-700'>Colors:</p>
  <div className="flex gap-2 mt-2">
    {
      findeddata?.colors.map((data)=>(
        <button key={data} className={`w-8 h-8 rounded-full ${color===data?"border-4 border-white":""} border brightness-50`} onClick={()=>Setcolor(data)} style={{backgroundColor:data,
        
        }}></button>
      ))
    }

  </div>
</div>
<div className="mb-4">
  <p className='text-gray-700'>Size:</p>
  <div className='flex gap-2 mt-2'>
    {
      findeddata?.sizes?.map((data=>(
        <button key={data} className={`px-4 ${selectdsize===data?"bg-black text-white":""} py-2 rounded-full  border`} onClick={()=>Setselectedsize(data)}>{data}</button>
      )))
    }

  </div>
</div>
<div className='mb-6'>
  <p className="text-gray-700">
    Quantity:
  </p>
  <div className="flex items-center space-x-4 mt-2">
    <button className='px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
    <span>1</span>
    <button className='px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
  </div>

</div>
<button disabled={buttondisable} className={`bg-black text-white py-2 px-6 rounded hover:bg-black/70 w-full mb-4  ${buttondisable?"bg-black/70":""} transition-colors duration-150`} onClick={handleAddtocart}>{buttondisable?"loading..":"ADD TO CART"}</button>
<div className='mt-10 text-gray-700'>
<h3 className='text-xl font-bold mb-4'>Charecteristics:</h3>

<table className='w-full text-left text-sm text-gray-600'>
  <tbody>
    <tr>
      <td className='py-1'>Brand</td>
      <td className='py-1'>{findeddata?.brand}</td>
    </tr>
     <tr>
      <td className='py-1'>Material</td>
      <td className='py-1'>{findeddata?.material}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
      </div>
      
    </div>
  )
}

export default Mainproductdetail
