import React from 'react'
import {motion} from 'framer-motion';
import DefaultImage from "../public/images/no-image.jpg";
import Image, {StaticImageData} from "next/image";

type Props = {
    logo?: string | StaticImageData,
    company: string
    role: string
    stack?: string[] | StaticImageData[]
    experiences?: string[]
    startDate: string
    endDate?: string
}

export default function ExperienceCard({logo, company, role, startDate, endDate, experiences, stack}: Props) {
    return (
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            viewport={{
                once: true,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}>

            <article
                className={"flex flex-col h-full rounded-l items-center text-left space-y-7 flex-shrink-0 "
                    + "w-[350px] md:w-[450px] xl:w-[600px] bg-white-contrast dark:bg-light-navy p-10 snap-center "
                    + "rounded-xl opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
                <Image
                    className={"w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"}
                    width={32}
                    height={32}
                    src={logo ? logo : DefaultImage}
                    alt={"Company Logo"}
                />
                <div className={"px-0 md:px-10"}>
                    <h4 className={"text-4xl font-light"}>{company}</h4>
                    <p className={"font-bold text-2xl mt-1"}>{role}</p>
                    <div className={"grid grid-cols-5 space-x-2 my-2 justify-start"}>
                        {stack === undefined || stack?.length <= 0
                            ? <div></div>
                            : stack?.map((stack, index) => (
                                <Image
                                    className={"h-10 w-10 m-1 rounded-full"}
                                    src={stack}
                                    width={32}
                                    height={32}
                                    alt={"stack icon"}
                                />
                            ))}
                    </div>
                    <p className={"uppercase py-5 font-light"}>{startDate} - {endDate ? endDate : "current"}</p>
                    <ul className={"list-disc space-y-4 ml-5 text-lg"}>
                        {experiences === undefined || experiences?.length <= 0
                            ? <li>No experience</li>
                            : experiences?.map((experience, index) => (
                                <li key={index}>{experience}</li>
                            ))}
                    </ul>
                </div>
            </article>
        </motion.div>
    )
}
