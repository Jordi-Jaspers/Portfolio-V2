import React from 'react'
import Image from "next/image";
import ProfilePicture from "../public/images/profile-picture.jpg";
import {motion} from 'framer-motion';
import dynamic from "next/dynamic";

type Props = {}

let skills = [
    {
        name: "Next.js",
        url: "https://nextjs.org/"
    },
    {
        name: "Spring Boot",
        url: "https://spring.io/projects/spring-boot"
    },
    {
        name: "Micronaut",
        url: "https://micronaut.io/"
    },
    {
        name: "Gradle",
        url: "https://gradle.org/"
    },
    {
        name: "Liquibase",
        url: "https://www.liquibase.org/"
    },
    {
        name: "Git",
        url: "https://git-scm.com/"
    },
    {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/"
    },
    {
        name: "Docker",
        url: "https://www.docker.com/"
    },
    {
        name: "Kubernetes",
        url: "https://kubernetes.io/"
    },
    {
        name: "Jenkins",
        url: "https://www.jenkins.io/"
    },
    {
        name: "Redis",
        url: "https://redis.io/"
    }
]

export default function About({}: Props) {
    return (
        <div className={"flex flex-col items-start relative h-fit w-screen text-left max-w-7xl px-10 mx-auto"}>
            <h3 className={"section-header before:content-['01.']"}>
                About me
            </h3>

            <motion.div
                className={"md:grid md:grid-cols-2 md:gap-10"}
                initial={{
                    opacity: 0,
                    x: -200,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.5
                }}>
                <div className={"item-body space-y-5 ml-[10px] text-sm lg:text-lg"}>
                    <p className={"paragraph"}>
                        Hello! My <span className={"interactive-underline"}>name is Jordi Jaspers</span> and I am a
                        Master graduate in Electronic & Software engineering, combined with several years of
                        professional experience in the IT industry. My passion for web development and discovering new technologies is where
                        I have spent the past few years honing my skills. Striving to resolve complex issues or create new modern features
                        in the most efficient way possible is my favorite thing to do. That is why I mainly became back-end
                        Software developer.
                    </p>

                    <p className={"paragraph"}>
                        To ensure that efficiency and those high quality solutions in my applications, <span
                        className={"interactive-underline"}>
                    I appreciate the use of test-driven
                    design</span>. Furthermore, constantly being involved in the complete Software Development Life Cycle, including
                        analysis,
                        design, development, testing, implementation, support, and maintenance of enterprise-level web applications <span
                        className={"interactive-underline"}> mainly using
                    Java/Java EE </span> gave me a solid understanding of the Software Development process.
                    </p>

                    <p className={"paragraph"}>
                        Fast-forward to today, and I've had the privilege of working at several companies in the Netherlands and Belgium. My
                        main focus is on back-end development, but I also have some hands-on experience with DevOps. I am currently working
                        as
                        a <a className={"interactive-underline"} href="https://www.ilionx.com" target={"_blank"} rel="noreferrer">
                        Software Engineer at Ilionx in Maastricht.
                    </a>
                    </p>

                    <div className={"paragraph"}>
                        Here are a few technologies I’ve been working with recently:
                        <ul className={"grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 list-none mt-[20px]"}>
                            {skills.map((skill, index) => (
                                <li className={"arrow pl-[20px] mb-[10px]"} key={index}>
                                    <a className={"interactive-underline"} href={skill.url}>{skill.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Image
                    className={"mx-[25%] mt-8 md:mx-0 md:mt-[50%] lg:mt-3 bg-origin-border p-1 border-amber/75 dark:border-green/75 border-2 border-dashed h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded md:rounded-full object-cover object-center shadow-2xl"}
                    src={ProfilePicture}
                    alt={"Profile picture"}
                />
            </motion.div>
        </div>
    )
}
