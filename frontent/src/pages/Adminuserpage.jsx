import React, { useState } from 'react'
import { toast } from 'sonner'

const Adminuserpage = () => {

const userData=[
    {
        _id:1,
        name:"suhail",
        email:"suh@gmail.com",
        role:"admin",
        actions:""

    },
        {
        _id:1,
        name:"suhail",
        email:"suh@gmail.com",
        role:"admin",
        actions:""

    },    {
        _id:1,
        name:"suhail",
        email:"suh@gmail.com",
        role:"admin",
        actions:""

    },    {
        _id:1,
        name:"suhail",
        email:"suh@gmail.com",
        role:"admin",
        actions:""

    },    {
        _id:1,
        name:"suhail",
        email:"suh@gmail.com",
        role:"admin",
        actions:""

    },
   
]
    const [form,Setform]=useState({
        name:"",
        email:"",
        password:"",
role:"customer"    })

const HandleRole=(id,role)=>{
    console.log(id,role);
    

}

const Handleform=(e)=>{
    e.preventDefault()
    const {name,value}=e.target;
    Setform({
        ...form,[name]:value
    })
}


const handleSubmit=(e)=>{
    Setform( {name:"",
        email:"",
        password:"",
role:"customer"})

}


const handleDelete=(id)=>{
    if(window.confirm("are you sure you want to delete this user?")){
        toast.warning("am deleting it")
    }
}
  return (
    <div className='px-5 md:px-7 w-full'>
        <h3 className='mb-4 mt-10 text-4xl font-bold'>User management</h3>

        <form className=' mt-10 ' onSubmit={handleSubmit}>
 <h3 className='mb-3 text-2xl font-semibold'>User management</h3>

 <label htmlFor="" className='text-gray-700 text-md'>Name</label>
 
 <input type="text" name='name' value={form.name} onChange={Handleform} className='w-full py-3 px-2 border mb-7 border-black/30 rounded-md' />
  <label htmlFor="" className='text-gray-700 text-md'>Email</label>
 
 <input type="email" name='email' value={form.email} onChange={Handleform} className='w-full py-3 px-2 border mb-7 border-black/30 rounded-md' />
  <label htmlFor=""  className='text-gray-700 text-md'>Password</label>
 
 <input type="password" name='password' value={form.password} onChange={Handleform} className='w-full py-3 px-2 border mb-7 border-black/30 rounded-md' />

 <label htmlFor="" className='text-gray-700 text-md'>Role</label>
 

    
        <select name="role" value={form.role} onChange={Handleform} className='w-full py-3 px-2 border mb-7 border-black/30 rounded-md' id="">
        <option value="customer">Customer</option>
        <option value="admin">
            admin
        </option>
        </select>
    

 <button type='submit' className='bg-green-500 py-2 rounded-lg px-4 text-white hover:bg-green-800 '>ADD</button>

        </form>
       
      <div className='mx-auto px-6 mt-20 mb-10 md:px-24'>
<table className='w-full text-left text-gray-600  rounded-md'>
    <thead className='text-xs uppercase text-gray-600 bg-gray-400 rounded-md'>
        <tr>
            <th className='py-3 px-4'>Name</th>
            <th className='py-3 px-4'>email</th>
            <th className='py-3 px-4'>role</th>
            <th className='py-3 px-4'>actions</th>
        </tr>


    </thead>
    <tbody className='text-xs  text-gray-500 bg-gray-100'>
    {userData.map((data,ind)=>(
        <tr className='border-b border-black/10' key={ind} >
            <td className='py-3 px-4'>{data.name}</td>
            <td className='py-3 px-4'>{data.email}</td>
            <td className='py-3 px-4'>
                <select name="" onChange={(e)=>HandleRole(data._id,e.target.value)} value={form.role} id="" className='p-2 border rounded'>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
            </td>
            <td className='py-3 px-4'><button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600' onClick={()=>handleDelete(data._id)}>Delete</button></td>
        </tr>
    ))}
    </tbody>

</table>

      </div>


    </div>
  )
}

export default Adminuserpage
