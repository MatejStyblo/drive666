import React from 'react'
import mainFoto from "./main.jpg"
import styles from "./main.module.css"
import Home from "../Home/Home"

function Main() {
  return (
    <div className={styles.main}>
 <img src={mainFoto} rel="preload" alt='main' className="ilufoto"/>{/* <span className={styles.renovace}>RENOVACE NÁDRŽÍ</span> */}
 <Home/>
    </div>
  )
}

export default Main