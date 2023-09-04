import React from 'react';
import Header from '../../cells/header/header';

import './layout.scss';

import { Outlet } from 'react-router-dom'
import Footer from '../../cells/footer/footer';


interface LayoutInter {
    children?: any,
}

const Layout: React.FC<LayoutInter> = ({ children }) => {

    return <div className='wrapper-layout'>
        <Header />

        <main className='child'>
            <Outlet />
        </main>

        <Footer />
    </div>

}

export default Layout;