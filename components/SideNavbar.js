import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { IoIosStats } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbBoxSeam } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { BsExclamationOctagon } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";

const SideNavbar = () =>
{
    return (
        <div className="w-20 border-r text-2xl h-full text-[#a09f9c] fixed ssm:hidden md:inline-block">
            <div className='mt-2'>
                <CgMenuGridR className='mx-auto rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
                <IoIosStats className='mx-auto rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
                <HiOutlineUsers className='mx-auto rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
                <TbBoxSeam className='mx-auto rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
                <LuBadgePercent className='mx-auto rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
                <BsExclamationOctagon className='mx-auto rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
            </div>
            <div className='absolute bottom-20'>
                <LuSettings className='ml-2 rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
                <RiLogoutCircleLine className='ml-2 rounded-md hover:bg-hoverColor w-16 py-4 text-[3.5rem] hover:cursor-pointer' />
            </div>
        </div>
    )
}

export default SideNavbar