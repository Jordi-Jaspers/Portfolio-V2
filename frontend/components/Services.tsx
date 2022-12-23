import React from 'react'
import Image from "next/image";
import ProfilePicture from "../public/images/profile-picture.jpg";
import {motion} from 'framer-motion';
import dynamic from "next/dynamic";

type Props = {}

export default function Services({}: Props) {
    return (
        <div className={"section-component"}>
            <h3 className={"section-header before:content-['04.']"}>
                Services
            </h3>
        </div>
    )
}
