import React from 'react'
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";

type Props = {}

// Using 'https://github.com/jaketrent/react-social-icons' to render social icons
// Framer motion for animations (hhttps://www.framer.com/docs/examples/)
export default function Header({}: Props) {
    return (
        <header className={"sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"}>
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
                    url="https://twitter.com/Jordi_Jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />

                {/* Instagram */}
                <SocialIcon
                    url="https://instagram.com/Jordi_jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />

                {/* LinkedIn */}
                <SocialIcon
                    url="https://www.linkedin.com/in/jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />

                {/* GitHub */}
                <SocialIcon
                    url="https://www.github.com/Jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />

                {/* CodeWars */}
                <SocialIcon
                    url="https://www.codewars.com/users/Jordi-Jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
            </motion.div>
            <motion.div className={"flex flex-row items-center text-[#64ffda] cursor-pointer"}
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
                {/* Email */}
                <SocialIcon
                    url="https://twitter.com/jaketrent"
                    className="cursor-pointer"
                    network="email"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
                <p className={"uppercase hidden md:inline-flex text-sm text-[#64ffda]"}>Get In Touch</p>
            </motion.div>
        </header>
    )
}
