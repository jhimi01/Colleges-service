import React from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
         <Navigationbar></Navigationbar>
         <Outlet></Outlet>   
        </>
    );
};

export default MainLayout;