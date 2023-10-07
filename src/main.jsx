import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import DonationDetails from './Component/DonationDetails/DonationDetails';
import MyDonations from './Component/MyDonations/MyDonations';

import Statistics from './Component/Statistics/Statistics';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[

{
  path: "/home",
  loader:()=>fetch('https://api.mocki.io/v2/a49ed43d'),
  element: <Home></Home>
},
{
  path: "/DonationDetails/:id",
loader:({params})=>fetch(`https://api.mocki.io/v2/a49ed43d/${params.id}`),
  element: <DonationDetails></DonationDetails>
},
{
  path: "/donation",
  loader:()=>fetch('https://api.mocki.io/v2/a49ed43d'),
  element: <MyDonations></MyDonations>
},
{
  path: "/statistics",
  element:<Statistics></Statistics>
}
    ]
     
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
