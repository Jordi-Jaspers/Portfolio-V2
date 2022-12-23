import React from 'react'
import {motion} from 'framer-motion';
import ExperienceCard from "./ExperienceCard";
import IlionxLogo from "../public/images/ilionx-logo.jpeg";
import KulLogo from "../public/images/kul-logo.jpg";
import HanyangLogo from "../public/images/hanyang-logo.png";
import JavaIcon from "../public/icons/java.svg";
import SpringIcon from "../public/icons/spring.svg";
import KotlinIcon from "../public/icons/kotlin.svg";
import JavaScriptIcon from "../public/icons/javascript.svg";
import TypeScriptIcon from "../public/icons/typescript.svg";
import ReactIcon from "../public/icons/react.svg";
import DockerIcon from "../public/icons/docker.svg";
import KubernetesIcon from "../public/icons/kubernetes.svg";
import PostgresIcon from "../public/icons/postgresql.svg";
import RedisIcon from "../public/icons/redis.svg";
import GitIcon from "../public/icons/git.svg";
import LinuxIcon from "../public/icons/ubuntu.svg";
import GroovyIcon from "../public/icons/grails.svg";
import CPlusPlusIcon from "../public/icons/c-plusplus.svg";
import GoIcon from "../public/icons/go.svg"
import PythonIcon from "../public/icons/python.svg";
import BashIcon from "../public/icons/bash.svg";
import HTMLIcon from "../public/icons/html-5.svg";
import CSSIcon from "../public/icons/css-3.svg";
import AssemblyIcon from "../public/icons/assembly.svg";
import DownloadButton from './DownloadButton';

type Props = {}

export default function Experience({}: Props) {
    return (
        <div className={"section-component"}>
            <h3 className={"section-header before:content-['02.']"}>
                Experience
            </h3>

            <motion.div
                className={"w-full flex flex-row justify-center"}
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
                <svg width="20px" height="20px" className={"-translate-x-1 fill-amber dark:fill-green"} viewBox="0 0 48 48"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z"/>
                    <path d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z"/>
                </svg>
                <h1 className={"text-xl font-semibold uppercase text-navy dark:text-white p-2 font-light"}>Using Google efficiently is like 90%
                    of my job.</h1>
                <svg width="20px" height="20px" className={"translate-y-5 translate-x-1 rotate-180 fill-amber dark:fill-green"}
                     viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z"/>
                    <path d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z"/>
                </svg>
            </motion.div>

            <motion.div
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
                }}
                className={"flex flex-col justify-center w-full"}>
                <div className={"flex space-x-5 overflow-x-scroll p-10 scroll-smooth"}>
                    <ExperienceCard
                        company={"Ilionx"}
                        role={"Medior Software Engineer"}
                        contract={"Full-time"}
                        startDate={new Date(2020, 1)}
                        logo={IlionxLogo}
                        experiences={[
                            "Reviewing code bases for bugs and weaknesses using approved troubleshooting methods, to prevents systems being exploited.",
                            "Gathered and defined customer requirements to develop clear specifications for project plans.",
                            "Building enterprise grade software solutions using Java frameworks and test-driven design.",
                            "Orchestrated efficient large-scale software deployments, including testing features and correcting code."
                        ]}
                        stack={[
                            JavaIcon,
                            DockerIcon,
                            KubernetesIcon,
                            RedisIcon,
                            GitIcon,
                            KotlinIcon,
                            GroovyIcon,
                            SpringIcon,
                            LinuxIcon,
                            PostgresIcon,
                        ]}
                    />
                    <ExperienceCard
                        company={"Hanyang University"}
                        role={"Software Engineer Intern"}
                        contract={"Internship"}
                        startDate={new Date(2020, 5)}
                        endDate={new Date(2021, 1)}
                        logo={HanyangLogo}
                        experiences={[
                            "Inventing a framework for anomaly detection in the radio spectrum.",
                            "Helping out other students with their projects by debugging their code and providing feedback.",
                        ]}
                        stack={[
                            GoIcon,
                            PythonIcon,
                            CPlusPlusIcon,
                            TypeScriptIcon,
                            ReactIcon
                        ]}
                    />
                    <ExperienceCard
                        company={"KULeuven"}
                        role={"MSc. Software Engineering"}
                        contract={"Graduate"}
                        startDate={new Date(2019, 8)}
                        endDate={new Date(2021, 1)}
                        logo={KulLogo}
                        experiences={[
                            "OOP in Java",
                            "Differences in Compilers & Operating Systems",
                            "Algorithms & Data Structures",
                            "Docker",
                            "Advanced Mathematics",
                            "VHDL & FPGA programming."
                        ]}
                        stack={[
                            JavaIcon,
                            JavaScriptIcon,
                            BashIcon,
                            HTMLIcon,
                            CSSIcon,
                            CPlusPlusIcon,
                            AssemblyIcon
                        ]}
                    />
                    <ExperienceCard
                        company={"Electro Geenard"}
                        role={"Electrician"}
                        contract={"Part-time"}
                        startDate={new Date(2020, 4)}
                        endDate={new Date(2020, 8)}
                        experiences={[
                            "Planned layout and installation of electrical wiring, equipment and fixtures based on specifications and applicable code.",
                            "Developed insight and skill about electrical circuits.",
                        ]}
                    />
                </div>
                <div className={"flex justify-center"}>
                    <DownloadButton/>
                </div>
            </motion.div>
        </div>
    )
}
