import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) =>
{
    return (
        <div className="max-w-screen-[1600px]">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout