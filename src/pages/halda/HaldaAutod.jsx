import { useState } from "react";
import autodAndmebaasist from "../../data/autod.json"
import styles from "../../css/HaldaAutod.module.css"

function HaldaAutod() {

  const [autod, setAutod] = useState(autodAndmebaasist.slice());

  function kustuta(index) {
    autodAndmebaasist.splice(index,1);
    setAutod(autodAndmebaasist.slice());
  }
  // kustutada saab javascriptis ainult indexiga

  return (
    <div>
      <h1>Halda autosid</h1>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Järjekorranumber</th>
            <th>Auto</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) => 
            <tr className={styles.nimi} key={auto}>
              <td>{index}</td>
              <td>{index+1}</td>
              <td>{auto}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HaldaAutod;
