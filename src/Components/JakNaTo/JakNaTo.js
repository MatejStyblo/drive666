import React from 'react'
import jakNaTo from "./JakNaTo.jpg"
import styles from "./jakNato.module.css"
function jakNato() {
  return (
    <div className={styles.jakNaTo}>
     <img src={jakNaTo} rel="preload" alt='jaknato' className="ilufoto"/>
     <div className={styles.nadpis}>
     <h1>Jak na to </h1>
     <h2>aby se Vaše nádrž dostala k nám.</h2>
     </div>
    <div className={styles.block}>
   <h4 className={styles.text}>   Nádrže po domluvě ošetříme antikorozní úpravou. Pokud máte v úmyslu 
    nechat nádrž nakomaxitovat nebo pochromovat je bezpodmínečně nutné toto učinit 
    dříve než nádrž přivezete nebo pošlete na ošetření kaučukovou hmotou! Opačný systém 
    by Vám jak komaxit (jedná se o vypalovací barvu) tak chrom vnitřek nádrže poškodil.<br/>
    Neopravujeme vylité nádrže epoxidem či jinou pryskyřicí jako je například nátěrový Eprosin a jiné dvousložkové pryskyřice.
    </h4>
    <ul className={styles.grid}>
    <li><h3>1. Kontaktujte nás</h3>Před tím než cokoliv pošlete nebo dovezete, nás prosím kontaktujte telefonicky nebo emailem. Domluvíme podrobnosti, dáme vám odhad ceny.</li>
    <li><h3>2. Odeslání nádrže</h3>Nádrž ničím nevymývat!!! je možné otvory zacpat hadrem. Nádrž je potřeba odstrojit od filtrů, ventilů a hadic(v opačném případě je účtována práce technika). Před odesláním nádrž pečlivě zabalte, aby nedošlo k poškození dopravcem. Dovnitř balíčku vložte kontaktní údaje a o jakou nádrž se jedná.</li>
    <li><h3>3. Přijetí zásilky</h3>Až dorazí balík s Vaší nádrží, bude prohlídnuta, zkontrolována a vyfocena. Zpět se Vám ozveme s bližším cenovým výpočtem (po započetí ošetření může být objeveno hlubší poškození, které nebylo z počátku zjevné)</li>
    <li><h3>4. Záloha</h3>Budete vyzváni k zaplacení zálohové platby hotově nebo na účet. Platební karty nepřijímáme.</li>
    <li><h3>5. Čas</h3>Doba zpracování opravy je vysoce individuální

</li>
    <li><h3>6. Odeslání / Vyzvednutí</h3>Po doplacení zůstatkové ceny, je možnost si nádrž vyzvednout osobně nebo Vám ji zašleme na adresu dopravcem. </li>
    </ul>
    <h3 className={styles.reference}>Těšíme se na spolupráci a pozitivní reference:)</h3>
    </div>
    </div>
  )
}

export default jakNato