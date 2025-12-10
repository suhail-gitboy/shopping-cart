import React from 'react'
import { useSearchParams } from 'react-router'

const Filterbar = () => {
const [searchparams,setSearchParams]=useSearchParams()

const handlechange=(e)=>{

  const Sortby=e.target.value;

  searchparams.set("Sortby",Sortby)
setSearchParams(searchparams)


}


  return (
    <div className='mb-4 flex items-center justify-end p-3 mr-6'>
    <select name="" id="sort" value={searchparams.get("Sortby")} onChange={handlechange} className='border rounded-md focus:outline-none p-2'>
      <option value="">Default</option>
      <option value="priceAsc">Price:Low to High</option>
      <option value="priceDesc">Price:High to Low</option>
      <option value="popularity">Population</option>
    </select>
    </div>
  )
}

export default Filterbar
