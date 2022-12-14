import React from 'react'
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";

type Props = {}

export default function DarkModeToggle({}: Props) {
    const {theme, setTheme} = useTheme();

    return (
        <button className="reactive-socials w-6 h-6">
            {theme === 'light' ? <MoonIcon onClick={() => {
                console.log("Switching to dark mode");
                setTheme('dark')
            }}/> : <SunIcon onClick={() => {
                console.log("Switching to light mode");
                setTheme('light')
            }}/>}
        </button>
    )
}
