import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Getstart from "../Components/Getstart";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Home from "../Components/Home/Home";
import AdminHome from "../Components/AdminHome";
import AddItem from "../Components/AddItem";



function router() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Getstart/>,
      },
      {
        path: "/Signup",
        element: <Signup/>,
      },
      {
          path: "/Signin",
          element: <Signin/>,
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/adminHome',
          element:<AdminHome/>
        },
        {
          path:'/adminItem',
          element:<AddItem/>
        }
       
    ]);
  
    return <RouterProvider router={router} />;
  }
  
  export default router;