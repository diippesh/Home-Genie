import React from 'react'
import styles from './ServicesCard.module.css'
import { BsFillCake2Fill } from "react-icons/bs";
function ServicesCards() {
  return (
    <div className={`${styles.allCard}`}>
      <div className={`card ${styles.myCard}`} >
          <BsFillCake2Fill className={`${styles.largeIcon}`} />
        <div className="card-body">
          <h5 className={` card-title ${styles.myCardTitle}`}>Card title</h5>
          <p className={` card-text ${styles.myCardText}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className={`card ${styles.myCard}`} >
          <BsFillCake2Fill className={`${styles.largeIcon}`} />
        <div className="card-body">
        <h5 className={` card-title ${styles.myCardTitle}`}>Card Title</h5>
          <p className={` card-text ${styles.myCardText}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className={`card ${styles.myCard}`} >
          <BsFillCake2Fill className={`${styles.largeIcon}`} />
        <div className="card-body">

        <h5 className={` card-title ${styles.myCardTitle}`}>Card title</h5>
        <p className={` card-text ${styles.myCardText}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCards