import React from 'react'
import styles from './About.module.css'
function About() {
  return (
    <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.aboutPrimary}`}>
          <div className={`${styles.fimage}`}></div>
          <div className={`${styles.simage}`}></div>
        </div>
        <div className={`${styles.aboutSecondary}`}>
            <div className={`${styles.aboutSHead}`}>
                <h2 className={`${styles.aboutHead}`}>about</h2>
                <h4 className={`${styles.aboutHead2}`}>Home</h4>
                <h4 className={`${styles.aboutHead2}`}>Genie</h4>
            </div>
            <div className={`${styles.aboutSPara}`}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </div>
            <div className={`${styles.aboutSTime}`}>
            Mon - Fri 8 AM - 11 PM
            </div>
            <div className={`${styles.aboutSPhone}`}>
            +91-123-456-7890
            </div>
        </div>

    </div>
  )
}

export default About