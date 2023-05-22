import React from 'react'

import Link from "next/link";

export default function MenuItems() {
    return (
        <nav className={"hidden md:flex"}>
            <Link href={"#About"}>
                <button className={"default-button"}>About</button>
            </Link>
            <Link href={"#Experience"}>
                <button className={"default-button"}>Experience</button>
            </Link>
            <Link href={"#Service"}>
                <button className={"default-button"}>Service</button>
            </Link>
            <Link href={"#Contact"}>
                <button className={"default-button"}>Contact</button>
            </Link>
        </nav>
    )
}
