import React from 'react'

import {SocialIcon} from "react-social-icons";

interface Props {
    fill: string;
    darkFill: string;
}

// Using 'https://github.com/jaketrent/react-social-icons' to render social icons
export default function SocialsBar({fill, darkFill}: Props) {
    return (
        <div>
            <div className={"flex dark:hidden"}>
                {/* Twitter */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://twitter.com/Jordi_Jaspers"
                    bgColor={"transparent"}
                    fgColor={fill}
                />
                
                {/* Instagram */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://instagram.com/Jordi_jaspers"
                    bgColor={"transparent"}
                    fgColor={fill}
                />
                
                {/* LinkedIn */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.linkedin.com/in/jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={fill}
                />
                
                {/* GitHub */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.github.com/Jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={fill}
                />
                
                {/* CodeWars */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.codewars.com/users/Jordi-Jaspers"
                    bgColor={"transparent"}
                    fgColor={fill}
                />
            </div>
            <div className={"hidden dark:flex"}>
                {/* Twitter */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://twitter.com/Jordi_Jaspers"
                    bgColor={"transparent"}
                    fgColor={darkFill}
                />
                
                {/* Instagram */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://instagram.com/Jordi_jaspers"
                    bgColor={"transparent"}
                    fgColor={darkFill}
                />
                
                {/* LinkedIn */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.linkedin.com/in/jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={darkFill}
                />
                
                {/* GitHub */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.github.com/Jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={darkFill}
                />
                
                {/* CodeWars */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.codewars.com/users/Jordi-Jaspers"
                    bgColor={"transparent"}
                    fgColor={darkFill}
                />
            </div>
        </div>
    );
}
