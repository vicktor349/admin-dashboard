import Image from 'next/image'
import React from 'react'
import SearchBar from './Search';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar } from '@mui/material';

const Navbar = () =>
{
    return (
        <div className="flex align-middle">
            <div>
                <Image src={"/images/logo.svg"} alt='logo' width={50} height={50} />
            </div>
            <h3>Dashboard</h3>
            <div>
                <SearchBar />
            </div>
            <div>
                <IoIosNotificationsOutline />
                <div>
                    <Avatar src="/images/avatar.jpg" alt="Avatar Image" />
                    <div>
                        <p>Segun Layomi</p>
                        <p>ayomidevictor349@gmail.com</p>
                    </div>
                    <MdKeyboardArrowDown />
                </div>
            </div>
        </div>
    )
}

export default Navbar