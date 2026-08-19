import React from 'react'
import Styles from "../Hero/style.module.css"
import SocialIcons from './SocialIcons'
import heroImg from "../../assets/image.png"



const SocialCard = () => {
    return (
        <div className={Styles.profile}>
            <div className={Styles.left}>
                <div className={Styles.avatar}>
                    <img src={heroImg} alt="error" />
                </div>

                <div className={Styles.content}>
                    <h1 className={Styles.name}>Ashish Pal</h1>
                    <p className={Styles.role}>Product Designer &amp; Front-End Engineer</p>

                    <div className={Styles.subcontent}>
                        <span className={Styles.subinfo}>Noida , India</span>
                        <span className={Styles.subinfo}> <span className={Styles.dot}></span> Available For Work</span>
                    </div>
                </div>

            </div>
                 <div className={Styles.socialIcons}>
                  <SocialIcons/>
                </div>
             

        </div>
    )
}

export default SocialCard