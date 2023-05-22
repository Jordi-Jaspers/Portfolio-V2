import Logo from "@components/icon/Logo";
import MiniLogo from "@components/icon/MiniLogo";
import MenuBar from "@components/MenuBar";

import React from 'react'

export default function Header() {
    return (
        <header className={`flex sticky py-5 justify-between z-20 items-center`}>
            <Logo width={256} height={40} stroke={"#0a192f"} darkStroke={"#64ffda"} className={"hidden md:flex"}/>
            <MiniLogo width={40} height={40} stroke={"#0a192f"} darkStroke={"#64ffda"} className={"flex md:hidden"}/>
            <MenuBar/>
        </header>
    )
}
