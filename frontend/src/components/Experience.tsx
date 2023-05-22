import Quote from "@components/Quote";
import AssemblyIcon from "@icons/assembly.svg";
import BashIcon from "@icons/bash1.svg";
import CPlusPlusIcon from "@icons/c-plusplus.svg";
import CSSIcon from "@icons/css-3.svg";
import DockerIcon from "@icons/docker.svg";
import GitIcon from "@icons/git-icon.svg";
import GoIcon from "@icons/go.svg"
import GroovyIcon from "@icons/grails.svg";
import HanyangLogo from "@icons/hanyang.png";
import HTMLIcon from "@icons/html-5.svg";
import IlionxLogo from "@icons/ilionx.svg";
import JavaIcon from "@icons/java.svg";
import JavaScriptIcon from "@icons/javascript.svg";
import KotlinIcon from "@icons/kotlin.svg";
import KulLogo from "@icons/ku-leuven-3120113716.png";
import KubernetesIcon from "@icons/kubernetes.svg";
import PostgresIcon from "@icons/postgresql.svg";
import PythonIcon from "@icons/python.svg";
import ReactIcon from "@icons/react.svg";
import RedisIcon from "@icons/redis.svg";
import SpringIcon from "@icons/spring.svg";
import TypeScriptIcon from "@icons/typescript-icon.svg";
import LinuxIcon from "@icons/ubuntu.svg";

import React from 'react'

import {motion} from 'framer-motion';

import DownloadButton from './DownloadButton';
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <div className={"section-component"}>
            <h3 className={"section-header before:content-['02.']"}>
                Experience
            </h3>
            
            <div className={"w-full flex justify-center items-center"}>
                <Quote text={"Experience is the teacher of all things."} author={"Julius Caesar"}/>
            </div>
            
            
            <div className={"flex flex-col justify-center w-full"}>
                <div className={"flex space-x-5 py-5 md:py-10 overflow-x-scroll scroll-smooth"}>
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
                </div>
                <div className={"flex justify-center"}>
                    <DownloadButton/>
                </div>
            </div>
        </div>
    )
}
