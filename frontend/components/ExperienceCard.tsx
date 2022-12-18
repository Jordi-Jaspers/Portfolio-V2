import React, {useState} from 'react'
import {motion} from 'framer-motion';
import DefaultImage from "../public/images/no-image.jpg";
import Image, {StaticImageData} from "next/image";
import {format} from "date-fns";

type Props = {
    logo?: string | StaticImageData,
    company: string
    role: string
    contract: string
    stack?: string[] | StaticImageData[]
    experiences?: string[]
    startDate: Date
    endDate?: Date
}

function getDuration(startDate: Date, endDate: Date | undefined) {
    return endDate
        ? "(" + ((endDate.getFullYear() * 12 + endDate.getMonth()) - (startDate.getFullYear() * 12 + startDate.getMonth())) + " Months)"
        : "(" + ((new Date().getFullYear() * 12 + new Date().getMonth()) - (startDate.getFullYear() * 12 + startDate.getMonth())) + " Months)"
}

export default function ExperienceCard({logo, company, role, contract, startDate, endDate, experiences, stack}: Props) {
    const [isContentVisible, setContentVisibility] = useState(false);

    const toggleContentVisibility = () => {
        setContentVisibility(!isContentVisible);
    }

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
                    <h4 className={"text-3xl font-light"}>{company}</h4>
                    <p className={"font-bold text-xl mt-1"}>{role}</p>
                    <p className={"font-light text-l mt-1"}>{contract}</p>
                    <br/>
                    <div className={"grid grid-cols-5 space-x-2 my-2 justify-start"}>
                        {stack === undefined || stack?.length <= 0
                            ? <div></div>
                            : stack?.map((stack, index) => (
                                <Image
                                    key={index}
                                    className={"h-6 w-6 m-1 rounded-full"}
                                    src={stack}
                                    width={32}
                                    height={32}
                                    alt={"stack icon"}
                                />
                            ))}
                    </div>
                    <p className={"uppercase py-5 font-light"}>{format(startDate, 'MMM yyyy')} - {endDate ? format(endDate, 'MMM yyyy') : "current"}
                        <span className={"text-light-slate lowercase text-xs"}> {getDuration(startDate, endDate)} </span></p>
                    <ul className={"list-disc space-y-4 ml-5 text-lg"}>
                        {experiences === undefined || experiences?.length <= 0
                            ? <li>No experience</li>
                            : experiences?.map((experience, index) => (
                                <li key={index} className={index >= 2 && !isContentVisible ? "hidden" : ""}>{experience}</li>
                            ))}
                    </ul>
                    {experiences === undefined || experiences?.length > 2 &&
                        <div className={"flex justify-center"}>
                            {isContentVisible
                                ? <button className="p-4 dark:text-slate/50 dark:hover:text-slate text-light-navy/50 hover:text-light-navy" onClick={toggleContentVisibility}>
                                    Show less</button>
                                : <button className="p-4 dark:text-slate/50 dark:hover:text-slate text-light-navy/50 hover:text-light-navy" onClick={toggleContentVisibility}>
                                    Show More</button>
                            }
                        </div>
                    }
                </div>
            </article>
        </motion.div>
    )
}
