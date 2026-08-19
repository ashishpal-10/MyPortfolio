import React from 'react'
import Styles from "../Hero/style.module.css"

import {RiDownloadLine,RiArrowRightUpLine, RiLinkedinFill ,RiGithubLine,RiTwitterLine , RiInstagramLine } from "@remixicon/react";

const SocialIcons = () => {
    return (
        <>
            <a href="https://github.com"> < RiGithubLine size={16} /></a>
            <a href="https://linkedin.com">< RiLinkedinFill size={16} /></a>
            <a href="https://x.com"> < RiTwitterLine size={16} /> </a>
            <a href="https://instagram.com"> < RiInstagramLine size={16} /> </a>
        </>
    )
}

export default SocialIcons