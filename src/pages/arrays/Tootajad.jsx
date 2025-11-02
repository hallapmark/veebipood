import { useState } from "react"
import tootajadAndmebaasist from "../../data/tootajad.json"
import styles from "../../css/Tootajad.module.css"

function Tootajad() {
  const [tootajad, setTootajad] = useState(tootajadAndmebaasist.slice());
  // nb see on shallow copy  
  // süvakoopiat vist ei tahagi siin? 
  // vt https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
  

  function sorteeriEesnimiAZ() {
    tootajad.sort((a,b) => a.name.localeCompare(b.name));
    setTootajad(tootajad.slice());
  }

  function sorteeriEesnimiZA() {
    tootajad.sort((a,b) => b.name.localeCompare(a.name));
    setTootajad(tootajad.slice());
  }

  function sorteeriPerenimiAZ() {
    console.log("Perenimi AZ called")
    tootajad.sort((a,b) => getLastName(a.name).localeCompare(getLastName(b.name)));
    setTootajad(tootajad.slice());
  }

  function sorteeriPerenimiZA() {
    tootajad.sort((a,b) => getLastName(b.name).localeCompare(getLastName(a.name)));
    setTootajad(tootajad.slice());
  }

  function getLastName(name) {
    return name.split(" ").slice(-1)[0];
  }
    

  return (
    <>
      <h1>Töötajad</h1>
      <button onClick={sorteeriEesnimiAZ}>Sorteeri eesnimi AZ</button>
      <button onClick={sorteeriEesnimiZA}>Sorteeri eesnimi ZA</button>
      <button onClick={sorteeriPerenimiAZ}>Sorteeri perenimi AZ</button>
      <button onClick={sorteeriPerenimiZA}>Sorteeri perenimi ZA</button>
      <div className={styles.tootajad}>
        {tootajad.map(tootaja => 
            <div className={styles.tootaja} key={tootaja.name}>
              {tootaja.name}
              <p>{tootaja.email}</p>
            </div>
        )}
      </div>
    </>
  )
}

export default Tootajad