import React from 'react'
import styles from './Parallax.module.css'
import ServicesHead from './ServicesHead'
function Parallax() {
    return (
        <>
           
            <section className={`${styles.mySec}`} >
                <div className={`container ${styles.meraContainer}`}>
                    <div className={`row ${styles.cnt1}`}>
                        <div className={`col-md-7   ${styles.cnt2}`}>
                            <div className={`${styles.meraSticker}`}>
                               Home Genie...
                            </div>
                            <form action="#" className={`${styles.meraForm}`}>
                                <div className={`row ${styles.formFlex}`}>
                                    <div className={`col-md-6 ${styles.meraEle}`}>
                                        <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className={`col-md-6 ${styles.meraEle}`}>
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input type="text" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className={`col-md-6 ${styles.meraEle}`}>
                                        <div className="form-group">
                                            <label htmlFor="">Phone</label>
                                            <input type="text" className="form-control" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className={`col-md-6 ${styles.meraEle}`}>
                                        <div className="form-group">
                                            <label htmlFor="">Phone</label>
                                            <input type="text" className="form-control" id="book_date" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className={`col-md-6 ${styles.meraEle}`}>
                                        <div className="form-group">
                                            <label htmlFor="">Time</label>
                                            <input type="text" className="form-control ui-timepicker-input" id="book_time" placeholder="Time" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className={`col-md-6 ${styles.meraEle}`}>
                                        <div className="form-group">
                                            <label htmlFor="">Person</label>
                                           <input type="text" className="form-control ui-timepicker-input" id="book_time" placeholder="Person" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className={`col-md-12 mt-3 ${styles.meraSubmit}`}>
                                        <div className="form-group text-center">
                                            <input type="submit" value="Make a Reservation" className="btn  py-3 px-5" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
           
        </>
    )
}

export default Parallax