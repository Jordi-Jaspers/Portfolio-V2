import React from 'react'

import {SocialIcon} from "react-social-icons";

export default function SocialsBar() {
    return (
        <div>
            <div className={"flex dark:hidden"}>
                {/* Twitter */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://twitter.com/Jordi_Jaspers"
                    bgColor={"transparent"}
                    fgColor={"#0a192f"}
                />
                
                {/* Instagram */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://instagram.com/Jordi_jaspers"
                    bgColor={"transparent"}
                    fgColor={"#0a192f"}
                />
                
                {/* LinkedIn */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.linkedin.com/in/jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={"#0a192f"}
                />
                
                {/* GitHub */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.github.com/Jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={"#0a192f"}
                />
                
                {/* CodeWars */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.codewars.com/users/Jordi-Jaspers"
                    bgColor={"transparent"}
                    fgColor={"#0a192f"}
                />
            </div>
            <div className={"hidden dark:flex"}>
                {/* Twitter */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://twitter.com/Jordi_Jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
                
                {/* Instagram */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://instagram.com/Jordi_jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
                
                {/* LinkedIn */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.linkedin.com/in/jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
                
                {/* GitHub */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.github.com/Jordi-jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
                
                {/* CodeWars */}
                <SocialIcon
                    className="reactive-socials"
                    url="https://www.codewars.com/users/Jordi-Jaspers"
                    bgColor={"transparent"}
                    fgColor={"#64ffda"}
                />
            </div>
        </div>
    );
}
