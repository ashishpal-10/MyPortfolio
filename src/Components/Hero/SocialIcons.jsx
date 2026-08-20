import React from 'react'
import Styles from "../Hero/style.module.css"

import {RiDownloadLine,RiArrowRightUpLine, RiLinkedinFill ,RiGithubLine,RiTwitterLine , RiInstagramLine } from "@remixicon/react";

const SocialIcons = () => {
    return (
        <>
            <a href="https://github.com/ashishpal-10"> < RiGithubLine size={16} /></a>
            <a href="https://www.linkedin.com/in/ashish-pal-05710a312/">< RiLinkedinFill size={16} /></a>
            <a href="https://x.com/codedbyashish" > < RiTwitterLine size={16} /> </a>
            <a href="https://www.instagram.com/your.aashirwad/"> < RiInstagramLine size={16} /> </a>
        </>
    )
}

export default SocialIcons