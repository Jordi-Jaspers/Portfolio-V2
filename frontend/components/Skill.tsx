import React from 'react'
import {motion} from 'framer-motion';
import Image, {StaticImageData} from "next/image";

type Props = {
    skill: StaticImageData,
    proficiency: 'Junior' | 'Medior' | 'Senior',
    directionRight?: boolean,
}

export default function Skill({skill, proficiency, directionRight}: Props) {

    return (
        <div className={"group relative flex cursor-pointer justify-center"}>
            <motion.div
                initial={{
                    opacity: 0,
                    x: directionRight ? -200 : 200
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{
                    once: true,
                }}
                className={"rounded-full h-full flex items-center justify-center border object-cover filter group-hover:grayscale transition duration-500 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 dark:border-green border-navy"}>
                <Image src={skill} alt={"Skill"} width={64} height={64}/>
            </motion.div>
            <div className={"absolute opacity-0 group-hover:opacity-70 dark:group-hover:opacity-90 transition duration-500 ease-in-out group-hover:bg-navy h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"}>
                <div className={"flex items-center justify-center h-full"}>
                    <p className={"text-2xl font-bold text-white dark:text-green opacity-100"}>{proficiency}</p>
                </div>
            </div>
        </div>
    )
}
