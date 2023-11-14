import React from 'react'
import ReactDOM from 'react-dom'

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
import Error from './Component/Card/Error/Error';
const router = createBrowserRouter([
  {

    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/Donation.json')

      },
      {
        path: '/DonationDetails/:singelId',
        loader: () => fetch('/public/Donation.json'),
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '/donation',
        element: <MyDonations></MyDonations>,
        loader: () => fetch('/public/Donation.json')

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
