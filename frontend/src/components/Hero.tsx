import SocialsBar from "@components/SocialsBar";

import React from 'react'

import ProfileAvatar from "@images/profile-avatar.png";
import Image from "next/image";
import {Cursor, useTypewriter} from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
    const [text] = useTypewriter({
        words: [
            "System.out.println('Hello World!')",
            "< Turn Ideas into Solutions />",
            "Run-DevOps-Engineering-Magic.exe",
            "CoffeeToBackendConverter.java"
        ],
        loop: true,
        delaySpeed: 1000,
    });
    
    return (
        <div className={"h-screen min-h-[700px] flex flex-col space-y-4 items-center justify-center text-center"}>
            <BackgroundCircles/>
            <Image
                className={"relative rounded-full mx-auto"}
                src={ProfileAvatar}
                alt={"Profile picture"}
                width={145}
                height={145}
            />
            <div className={"z-[5]"}>
                <h2 className={"text-[11px] sm:text-sm uppercase text-lightest-navy dark:text-slate pb-2 tracking-[15px]"}>
                    Software Engineer
                </h2>
                <h1 className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold scroll-px-10"}>
                    <div className={"hidden dark:flex"}>
                        <span className={"mr-3"}>{text}</span>
                        <Cursor cursorColor={"white"} cursorBlinking={true}/>
                    </div>
                    <div className={"flex dark:hidden"}>
                        <span className={"mr-3"}>{text}</span>
                        <Cursor cursorColor={"navy"} cursorBlinking={true}/>
                    </div>
                </h1>
            </div>
            <SocialsBar fill={"#0a192f"} darkFill={"#64ffda"}/>
        </div>
    )
}
