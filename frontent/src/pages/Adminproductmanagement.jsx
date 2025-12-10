import React from 'react'
import { Link } from 'react-router';

const Adminproductmanagement = () => {

   const products = [
  {_id:1, name: "Printed Resort Shirt", price: "$29.99", sku: "PRNT-RES-004" },
  {_id:2, name: "Chino Pants", price: "$55", sku: "BW-005" },
  {_id:3, name: "Cargo Pants", price: "$50", sku: "BW-008" },
  {_id:4, name: "Long-Sleeve Thermal Tee", price: "$27.99", sku: "LST-THR-009" },
  {_id:5, name: "Pleated Mid Skirt", price: "$55", sku: "BW-W-004" },
  {_id:6, name: "Graphic Print Tee", price: "$30", sku: "TW-W-006" },
  {_id:7, name: "Ribbed Long-Sleeve Top", price: "$55", sku: "TW-W-007" },
  {_id:8, name: "Slim-Fit Stretch Shirt", price: "$29.99", sku: "SLIM-SH-002" },
  {_id:9, name: "Cargo Joggers", price: "$45", sku: "BW-002" },
  {_id:10, name: "Off-Shoulder Top", price: "$45", sku: "TW-W-004" },
  {_id:11, name: "Slim-Fit Easy-Iron Shirt", price: "$34.99", sku: "SLIM-EIR-005" },
  {_id:12, name: "Tapered Sweatpants", price: "$35", sku: "BW-003" },
];


const handleDelete=(id)=>{
    if(window.confirm("are you sure want to delete?")){
    console.log(id);
    }

    
}
  return (
   

    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Product Management</h1>

      <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">SKU</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.length>0?(products.map((product, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-3 px-6 font-medium text-gray-800">
                  {product.name}
                </td>
                <td className="py-3 px-6 text-gray-600">{product.price}</td>
                <td className="py-3 px-6 text-gray-600">{product.sku}</td>
                <td className="py-3 px-6 flex justify-center gap-3">
                  <Link to={`/admin/edit/${product._id}`} className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-3 py-1 rounded-lg transition">
                    Edit
                  </Link>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded-lg transition" onClick={()=>handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))):(
<tr aria-colspan={3}>No product found</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 


export default Adminproductmanagement
