import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () =>
{
    return (
        <div className="flex items-center border border-gray-300 p-2 rounded-3xl sm:w-80">
            <span className="text-gray-500 mr-2">
                <CiSearch />
            </span>
            <input
                type="text"
                placeholder="Search..."
                className="outline-none focus:outline-none w-full"
            />
        </div>
    );
};

export default SearchBar;
