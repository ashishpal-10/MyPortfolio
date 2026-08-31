import React from 'react'
import { RiDownloadLine, RiArrowRightUpLine } from "@remixicon/react";

import Styles from "../Hero/style.module.css"

const Herobtn = () => {
    return (
        <div className={Styles.cta}>
            <a href="#contact" className={Styles.primarybtn}>
                Get in touch  < RiArrowRightUpLine />
            </a>

            <a href="https://drive.google.com/file/d/1hum3ZINHte6HFM-hswTX8eVGhDWUzuVi/view?usp=drive_link"
                download="Ashish_Pal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Resume < RiDownloadLine />
            </a>
        </div>
    )
}

export default Herobtn