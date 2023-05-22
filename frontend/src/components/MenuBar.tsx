import DarkModeToggle from "@components/icon/DarkModeToggle";
import HamburgerMenu from "@components/icon/HamburgerMenu";
import Logo from "@components/icon/Logo";
import MenuItems from "@components/MenuItems";
import SocialsBar from "@components/SocialsBar";

import React, {useState} from 'react'

import {AcademicCapIcon, ChatBubbleOvalLeftEllipsisIcon, HomeModernIcon, IdentificationIcon, SwatchIcon} from "@heroicons/react/24/outline";
import ProfileAvatar from "@images/profile-avatar.png";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {ThemeProvider} from "next-themes";



export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            className="transparent max-h-[50px] min-w-[100px] w-fit h-fit"
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
            {isOpen &&
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20" onClick={() => setIsOpen(false)}/>
            }
            
            <nav className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} transform fixed h-full top-0 right-0 w-64 overflow-auto ease-in-out transition-all duration-300
            rounded-l-2xl bg-navy dark:bg-white z-30 flex flex-col justify-start items-center`}>
                <Image
                    className={"relative rounded-full mx-auto mt-5"}
                    src={ProfileAvatar}
                    alt={"Profile picture"}
                    width={64}
                    height={64}
                />
                <Logo width={240} height={32} stroke={"#64ffda"} darkStroke={"#0a192f"} className={"pt-5"}/>
                <div className={"h-[1px] w-[80%] my-5 bg-slate dark:bg-navy"}/>
                
                <div className={"flex flex-col justify-between h-[80%] w-[90%]"}>
                    <div className={"flex flex-col w-full justify-center items-center space-y-1"}>
                        <Link href={"#Home"}
                              className={"text-green dark:text-navy hover:border hover:rounded-xl w-[80%] flex justify-center p-1"}>
                            <div className={"flex justify-start space-x-4 w-[75%]"}>
                                <HomeModernIcon className={"h-5 w-5"}/>
                                <span className={"uppercase"}>Home</span>
                            </div>
                        </Link>
                        <Link href={"#About"}
                              className={"text-green dark:text-navy hover:border hover:rounded-xl w-[80%] flex justify-center p-1"}>
                            <div className={"flex justify-start space-x-4 w-[75%]"}>
                                <IdentificationIcon className={"h-5 w-5"}/>
                                <span className={"uppercase"}>About</span>
                            </div>
                        </Link>
                        <Link href={"#Experience"}
                              className={"text-green dark:text-navy hover:border hover:rounded-xl w-[80%] flex justify-center p-1"}>
                            <div className={"flex justify-start space-x-4 w-[75%]"}>
                                <AcademicCapIcon className={"h-5 w-5"}/>
                                <span className={"uppercase"}>Experience</span>
                            </div>
                        </Link>
                        <Link href={"#Service"}
                              className={"text-green dark:text-navy hover:border hover:rounded-xl w-[80%] flex justify-center p-1"}>
                            <div className={"flex justify-start space-x-4 w-[75%]"}>
                                <SwatchIcon className={"h-5 w-5"}/>
                                <span className={"uppercase"}>Service</span>
                            </div>
                        </Link>
                        <Link href={"#Contact"}
                              className={"text-green dark:text-navy hover:border hover:rounded-xl w-[80%] flex justify-center p-1"}>
                            <div className={"flex justify-start space-x-4 w-[75%]"}>
                                <ChatBubbleOvalLeftEllipsisIcon className={"h-5 w-5"}/>
                                <span className={"uppercase"}>Let's Talk</span>
                            </div>
                        </Link>
                    </div>
                    <SocialsBar fill={"#64ffda"} darkFill={"#0a192f"}/>
                </div>
            </nav>
            
            <div className={"flex flex-row items-center justify-end"}>
                <MenuItems/>
                <ThemeProvider enableSystem={true} attribute="class">
                    <DarkModeToggle className={"h-[32px] w-[32px]"}/>
                </ThemeProvider>
                <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
            </div>
        </motion.div>
    )
}
