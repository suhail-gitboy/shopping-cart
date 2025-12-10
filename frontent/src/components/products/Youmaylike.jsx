

import { Link } from 'react-router'
const Youmaylike = ({Productarray}) => {
  return (
    <div className='py-5'>
      <h3 className='text-center text-3xl font-semibold py-10'>you may like it</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
       
       {Productarray.slice(0,4).map((data,ind)=>(
         <Link to={`/productdetail/${data.id}`}>
         <div className='rounded-lg relative h-90'>
            <img src={data.images[0].url} alt="" className='rounded-lg w-full h-full' />
            <div className='py-3 absolute bottom-0 left-0 right-0  pl-3 text-sm font-bold backdrop-blur-md text-white'>{data.name}</div>
            <p className='py-3   ml-4 text-sm font-bold backdrop-blur-md text-black'>${data.price}</p>

        </div>
         </Link>
       ))}
      </div>
    </div>
  )
}

export default Youmaylike
