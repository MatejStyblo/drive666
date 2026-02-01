import React from 'react'
import styles from "./cenik.module.css"
import cenikFoto from "./cenikFoto.jpg"
function Ceník() {
  return (
        <div className={styles.cenik}>
 <img src={cenikFoto} alt='main' className="ilufoto"/>{/* <span className={styles.renovace}>RENOVACE NÁDRŽÍ</span> */}
    <div className={styles.celek}><h1>Ceník</h1>
    <table className={styles.table}>
    <tbody><tr className={styles.nadpis}>
      <th>Obsah nádrže</th>
      <th>Cena</th>
    </tr>
    <tr>
      <td>do 8,9l</td>
      <td>215,-Kč/l<span className={styles.star}>*</span></td>
      </tr>
    <tr>
      <td>9l – 17l</td>
      <td> 195,-Kč/l</td>
      </tr>
    <tr>
      <td>18l a více</td>
      <td>185,-Kč/l</td>
      </tr></tbody>
   
    </table>
    <br/>
    <br/>
    <ul className={styles.podminky}><h1>Ostatní</h1>
      <li>Za nepříznivých podnebných podmínek příplatek za sušení 150,-/den</li>
      <li>Sváření a letování cena dle domluvy (rozdíl v použitých materiálech a velikostí poškození)

</li>
      <li>demontování/montování/vícepráce: 950,-/h

</li>
      <li> <span className={styles.star}>*</span> Minimálně 1700,-Kč

</li>
    </ul>
    </div></div>
  )
}

export default Ceník