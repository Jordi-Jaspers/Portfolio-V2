import React from 'react'
import Image from "next/image";
import ProfilePicture from "../public/images/profile-picture.jpg";
import {motion} from 'framer-motion';
import dynamic from "next/dynamic";
import {SocialIcon} from "react-social-icons";

type Props = {}

export default function Contact({}: Props) {
    return (
        <div className={"section-component"}>
            <h3 className={"section-header before:content-['05.']"}>
                Contact
            </h3>
        </div>
    )
}
