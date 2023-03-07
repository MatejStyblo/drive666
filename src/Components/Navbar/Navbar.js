import React from 'react'
import { useState } from 'react'
import { SidebarData } from './SideBar'
import styles from './Navbar.module.css'
import { Link} from 'react-router-dom'
import * as TiIcons from 'react-icons/ti'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import logo from "./logo.png"
function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
   return (
      <nav className={styles.items}>
         
<div className={styles.navbarLogo}>
   
         <img src={logo} alt="logo"  className={styles.logo} />
         <h1 className={styles.drive}>{/* DRIVE666 */}</h1>
</div>
         
       
<div className={styles.menuTel}>

      <i className={styles.telIcon}><a href="tel:+420606856996"><BsIcons.BsFillTelephoneFill /></a></i>   
         <div className={styles.menuIcon}>
            <i onClick={showSidebar}>
               {sidebar ? <TiIcons.TiTimes /> : <FaIcons.FaBars />}
            </i>
         </div>
</div>
         <ul
            className={
               sidebar
               ? `${styles.navMenu} ${styles.active} `
               : `${styles.navMenu}`
            }
            >
            {SidebarData.map((item, index) => (
               <Link
                  key={index}
                  className={styles.navLinks}
                  to={item.url}
                  onClick={showSidebar}
                  style={{ textDecoration: 'none' }}
               >
         {/*          <h4 className={styles.icons}>{item.icon}</h4> */}
                <h4 className={styles.tittle}>{item.title}</h4>  
               </Link>
            ))}
          <a href="tel:+420606856996" className={styles.tel} style={{ textDecoration: 'none',color:"white" }}>   <button className={styles.button}>606 856 996</button></a>

            
         </ul>
      </nav>
   )
}

export default Navbar