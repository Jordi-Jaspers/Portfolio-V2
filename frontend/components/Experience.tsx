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

type Props = {}

export default function Experience({}: Props) {
    return (
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
            className={"flex flex-row items-start relative h-fit w-screen text-left max-w-7xl px-10 mx-auto"}>

            <h3 className={"section-header before:content-['02.']"}>
                Experience
            </h3>
            <div className={"w-screen h-fit"}>
                <div className={"block mt-36 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"}>
                    <ExperienceCard
                        company={"Ilionx"}
                        role={"Medior Software Engineer"}
                        startDate={"sep 2020"}
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
                        startDate={"jul 2020"}
                        endDate={"jan 2021"}
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
                        role={"MSc. Software Engineering Graduate"}
                        startDate={"sep 2019"}
                        endDate={"jan 2021"}
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
                        ]}
                    />
                    <ExperienceCard
                        company={"Electro Geenard"}
                        role={"Electrician"}
                        startDate={"apr 2020"}
                        endDate={"sep 2020"}
                        experiences={[
                            "Planned layout and installation of electrical wiring, equipment and fixtures based on specifications and applicable code.",
                            "Developed insight and skill about electrical circuits.",
                        ]}
                    />
                </div>
                <div className="p-4 flex justify-center">
                    <button type="button" className="flex items-center rounded-lg bg-amber px-4 py-2 text-white" disabled>
                        <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        <span className="font-medium"> downloading resume... </span>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
