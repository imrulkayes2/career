import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);