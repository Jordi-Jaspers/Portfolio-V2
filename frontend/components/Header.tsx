import React, {useState} from 'react'
import {motion} from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import {ThemeProvider} from "next-themes";
import SocialsBar from "./SocialsBar";
import {SocialIcon} from "react-social-icons";

type Props = {}

// Using 'https://github.com/jaketrent/react-social-icons' to render social icons
// Framer motion for animations (https://www.framer.com/docs/examples/)
export default function Header({}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerLine = `h-0.5 my-[0.5em] rounded-full transition ease transform duration-300 bg-navy dark:bg-green`;

    return (
        <header
            className={`${isOpen ? "dark:bg-navy dark:sm:bg-transparent bg-white sm:bg-transparent " : "bg-transparent"} flex sticky top-0 p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center`}>
            <motion.div
                initial={{
                    x: -500,
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
                }}>
                <SocialsBar/>
            </motion.div>
            <motion.div
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
                }}>
                <div className="transparent max-h-[50px] min-w-[100px] w-fit h-fit">
                    <div className={"flex flex-row items-center justify-end"}>
                        <ThemeProvider enableSystem={true} attribute="class">
                            <DarkModeToggle className={"h-[32px] w-[32px]"}/>
                        </ThemeProvider>
                        <button className={"relative inline-block align-middle overflow-hidden h-[50px] w-[50px]"}
                                onClick={() => setIsOpen(!isOpen)}>
                            <div className={`${hamburgerLine} ${isOpen ? "rotate-45 translate-y-2 w-6" : "w-6"}`}/>
                            <div className={`${hamburgerLine} ${isOpen ? "opacity-0 w-0" : "opacity-100 w-4"}`}/>
                            <div className={`${hamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-100 w-6 flex" : "hidden"}`}/>
                        </button>
                    </div>

                    <div className={`${isOpen ? "z-0 absolute top-50 left-0 rounded-lg p-2 min-w-[300px] w-screen h-screen "
                        + "flex flex-col justify-between items-center border md:w-fit md:h-fit md:min-h-[250px] md:relative md:top-0 md:left-0 "
                        + "dark:border-[#374151] dark:bg-light-navy md:-translate-x-5 "
                        + "bg-white-contrast border-slate" : "hidden"} `}>
                        <ul className="flex flex-col w-full p-4">
                            <li className={"pt-2 pb-2 rounded w-full text-lightest-navy hover:text-navy dark:text-slate dark:hover:text-white hover:border hover:border-amber dark:hover:border-green"}>
                                <a href="#about" className="p-4">Blog</a>
                            </li>
                            <li className={"pt-2 pb-2 rounded w-full text-lightest-navy hover:text-navy dark:text-slate dark:hover:text-white hover:border hover:border-amber dark:hover:border-green"}>
                                <a href="#about" className="p-4">Blog</a>
                            </li>
                            <li className={"pt-2 pb-2 rounded w-full text-lightest-navy hover:text-navy dark:text-slate dark:hover:text-white hover:border hover:border-amber dark:hover:border-green"}>
                                <a href="#about" className="p-4">Blog</a>
                            </li>
                            <li className={"pt-2 pb-2 rounded w-full text-lightest-navy hover:text-navy dark:text-slate dark:hover:text-white hover:border hover:border-amber dark:hover:border-green"}>
                                <a href="#about" className="p-4">Blog</a>
                            </li>
                        </ul>
                        <div>
                            <div className={"reactive-socials hover:scale-110 flex flex-row dark:hidden cursor-pointer justify-center items-center uppercase text-sm text-navy"}>
                                {/*/!* Email *!/*/}
                                <SocialIcon
                                    url={"mailto:jordijaspers@gmail.com"}
                                    network="email"
                                    bgColor={"transparent"}
                                    fgColor={"#0a192f"}
                                />
                                <a  >Get In Touch</a>
                            </div>
                            <div className={"reactive-socials hover:scale-110 dark:flex dark:flex-row hidden cursor-pointer justify-center items-center uppercase text-sm text-navy"}>
                                {/* Email */}
                                <SocialIcon
                                    url={"mailto:jordijaspers@gmail.com"}
                                    className="cursor-pointer reactive-socials"
                                    network="email"
                                    bgColor={"transparent"}
                                    fgColor={"#64ffda"}
                                />
                                <a className={"uppercase hidden md:inline-flex text-sm text-green pr-2"}
                                   href={"mailto:jordijaspers@gmail.com"} >Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}
