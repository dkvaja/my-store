import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { MainLayoutWrapper } from './MainLayout.styles';
import Navbar from '../../containers/NavBar/index';
import SideBar from '../../containers/SideBar/index';
import { Drawer } from '@mui/material';
import Cart from '../../components/Cart/index';
import Footer from '../../containers/Footer/index';

const MainLayout = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

    const handleCart = (val: boolean) => {
        setIsCartOpen(val)
    }

    const handleSideBar = (val: boolean) => {
        setIsSideBarOpen(val)
    }

    return (
        <MainLayoutWrapper>
            <Navbar handleCart={handleCart} handleSideBar={handleSideBar} />
            <SideBar isOpen={isSideBarOpen} handleClose={() => setIsSideBarOpen(false)} />
            <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)} >
                <Cart cartItems={[]} removeFromCart={() => { }} />
            </Drawer>
            <Outlet />
            <Footer />
        </MainLayoutWrapper>
    )
}

export default MainLayout
