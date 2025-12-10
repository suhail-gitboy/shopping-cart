import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
const Sortproduct = () => {

const navigate=useNavigate();
    const [SearchParams,setSearchParams]=useSearchParams()
    const [filter,setFilters]=useState({
        category:"",
        gender:"",
        color:"",
        size:[],
        material:[],
        brand:[],
        minPrice:0,
        maxPrice:100

    })

    const [pricerange,Setpricerange]=useState([0,100])
    const categories=["top wears","bottom wears"]
    const colors=[
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "gray",
        "white"
        ,"pink",
        "beige",
        "navy"

    ]

    const sizes=["XS","S","M","L","XL","XXL"]
    const materials=[

        "cotton",
        "wool",
        "denim",
        "polyster",
        "silk",
        "linen",
        "fleece"
    ]
    const brands=[
        "adidas",
        "nike",
        "baggy",
        "louise phillipe",
        "reebok"
    ]

    const genders=["men","woman"]

useEffect(()=>{
    console.log("as searchparams",SearchParams);
    
    const params=Object.fromEntries([...SearchParams])
    console.log("after searchparams",params);
    


    setFilters({
        category:params.categories || "",
        gender:params.gender || "",
        color:params.color || "",
        size:params.size? params.size.split(","):[],
        material:params.material? params.material.split(","):[],
        brand:params.brand? params.brand.split(","):[],
        minPrice:params.minPrice||0,
        maxPrice:params.maxPrice || 100,


        



    })
    Setpricerange([0,params.maxPrice||100])
},[SearchParams])


const HandleChange=(e)=>{

    const {name,checked,value,type}=e.target;
    console.log({name,checked,value,type});

    let newFilter={...filter};

    if(type==="checkbox"){

        if(checked){
            newFilter[name]=[...(newFilter[name]|| []),value]
        }else{
            newFilter[name]=newFilter[name].filter((items)=>items!==value)
        }
    }else{
        newFilter[name]=value
    }
    setFilters(newFilter)
    UpdateURlparams(newFilter)
    
     console.log(newFilter);

    
}



 const UpdateURlparams=(newFilter)=>{
        const params=new URLSearchParams();
    Object.keys(newFilter).forEach((key)=>{
        if(Array.isArray(newFilter[key]) && newFilter[key].length>0){
            params.append(key,newFilter[key].join(","))
        }else if(newFilter[key]){

            params.append(key,newFilter[key])

        }
    })
    setSearchParams(params);
    navigate(`?${params.toString()}`)
     }

     const HandlepriceRange=(e)=>{
        const newPrice=e.target.value;
        Setpricerange([0,newPrice])
        const newFilters={...filter,minPrice:0,maxPrice:newPrice}
        setFilters(filter)
        UpdateURlparams(newFilters)
     }

  return (
    <div className='p-4'>
    <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>
{/*category*/}

<div className='mb-6'>
    <label htmlFor="" className='block text-gray-600 font-medium mb-2'>Category</label>
    {categories.map((data)=>(
<div className='flex items-center mb-1' key={data} >
    <input type="radio"  name='category' value={data} onChange={HandleChange} checked={filter.category===data} className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
    <span className='text-gray-700'>{data}</span>
</div>
    ))}

</div>

{/*gender*/}
<div className='mb-6'>
    <label htmlFor="" className='block text-gray-600 font-medium mb-2'>Gender</label>
    {genders.map((data)=>(
<div className='flex items-center mb-1' key={data} >
    <input type="radio" value={data} onChange={HandleChange} checked={filter.gender===data} name='gender' className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
    <span className='text-gray-700'>{data}</span>
</div>
    ))}

</div>
{/*color*/}

<div className='mb-6'>
    <label className='block font-medium mb-2' htmlFor="">Color</label>
    <div className="flex flex-wrap gap-2">
        {
            colors.map((data)=>(
                <button name='color' value={data} onClick={HandleChange} className={`w-8 h-8 border border-gray-300 cursor-pointer transition hover:scale-105 ${filter.color===data?"ring-2 ring-blue-500":""} rounded-full`} style={{backgroundColor:data}}></button>
            ))
        }

    </div>
</div>
{/*size*/}

<div className='mb-6'>
    <label htmlFor="" className='block text-gray-600 font-medium mb-2'>Size</label>
    {
        sizes.map((size)=>(
            <div className='flex items-center mb-1'>
                <input type="checkbox" name='size' value={size} onChange={HandleChange} checked={filter.size.includes(size)} className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-800 border-gray-300' />
                <span className='text-gray-700'>{size}</span>

            </div>
        ))
    }

</div>

<div className='mb-6'>
    <label htmlFor="" className='block text-gray-600 font-medium mb-2'>Brand</label>
    {
        brands.map((size)=>(
            <div className='flex items-center mb-1'>
                <input type="checkbox" name='brand' value={size} onChange={HandleChange} checked={filter.brand.includes(size)} className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-800 border-gray-300' />
                <span className='text-gray-700'>{size}</span>

            </div>
        ))
    }

</div>





<div className='mb-6'>
    <label htmlFor="" className='block text-gray-600 font-medium mb-2'>Material</label>
    {
        materials.map((size)=>(
            <div className='flex items-center mb-1'>
                <input type="checkbox" name='material' value={size} onChange={HandleChange} checked={filter.material.includes(size)} className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-800 border-gray-300' />
                <span className='text-gray-700'>{size}</span>

            </div>
        ))
    }

</div>

<div className="mb-8">
    <label htmlFor="" className='block text-gray-600 font-medium mb-2'>Price range</label>
    <input type="range" name='priceRange' min={0} max={150} value={pricerange[1]} onChange={HandlepriceRange}  className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer' />
    <div className="flex justify-between text-gray-600 mt-2">
        <span>$0</span>
        <span>${pricerange[1]}</span>

    </div>
</div>

    </div>
  )
}

export default Sortproduct
