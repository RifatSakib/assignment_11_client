import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Error from '../Pages/Shared/Error/Error';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ],
  },







    // {
    //   path: 'updateItem/:id',
    //   element: <UpdateItems></UpdateItems>,
    //   loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
    // },

    
  

    






    

  


 


  {
    path: "*",
    element: <Error></Error>,
  },


]);
