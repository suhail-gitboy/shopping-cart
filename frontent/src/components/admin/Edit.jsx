import React, { useState } from 'react'

const Edit = () => {

    const [product,SetProduct]=useState({

        name:"",
        price:"",
        description:"",
        stock:"",
        sku:"",
        sizes:["m","l","s"],
        colors:["red","blue","green"],
        material:"",
        gender:"",
        images:[
          {
            url:""
          },{
            url:""
          }
        ]



    })
    const Handleimageupload=(e)=>{
      const file=e.target.files[0];
      console.log(file);
      

    }


const handleChange=(e)=>{
    const {name,value}=e.target;
    SetProduct({...product,[name]:value})
}

const Handlesubmit=(e)=>{
  e.preventDefault();
  console.log(product);
  
}
   
  return (
    <div>
      
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Update Product
        </h1>

        <form  className="space-y-5" onSubmit={Handlesubmit}>
          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter product description..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="e.g. 39.99"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Count in Stock */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Count in Stock
            </label>
            <input
              type="text"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              placeholder="e.g. 20"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">SKU</label>
            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              placeholder="e.g. OX-SH-001"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Sizes (comma-separated)
            </label>
            <input
              type="text"
              name="sizes"
              value={product.sizes.join(",")}
              onChange={handleChange}
              placeholder="e.g. S, M, L, XL"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Colors */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Colors (comma-separated)
            </label>
            <input
              type="text"
              name="colors"
              value={product.colors.join(",")}
              onChange={handleChange}
              placeholder="e.g. Red, Blue, Yellow"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={Handleimageupload}
             
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50"
            />

   <div className='flex space-x-2'>
             {/* Preview Image */}
            {product?.images.map((data)=>(
              <div className="mt-3">
                <img
                  src={data.url}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              </div>
            )) }
   </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Edit
