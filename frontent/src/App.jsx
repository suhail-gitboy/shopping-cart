import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserLayout from './components/layoout/UserLayout'
import Home from './pages/Home'
import {Toaster} from "sonner";import LoginPage from './pages/LoginPage';
import Registerpage from './pages/Registerpage';
import Profile from './pages/Profile';
import ProductCollection from './pages/ProductCollection';
import Mainproductdetail from './components/products/MainproductDetail';
import Particularproduct from './components/products/Particularproduct';
import Checkout from './pages/Checkout';
import OrderDetails from './pages/OrderConfirmation';
import OrderListitems from './pages/OrderListitems';
import Myorder from './pages/Myorder';
import Adminlayout from './components/admin/Adminlayout';
import Adminhome from './pages/Adminhome';
import Adminuserpage from './pages/Adminuserpage';
import Adminproductmanagement from './pages/Adminproductmanagement';
import Edit from './components/admin/Edit';
import Adminordermanagement from './pages/Adminordermanagement';

;
const App = () => {

const router=createBrowserRouter([

// {user}
  {path:"/",element:<UserLayout/>,
    children:[
      {path:"/" ,element:<Home/>},
      {path:"/login",element:<LoginPage/>},
      {path:"/register",element:<Registerpage/>},
      {path:"/profile",element:<Profile/>},
      {path:"/shopping/:collection" , element:<ProductCollection/>},
      {path:"/productdetail/:id",element:<Particularproduct/>},
      {path:"/checkout",element:<Checkout/>},
      {path:"/order-confirm",element:<OrderDetails/>},
      {path:"/order-detail/:id",element:<OrderListitems/>},
      {path:"/my-order",element:<Myorder/>}
    ]
  },

  // admin
  {path:"/admin",element:<Adminlayout/>,
    children:[
      {  path:"/admin/home",element:<Adminhome/>}
      ,{
        path:"/admin/user",element:<Adminuserpage/>
      },
       ,{
        path:"/admin/product",element:<Adminproductmanagement/>
      },
      {
        path:"/admin/edit/:id",element:<Edit/>
      }
      ,{
        path:"/admin/order",element:<Adminordermanagement/>
      }

    ]
  
  }



])


  return( <>
  <RouterProvider router={router} />
          <Toaster position='top-center' />
  </>
  )
}

export default App
