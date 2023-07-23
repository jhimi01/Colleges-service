import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../component/Navigationbar/Navigationbar';
import Footer from '../component/Footer/Footer';
import ScrollTop from '../component/ScrollToTop/ScrollTop';


const MainLayout = () => {
    return (
        <>
        <div className='overflow-hidden'> 
         </div>
         <Navigationbar></Navigationbar>
        <Outlet></Outlet>  
         <ScrollTop></ScrollTop>
         <Footer></Footer>
        </>
    );
};

export default MainLayout;