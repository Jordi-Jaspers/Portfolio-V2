import React from 'react'

import {motion} from "framer-motion";

interface Props {
    height?: number;
    width?: number;
    stroke?: string;
    darkStroke?: string;
    className?: string;
}

export default function MiniLogo({height, width, stroke, darkStroke, className}: Props) {
    return (
        <motion.a
            className={className}
            href={"#Home"}
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}>
            <svg width={`${width ? width : 16}`} height={`${height ? height : 16}`} viewBox="0 0 16 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg" className={"dark:hidden flex"}>
                <line x1="0.5" y1="1" x2="0.5" y2="5" stroke={`${stroke ? stroke : "white"}`}/>
                <line x1="0.000837325" y1="1.4933" x2="4.00084" y2="1.5" stroke={`${stroke ? stroke : "white"}`}/>
                <line x1="15.5" y1="17" x2="15.5" y2="13" stroke={`${stroke ? stroke : "white"}`}/>
                <line x1="15.9904" y1="16.5768" x2="11.9904" y2="16.4999" stroke={`${stroke ? stroke : "white"}`}/>
                <path
                    d="M9.13991 4.27273H10.1967V10.5114C10.1967 11.0682 10.0945 11.5412 9.88991 11.9304C9.68537 12.3196 9.39702 12.6151 9.02486 12.8168C8.6527 13.0185 8.21378 13.1193 7.7081 13.1193C7.23082 13.1193 6.80611 13.0327 6.43395 12.8594C6.06179 12.6832 5.76918 12.4332 5.55611 12.1094C5.34304 11.7855 5.23651 11.4006 5.23651 10.9545H6.27628C6.27628 11.2017 6.33736 11.4176 6.45952 11.6023C6.58452 11.7841 6.75497 11.9261 6.97088 12.0284C7.18679 12.1307 7.43253 12.1818 7.7081 12.1818C8.01207 12.1818 8.2706 12.1179 8.48366 11.9901C8.69673 11.8622 8.85866 11.6747 8.96946 11.4276C9.0831 11.1776 9.13991 10.8722 9.13991 10.5114V4.27273Z"
                    fill={`${stroke ? stroke : "white"}`}/>
            </svg>
            <svg width={`${width ? width : 16}`} height={`${height ? height : 16}`} viewBox="0 0 16 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg" className={"hidden dark:flex"}>
                <line x1="0.5" y1="1" x2="0.5" y2="5" stroke={`${darkStroke ? darkStroke : "white"}`}/>
                <line x1="0.000837325" y1="1.4933" x2="4.00084" y2="1.5" stroke={`${darkStroke ? darkStroke : "white"}`}/>
                <line x1="15.5" y1="17" x2="15.5" y2="13" stroke={`${darkStroke ? darkStroke : "white"}`}/>
                <line x1="15.9904" y1="16.5768" x2="11.9904" y2="16.4999" stroke={`${darkStroke ? darkStroke : "white"}`}/>
                <path
                    d="M9.13991 4.27273H10.1967V10.5114C10.1967 11.0682 10.0945 11.5412 9.88991 11.9304C9.68537 12.3196 9.39702 12.6151 9.02486 12.8168C8.6527 13.0185 8.21378 13.1193 7.7081 13.1193C7.23082 13.1193 6.80611 13.0327 6.43395 12.8594C6.06179 12.6832 5.76918 12.4332 5.55611 12.1094C5.34304 11.7855 5.23651 11.4006 5.23651 10.9545H6.27628C6.27628 11.2017 6.33736 11.4176 6.45952 11.6023C6.58452 11.7841 6.75497 11.9261 6.97088 12.0284C7.18679 12.1307 7.43253 12.1818 7.7081 12.1818C8.01207 12.1818 8.2706 12.1179 8.48366 11.9901C8.69673 11.8622 8.85866 11.6747 8.96946 11.4276C9.0831 11.1776 9.13991 10.8722 9.13991 10.5114V4.27273Z"
                    fill={`${darkStroke ? darkStroke : "white"}`}/>
            </svg>
        </motion.a>
    );
}
