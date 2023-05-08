import React from 'react'

import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useTheme} from "next-themes";

type Props = {
    className: string
}

export default function DarkModeToggle({className}: Props) {
    const iconStyle = `reactive-socials ${className}`
    const {theme, setTheme} = useTheme();

    return (
        <button className="relative inline-block align-middle overflow-hidden h-[50px] w-[50px] flex items-center justify-center align-middle">
            {theme === 'light'
                ? <MoonIcon className={iconStyle} onClick={() => {setTheme('dark')}}/>
                : <SunIcon className={iconStyle} onClick={() => {setTheme('light')}}/>
            }
        </button>
    )
}
