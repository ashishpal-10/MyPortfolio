import React from 'react'
import { RiDownloadLine, RiArrowRightUpLine } from "@remixicon/react";

import Styles from "../Hero/style.module.css"

const Herobtn = () => {
    return (
        <div className={Styles.cta}>
            <a href="#contact" className={Styles.primarybtn}>
                Get in touch  < RiArrowRightUpLine />
            </a>

            <a href="/Ashish_Pal_Resume.docx.pdf"
                download="Ashish_Pal_Resume.docx.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download resume < RiDownloadLine />
            </a>
        </div>
    )
}

export default Herobtn