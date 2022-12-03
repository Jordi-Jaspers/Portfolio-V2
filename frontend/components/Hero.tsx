import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["< Welcome To The Website />", "YourAverageSoftwareEngineer.java", "Get-Your-Custom-Software-Here.sh"],
        loop: true,
        delaySpeed: 1000,
    });
    return (
        <div className={"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"}>
            <BackgroundCircles/>
            <Image
                className={"relative rounded-full mx-auto"}
                src={"/images/me.jpeg"}
                alt={"Jordi's face"}
                width={145}
                height={145}
            />
            <div className={"z-20"}>
                <h2 className={"text-sm uppercase text-[#8892b0] pb-2 tracking-[15px]"}>
                    Software Engineer
                </h2>
                <h1 className={"text-5xl lg:text-6xl font-semibold scroll-px-10"}>
                    <span className={"mr-3"}>{text}</span>
                    <Cursor cursorColor={"white"} cursorBlinking={true}/>
                </h1>
                <div className={"pt-5"}>
                    <Link href={"#About"}>
                        <button className={"default-button"}>About</button>
                    </Link>
                    <Link href={"#Experience"}>
                        <button className={"default-button"}>Experience</button>
                    </Link>
                    <Link href={"#Skills"}>
                        <button className={"default-button"}>Skills</button>
                    </Link>
                    <Link href={"#Projects"}>
                        <button className={"default-button"}>Projects</button>
                    </Link>
                    <Link href={"#Contact"}>
                        <button className={"default-button"}>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
