import React from 'react'
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import {ThemeProvider} from "next-themes";

type Props = {}

// Using 'https://github.com/jaketrent/react-social-icons' to render social icons
// Framer motion for animations (https://www.framer.com/docs/examples/)
export default function Header({}: Props) {
    return (
        <header className={"flex sticky top-0 p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"}>
            <div className={"flex dark:hidden"}>
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

                    {/* Twitter */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://twitter.com/Jordi_Jaspers"
                        bgColor={"transparent"}
                        fgColor={"#0a192f"}
                    />

                    {/* Instagram */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://instagram.com/Jordi_jaspers"
                        bgColor={"transparent"}
                        fgColor={"#0a192f"}
                    />

                    {/* LinkedIn */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://www.linkedin.com/in/jordi-jaspers"
                        bgColor={"transparent"}
                        fgColor={"#0a192f"}
                    />

                    {/* GitHub */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://www.github.com/Jordi-jaspers"
                        bgColor={"transparent"}
                        fgColor={"#0a192f"}
                    />

                    {/* CodeWars */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://www.codewars.com/users/Jordi-Jaspers"
                        bgColor={"transparent"}
                        fgColor={"#0a192f"}
                    />
                </motion.div>
            </div>
            <div className={"hidden dark:flex"}>
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

                    {/* Twitter */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://twitter.com/Jordi_Jaspers"
                        bgColor={"transparent"}
                        fgColor={"#64ffda"}
                    />

                    {/* Instagram */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://instagram.com/Jordi_jaspers"
                        bgColor={"transparent"}
                        fgColor={"#64ffda"}
                    />

                    {/* LinkedIn */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://www.linkedin.com/in/jordi-jaspers"
                        bgColor={"transparent"}
                        fgColor={"#64ffda"}
                    />

                    {/* GitHub */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://www.github.com/Jordi-jaspers"
                        bgColor={"transparent"}
                        fgColor={"#64ffda"}
                    />

                    {/* CodeWars */}
                    <SocialIcon
                        className="reactive-socials"
                        url="https://www.codewars.com/users/Jordi-Jaspers"
                        bgColor={"transparent"}
                        fgColor={"#64ffda"}
                    />
                </motion.div>
            </div>
                <motion.div className={"flex w-auto h-[50px] flex-row items-center text-green cursor-pointer"}
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

                    <ThemeProvider enableSystem={true} attribute="class">
                        <DarkModeToggle/>
                    </ThemeProvider>

                    <div className={"flex items-center dark:hidden"}>
                        {/* Email */}
                        <SocialIcon
                            url="mailto:jordijaspers@gmail.com"
                            className="cursor-pointer reactive-socials"
                            network="email"
                            bgColor={"transparent"}
                            fgColor={"#0a192f"}
                        />
                        <p className={"uppercase hidden md:inline-flex text-sm text-navy"}>Get In Touch</p>
                    </div>
                    <div className={"hidden items-center dark:flex"}>
                        {/* Email */}
                        <SocialIcon
                            url="mailto:jordijaspers@gmail.com"
                            className="cursor-pointer reactive-socials"
                            network="email"
                            bgColor={"transparent"}
                            fgColor={"#64ffda"}
                        />
                        <p className={"uppercase hidden md:inline-flex text-sm text-green"}>Get In Touch</p>
                    </div>
                </motion.div>
        </header>
    )
}
