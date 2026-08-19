import React from 'react'
import Styles from "../Footer/style.module.css"
import SocialIcons from '../Hero/SocialIcons'


const Footer = () => {
  return (
    <>
    <hr />
 <footer className={Styles.footer}>
  
  <div className={Styles.container}>
    <p>Ashish Pal © 2026. All rights reserved.</p>

    <div className={Styles.footerIcons}>
      <SocialIcons/>
    </div>
  </div>

 </footer>
    </>
  )
}

export default Footer