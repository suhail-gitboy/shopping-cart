import React, { useEffect, useState } from 'react'
import { data } from 'react-router'
import { toast } from 'sonner';

const Selelectedproduct={
  name:"Freak Jacket",
  price:120,
  OriginalPRice:140,
  description:"This is stylish JAckect perfect for any oncations",
  brand:"Adidas",
  sizes:["S","M","L","XL"],
  material:"polyster",
  colors:["red","blue","green","white"],
  images:[
    {
url:"https://assets.ajio.com/medias/sys_master/root/20221213/u9f0/6398b737aeb269659ce7e6a2/-473Wx593H-469211648-black-MODEL.jpg"

    },
    {
      url:"https://img01.ztat.net/article/spp-media-p1/ec1fda163a40425f97eef7d62772ff65/9d28ce7d4a8e40f5a3c140a32fcab41f.jpg?imwidth=762https://img01.ztat.net/article/spp-media-p1/ec1fda163a40425f97eef7d62772ff65/9d28ce7d4a8e40f5a3c140a32fcab41f.jpg?imwidth=762"
    }
  ]
}


const Bestseller = () => {

  const [imagechange,Setimagechange]=useState("");
  const [selectdsize,Setselectedsize]=useState("");
  const [color,Setcolor]=useState("");
  const [buttondisable,Setbuttondisabled]=useState(false)

  useEffect(()=>{
    if(Selelectedproduct.images.length>0){
      Setimagechange(Selelectedproduct.images[0].url)
    }
  },[])


const handleAddtocart=()=>{
  if(!selectdsize || !color ){
    
    toast.error("Please select a size and color befor add to cart",{
      duration:1000,
    })
    return;
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
  Selelectedproduct.images.map((image,ind)=>(
    <img key={ind} src={image.url} className={`w-20 h-20 ${imagechange===image.url?"border border-gray-400":""} object-cover rounded-lg cursor-pointer border`} onClick={()=>Setimagechange(image.url)} />
  ))
}
  </div>
  <div className='md:w-1/2'>
  <div className='mb-4'>
    <img src={imagechange} alt="" className='w-full h-100  md:h-170 object-cover rounded-lg' />

  </div>

  </div>
  {/*for mobile*/}
<div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
{
  Selelectedproduct.images.map((image,ind)=>(
    <img key={ind} src={image.url} className={`w-20 h-20 object-cover rounded-lg ${imagechange===image.url?"border-3 border-white":""} cursor-pointer border`} onClick={()=>Setimagechange(image.url)} />
  ))
}
</div>
<div className='md:w-1/3 md:ml-10'>
<h1 className='text-2xl md:text-3xl font-semibold mb-2'>
  {Selelectedproduct.name}
</h1>
<p className="text-lg text-gray-600 mb-1 line-through">
  {Selelectedproduct.OriginalPRice&& `${Selelectedproduct.OriginalPRice}`}
</p>
<p className='text-xl text-gray-500 mb-2'>${Selelectedproduct.price}</p>
<p className='text-gray-600 mb-4'>
  {Selelectedproduct.description}

</p>
<div className='mb-4'>
  <p className='text-gray-700'>Colors:</p>
  <div className="flex gap-2 mt-2">
    {
      Selelectedproduct.colors.map((data)=>(
        <button className={`w-8 h-8 rounded-full ${color===data?"border-4 border-white":""} border brightness-50`} onClick={()=>Setcolor(data)} style={{backgroundColor:data,
        
        }}></button>
      ))
    }

  </div>
</div>
<div className="mb-4">
  <p className='text-gray-700'>Size:</p>
  <div className='flex gap-2 mt-2'>
    {
      Selelectedproduct.sizes.map((data=>(
        <button className={`px-4 ${selectdsize===data?"bg-black text-white":""} py-2 rounded-full  border`} onClick={()=>Setselectedsize(data)}>{data}</button>
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
      <td className='py-1'>{Selelectedproduct.brand}</td>
    </tr>
     <tr>
      <td className='py-1'>Material</td>
      <td className='py-1'>{Selelectedproduct.material}</td>
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

export default Bestseller
