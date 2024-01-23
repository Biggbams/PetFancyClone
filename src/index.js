import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Shop from './components/shop';
import Order from './components/order'
import ErrorPage from './components/Error404';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>
    
},
{
  path: "/shop",
  element: <Shop/>,
  errorElement:<ErrorPage/>

},

{
  path: "/order",
  element: <Order/>,
  errorElement:<ErrorPage/>

}
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

