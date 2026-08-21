import React from 'react'
import Styles from "../contact/style.module.css";


const Contact = () => {
  return (
      <div className={Styles.container} id='contact'>
      <div className={Styles.content}>

        <h2>Let's Build Something Together.</h2>

        <p className={Styles.para}>
        Have an idea, project, or opportunity? I'd love to hear about it.
        </p>

        <div className={Styles.contactDetails}>

          <div className={Styles.contactrow}>
            <span>EMAIL</span>
            <a href="mailto:aashish@gmail.com">
              aashishpal1001@gmail.com
            </a>
          </div>

          <div className={Styles.contactrow}>
            <span>PHONE</span>
            <a href="tel:+919958207625">
              +91 9958207625
            </a>
          </div>

          <div className={Styles.contactrow}>
            <span>LOCATION</span>
            <span className={Styles.location}>
              Noida, India
            </span>
          </div>

        </div>

        <a href="mailto:aashish@gmail.com">
          Say hello
        </a>

      </div>
    </div>

  )
}

export default Contact