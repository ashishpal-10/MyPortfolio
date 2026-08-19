import React from 'react'
import Styles from "../Hero/style.module.css"
import CoverImg from './CoverImg.jsx'


// import {RiDownloadLine,RiArrowRightUpLine, RiLinkedinFill ,RiGithubLine,RiTwitterLine , RiInstagramLine } from "@remixicon/react";
import SocialCard from './SocialCard.jsx';
import Herobtn from './Herobtn.jsx';

const Hero = () => {
  return (
    <section className={Styles.hero} id='home'>
      <div className={Styles.container}>
          <CoverImg/>
          <SocialCard/>
          <Herobtn/>
      </div>
    </section>
  )
}

export default Hero