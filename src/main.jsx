import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './MainLaout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CollegesDetails from './pages/CollegeDetails/CollegesDetails.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

// Create a client
const queryClient = new QueryClient()




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/collegedetails/:id',
        element: <CollegesDetails></CollegesDetails>,
        loader: ({params})=> fetch(`http://localhost:3000/collegedetails/${params.id}`)
      },
      {path: '*', element: <ErrorPage></ErrorPage>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
    </QueryClientProvider>
     
  </React.StrictMode>,
)
