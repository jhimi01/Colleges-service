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
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CollegesDetails from './pages/CollegeDetails/CollegesDetails.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Colleges from './pages/Colleges/Colleges.jsx';
import Login from './pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignUp from './pages/SingUp/SignUp.jsx';
import ProfilePage from './ProfilePage/ProfilePage.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import Admission from './pages/Admission/Admission.jsx';
import MyCollege from './pages/MyCollege/MyCollege.jsx';

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
        path:'/colleges',
        element: <Colleges></Colleges>
      },
      {
        path:'/collegedetails/:id',
        element: <PrivateRoute><CollegesDetails></CollegesDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://college-servic-server.vercel.app/collegedetails/${params.id}`)
      },
      {
        path:'/admission',
        element: <Admission></Admission>
      },
      {
        path:'/mycollege',
        element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/profile',
        element: <ProfilePage></ProfilePage>
      },
      {
        path:'/signup',
        // element: <p>hello</p>
        element: <SignUp></SignUp>
      },
      {path: '*', element: <ErrorPage></ErrorPage>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
    </QueryClientProvider> 
  </AuthProvider>
  </React.StrictMode>,
)
