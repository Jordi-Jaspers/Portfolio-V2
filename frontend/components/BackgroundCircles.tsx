import {motion} from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
    return (
        <motion.div
            className={"relative flex justify-center items-center"}
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 1.5, 3, 0.75, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}>
            <div className={"absolute border border-[#8892b0] rounded-full h-[300px] w-[300px] mt-52 opacity-30"}/>
            <div className={"absolute border border-[#64ffda] rounded-full h-[500px] w-[500px] mt-52 animate-pulse"}/>
            <div className={"absolute border border-[#64ffda] rounded-full h-[650px] w-[650px] mt-52 opacity-40"}/>
            <div className={"absolute border border-[#64ffda] rounded-full h-[800px] w-[800px] mt-52 opacity-30"}/>
        </motion.div>
    )
}
