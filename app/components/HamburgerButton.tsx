"use client";

import { useEffect, useState } from "react";

interface HamburgerButtonProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerButtonProps) => { 
    const [hamloaded, setHamLoaded] = useState(false);

    useEffect(() => {
        setHamLoaded(true);
    }, []);

    return(
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-10 h-10 flex
            flex-col justify-between items-center group cursor-pointer
            ${hamloaded ? 'translate-x-0' : 'translate-x-12'}
            transition-all duration-1000 hover:bg-gray-900 p-2 rounded`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <span className={`block h-1 w-full
                bg-gray-300 rounded transition-transform
                ease-in-out duration-300
                 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span className={`block h-1 w-full
                bg-gray-300 rounded transition-all
                ease-in-out duration-500
                 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span className={`block h-1 w-full
                bg-gray-300 rounded transition-transform
                ease-in-out duration-300
                 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}
            />
        </button>
    );
}

export default HamburgerButton;