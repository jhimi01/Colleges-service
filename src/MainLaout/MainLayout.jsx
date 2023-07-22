import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../component/Navigationbar/Navigationbar';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
    return (
        <>
         <Navigationbar></Navigationbar>
         <Outlet></Outlet>   
         <Footer></Footer>
        </>
    );
};

export default MainLayout;