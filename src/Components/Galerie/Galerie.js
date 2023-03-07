import React, { useState, useEffect } from 'react'
import styles from './galerie.module.css'
import "./galerie.css"
import { getImages } from '../../api.js';
import galerieFoto from "./nahledovka.jpg"
function Galerie() {
  const [foto, setFoto] = useState([])
 const [nextCursor, setNextCursor] = useState(null);
  const [click, setClicked] = useState(false)
     const [enLarge, setenLarge] = useState('')
useEffect(()=>{
   const fetchData = async()=>{
      const responseJson= await getImages();
      setFoto(responseJson.resources)
      setNextCursor(responseJson.next_cursor)
   }
   fetchData();
},[])
const handleLoadMoreButtonClick = async ()=>{
   const responseJson= await getImages(nextCursor);
   setFoto((currentFoto)=>[
      ...currentFoto,
      ...responseJson.resources
   ]);
   setNextCursor(responseJson.next_cursor)
}

  const clicked = (e) => {
      var target = e.target.src
      setClicked(!click)

      setenLarge(target)
   }
   
  return (
     <div className={styles.galerie}>
             <img src={galerieFoto} rel="preload" alt='galerieNadrž' className="ilufoto"/>

        <div className={styles.fotky}>
   
        </div>
        <div className={styles.block} data-aos="fade-up">
        <h1 className={styles.nadpis}>
       Naše práce
           </h1>
           <div className={styles.containerImg}>
                    {foto.map((image=> <img src={image.url} alt={image.public_id} onClick={clicked} key={image.asset_id}/>))}
                    
                    </div>
                    {nextCursor && <button onClick={handleLoadMoreButtonClick} className={styles.button}>Načti více</button>}
                    
<div className={click ? 'modular open' : 'modular'} onClick={clicked}>
            <img
               src={enLarge}
               className={click ? 'fullImg open ' : 'fullImg'}
               alt=""
            />
         </div>
      
        </div>

    
        
     </div>
  )
}

export default Galerie