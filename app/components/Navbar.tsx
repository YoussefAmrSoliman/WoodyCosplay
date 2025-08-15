"use client"

import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-row items-center bg-gray-800/60 text-white p-4 
        sticky top-0 z-10 rounded-b-4xl backdrop-blur-md h-16">
            <div className="md:hidden absolute right-4">
                <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <h1 className="text-lg font-bold">Woody Cosplay</h1>

            <div className={`md:hidden fixed top-16 right-0 w-40
                bg-white shadow-lg rounded-3xl mt-2 z-50 flex flex-col
                ${isOpen ? 'translate-x-0 opacity-100': 'translate-x-full opacity-0'} 
                transition-all duration-300`}
                aria-hidden={!isOpen}>
                    
                <button className="py-2 px-4
                    text-gray-900 hover:bg-gray-100
                    cursor-pointer rounded-3xl">Home</button>
                <button className="py-2
                    px-4 text-gray-900 hover:bg-gray-100
                    cursor-pointer rounded-3xl">About</button>
                <button className="py-2 px-4
                    text-gray-900 hover:bg-gray-100
                    cursor-pointer rounded-3xl">Contact</button>
                {/* Add more buttons/pages as needed */}
            </div>

            <div className="hidden md:flex flex-row ml-auto space-x-4">
                <button className="py-2 px-4 text-gray-100 hover:bg-gray-900 cursor-pointer rounded-3xl">Home</button>
                <button className="py-2 px-4 text-gray-100 hover:bg-gray-900 cursor-pointer rounded-3xl">About</button>
                <button className="py-2 px-4 text-gray-100 hover:bg-gray-900 cursor-pointer rounded-3xl">Contact</button>
                {/* Add more buttons/pages as needed */}
            </div>
        </nav>
    );
};

export default Navbar;
