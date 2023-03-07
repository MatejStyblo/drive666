import React from 'react'
import styles from "./home.module.css"
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import after from "./after.jpg"
import before from "./before.jpg"
import pred from "./neobrouseneVicko.jpg"
import apo from "./ObrouseneVicko.jpg"
function Home() {

  const FIRST_IMAGE = {
    imageUrl: after
  };
  const SECOND_IMAGE = {
    imageUrl: before
  };
  const PRVNI_FOTKA = {
    imageUrl: pred
  };
  const DRUHA_FOTKA = {
    imageUrl: apo
  };
  

  return (
    <div className={styles.container}><div className={styles.swap}>
    <div className={styles.top}><h1 className={styles.nadpis}>Renovace nádrží</h1>
    <p className={styles.text}>Vylévání nádrží auto, moto i agro kaučukovou hmotou, životnost je minimálně 10 let. Jedná se o opravu prorezavělých, vyrezlých a netěsných nádrží. Vhodné i pro nové nádrže na prodloužení jejich životnosti.<br/>

    <br/>Tento způsob ošetření nádrže je zejména vhodný nejen pro motocyklové nádrže,ale  i pro automobily, které mají kovové nádrže a nejsou tak často v provozu, takže časem dojde k zrezivění vnitřku nádrže.

<br/><br/>Po ošetření nádrže tato hmota zabraňuje reznutí nádrže i kdyby se benzín rozložil částečně na vodu</p>
</div> <div className={styles.grid}> <ul className={styles.list}><h1 className={styles.prace}>Naše služby</h1>
<li>letování mosazí nebo stříbrem – tvrdé pájení, letování cínem – měkké pájení</li>
<li>tlaková kontrola těsnosti spojů a vnitřní inspekce mini kamerou(laparoskopickou)</li>
<li>možnost ultrazvukové čistění součastí a leštění</li>
<li>na žádost povrchová úprava antikorozním nastříkem nebo bitumenem
</li>
<li>oprava vyrezlých míst a dírek
</li>
<li>odrezení možnost i opískovat
</li>
<li>vylévání kaučukem, odmaštění
</li>

</ul></div>
{/* <div className={styles.grid} > */}<ul className={styles.list2}><h1 className={styles.prace}>Pro koho</h1>
<li>Veškeré veterány

</li>
<li>Motocykly

</li>
<li>Automobily

</li>
<li>Vojenská technika z 2. světové války


</li>
<li>Lodní plechové nádrže


</li>
<li>Traktoryt
</li>
<li>Zemní technika


</li>
<li>Elektrocentrály 
</li>
<li>Vlaky

</li>

</ul></div> 

  <h1>Před renovací a po renovaci</h1>
    
<div className={styles.ImageCom}>
  <div className={styles.column}>
    
<ReactBeforeSliderComponent alt="nadrz"
    firstImage={FIRST_IMAGE}
    secondImage={SECOND_IMAGE}
    
/>
    </div>
<div className={styles.column}>
<ReactBeforeSliderComponent alt="vicko"
    firstImage={PRVNI_FOTKA}
    secondImage={DRUHA_FOTKA}
    
/>

    </div>
</div>



    </div> 
  )
}

export default Home