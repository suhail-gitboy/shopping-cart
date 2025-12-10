import React, { useState } from 'react'
import wm from "./../assets/images/woman6.webp"
import {Link } from "react-router-dom"
const LoginPage = () => {

    const [login,Setlogin]=useState({
        email:"",
        password:""
    })

console.log(login);

  return (
    <div className='md:flex'>
          <div className="w-full md:w-1/2 flex justify-center items-start">
          <div className="max-w-sm w-full py-14 p-8">
            <h2 className="text-2xl font-semibold mb-2 text-center">Hey there! 👋</h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Enter your username and password to login
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={login.email}
                  onChange={(e)=>Setlogin({login,email:e.target.value})}
                  placeholder="Enter your email address"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">Password</label>
                <input
                  type="password"
                  value={login.password}
                  onChange={(e)=>Setlogin({login,password:e.target.value})}
                  placeholder="Enter your password"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
              >
                Sign In
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-gray-900 font-medium hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={wm}
            alt="Fashion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

   
  )
}

export default LoginPage
