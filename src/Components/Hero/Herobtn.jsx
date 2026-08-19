import React from 'react'
import {RiDownloadLine,RiArrowRightUpLine } from "@remixicon/react";

import Styles from "../Hero/style.module.css"

const Herobtn = () => {
  return (
      <div className={Styles.cta}>
                <a href="#contact" className={Styles.primarybtn}>
                    Get in touch  < RiArrowRightUpLine  />
                </a>

                <a href="#downloadresume">
                    Download resume < RiDownloadLine  />
                </a>
            </div>
  )
}

export default Herobtn