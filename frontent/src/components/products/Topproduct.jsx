
import {Link} from "react-router"


const Topproduct = ({Womanproduct}) => {
  return (
    <div>
       <div className='py-5'>
            <h3 className='text-center text-3xl font-semibold py-10'>Top wears for woman</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {
            Womanproduct.map((data,ind)=>(
              <Link to={`/productdetail/${data.id}`}>
                <div className='rounded-lg transform transition-transform duration-100 hover:scale-105'>
                  <img src={data.images[0].url} alt="" className='rounded-lg w-full h-60' />
                  <h3 className='text-gray-400 text-sm  py-3'>${data.price}</h3>
      
              </div>
              </Link>
                  
            ))
          }
               
      
            </div>
          </div>
    </div>
  )
}

export default Topproduct
