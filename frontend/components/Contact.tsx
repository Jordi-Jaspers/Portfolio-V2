import React from 'react'
import Image from "next/image";
import ProfilePicture from "../public/images/profile-picture.jpg";
import {motion} from 'framer-motion';
import dynamic from "next/dynamic";
import {SocialIcon} from "react-social-icons";

type Props = {}

export default function Contact({}: Props) {
    return (
        <div className={"flex flex-row items-start relative h-screen w-screen text-left max-w-7xl px-10 mx-auto"}>
            <h3 className={"section-header before:content-['05.']"}>
                Contact
            </h3>
        </div>
    )
}
