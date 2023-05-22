import React from 'react'

interface Props {
    onClick: () => void;
    isOpen: boolean;
}

export default function HamburgerMenu({onClick, isOpen}: Props) {
    const hamburgerLine = `h-0.5 my-[0.5em] rounded-full transition ease transform duration-300 bg-navy dark:bg-green`;
    
    return (
        <button
            className={"flex md:hidden relative align-middle overflow-hidden h-[50px] w-[50px] items-center justify-center"}
            onClick={onClick}>
            <div>
                <div className={`${hamburgerLine} ${isOpen ? "rotate-45 translate-y-2 w-6" : "w-6"}`}/>
                <div className={`${hamburgerLine} ${isOpen ? "opacity-0 w-0" : "opacity-100 w-4"}`}/>
                <div className={`${hamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-100 w-6 flex" : "hidden"}`}/>
            </div>
        </button>
    )
}
