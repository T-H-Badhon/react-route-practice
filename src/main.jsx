import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx';
import Friends from './components/Friends/Friends.jsx';
import Details from './components/Details/Details.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>hi, its react route</h1>,
//   },
//   {
//     path: 'me',
//     element: <h2>hi, i am Badhon</h2>
//   },
//   {
//     path: 'about',
//     element: <h3>its about page</h3>
//   },
//   {
//     path: 'contacts',
//     element: <h3>its contacts page</h3>
//   },
//   {
//     path: 'login',
//     element: <h3>its login page</h3>
//   }
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element: <div><Header></Header>
      <Outlet></Outlet></div>,
    children:[
      {
            path: '/',
            element: <h2>hi, i am Badhon</h2>
          },
          {
            path: '/friends',
            element: <Friends></Friends>,
            loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
          },
          {
            path:'friends/:k',
            element:<Details></Details>,
            loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.k}`)
          },
          {
            path: 'about',
            element: <h3>its about page</h3>
          },
          {
            path: 'contacts',
            element: <h3>its contacts page</h3>
          },
          {
            path: 'login',
            element: <h3>its login page</h3>
          }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
)
