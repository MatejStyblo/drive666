import React from 'react'
import styles from "./kontakt.module.css"
import kontaktFoto from "./fotoKontakt.jpg"
import Mapa from "./mapa.js"
function Kontakt() {
        return (

                <div className={styles.kontakt}>
                        <img src={kontaktFoto} rel="preload" alt='Kontakt' className="ilufoto" />
                        <div className={styles.celekKontakt}>
                                <h1>Kontakt</h1>

                                <div className={styles.grid}> <ul className={styles.list}><h1 className={styles.prace}>Adresa</h1>
                                        <li>Drive666
                                        </li>
                                        <li>Drahotice 25
                                        </li>
                                        <li>294 13 Chocnějovice
                                        </li>

                                </ul><ul className={styles.list2}><h1 className={styles.prace2}>Kontakt</h1>
                                                <li>telefon:<a href="tel:+420606856996" className={styles.tel}>606856996</a>
                                                        <li >e-mail: <a href="mailto:Drive666@seznam.cz" className={styles.mail}>Drive666@seznam.cz</a>


                                                        </li>

                                                </li>

                                        </ul><h3 className={styles.workTime}>Pracovní doba: 9:00 – 16:00</h3> <Mapa /></div>
                        </div>
                </div>





        )
}

export default Kontakt