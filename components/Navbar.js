import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SearchBar from './Search';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Avatar } from '@mui/material';
import Link from 'next/link';

const Navbar = () =>
{
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() =>
    {
        const intervalId = setInterval(() =>
        {
            setCurrentDate(new Date());
        }, 1000); // Update every second

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    const formattedDate = currentDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long', // 'short' or 'long' for abbreviated or full month name
        day: 'numeric'
    });
    return (
        <div className="border-b w-full">
            <div className='flex items-center ssm:mx-2 sm:mx-6 h-16 top-0 z-20 bg-background/95 backdrop-blur sticky'>
                <div>
                    <Image src={"/images/logo.svg"} alt='logo' width={50} height={50} />
                </div>
                <Link href="/" className='font-semibold text-xl ml-12 ssm:hidden lg:inline-block'>Dashboard</Link>
                <div className='ml-auto'>
                    <SearchBar />
                </div>
                <div className='flex items-center ml-auto'>
                    <p className="items-center cursor-pointer font-semibold rounded-md mr-4 ssm:hidden md:flex hover:bg-hoverColor">
                        <FaRegCalendarAlt className='mr-2 pl-3 text-2xl' />
                        <span className='py-2 pr-3'>
                            {formattedDate}
                        </span>
                    </p>
                    <div className='border rounded-[50%] ssm:mx-1 sm:mr-5 hover:bg-hoverColor'>
                        <IoIosNotificationsOutline className='text-4xl p-2 cursor-pointer ' />
                    </div>
                    <div className='flex items-center cursor-pointer border rounded-3xl py-1 text-[12px] px-2 hover:bg-hoverColor'>
                        <Avatar src="/images/avatar.jpg" alt="Avatar Image" />
                        <div className="pl-2 ssm:hidden lg:inline-block">
                            <p className='font-bold text-center'>Segun Layomi</p>
                            <p>victor349@gmail.com</p>
                        </div>
                        <MdKeyboardArrowDown className='text-2xl pl-2 ssm:hidden lg:inline-block' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar