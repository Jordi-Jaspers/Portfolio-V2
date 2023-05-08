import React from 'react'

import {motion} from 'framer-motion'

export default function BackgroundCircles() {
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
            <div className={"z-[0] absolute border border-slate rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] mt-52 opacity-30"}/>
            <div className={"z-[0] absolute border border-navy dark:border-green rounded-full h-[200px] w-[200px] md:h-[500px] md:w-[500px] mt-52 animate-pulse"}/>
            <div className={"z-[0] absolute border border-navy dark:border-green rounded-full h-[400px] w-[400px] md:h-[650px] md:w-[650px] mt-52 opacity-40"}/>
            <div className={"z-[0] absolute border border-navy dark:border-green rounded-full h-[650px] w-[650px] md:h-[800px] md:w-[800px] mt-52 opacity-30"}/>
        </motion.div>
    )
}
