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
        <div className={"flex flex-col items-start relative h-fit w-screen text-left max-w-7xl px-10 mx-auto"}>
            <h3 className={"section-header before:content-['02.']"}>
                Experience
            </h3>
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
                <div className={"flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"}>
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
